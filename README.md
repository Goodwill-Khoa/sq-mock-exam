# SQ Mock Exam — Software Quality & Testing

A self-contained mock exam web app for the **ELTE MSc Software Quality & Testing** course.  
Built by **Msc Candidate: Khoa Goodwill** · 2026

🌐 **Live site:** [goodwill-khoa.github.io/sq-mock-exam](https://goodwill-khoa.github.io/sq-mock-exam/)

---

## Features

- **200 questions** across 4 sets (50 each), drawn from:
  - *Basics of Software Testing* — Attila Kovács 2026
  - *ISTQB Glossary v3.3*
  - *Foundations of Software Testing*
- **Selectable exam length** — choose 10, 20, 30, 40, or 50 questions per session
- **Single and multiple-choice** questions
- **Timer** — tracks time per attempt
- **Skip support** — unanswered questions are skipped, not counted as wrong; score is calculated only on answered questions
- **Answer review** — full explanations after submission
- **Stats & charts** — scores saved in `localStorage`, visualised across attempts
- **Randomisation** — questions shuffle on retry
- **Works offline** — open `index.html` directly from your local drive, no server needed

---

## Question Sets

| Set | Topic |
|-----|-------|
| A | Foundations & Basic Notions |
| B | Test Design Techniques |
| C | Test Levels, Lifecycle & Planning |
| D | Static Testing, Automation & Advanced |

---

## Getting Started

### Run locally
1. Clone or download the repo
2. Open `index.html` in any modern browser — no build step or server required

### Via GitHub Pages
Visit: [https://goodwill-khoa.github.io/sq-mock-exam/](https://goodwill-khoa.github.io/sq-mock-exam/)

---

## Project Structure

```
├── index.html        # Landing page — set selector & stats
├── exam.html         # Exam engine — questions, timer, results, review
├── css/
│   └── styles.css    # Dark-theme stylesheet (no external dependencies)
├── js/
│   ├── app.js        # All application logic (timer, scoring, charts, storage)
│   └── questions.js  # 200 questions as a JS array
└── assets/           # Reserved for any future static assets
```

---

## Tech Stack

- Pure **HTML5 / CSS3 / Vanilla JavaScript** — zero external libraries or CDN dependencies
- **localStorage** for persistent attempt history
- **SVG** for all charts and icons (inline, no image files)
- **CSS custom properties** — dark theme throughout

---

## Adding Questions

Open `js/questions.js` and append to the `ALL_QUESTIONS` array using the existing format:

```js
{
  id: 201,
  set: "A",           // A, B, C, or D
  type: "single",     // "single" or "multi"
  question: "Your question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: [0],       // zero-based index/indices of correct answer(s)
  explanation: "Why this answer is correct."
}
```

---

## License

For personal academic use only. Source material copyright belongs to their respective authors.
