/* ================================================================
   app.js — SQ Mock Exam Application Logic
   Handles: Index page, Exam engine, Timer, Stats, Charts, Storage
================================================================ */

'use strict';

// ── Storage Keys ─────────────────────────────────────────────────
const STORAGE_KEY = 'sq_mock_exam_v2';

// ── Utility Helpers ───────────────────────────────────────────────
function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveStats(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}
function pad2(n) { return String(n).padStart(2, '0'); }
function formatTime(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
}
function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function showToast(msg, type = '') {
  const t = document.getElementById('feedback-toast');
  if (!t) return;
  t.textContent = msg;
  t.className = `feedback-toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.classList.remove('show'); }, 2000);
}
function esc(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
}

// ── Set metadata (mirrors questions.js QUESTION_SETS) ────────────
const SET_META = {
  A: { label: 'Set A', title: 'Foundations & Basic Notions',       color: '#6c63ff' },
  B: { label: 'Set B', title: 'Test Design Techniques',            color: '#3b82f6' },
  C: { label: 'Set C', title: 'Test Levels, Lifecycle & Planning', color: '#22c55e' },
  D: { label: 'Set D', title: 'Static Testing, Automation & Advanced', color: '#f59e0b' },
};

// ── Questions by set ──────────────────────────────────────────────
function getSetQuestions(setKey) {
  return ALL_QUESTIONS.filter(q => q.set === setKey);
}

// ─────────────────────────────────────────────────────────────────
// INDEX PAGE
// ─────────────────────────────────────────────────────────────────
const IndexPage = {
  init() {
    this.renderSetCards();
    this.renderOverallStats();
    this.renderChart();
  },

  _buildCountOptions(maxCount) {
    const options = [];
    for (let n = 10; n <= maxCount; n += 10) options.push(n);
    if (!options.includes(maxCount)) options.push(maxCount);
    return options;
  },

  _startSet(setKey, count) {
    window.location.href = `exam.html?set=${setKey}&n=${count}`;
  },

  renderSetCards() {
    const grid = document.getElementById('set-grid');
    if (!grid) return;
    const stats = loadStats();

    Object.entries(SET_META).forEach(([key, meta]) => {
      const attempts = (stats[key] && stats[key].attempts) || [];
      const best = attempts.length
        ? Math.max(...attempts.map(a => a.pct))
        : null;
      const last = attempts.length ? attempts[attempts.length - 1] : null;
      const count = getSetQuestions(key).length;

      const card = document.createElement('div');
      card.className = 'set-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      const options = this._buildCountOptions(count);
      const selectId = `question-count-${key}`;
      card.innerHTML = `
        <div class="set-card-letter" style="color:${meta.color}">${key}</div>
        <div class="set-card-label">${meta.label}</div>
        <div class="set-card-title">${meta.title}</div>
        <div class="set-card-count">Up to ${count} Questions</div>
        ${best !== null
          ? `<div class="set-card-best">Best: <span>${best}%</span> · ${attempts.length} attempt${attempts.length > 1 ? 's' : ''}</div>`
          : `<div class="set-card-best" style="color:var(--text-muted)">Not attempted yet</div>`
        }
        ${last ? `<div class="set-card-best" style="margin-top:4px">Last: ${last.pct}% · ${formatTime(last.time)}</div>` : ''}
        <div class="set-card-controls">
          <label class="set-card-label" for="${selectId}">Questions</label>
          <select id="${selectId}" class="question-count-select">
            ${options.map(n => `<option value="${n}" ${n === count ? 'selected' : ''}>${n}</option>`).join('')}
          </select>
          <button class="btn btn-primary btn-sm set-card-start" type="button">Start</button>
        </div>
      `;

      const startBtn = card.querySelector('.set-card-start');
      const countSelect = card.querySelector('.question-count-select');
      const startExam = () => {
        const chosen = Number(countSelect?.value) || count;
        this._startSet(key, chosen);
      };

      startBtn?.addEventListener('click', e => {
        e.stopPropagation();
        startExam();
      });

      countSelect?.addEventListener('click', e => e.stopPropagation());
      countSelect?.addEventListener('keydown', e => e.stopPropagation());
      card.addEventListener('click', startExam);
      card.addEventListener('keydown', e => {
        if (e.target !== card) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startExam();
        }
      });

      grid.appendChild(card);
    });
  },

  renderOverallStats() {
    const grid = document.getElementById('stats-grid');
    if (!grid) return;
    const stats = loadStats();

    let totalAttempts = 0, totalCorrect = 0, totalQ = 0;
    let bestPct = 0, fastestTime = Infinity;

    Object.values(stats).forEach(s => {
      if (!s.attempts) return;
      s.attempts.forEach(a => {
        totalAttempts++;
        totalCorrect += a.correct || 0;
        const attemptTotal = Number.isFinite(a.total) ? Math.max(0, a.total) : 50;
        totalQ += attemptTotal;
        if (a.pct > bestPct) bestPct = a.pct;
        if (a.time < fastestTime) fastestTime = a.time;
      });
    });

    const avgPct = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;

    const chips = [
      { label: 'Total Attempts', value: totalAttempts || '—' },
      { label: 'Avg Score', value: totalAttempts ? `${avgPct}%` : '—' },
      { label: 'Best Score', value: totalAttempts ? `${bestPct}%` : '—' },
      { label: 'Fastest Time', value: (totalAttempts && fastestTime !== Infinity) ? formatTime(fastestTime) : '—' },
    ];
    chips.forEach(c => {
      const div = document.createElement('div');
      div.className = 'stat-chip';
      div.innerHTML = `<div class="stat-chip-value">${c.value}</div><div class="stat-chip-label">${c.label}</div>`;
      grid.appendChild(div);
    });
  },

  renderChart() {
    const stats = loadStats();
    const hasData = Object.values(stats).some(s => s.attempts && s.attempts.length > 0);
    const section = document.getElementById('chart-section');
    if (!section) return;
    if (!hasData) return;
    section.style.display = 'block';

    const svg = document.getElementById('progress-chart');
    const legend = document.getElementById('chart-legend');
    const W = 800, H = 200, PAD = 30;
    const chartW = W - PAD * 2, chartH = H - PAD * 2;
    let paths = '';
    let legendHTML = '';

    const setColors = { A: '#6c63ff', B: '#3b82f6', C: '#22c55e', D: '#f59e0b' };

    // Grid lines
    paths += `<line x1="${PAD}" y1="${PAD}" x2="${PAD}" y2="${H - PAD}" stroke="var(--border)" stroke-width="1"/>`;
    paths += `<line x1="${PAD}" y1="${H - PAD}" x2="${W - PAD}" y2="${H - PAD}" stroke="var(--border)" stroke-width="1"/>`;
    [0, 25, 50, 75, 100].forEach(pct => {
      const y = PAD + chartH - (pct / 100) * chartH;
      paths += `<line x1="${PAD}" y1="${y}" x2="${W - PAD}" y2="${y}" stroke="var(--border)" stroke-width=".5" stroke-dasharray="4"/>`;
      paths += `<text x="${PAD - 4}" y="${y + 4}" font-size="9" fill="var(--text-muted)" text-anchor="end">${pct}</text>`;
    });

    Object.entries(stats).forEach(([key, s]) => {
      if (!s.attempts || s.attempts.length === 0) return;
      const attempts = s.attempts.slice(-10);
      const color = setColors[key] || '#fff';
      const xStep = chartW / Math.max(attempts.length - 1, 1);
      let pathD = '';
      attempts.forEach((a, i) => {
        const x = PAD + i * xStep;
        const y = PAD + chartH - (clamp(a.pct, 0, 100) / 100) * chartH;
        pathD += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
        paths += `<circle cx="${x}" cy="${y}" r="4" fill="${color}">
          <title>${SET_META[key].label}: ${a.pct}% (${formatTime(a.time)})</title>
        </circle>`;
      });
      if (pathD) {
        paths += `<path d="${pathD}" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      }
      legendHTML += `<span style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:3px;background:${color};border-radius:2px;display:inline-block"></span>${SET_META[key].label}</span>`;
    });

    svg.innerHTML = paths;
    if (legend) legend.innerHTML = legendHTML;
  }
};

// ─────────────────────────────────────────────────────────────────
// EXAM PAGE
// ─────────────────────────────────────────────────────────────────
const ExamPage = {
  set: null,
  selectedCount: 50,
  questions: [],
  current: 0,
  answers: {},    // { idx: [selectedOptionIndices] }
  flagged: new Set(),
  timerSecs: 0,
  timerInterval: null,
  submitted: false,
  randomised: false,

  init() {
    const params = new URLSearchParams(window.location.search);
    this.set = params.get('set') || 'A';
    this.randomised = params.get('r') === '1';
    this.selectedCount = Number(params.get('n')) || 50;

    const setName = document.getElementById('exam-set-name');
    if (setName) setName.textContent = `${SET_META[this.set]?.label || 'Exam'} — ${SET_META[this.set]?.title || ''}`;

    document.title = `${SET_META[this.set]?.label || 'Exam'} · SQ Mock Exam`;

    this._loadQuestions();
    this._bindUI();
    this._startTimer();
    this._showState('exam');
    this._renderGrid();
    this._renderQuestion();
  },

  _loadQuestions() {
    let qs = getSetQuestions(this.set);
    const maxCount = qs.length;
    this.selectedCount = clamp(this.selectedCount, 10, maxCount);
    if (this.randomised) qs = shuffleArray(qs);
    this.questions = qs.slice(0, this.selectedCount);
  },

  _bindUI() {
    document.getElementById('btn-prev')?.addEventListener('click', () => this._navigate(-1));
    document.getElementById('btn-next')?.addEventListener('click', () => this._navigate(1));
    document.getElementById('btn-flag')?.addEventListener('click', () => this._toggleFlag());
    document.getElementById('btn-submit-exam')?.addEventListener('click', () => this._promptSubmit());
    document.getElementById('btn-toggle-grid')?.addEventListener('click', () => {
      const c = document.getElementById('q-grid-container');
      c?.classList.toggle('hidden');
    });
    document.getElementById('modal-cancel')?.addEventListener('click', () => this._closeModal());
    document.getElementById('modal-confirm')?.addEventListener('click', () => { this._closeModal(); this._submitExam(); });
    document.getElementById('btn-retry')?.addEventListener('click', () => {
      window.location.href = `exam.html?set=${this.set}&n=${this.selectedCount}&r=1`;
    });
    document.getElementById('btn-review-toggle')?.addEventListener('click', () => {
      const sec = document.getElementById('review-section');
      if (!sec) return;
      const visible = sec.style.display !== 'none';
      sec.style.display = visible ? 'none' : 'block';
      document.getElementById('btn-review-toggle').textContent = visible ? '📖 Review Answers' : '📖 Hide Review';
      if (!visible) this._renderReview();
    });
  },

  _startTimer() {
    const el = document.getElementById('timer-display');
    this.timerInterval = setInterval(() => {
      if (this.submitted) return;
      this.timerSecs++;
      if (el) {
        el.textContent = formatTime(this.timerSecs);
        el.classList.remove('warning', 'danger');
        if (this.timerSecs > 90 * 60) el.classList.add('danger');
        else if (this.timerSecs > 60 * 60) el.classList.add('warning');
      }
    }, 1000);
  },

  _stopTimer() {
    clearInterval(this.timerInterval);
  },

  _showState(state) {
    ['loading', 'exam', 'results'].forEach(s => {
      const el = document.getElementById(`state-${s}`);
      if (el) el.classList.toggle('hidden', s !== state);
    });
  },

  _renderGrid() {
    const grid = document.getElementById('q-grid');
    if (!grid) return;
    grid.innerHTML = '';
    this.questions.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'q-dot';
      dot.id = `qdot-${i}`;
      dot.textContent = i + 1;
      dot.title = `Question ${i + 1}`;
      dot.addEventListener('click', () => {
        this.current = i;
        this._renderQuestion();
      });
      grid.appendChild(dot);
    });
    this._updateGridDots();
  },

  _updateGridDots() {
    this.questions.forEach((_, i) => {
      const dot = document.getElementById(`qdot-${i}`);
      if (!dot) return;
      dot.className = 'q-dot';
      if (i === this.current) dot.classList.add('current');
      else if (this.answers[i] && this.answers[i].length > 0) dot.classList.add('answered');
      if (this.flagged.has(i)) dot.title = `Q${i + 1} 🚩`;
    });
  },

  _renderQuestion() {
    const q = this.questions[this.current];
    if (!q) return;

    const numBadge = document.getElementById('q-num-badge');
    const typeBadge = document.getElementById('q-type-badge');
    const qText = document.getElementById('question-text');
    const optList = document.getElementById('options-list');
    const expBox = document.getElementById('explanation-box');
    const expText = document.getElementById('explanation-text');
    const progressBar = document.getElementById('progress-bar');
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    const flagBtn = document.getElementById('btn-flag');
    const currentEl = document.getElementById('q-current');

    if (currentEl) currentEl.textContent = this.current + 1;
    document.getElementById('q-total').textContent = this.questions.length;

    if (numBadge) numBadge.textContent = `Q${this.current + 1}`;
    if (typeBadge) {
      typeBadge.textContent = q.type === 'multi' ? 'Multiple Choice' : 'Single Choice';
      typeBadge.className = `question-type-badge ${q.type === 'multi' ? 'badge-multi' : 'badge-single'}`;
    }
    if (qText) qText.textContent = q.question;
    if (progressBar) progressBar.style.width = `${((this.current + 1) / this.questions.length) * 100}%`;
    if (prevBtn) prevBtn.disabled = this.current === 0;
    if (nextBtn) nextBtn.textContent = this.current === this.questions.length - 1 ? 'Finish →' : 'Next →';
    if (flagBtn) flagBtn.textContent = this.flagged.has(this.current) ? '🚩 Unflag' : '🚩 Flag';
    if (document.getElementById('flagged-count'))
      document.getElementById('flagged-count').textContent = this.flagged.size ? `${this.flagged.size} flagged` : '';

    // Hide explanation
    if (expBox) expBox.classList.remove('visible');

    // Render options
    if (optList) {
      optList.innerHTML = '';
      const selected = this.answers[this.current] || [];
      q.options.forEach((opt, oi) => {
        const li = document.createElement('li');
        li.className = 'option-item';
        li.setAttribute('data-type', q.type);
        if (selected.includes(oi)) li.classList.add('selected');

        const indicator = document.createElement('div');
        indicator.className = 'option-indicator';
        indicator.textContent = selected.includes(oi) ? '✓' : '';

        const text = document.createElement('div');
        text.className = 'option-text';
        text.textContent = opt;

        li.appendChild(indicator);
        li.appendChild(text);

        li.addEventListener('click', () => this._selectOption(oi));
        optList.appendChild(li);
      });
    }

    this._updateGridDots();
    // Animate card
    const card = document.getElementById('question-card');
    if (card) {
      card.style.animation = 'none';
      requestAnimationFrame(() => { card.style.animation = ''; });
    }
  },

  _selectOption(optIdx) {
    const q = this.questions[this.current];
    const current = this.answers[this.current] ? [...this.answers[this.current]] : [];

    if (q.type === 'single') {
      this.answers[this.current] = current.includes(optIdx) ? [] : [optIdx];
    } else {
      if (current.includes(optIdx)) {
        this.answers[this.current] = current.filter(i => i !== optIdx);
      } else {
        this.answers[this.current] = [...current, optIdx];
      }
    }

    this._renderQuestion();
  },

  _navigate(dir) {
    const next = this.current + dir;
    if (next < 0 || next >= this.questions.length) return;
    this.current = next;
    this._renderQuestion();
  },

  _toggleFlag() {
    if (this.flagged.has(this.current)) this.flagged.delete(this.current);
    else this.flagged.add(this.current);
    document.getElementById('btn-flag').textContent = this.flagged.has(this.current) ? '🚩 Unflag' : '🚩 Flag';
    const count = document.getElementById('flagged-count');
    if (count) count.textContent = this.flagged.size ? `${this.flagged.size} flagged` : '';
  },

  _promptSubmit() {
    const unanswered = this.questions.filter((_, i) => !this.answers[i] || this.answers[i].length === 0).length;
    const msg = document.getElementById('modal-submit-msg');
    if (msg) {
      msg.textContent = unanswered > 0
        ? `You have ${unanswered} unanswered question(s). They will be skipped and not counted as wrong. Submit anyway?`
        : `You have answered all ${this.questions.length} questions. Ready to submit?`;
    }
    const modal = document.getElementById('modal-submit');
    if (modal) modal.classList.add('open');
  },

  _closeModal() {
    const modal = document.getElementById('modal-submit');
    if (modal) modal.classList.remove('open');
  },

  _submitExam() {
    this.submitted = true;
    this._stopTimer();

    // Calculate results
    let correct = 0;
    let answered = 0;
    const results = this.questions.map((q, i) => {
      const sel = this.answers[i] || [];
      const isSkipped = sel.length === 0;
      const sortedSel = [...sel].sort().join(',');
      const sortedCorrect = [...q.correct].sort().join(',');
      const isCorrect = !isSkipped && sortedSel === sortedCorrect;
      if (!isSkipped) answered++;
      if (isCorrect) correct++;
      return { q, sel, isCorrect, isSkipped };
    });

    const totalAsked = this.questions.length;
    const skipped = totalAsked - answered;
    const scoredTotal = answered;
    const pct = scoredTotal > 0 ? Math.round((correct / scoredTotal) * 100) : 0;

    // Save stats
    const stats = loadStats();
    if (!stats[this.set]) stats[this.set] = { attempts: [] };
    stats[this.set].attempts.push({
      date: new Date().toISOString(),
      correct,
      total: scoredTotal,
      asked: totalAsked,
      skipped,
      pct,
      time: this.timerSecs,
      randomised: this.randomised,
      selectedCount: this.selectedCount,
    });
    saveStats(stats);

    // Render results
    this._renderResults(results, correct, scoredTotal, pct, skipped, totalAsked);
    this._showState('results');
  },

  _renderResults(results, correct, scoredTotal, pct, skipped, totalAsked) {
    // Ring
    const ring = document.getElementById('score-ring-progress');
    if (ring) {
      const circumference = 414.69;
      const offset = circumference - (pct / 100) * circumference;
      ring.style.strokeDashoffset = offset;
      ring.style.stroke = pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
    }
    const pctEl = document.getElementById('score-pct');
    const fracEl = document.getElementById('score-fraction');
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fracEl) fracEl.textContent = `${correct}/${scoredTotal || 0}`;

    // Label / title
    const lbl = document.getElementById('result-set-label');
    if (lbl) lbl.textContent = `${SET_META[this.set]?.label} Results`;
    const title = document.getElementById('result-title');
    if (title) title.textContent = pct >= 70 ? '🎉 Great Work!' : pct >= 50 ? '📚 Keep Practising!' : '💪 More Study Needed';
    const sub = document.getElementById('result-sub');
    if (sub) {
      const scoreContext = scoredTotal > 0
        ? `Scored on ${scoredTotal}/${totalAsked} answered question(s)`
        : `No answered questions (all skipped)`;
      sub.textContent = `Completed in ${formatTime(this.timerSecs)} · ${scoreContext} · ${pct >= 70 ? 'Passed' : 'Not yet at pass threshold (70%)'}`;
    }

    // Stat grid
    const statsGrid = document.getElementById('result-stats');
    if (statsGrid) {
      const wrong = scoredTotal - correct;
      const multi = results.filter(r => r.q.type === 'multi').length;
      statsGrid.innerHTML = `
        <div class="result-stat good"><div class="result-stat-value">${correct}</div><div class="result-stat-label">Correct</div></div>
        <div class="result-stat bad"><div class="result-stat-value">${wrong}</div><div class="result-stat-label">Incorrect</div></div>
        <div class="result-stat info"><div class="result-stat-value">${skipped}</div><div class="result-stat-label">Skipped</div></div>
        <div class="result-stat info"><div class="result-stat-value">${formatTime(this.timerSecs)}</div><div class="result-stat-label">Time</div></div>
        <div class="result-stat warn"><div class="result-stat-value">${multi}</div><div class="result-stat-label">Multi-choice Qs</div></div>
      `;
    }

    // Chart for this set
    this._renderResultChart();
  },

  _renderResultChart() {
    const svg = document.getElementById('result-chart');
    if (!svg) return;
    const stats = loadStats();
    const attempts = (stats[this.set]?.attempts || []).slice(-10);
    if (attempts.length < 2) return;

    const W = 600, H = 160, PAD = 30;
    const chartW = W - PAD * 2, chartH = H - PAD * 2;
    const color = SET_META[this.set]?.color || '#6c63ff';
    const xStep = chartW / Math.max(attempts.length - 1, 1);

    let html = '';
    // Grid
    [0, 50, 70, 100].forEach(pct => {
      const y = PAD + chartH - (pct / 100) * chartH;
      html += `<line x1="${PAD}" y1="${y}" x2="${W - PAD}" y2="${y}" stroke="var(--border)" stroke-width=".8" stroke-dasharray="${pct === 70 ? '6,3' : '4'}"/>`;
      html += `<text x="${PAD - 4}" y="${y + 4}" font-size="9" fill="var(--text-muted)" text-anchor="end">${pct}</text>`;
    });
    // Axes
    html += `<line x1="${PAD}" y1="${PAD}" x2="${PAD}" y2="${H - PAD}" stroke="var(--border)" stroke-width="1"/>`;
    html += `<line x1="${PAD}" y1="${H - PAD}" x2="${W - PAD}" y2="${H - PAD}" stroke="var(--border)" stroke-width="1"/>`;

    let pathD = '';
    attempts.forEach((a, i) => {
      const x = PAD + i * xStep;
      const y = PAD + chartH - (clamp(a.pct, 0, 100) / 100) * chartH;
      pathD += i === 0 ? `M${x},${y}` : ` L${x},${y}`;
      html += `<circle cx="${x}" cy="${y}" r="5" fill="${color}">
        <title>Attempt ${i + 1}: ${a.pct}%</title>
      </circle>`;
      html += `<text x="${x}" y="${y - 8}" font-size="10" fill="${color}" text-anchor="middle">${a.pct}%</text>`;
    });
    if (pathD) html += `<path d="${pathD}" stroke="${color}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;

    // Pass line label
    const passY = PAD + chartH - (.70) * chartH;
    html += `<text x="${W - PAD + 4}" y="${passY + 4}" font-size="9" fill="var(--warning)">70%</text>`;

    svg.innerHTML = html;
  },

  _renderReview() {
    const list = document.getElementById('review-list');
    if (!list) return;
    list.innerHTML = '';

    this.questions.forEach((q, i) => {
      const sel = this.answers[i] || [];
      const isSkipped = sel.length === 0;
      const sortedSel = [...sel].sort().join(',');
      const sortedCorrect = [...q.correct].sort().join(',');
      const isCorrect = !isSkipped && sortedSel === sortedCorrect;

      const item = document.createElement('div');
      item.className = `review-item ${isSkipped ? 'skipped-q' : (isCorrect ? 'correct-q' : 'incorrect-q')}`;

      const selectedLabels = sel.map(idx => q.options[idx]).join('; ') || '(no answer)';
      const correctLabels = q.correct.map(idx => q.options[idx]).join('; ');

      let answerBlock = '';
      if (isSkipped) {
        answerBlock = `
          <div class="review-your-answer">Your answer: <span>(skipped)</span></div>
          <div class="review-correct-answer">Correct answer: <span>${esc(correctLabels)}</span></div>
        `;
      } else if (!isCorrect) {
        answerBlock = `
          <div class="review-your-answer">Your answer: <span>${esc(selectedLabels)}</span></div>
          <div class="review-correct-answer">Correct answer: <span>${esc(correctLabels)}</span></div>
        `;
      } else {
        answerBlock = `<div class="review-correct-answer">Correct: <span>${esc(correctLabels)}</span></div>`;
      }

      item.innerHTML = `
        <div class="review-item-header">
          <span class="review-status-icon">${isSkipped ? '⏭️' : (isCorrect ? '✅' : '❌')}</span>
          <span class="question-number" style="font-size:.7rem">Q${i + 1}</span>
          <span class="review-question-text">${esc(q.question)}</span>
        </div>
        ${answerBlock}
        <div class="review-explanation">${esc(q.explanation)}</div>
      `;
      list.appendChild(item);
    });
  },
};

// ─────────────────────────────────────────────────────────────────
// OVERALL STATS CHART (index page helper re-render on load)
// ─────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Nothing extra needed; IndexPage.init() and ExamPage.init() 
  // are called from inline scripts in each HTML file.
});
