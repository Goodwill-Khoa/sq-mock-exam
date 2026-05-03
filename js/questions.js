// questions.js — 200 ISTQB / Basics of Software Testing Questions
// Sets: A (1-50), B (51-100), C (101-150), D (151-200)
// type: "single" | "multi"  — multi means multiple correct answers

const QUESTION_SETS = {
  A: { label: "Set A – Foundations & Basic Notions", range: [0, 49] },
  B: { label: "Set B – Test Design Techniques", range: [50, 99] },
  C: { label: "Set C – Test Levels, Lifecycle & Planning", range: [100, 149] },
  D: { label: "Set D – Static Testing, Automation & Advanced Topics", range: [150, 199] },
};

const ALL_QUESTIONS = [
  // ─────────────────────────────────────────────────────────────
  // SET A — Foundations & Basic Notions (Q 1-50)
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    set: "A",
    type: "single",
    question: "According to ISTQB, what is the correct relationship between an error, a fault, and a failure?",
    options: [
      "A failure causes a fault, which causes an error",
      "An error causes a fault, which may lead to a failure",
      "A fault causes an error, which leads to a failure",
      "An error and a fault are the same thing"
    ],
    correct: [1],
    explanation: "An error (human mistake) introduces a fault (defect/bug) into the code. When that fault is executed it may produce a failure (observable incorrect behaviour)."
  },
  {
    id: 2,
    set: "A",
    type: "single",
    question: "Which statement best describes 'Verification'?",
    options: [
      "Ensuring the software meets user needs at the end of development",
      "Demonstrating consistency, completeness, and correctness at each stage of the lifecycle",
      "Running software to detect failures",
      "Comparing actual results with expected results"
    ],
    correct: [1],
    explanation: "Verification answers 'Am I building the product right?' – it checks intermediate artefacts against specifications."
  },
  {
    id: 3,
    set: "A",
    type: "single",
    question: "Which question does Validation answer?",
    options: [
      "Am I building the product right?",
      "Is the product free of bugs?",
      "Am I building the right product?",
      "Has the product been released on time?"
    ],
    correct: [2],
    explanation: "Validation answers 'Am I building the right product?' – it checks the final software against customer needs."
  },
  {
    id: 4,
    set: "A",
    type: "single",
    question: "A 'false positive' in testing refers to:",
    options: [
      "A test that incorrectly indicates the absence of a bug",
      "A test that correctly identifies a bug",
      "A test result that incorrectly indicates the presence of a bug",
      "A test that passes when it should fail"
    ],
    correct: [2],
    explanation: "A false positive means the test result incorrectly indicates the presence of a bug when no real defect exists."
  },
  {
    id: 5,
    set: "A",
    type: "single",
    question: "What does 'Fault of Omission' mean?",
    options: [
      "Something incorrect was entered into the representation",
      "The designer omitted something that should have been present",
      "The tester omitted a test case",
      "A runtime exception was not handled"
    ],
    correct: [1],
    explanation: "Fault of Omission means the resulting fault is that something is missing from the representation – the designer omitted required behaviour."
  },
  {
    id: 6,
    set: "A",
    type: "multi",
    question: "Which of the following are valid reasons WHY we test software? (Select ALL that apply)",
    options: [
      "To prove software works as intended",
      "To provide confidence in the system",
      "To guarantee zero defects in production",
      "To establish the extent that requirements have been met",
      "To provide sufficient information for a deployment decision"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Testing cannot guarantee zero defects; the remaining four are valid testing objectives listed by Kovacs."
  },
  {
    id: 7,
    set: "A",
    type: "single",
    question: "Which of the following CORRECTLY describes 'quality' according to the course material?",
    options: [
      "The absence of all defects",
      "The totality of characteristics that satisfy stated or implied needs",
      "Meeting the project deadline",
      "Having 100% test coverage"
    ],
    correct: [1],
    explanation: "ISO definition: quality is the totality of characteristics of an entity that bear on its ability to satisfy stated or implied needs."
  },
  {
    id: 8,
    set: "A",
    type: "single",
    question: "Testing improves software quality by:",
    options: [
      "Building quality directly into the software",
      "Removing all faults during test execution",
      "Providing a means of determining the quality of the software under test",
      "Replacing the need for code reviews"
    ],
    correct: [2],
    explanation: "Testing does not build quality into software; it is a means of determining quality."
  },
  {
    id: 9,
    set: "A",
    type: "single",
    question: "Which SW quality factor refers to how easily a system can be controlled to execute specific behaviours for testing?",
    options: [
      "Observability",
      "Controllability",
      "Decomposability",
      "Stability"
    ],
    correct: [1],
    explanation: "Controllability is the extent to which inputs and environment conditions can be controlled to execute specific behaviours or use cases."
  },
  {
    id: 10,
    set: "A",
    type: "single",
    question: "Root Cause Analysis (RCA) is primarily used to:",
    options: [
      "Assign blame to developers who introduced defects",
      "Identify the root causes of defects to prevent future occurrences",
      "Estimate the remaining number of bugs in a system",
      "Calculate test coverage percentage"
    ],
    correct: [1],
    explanation: "RCA is a mechanism for analysing defects to identify their causes, enabling process improvements that prevent future defects."
  },
  {
    id: 11,
    set: "A",
    type: "single",
    question: "An 'Incident' in software testing is best defined as:",
    options: [
      "A fault discovered during code review",
      "The symptom(s) associated with a failure that alerts the user",
      "A planned test interruption",
      "A performance degradation event"
    ],
    correct: [1],
    explanation: "An incident is the behaviour/symptom associated with a failure that alerts the user to the occurrence of that failure."
  },
  {
    id: 12,
    set: "A",
    type: "single",
    question: "What is 'Test Coverage'?",
    options: [
      "The number of testers assigned to a project",
      "The percentage of requirements reviewed",
      "The amount of testing performed by a set of tests according to a coverage criterion",
      "The ratio of passed tests to total tests"
    ],
    correct: [2],
    explanation: "Test coverage measures the amount of testing performed according to a test selection criterion."
  },
  {
    id: 13,
    set: "A",
    type: "single",
    question: "The test coverage formula is:",
    options: [
      "(Items passed / Items failed) × 100%",
      "(Items exercised / Total items) × 100%",
      "(Defects found / Defects expected) × 100%",
      "(Tests run / Total tests planned) × 100%"
    ],
    correct: [1],
    explanation: "Coverage = (Number of items exercised / Number of items altogether) × 100%"
  },
  {
    id: 14,
    set: "A",
    type: "single",
    question: "A 'Test Selection Criterion' is used to:",
    options: [
      "Determine when testing should stop",
      "Guide the creation or selection of test cases and limit test suite size",
      "Assign tests to specific testers",
      "Categorise defects by severity"
    ],
    correct: [1],
    explanation: "A test selection criterion guides creation/selection of test cases and helps determine if a test set is sufficient."
  },
  {
    id: 15,
    set: "A",
    type: "multi",
    question: "Which of the following are characteristics of testability? (Select ALL that apply)",
    options: [
      "Observability",
      "Controllability",
      "Reusability",
      "Decomposability",
      "Stability"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Testability characteristics include: Observability, Controllability, Decomposability, Understandability, Stability, and Test support. Reusability is not one of them."
  },
  {
    id: 16,
    set: "A",
    type: "single",
    question: "Which ISTQB principle states that 'exhaustive testing is impossible'?",
    options: [
      "Testing shows the presence of defects, not their absence",
      "Early testing saves time and money",
      "Testing all inputs, preconditions, and paths is not feasible",
      "Defects cluster together"
    ],
    correct: [2],
    explanation: "One of the seven ISTQB testing principles is that exhaustive testing (testing everything) is impossible except in trivial cases."
  },
  {
    id: 17,
    set: "A",
    type: "single",
    question: "The 'Pesticide Paradox' in software testing means:",
    options: [
      "Testing kills all bugs eventually",
      "Repeatedly running the same tests will eventually stop finding new defects",
      "Tests become more effective over time",
      "Automated tests are less effective than manual tests"
    ],
    correct: [1],
    explanation: "The Pesticide Paradox: if the same tests are run repeatedly they stop finding new bugs. Tests must be reviewed and revised."
  },
  {
    id: 18,
    set: "A",
    type: "single",
    question: "According to ISTQB, 'testing shows the presence of defects' means:",
    options: [
      "Testing can prove that software is defect-free",
      "Testing can only prove defects exist, not that none remain",
      "Every test reveals at least one defect",
      "Testing eliminates all defects"
    ],
    correct: [1],
    explanation: "Testing can show defects are present, but cannot prove there are no defects – absence of evidence is not evidence of absence."
  },
  {
    id: 19,
    set: "A",
    type: "single",
    question: "Which concept describes the tendency for defects to cluster in a small number of modules?",
    options: [
      "Pesticide Paradox",
      "Defect Clustering",
      "Fault of Commission",
      "Exploratory Testing"
    ],
    correct: [1],
    explanation: "Defect Clustering (Pareto principle) states that a small number of modules contain most defects."
  },
  {
    id: 20,
    set: "A",
    type: "single",
    question: "Which testing type focuses on whether a new change has broken previously working functionality?",
    options: [
      "Exploratory Testing",
      "Smoke Testing",
      "Regression Testing",
      "Sanity Testing"
    ],
    correct: [2],
    explanation: "Regression testing confirms that a code change has not adversely affected existing features."
  },
  {
    id: 21,
    set: "A",
    type: "single",
    question: "Smoke Testing (Confidence Testing) is primarily used to:",
    options: [
      "Exhaustively test all functionality",
      "Quickly verify the most critical functions work before deeper testing",
      "Test the system under peak load",
      "Validate all business requirements"
    ],
    correct: [1],
    explanation: "Smoke testing is a quick set of tests that confirm the basic functions work, before investing in full testing."
  },
  {
    id: 22,
    set: "A",
    type: "single",
    question: "Which of the following is an example of structural (white-box) test coverage?",
    options: [
      "Requirements coverage",
      "Statement coverage",
      "Risk-based coverage",
      "User story coverage"
    ],
    correct: [1],
    explanation: "Statement coverage is a structural/code-based coverage criterion, checking that each code statement is executed."
  },
  {
    id: 23,
    set: "A",
    type: "single",
    question: "According to Kovacs 2026, 100% code coverage means:",
    options: [
      "The software is 100% tested and defect-free",
      "All requirements are covered",
      "All code elements were executed, but this does not guarantee all bugs are found",
      "The testing is complete and no further testing is needed"
    ],
    correct: [2],
    explanation: "100% coverage does not mean 100% tested – faults can still hide in covered code."
  },
  {
    id: 24,
    set: "A",
    type: "single",
    question: "What is the primary difference between 'error guessing' and 'exploratory testing'?",
    options: [
      "Error guessing is automated; exploratory is manual",
      "Error guessing anticipates specific defects based on experience; exploratory actively designs tests as testing proceeds",
      "Exploratory testing requires documentation; error guessing does not",
      "There is no difference; they are the same technique"
    ],
    correct: [1],
    explanation: "Error guessing uses experience to anticipate specific defects. Exploratory testing actively controls test design during execution based on findings."
  },
  {
    id: 25,
    set: "A",
    type: "single",
    question: "Which ISTQB term describes the process of introducing test control when monitoring shows deviation from plan?",
    options: [
      "Test Monitoring",
      "Test Control",
      "Test Closure",
      "Test Exit Criteria"
    ],
    correct: [1],
    explanation: "Test Control is the task of developing and applying corrective actions to get a test project back on track."
  },
  {
    id: 26,
    set: "A",
    type: "multi",
    question: "Which are typical Test Control activities that are the TEST LEADER's responsibility? (Select ALL that apply)",
    options: [
      "Reprioritizing tests",
      "Descoping functionality",
      "Changing the test schedule",
      "Delaying the release",
      "Reviewing product risks"
    ],
    correct: [0, 2, 4],
    explanation: "Reprioritising tests, changing the schedule, and reviewing product risks are test leader responsibilities. Descoping and delaying release are project manager responsibilities."
  },
  {
    id: 27,
    set: "A",
    type: "single",
    question: "An 'Exit Criterion' in testing defines:",
    options: [
      "The entry conditions to start testing",
      "Specific conditions that must be met for a process to be officially completed",
      "When a test case passes",
      "The list of features to be tested"
    ],
    correct: [1],
    explanation: "Exit criteria define conditions that must be met before a task is considered complete, preventing premature closure."
  },
  {
    id: 28,
    set: "A",
    type: "multi",
    question: "Which of the following are typical test exit criteria? (Select ALL that apply)",
    options: [
      "All tests planned have been run",
      "No high-priority defects remain outstanding",
      "All code has been refactored",
      "Certain level of requirements coverage achieved",
      "Budget has been spent"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Typical exit criteria: all planned tests run, no high-priority defects outstanding, coverage target met, budget or schedule consumed."
  },
  {
    id: 29,
    set: "A",
    type: "single",
    question: "Which stakeholder perspective on software quality focuses on cost-effectiveness?",
    options: [
      "User",
      "Developer",
      "Customer",
      "Development Manager"
    ],
    correct: [2],
    explanation: "According to Kovacs, the Customer values cost-effectiveness as the primary quality concern."
  },
  {
    id: 30,
    set: "A",
    type: "single",
    question: "The ISO/IEC 25010:2011 model replaced which earlier quality model?",
    options: [
      "ISO/IEC 9001",
      "ISO/IEC 9126",
      "ISO 29119",
      "CMMI Level 3"
    ],
    correct: [1],
    explanation: "ISO/IEC 25010:2011 is the successor to ISO/IEC 9126 for software product quality characteristics."
  },
  {
    id: 31,
    set: "A",
    type: "single",
    question: "Which of the following best describes 'Risk-Based Testing'?",
    options: [
      "Testing only the lowest-risk components",
      "An analytical approach prioritising testing based on the likelihood and impact of failure",
      "Random testing with no strategy",
      "Testing performed without documentation"
    ],
    correct: [1],
    explanation: "Risk-based testing is an analytical approach that focuses effort on the most critical functionalities based on risk (likelihood × impact)."
  },
  {
    id: 32,
    set: "A",
    type: "single",
    question: "Which testing approach characterises Agile / TDD?",
    options: [
      "Standard-compliant approach",
      "Process-compliant approach",
      "Consultative approach",
      "Regression-averse approach"
    ],
    correct: [1],
    explanation: "Agile developments and TDD belong to process-compliant approaches."
  },
  {
    id: 33,
    set: "A",
    type: "single",
    question: "In psychology of testing, an independent test team is recommended because:",
    options: [
      "Developers can never write good tests",
      "Authors are less likely to find their own mistakes due to cognitive bias",
      "Independent testers are always cheaper",
      "Regulations require separate teams"
    ],
    correct: [1],
    explanation: "Authors tend to be blind to their own mistakes – independent testers bring fresh perspective and can find faults the author misses."
  },
  {
    id: 34,
    set: "A",
    type: "single",
    question: "A 'false negative' in testing means:",
    options: [
      "A test incorrectly indicates the presence of a bug",
      "A test incorrectly indicates the absence of a condition that actually exists",
      "A test passes correctly",
      "A test fails correctly"
    ],
    correct: [1],
    explanation: "A false negative occurs when the test result incorrectly indicates the absence of a bug that is actually present."
  },
  {
    id: 35,
    set: "A",
    type: "single",
    question: "Which ISTQB principle states that 'context matters'?",
    options: [
      "Defects cluster together",
      "Absence of errors fallacy",
      "Testing is context-dependent",
      "Early testing saves money"
    ],
    correct: [2],
    explanation: "Testing is context-dependent – different systems require different testing approaches (e.g., safety-critical vs. e-commerce)."
  },
  {
    id: 36,
    set: "A",
    type: "single",
    question: "Which of the following is an example of a 'Fault of Commission'?",
    options: [
      "A missing validation check for negative inputs",
      "An incorrect formula entered in the source code",
      "An omitted error handling routine",
      "A requirement that was never implemented"
    ],
    correct: [1],
    explanation: "Fault of Commission means something incorrect was entered into the representation – an incorrect formula is a classic example."
  },
  {
    id: 37,
    set: "A",
    type: "single",
    question: "According to ISTQB, which activity occurs FIRST in the generic testing process?",
    options: [
      "Test design",
      "Test execution",
      "Test planning",
      "Test closure"
    ],
    correct: [2],
    explanation: "Test planning is the first activity; it defines objectives, scope, approach, resources and schedule."
  },
  {
    id: 38,
    set: "A",
    type: "single",
    question: "What does PDCA stand for in software process quality?",
    options: [
      "Plan, Design, Code, Analyse",
      "Plan, Do, Check, Act",
      "Process, Deploy, Configure, Assess",
      "Prepare, Document, Control, Approve"
    ],
    correct: [1],
    explanation: "PDCA = Plan, Do, Check, Act – a continuous improvement cycle used in quality management."
  },
  {
    id: 39,
    set: "A",
    type: "single",
    question: "The McCabe Cyclomatic Complexity formula V(G) is:",
    options: [
      "V(G) = N – E + 2",
      "V(G) = E – N + 2",
      "V(G) = E × N",
      "V(G) = E / N"
    ],
    correct: [1],
    explanation: "V(G) = E – N + 2, where E = edges and N = nodes in the control flow graph."
  },
  {
    id: 40,
    set: "A",
    type: "single",
    question: "Attack Testing focuses on:",
    options: [
      "Performance testing under load",
      "Trying to include a specific type of failure (UI, OS, DB, vulnerabilities)",
      "Security penetration testing only",
      "Automated regression testing"
    ],
    correct: [1],
    explanation: "Attack testing focuses on trying to induce a specific type of failure such as UI failures, OS, DB interfaces, or software vulnerabilities."
  },
  {
    id: 41,
    set: "A",
    type: "single",
    question: "Defect-based testing techniques develop test cases from:",
    options: [
      "The user interface design",
      "Knowledge about a specific defect type and taxonomies",
      "Random input generation",
      "Performance benchmarks"
    ],
    correct: [1],
    explanation: "Defect-based techniques create tests based on known defect types such as Beizer, Kaner, or Binder taxonomies."
  },
  {
    id: 42,
    set: "A",
    type: "single",
    question: "Input-Output (IO) Analysis is used to:",
    options: [
      "Measure the speed of data transfers",
      "Determine which program inputs affect which program outputs, reducing combinatorial test count",
      "Analyse file I/O performance",
      "Calculate decision coverage"
    ],
    correct: [1],
    explanation: "IO Analysis determines which inputs affect which outputs, allowing combinatorial test reduction while maintaining fault-detection capability."
  },
  {
    id: 43,
    set: "A",
    type: "single",
    question: "Which of the following best characterises a 'test adequacy criterion'?",
    options: [
      "A rule for assigning testers to projects",
      "A rule for validating whether enough testing has been executed",
      "The minimum number of test cases required",
      "A budget threshold for testing activities"
    ],
    correct: [1],
    explanation: "Test adequacy criteria provide a notion of 'thoroughness' and answer: was the test suite good enough?"
  },
  {
    id: 44,
    set: "A",
    type: "multi",
    question: "Which factors should be considered when defining a test approach? (Select ALL that apply)",
    options: [
      "Risk of project failure",
      "Skills and experience of team members",
      "Colour scheme of the UI",
      "Regulatory aspects",
      "The nature of the product"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Key factors: risk, team skills, testing objective, regulatory aspects, product nature. UI colour is irrelevant."
  },
  {
    id: 45,
    set: "A",
    type: "single",
    question: "Which ISTQB glossary term refers to a hierarchical list of root causes, defects, and failures used in defect-based testing?",
    options: [
      "Checklist",
      "Taxonomy",
      "Test Charter",
      "Traceability Matrix"
    ],
    correct: [1],
    explanation: "Taxonomies (e.g., Beizer, Kaner, Binder) are hierarchical lists used in defect-based testing to identify target defects."
  },
  {
    id: 46,
    set: "A",
    type: "single",
    question: "Which of the following CORRECTLY describes the Agile 'whole-team approach' in testing?",
    options: [
      "Only QA team members write tests",
      "Testing is the sole responsibility of dedicated testers",
      "The entire team, including developers, business analysts, and testers, collaborates on quality",
      "Management performs all test approvals"
    ],
    correct: [2],
    explanation: "The whole-team (collaboration-based) approach involves the entire team in quality activities including test planning, story writing, and brainstorming."
  },
  {
    id: 47,
    set: "A",
    type: "single",
    question: "What is the main difference between 'Process Quality' and 'Product Quality'?",
    options: [
      "Product quality focuses on the development process; process quality on the end product",
      "Process quality ensures development steps produce good intermediate products; product quality refers to the end software characteristics",
      "They are the same concept",
      "Process quality is measured by test coverage; product quality by user satisfaction"
    ],
    correct: [1],
    explanation: "Process quality ensures each step of development produces good intermediate products. Product quality refers to the characteristics of the final software."
  },
  {
    id: 48,
    set: "A",
    type: "single",
    question: "SPICE (ISO 15504) is primarily associated with:",
    options: [
      "Security testing standards",
      "Software process assessment and improvement",
      "User interface design guidelines",
      "Network testing protocols"
    ],
    correct: [1],
    explanation: "SPICE is a framework for software process assessment used in Automotive, Banking, and Healthcare sectors."
  },
  {
    id: 49,
    set: "A",
    type: "single",
    question: "Which of the following statements about test coverage is FALSE?",
    options: [
      "100% branch coverage implies 100% statement coverage",
      "100% statement coverage implies 100% branch coverage",
      "Test coverage measures the amount of testing performed",
      "Coverage criteria help determine test completeness"
    ],
    correct: [1],
    explanation: "100% statement coverage does NOT imply 100% branch coverage. The hierarchy is: path coverage ⊇ branch coverage ⊇ statement coverage."
  },
  {
    id: 50,
    set: "A",
    type: "single",
    question: "In AI-assisted testing, which task is AI LEAST suited for according to current practice?",
    options: [
      "Automated test data generation",
      "Dynamic analysis data collection for IO Analysis",
      "Making ethical judgements about software release decisions",
      "Pattern recognition in large test result datasets"
    ],
    correct: [2],
    explanation: "AI is effective at data collection, generation, and pattern recognition but ethical/release decisions require human judgement."
  },

  // ─────────────────────────────────────────────────────────────
  // SET B — Test Design Techniques (Q 51-100)
  // ─────────────────────────────────────────────────────────────
  {
    id: 51,
    set: "B",
    type: "single",
    question: "Equivalence Partitioning (EP) divides input data into:",
    options: [
      "Valid partitions only",
      "Equal-sized groups",
      "Classes where all values are expected to be processed the same way",
      "Random subsets for sampling"
    ],
    correct: [2],
    explanation: "EP partitions inputs into classes where all values are expected to produce the same result, so testing one value per class is sufficient."
  },
  {
    id: 52,
    set: "B",
    type: "single",
    question: "In Boundary Value Analysis (BVA), an 'ON point' is:",
    options: [
      "A value just outside the valid boundary",
      "The exact boundary value",
      "A value well inside the valid range",
      "A value that causes a crash"
    ],
    correct: [1],
    explanation: "The ON point is the exact boundary value itself; the OFF point is adjacent to (just outside) the boundary."
  },
  {
    id: 53,
    set: "B",
    type: "single",
    question: "For the condition 'IF Age > 42', what is the ON point?",
    options: [
      "42",
      "43",
      "41",
      "44"
    ],
    correct: [1],
    explanation: "For 'Age > 42' (open boundary), the ON point is 43 (first value that makes the condition true). The OFF point is 42."
  },
  {
    id: 54,
    set: "B",
    type: "single",
    question: "2-point BVA selects which test data points for each boundary?",
    options: [
      "The ON point only",
      "The ON point and the OFF point",
      "The ON, OFF, and a value inside the range",
      "The ON, OFF, and both their neighbours"
    ],
    correct: [1],
    explanation: "2-point BVA selects the ON and the OFF point for each boundary."
  },
  {
    id: 55,
    set: "B",
    type: "single",
    question: "3-point BVA selects:",
    options: [
      "ON, OFF, and one IN point",
      "ON, and both of its immediate neighbours",
      "Three random values near the boundary",
      "ON, OFF, and one OUT point"
    ],
    correct: [1],
    explanation: "3-point BVA selects the ON point and both immediate neighbours (the points either side of the boundary)."
  },
  {
    id: 56,
    set: "B",
    type: "single",
    question: "A Decision Table test technique is most appropriate when:",
    options: [
      "Testing a single variable with many values",
      "Testing combinations of conditions that result in different actions",
      "Testing performance under load",
      "Testing UI responsiveness"
    ],
    correct: [1],
    explanation: "Decision tables are ideal when business rules have multiple conditions and combinations of conditions produce different outputs."
  },
  {
    id: 57,
    set: "B",
    type: "single",
    question: "In a decision table, a 'Don't Care' entry (–) means:",
    options: [
      "The condition is always false",
      "The condition value does not affect the outcome",
      "The test case should be skipped",
      "The condition is undefined"
    ],
    correct: [1],
    explanation: "A 'Don't Care' (–) entry means the condition's value is irrelevant to the action in that column."
  },
  {
    id: 58,
    set: "B",
    type: "single",
    question: "State Transition Testing is most useful for:",
    options: [
      "Testing systems with complex conditional logic per statement",
      "Testing systems whose behaviour depends on history (current state)",
      "Testing systems with no user interface",
      "Testing mathematical algorithms"
    ],
    correct: [1],
    explanation: "State transition testing is used for systems whose behaviour depends on current state and inputs (e.g., ATMs, communication protocols)."
  },
  {
    id: 59,
    set: "B",
    type: "single",
    question: "In pairwise testing, the goal is to cover all:",
    options: [
      "Individual parameter values",
      "Triples of parameter combinations",
      "Pairs of parameter value combinations",
      "All possible combinations exhaustively"
    ],
    correct: [2],
    explanation: "Pairwise (2-way) testing ensures every pair of parameter values is covered at least once, drastically reducing test count."
  },
  {
    id: 60,
    set: "B",
    type: "single",
    question: "The Classification Tree Method is:",
    options: [
      "A way to model system states",
      "A partition-based method that handles multiple viewpoints on input domains",
      "An exploratory testing approach",
      "A branch coverage metric"
    ],
    correct: [1],
    explanation: "The Classification Tree Method partitions input domains into classes, handling cases where inputs can be viewed from multiple perspectives."
  },
  {
    id: 61,
    set: "B",
    type: "single",
    question: "Which statement about 'first-order bugs' is correct?",
    options: [
      "They require two variables to be set to specific values to detect",
      "They involve only one variable and can be reliably detected by specific techniques",
      "They are the most complex bugs to find",
      "They only occur in object-oriented programs"
    ],
    correct: [1],
    explanation: "First-order bugs involve one variable. Reliable techniques exist for them. E.g., for 'if price > 200' bug, only 'price = 200' detects it."
  },
  {
    id: 62,
    set: "B",
    type: "single",
    question: "For a 'second-order bug', what is required to detect it?",
    options: [
      "Only one variable needs to be set",
      "Two variables must be set to specific values simultaneously",
      "A special static analysis tool",
      "Random test data"
    ],
    correct: [1],
    explanation: "Second-order bugs require two variables to be set correctly. Most standard techniques are not reliable for higher-order bugs; combinatorial methods are needed."
  },
  {
    id: 63,
    set: "B",
    type: "single",
    question: "Statement Coverage measures:",
    options: [
      "Whether all decisions evaluated to both true and false",
      "Whether every executable statement was executed at least once",
      "Whether all paths were traversed",
      "Whether all conditions were tested"
    ],
    correct: [1],
    explanation: "Statement coverage checks that every executable statement was executed at least once during testing."
  },
  {
    id: 64,
    set: "B",
    type: "single",
    question: "Branch Coverage and Decision Coverage are generally the same EXCEPT:",
    options: [
      "They are always identical",
      "In short-circuit evaluation languages, they can differ",
      "Decision coverage is weaker than branch coverage",
      "Branch coverage applies only to loops"
    ],
    correct: [1],
    explanation: "In short-circuit languages (e.g., Java, C), branch and decision coverage can differ due to compound conditions with && and ||."
  },
  {
    id: 65,
    set: "B",
    type: "single",
    question: "Path Coverage subsumes which other coverage criteria?",
    options: [
      "Only statement coverage",
      "Neither branch nor statement coverage",
      "Both branch and statement coverage",
      "Only condition coverage"
    ],
    correct: [2],
    explanation: "Path coverage subsumes branch coverage which subsumes statement coverage. It is the strongest of the three."
  },
  {
    id: 66,
    set: "B",
    type: "single",
    question: "Why is complete Path Coverage impractical for most programs?",
    options: [
      "Tools are not available to measure it",
      "The number of paths is exponential in the number of conditional branches",
      "It only works for object-oriented code",
      "It requires formal methods"
    ],
    correct: [1],
    explanation: "The number of paths grows exponentially with conditional branches, making full path coverage economically infeasible for large programs."
  },
  {
    id: 67,
    set: "B",
    type: "single",
    question: "Basis Path Testing selects paths that are:",
    options: [
      "All possible paths through the program",
      "A set of linearly independent paths (each introducing at least one new node/edge)",
      "Only the happy-path scenarios",
      "Paths that maximise statement coverage"
    ],
    correct: [1],
    explanation: "Basis Path Testing selects linearly independent paths (basis paths), upper-bounded by the McCabe Cyclomatic Complexity number."
  },
  {
    id: 68,
    set: "B",
    type: "single",
    question: "For a control flow graph with E=9 edges and N=7 nodes, the cyclomatic complexity is:",
    options: [
      "2",
      "4",
      "16",
      "63"
    ],
    correct: [1],
    explanation: "V(G) = E – N + 2 = 9 – 7 + 2 = 4."
  },
  {
    id: 69,
    set: "B",
    type: "single",
    question: "In Equivalence Partitioning, the 'monthLength' function for a 4-class model (months in M1, M2/M3, M4 with/without leap year) results in how many EP test cases?",
    options: [
      "2",
      "3",
      "4",
      "12"
    ],
    correct: [2],
    explanation: "Applying EP to the monthLength function results in 4 test cases corresponding to the 4 equivalence classes."
  },
  {
    id: 70,
    set: "B",
    type: "single",
    question: "Domain Testing is described as:",
    options: [
      "Testing a software domain's networking configuration",
      "A generalisation of BVA that minimises the number of test data",
      "Testing only the input domain",
      "An exploratory technique for domain experts"
    ],
    correct: [1],
    explanation: "Domain testing is a generalisation of 2-point, 3-point, and 4-point BVA that minimises the number of test data needed."
  },
  {
    id: 71,
    set: "B",
    type: "multi",
    question: "Which of the following are specification-based (black-box) test techniques? (Select ALL that apply)",
    options: [
      "Equivalence Partitioning",
      "Boundary Value Analysis",
      "Statement Coverage",
      "Decision Table Testing",
      "State Transition Testing"
    ],
    correct: [0, 1, 3, 4],
    explanation: "EP, BVA, Decision Tables, and State Transition are specification-based (black-box) techniques. Statement Coverage is a structure-based (white-box) technique."
  },
  {
    id: 72,
    set: "B",
    type: "single",
    question: "For 'price >= 100 AND price < 200' — the range [100, 200) has how many boundary values to consider in standard 2-point BVA?",
    options: [
      "1 (only 100)",
      "2 (100 and 199)",
      "4 (99, 100, 199, 200)",
      "6 (both sides of each boundary with neighbours)"
    ],
    correct: [2],
    explanation: "2-point BVA gives ON and OFF for each boundary: ON=100, OFF=99 (lower boundary); ON=199, OFF=200 (upper open boundary)."
  },
  {
    id: 73,
    set: "B",
    type: "single",
    question: "Pairwise Testing targets what degree of interaction coverage?",
    options: [
      "1-way",
      "2-way",
      "3-way",
      "All-way"
    ],
    correct: [1],
    explanation: "Pairwise testing targets 2-way (all pairs) interaction coverage between parameter values."
  },
  {
    id: 74,
    set: "B",
    type: "single",
    question: "Error Guessing is best described as:",
    options: [
      "Using statistical models to predict defect locations",
      "Using tester experience to anticipate defects and design specific tests to expose them",
      "Guessing test inputs randomly",
      "Using historical bug data to automate regression tests"
    ],
    correct: [1],
    explanation: "Error guessing uses the tester's experience to anticipate what defects might be present and design tests to expose them."
  },
  {
    id: 75,
    set: "B",
    type: "single",
    question: "Checklist-based testing is most appropriate for:",
    options: [
      "First-time testers with no domain knowledge",
      "Experienced testers using reminder lists of items to verify",
      "Automated test frameworks",
      "Load and performance testing"
    ],
    correct: [1],
    explanation: "Checklist-based testing uses reminder lists developed by experienced testers over time to guide testing activities."
  },
  {
    id: 76,
    set: "B",
    type: "single",
    question: "Which technique is described as a test design approach where the tester actively controls test design during execution based on information gained?",
    options: [
      "Error Guessing",
      "Exploratory Testing",
      "Checklist Testing",
      "Boundary Value Analysis"
    ],
    correct: [1],
    explanation: "Exploratory testing: testers actively control test design as tests are performed, using information gained to design new tests."
  },
  {
    id: 77,
    set: "B",
    type: "single",
    question: "A test design technique is described as 'reliable' when:",
    options: [
      "It is used by experienced testers",
      "Applying it results in test data that detects the bug with full certainty",
      "It achieves 100% path coverage",
      "It is formally verified"
    ],
    correct: [1],
    explanation: "A technique is reliable if applying it, the resulting test data detects the target bug with full certainty."
  },
  {
    id: 78,
    set: "B",
    type: "single",
    question: "The webshop code: 'if price > 200: reduction = 8' contains a first-order bug. What single test value detects it?",
    options: [
      "price = 199",
      "price = 201",
      "price = 200",
      "price = 0"
    ],
    correct: [2],
    explanation: "The bug is '>200' instead of '>=200'. Setting price=200 detects the bug: the correct version gives reduction=8 but the buggy version gives reduction=0."
  },
  {
    id: 79,
    set: "B",
    type: "single",
    question: "For the nextDay() function analysed with functional decomposition EP, how many abstract test cases are needed?",
    options: [
      "4",
      "5",
      "7",
      "12"
    ],
    correct: [2],
    explanation: "The nextDay() EP analysis shown in Kovacs yields 7 abstract test cases."
  },
  {
    id: 80,
    set: "B",
    type: "single",
    question: "4-point BVA selects:",
    options: [
      "ON and OFF points only",
      "ON, OFF, and both their immediate neighbours",
      "Four random points near the boundary",
      "ON, and three points inside the range"
    ],
    correct: [1],
    explanation: "4-point BVA selects the ON, the OFF, and both their immediate neighbours."
  },
  {
    id: 81,
    set: "B",
    type: "single",
    question: "In a state transition diagram, a 'guard condition' is:",
    options: [
      "The action taken on entering a state",
      "A condition that must be true for a transition to fire",
      "A final state",
      "A default transition"
    ],
    correct: [1],
    explanation: "A guard condition must evaluate to true for a transition to be taken; it constrains when an event triggers a state change."
  },
  {
    id: 82,
    set: "B",
    type: "single",
    question: "Which statement about EP is TRUE?",
    options: [
      "All values within a partition produce different results",
      "Testing one value from each partition is considered sufficient",
      "EP only applies to numeric inputs",
      "EP requires the source code to be available"
    ],
    correct: [1],
    explanation: "EP assumes all values within a partition behave the same, so testing one representative value from each partition is sufficient."
  },
  {
    id: 83,
    set: "B",
    type: "single",
    question: "Which coverage criterion requires each loop to be executed 0, 1, … k times?",
    options: [
      "Statement Coverage",
      "Branch Coverage",
      "Modified Path Coverage with cycle bound k",
      "Condition Coverage"
    ],
    correct: [2],
    explanation: "To handle loops in path coverage, we redefine it as: each cycle must be executed 0, 1, ..., k times where k is a constant."
  },
  {
    id: 84,
    set: "B",
    type: "single",
    question: "Which of the following best describes 'Combinatorial Testing'?",
    options: [
      "Testing all possible inputs exhaustively",
      "Testing selected combinations of inputs based on interaction coverage criteria (e.g., pairwise)",
      "Combining unit tests into integration tests",
      "A security testing approach"
    ],
    correct: [1],
    explanation: "Combinatorial testing systematically covers selected combinations of parameter values (1-way, 2-way, 3-way etc.) to efficiently detect interaction faults."
  },
  {
    id: 85,
    set: "B",
    type: "single",
    question: "The 'OFF point' for a closed boundary condition 'X ≤ 42' is:",
    options: [
      "42",
      "41",
      "43",
      "40"
    ],
    correct: [2],
    explanation: "For 'X ≤ 42' (closed boundary), the ON point is 42 and the OFF point is 43 (just outside the boundary)."
  },
  {
    id: 86,
    set: "B",
    type: "single",
    question: "Which test design technique is MOST appropriate for testing a login workflow with multiple valid/invalid credential combinations?",
    options: [
      "Boundary Value Analysis",
      "State Transition Testing",
      "Decision Table Testing",
      "Path Coverage"
    ],
    correct: [2],
    explanation: "Decision tables are ideal for testing business rules combining multiple conditions (valid/invalid username, valid/invalid password) with corresponding actions."
  },
  {
    id: 87,
    set: "B",
    type: "multi",
    question: "Which are structure-based (white-box) test techniques? (Select ALL that apply)",
    options: [
      "Statement Coverage",
      "Branch Coverage",
      "Equivalence Partitioning",
      "Path Coverage",
      "Condition Coverage"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Statement, Branch, Path, and Condition coverage are all structure-based (white-box) techniques requiring code access. EP is black-box."
  },
  {
    id: 88,
    set: "B",
    type: "single",
    question: "The number of 2-way combinations that pairwise testing needs to cover for 5 parameters each with 6 values is bounded by how many test configurations in the Kovacs example?",
    options: [
      "15",
      "30",
      "64",
      "216"
    ],
    correct: [1],
    explanation: "The Kovacs pairwise example with 5 parameters, up to 6 values, required 30 test configurations for full 2-way coverage."
  },
  {
    id: 89,
    set: "B",
    type: "single",
    question: "In domain testing for an atomic predicate 'IF Age > 42', how many test cases are considered error-revealing?",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    correct: [2],
    explanation: "Domain testing for atomic predicates uses 4 test cases: ON (43), OFF (42), OUT (20), IN (50) to detect various fault classes."
  },
  {
    id: 90,
    set: "B",
    type: "single",
    question: "Which of the following is NOT a valid test adequacy criterion?",
    options: [
      "All decisions evaluated true and false",
      "All statements executed",
      "All tester names appear in the report",
      "All paths traversed"
    ],
    correct: [2],
    explanation: "Tester names in the report is an administrative detail, not a test adequacy criterion."
  },
  {
    id: 91,
    set: "B",
    type: "single",
    question: "For a function with a control flow graph containing 4 paths, what is the MINIMUM number of test cases needed for path coverage?",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    correct: [2],
    explanation: "Path coverage requires at least one test case per unique execution path, so 4 paths require minimum 4 test cases."
  },
  {
    id: 92,
    set: "B",
    type: "single",
    question: "In the Kovacs webshop example, why is the second-order bug harder to detect than the first-order bug?",
    options: [
      "It involves a more complex algorithm",
      "It requires both 'vip' and 'prepay' variables to have specific values simultaneously",
      "It only appears in edge cases",
      "Standard techniques cannot detect first-order bugs"
    ],
    correct: [1],
    explanation: "The second-order bug (wrong prepay condition placement) requires vip ≠ 'premium' AND prepay = True to detect it."
  },
  {
    id: 93,
    set: "B",
    type: "single",
    question: "Which of the following is true about EQUIVALENCE PARTITIONING for invalid partitions?",
    options: [
      "They are not tested as part of EP",
      "They should also be tested with representative values",
      "Invalid partitions always cause crashes",
      "Invalid partitions can be merged into one class"
    ],
    correct: [1],
    explanation: "EP includes both valid AND invalid partitions. A representative value from each invalid partition should also be tested."
  },
  {
    id: 94,
    set: "B",
    type: "single",
    question: "The primary objective of IO (Input-Output) Analysis is to:",
    options: [
      "Speed up test execution",
      "Reduce combinatorial tests while maintaining fault-detection capability",
      "Measure I/O throughput performance",
      "Generate test data automatically"
    ],
    correct: [1],
    explanation: "IO Analysis identifies which inputs affect which outputs, allowing test reduction while maintaining fault-detection ability."
  },
  {
    id: 95,
    set: "B",
    type: "single",
    question: "In Equivalence Partitioning for the webshop price field, which partitions would you typically identify?",
    options: [
      "One valid partition: all positive prices",
      "Two partitions: below 100, 100-200",
      "Multiple partitions matching the discount bands (e.g., <100, 100-<200, ≥200) plus invalid values",
      "One partition per test case"
    ],
    correct: [2],
    explanation: "EP identifies distinct partitions based on behaviour: each discount band is a separate partition, plus invalid partitions (negative, non-numeric)."
  },
  {
    id: 96,
    set: "B",
    type: "single",
    question: "Which of the following correctly describes MC/DC (Modified Condition/Decision Coverage)?",
    options: [
      "Each condition in a decision independently affects the outcome",
      "All decisions are evaluated true",
      "All conditions are evaluated false",
      "It is the same as branch coverage"
    ],
    correct: [0],
    explanation: "MC/DC requires each condition in a decision to independently affect the decision outcome, widely used in safety-critical systems (DO-178C)."
  },
  {
    id: 97,
    set: "B",
    type: "single",
    question: "Which test design technique would best handle a system that must process 4 operating systems × 3 browsers × 5 screen resolutions for a web app?",
    options: [
      "Boundary Value Analysis",
      "Pairwise / Combinatorial Testing",
      "State Transition Testing",
      "Error Guessing"
    ],
    correct: [1],
    explanation: "Pairwise testing efficiently reduces 60 combinations (4×3×5) to a much smaller set while covering all pairs."
  },
  {
    id: 98,
    set: "B",
    type: "single",
    question: "A control flow graph has E=13 edges and N=11 nodes. The McCabe Cyclomatic Complexity is:",
    options: [
      "2",
      "4",
      "13",
      "24"
    ],
    correct: [1],
    explanation: "V(G) = E – N + 2 = 13 – 11 + 2 = 4."
  },
  {
    id: 99,
    set: "B",
    type: "single",
    question: "Which statement about Decision Coverage is TRUE?",
    options: [
      "Decision coverage only applies to if-else statements",
      "Achieving decision coverage guarantees path coverage",
      "Decision coverage requires every decision point to evaluate to both true and false at least once",
      "Decision coverage is weaker than statement coverage"
    ],
    correct: [2],
    explanation: "Decision coverage requires each decision (e.g., if/while/for condition) to evaluate to both true and false at least once."
  },
  {
    id: 100,
    set: "B",
    type: "single",
    question: "In pairwise testing, the reason it is effective despite not covering all combinations is:",
    options: [
      "It randomly covers combinations",
      "Research shows the majority of faults are triggered by one or two parameter interactions",
      "It is faster than manual testing",
      "It is mandated by ISTQB"
    ],
    correct: [1],
    explanation: "Empirical research shows most faults (60–90%) are triggered by single parameters or pairs of parameters, making pairwise testing highly effective."
  },

  // ─────────────────────────────────────────────────────────────
  // SET C — Test Levels, Lifecycle & Planning (Q 101-150)
  // ─────────────────────────────────────────────────────────────
  {
    id: 101,
    set: "C",
    type: "single",
    question: "Which is the CORRECT order of test levels from lowest to highest?",
    options: [
      "System → Integration → Unit → Acceptance",
      "Unit → Integration → System → Acceptance",
      "Acceptance → System → Integration → Unit",
      "Unit → System → Integration → Acceptance"
    ],
    correct: [1],
    explanation: "Standard test levels: Unit (component) → Integration → System → Acceptance Testing."
  },
  {
    id: 102,
    set: "C",
    type: "single",
    question: "Unit Testing focuses on:",
    options: [
      "Testing the complete integrated system",
      "Testing individual components in isolation",
      "Testing end-to-end business workflows",
      "Testing from the user's perspective"
    ],
    correct: [1],
    explanation: "Unit/Component testing tests individual software components (functions, classes, modules) in isolation."
  },
  {
    id: 103,
    set: "C",
    type: "single",
    question: "In Integration Testing, a 'stub' is used to:",
    options: [
      "Drive the module under test from above",
      "Replace a called module that has not yet been developed or integrated",
      "Simulate user interactions",
      "Record test results"
    ],
    correct: [1],
    explanation: "A stub replaces a called component (lower-level) not yet available. A driver replaces a calling component."
  },
  {
    id: 104,
    set: "C",
    type: "single",
    question: "In Integration Testing, a 'driver' is used to:",
    options: [
      "Replace a called module below the module under test",
      "Call the module under test from above, simulating the missing higher-level component",
      "Log test execution results",
      "Manage test environment configurations"
    ],
    correct: [1],
    explanation: "A driver simulates the calling module (higher-level component) to invoke the module under test."
  },
  {
    id: 105,
    set: "C",
    type: "single",
    question: "The Big Bang integration strategy means:",
    options: [
      "All modules are integrated and tested at once after individual unit testing",
      "Modules are integrated one by one from the top down",
      "Testing starts from the lowest-level modules upward",
      "The system is rebuilt from scratch after each test"
    ],
    correct: [0],
    explanation: "Big Bang: all modules are unit tested in isolation first, then all integrated together at once. Difficult to isolate bugs."
  },
  {
    id: 106,
    set: "C",
    type: "single",
    question: "In a Top-Down integration strategy, which test doubles are needed?",
    options: [
      "Drivers",
      "Stubs",
      "Both drivers and stubs",
      "Neither; real components are used"
    ],
    correct: [1],
    explanation: "Top-down integration starts with the top-level modules and integrates downward, using stubs to replace not-yet-integrated lower-level modules."
  },
  {
    id: 107,
    set: "C",
    type: "single",
    question: "In a Bottom-Up integration strategy, which test doubles are needed?",
    options: [
      "Stubs",
      "Drivers",
      "Both drivers and stubs",
      "Mock objects only"
    ],
    correct: [1],
    explanation: "Bottom-up starts with lower-level modules and integrates upward, using drivers to call them from above."
  },
  {
    id: 108,
    set: "C",
    type: "single",
    question: "The Inside-Out (Sandwich) integration strategy combines:",
    options: [
      "Top-down and bottom-up approaches simultaneously",
      "Big Bang and top-down approaches",
      "Unit testing and system testing",
      "Functional and structural testing"
    ],
    correct: [0],
    explanation: "Inside-out (Sandwich) strategy combines top-down and bottom-up: middle modules are tested first, then integration goes both upward and downward."
  },
  {
    id: 109,
    set: "C",
    type: "single",
    question: "System Testing verifies:",
    options: [
      "Individual code modules in isolation",
      "Interfaces between components",
      "The complete integrated system against specified requirements",
      "The system from the developer's perspective"
    ],
    correct: [2],
    explanation: "System testing verifies that the fully integrated system meets its specified functional and non-functional requirements."
  },
  {
    id: 110,
    set: "C",
    type: "single",
    question: "User Acceptance Testing (UAT) is primarily performed by:",
    options: [
      "Software developers",
      "Independent QA testers",
      "End users or customer representatives",
      "Automated test scripts"
    ],
    correct: [2],
    explanation: "UAT is performed by end users or customer representatives to validate the system meets business needs before deployment."
  },
  {
    id: 111,
    set: "C",
    type: "single",
    question: "Alpha testing is:",
    options: [
      "Testing performed by external customers at their own sites",
      "Testing performed internally before releasing to external users",
      "The first phase of unit testing",
      "Performance testing under peak load"
    ],
    correct: [1],
    explanation: "Alpha testing is internal acceptance testing performed at the developer's site before the product is released to external users."
  },
  {
    id: 112,
    set: "C",
    type: "single",
    question: "Beta testing is:",
    options: [
      "Testing performed by the development team",
      "Testing performed by real users in their environment before general release",
      "Automated regression testing",
      "Security vulnerability assessment"
    ],
    correct: [1],
    explanation: "Beta testing is external acceptance testing performed by real users in their real environment before general release."
  },
  {
    id: 113,
    set: "C",
    type: "single",
    question: "Which testing level is MOST closely associated with non-functional testing (performance, security, usability)?",
    options: [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    correct: [2],
    explanation: "System testing typically includes non-functional testing such as performance, security, and usability testing."
  },
  {
    id: 114,
    set: "C",
    type: "single",
    question: "In the V-model, System Testing corresponds to which development phase?",
    options: [
      "Unit design",
      "Architecture/High-level design",
      "Requirements specification",
      "Detailed design"
    ],
    correct: [2],
    explanation: "In the V-model, System Testing corresponds to the Requirements Specification phase on the left side."
  },
  {
    id: 115,
    set: "C",
    type: "single",
    question: "Which of the following is a typical objective of Integration Testing?",
    options: [
      "Finding defects in individual algorithms",
      "Detecting interface and communication defects between components",
      "Validating business requirements with end users",
      "Measuring code execution speed"
    ],
    correct: [1],
    explanation: "Integration testing focuses on interfaces and communication between components — finding defects that only appear when components interact."
  },
  {
    id: 116,
    set: "C",
    type: "single",
    question: "A Test Plan typically contains which of the following?",
    options: [
      "Actual test results and defect counts",
      "Scope, objectives, approach, resources, schedule, and exit criteria",
      "Source code metrics",
      "Deployment scripts"
    ],
    correct: [1],
    explanation: "A test plan contains: scope, objectives, test approach, resources, schedule, risks, entry/exit criteria, and deliverables."
  },
  {
    id: 117,
    set: "C",
    type: "single",
    question: "Entry criteria in testing define:",
    options: [
      "When testing should stop",
      "The preconditions that must be satisfied before testing can begin",
      "The number of test cases needed",
      "The tools required for testing"
    ],
    correct: [1],
    explanation: "Entry criteria (preconditions) define what must be true before a test activity can start (e.g., test environment set up, build available)."
  },
  {
    id: 118,
    set: "C",
    type: "single",
    question: "Test Estimation techniques include:",
    options: [
      "Code coverage analysis",
      "Expert-based estimation (Wideband Delphi) and metrics-based estimation",
      "Random sampling",
      "Boundary value analysis"
    ],
    correct: [1],
    explanation: "Test estimation uses techniques like Wideband Delphi (expert consensus), function point analysis, and metrics from past projects."
  },
  {
    id: 119,
    set: "C",
    type: "single",
    question: "Which SDLC model is characterised by sequential phases where each phase must complete before the next begins?",
    options: [
      "Agile",
      "Spiral",
      "Waterfall",
      "V-model"
    ],
    correct: [2],
    explanation: "The Waterfall model is characterised by sequential, non-overlapping phases: Requirements → Design → Implementation → Testing → Deployment."
  },
  {
    id: 120,
    set: "C",
    type: "single",
    question: "In Agile development, testing is:",
    options: [
      "Performed only at the end of the project",
      "An activity performed exclusively by the QA team",
      "Integrated throughout development with short iterations",
      "Replaced entirely by code reviews"
    ],
    correct: [2],
    explanation: "In Agile, testing is continuous and integrated throughout each sprint/iteration, not deferred to the end."
  },
  {
    id: 121,
    set: "C",
    type: "single",
    question: "Test-Driven Development (TDD) means:",
    options: [
      "Writing test cases after implementation is complete",
      "Writing automated tests before writing the production code",
      "Testing only the most critical features",
      "Using testing tools to drive deployment"
    ],
    correct: [1],
    explanation: "TDD: write a failing test first → write minimal code to pass → refactor. Tests are written before the implementation code."
  },
  {
    id: 122,
    set: "C",
    type: "single",
    question: "Behaviour-Driven Development (BDD) uses which format for specifications?",
    options: [
      "UML diagrams",
      "Given-When-Then scenarios",
      "Decision tables only",
      "State machine diagrams"
    ],
    correct: [1],
    explanation: "BDD uses Given-When-Then (Gherkin syntax) to express system behaviour in a natural language format shared by developers, testers, and business."
  },
  {
    id: 123,
    set: "C",
    type: "single",
    question: "Performance Testing evaluates:",
    options: [
      "Functional correctness of the system",
      "System responsiveness, throughput, stability under load conditions",
      "Code maintainability",
      "Security vulnerabilities"
    ],
    correct: [1],
    explanation: "Performance testing measures system responsiveness, throughput, scalability, and stability under various load conditions."
  },
  {
    id: 124,
    set: "C",
    type: "single",
    question: "Load Testing specifically tests:",
    options: [
      "System behaviour at maximum defined load",
      "System behaviour beyond maximum defined load",
      "System startup time",
      "Memory leaks"
    ],
    correct: [0],
    explanation: "Load testing tests the system at the maximum expected load to verify it meets performance requirements."
  },
  {
    id: 125,
    set: "C",
    type: "single",
    question: "Stress Testing pushes the system:",
    options: [
      "To exactly the designed capacity",
      "Below normal load",
      "Beyond its maximum capacity to find breaking points",
      "To test a single transaction at a time"
    ],
    correct: [2],
    explanation: "Stress testing pushes the system beyond maximum capacity to identify how/where it breaks and to check recovery."
  },
  {
    id: 126,
    set: "C",
    type: "single",
    question: "Configuration Management in testing helps ensure:",
    options: [
      "Tests are executed in alphabetical order",
      "Reproducibility of test environments and tracking of software versions under test",
      "Testers are assigned to correct projects",
      "Test cases are written in the correct format"
    ],
    correct: [1],
    explanation: "Configuration management ensures reproducibility by tracking software versions, test environments, and all test artefacts."
  },
  {
    id: 127,
    set: "C",
    type: "single",
    question: "Test Monitoring is concerned with:",
    options: [
      "Creating test cases",
      "Gathering information and providing feedback about testing activities against the plan",
      "Executing automated tests",
      "Closing test incidents"
    ],
    correct: [1],
    explanation: "Test monitoring collects information on test progress and compares actuals to the plan to enable test control decisions."
  },
  {
    id: 128,
    set: "C",
    type: "single",
    question: "Incident Management in software testing involves:",
    options: [
      "Managing server outages",
      "Recording, classifying, investigating, and resolving test incidents (defects/anomalies)",
      "Managing tester schedules",
      "Configuring test automation tools"
    ],
    correct: [1],
    explanation: "Incident management covers the lifecycle of an incident from detection through classification, investigation, and resolution."
  },
  {
    id: 129,
    set: "C",
    type: "single",
    question: "Which V-model phase corresponds to Integration Testing?",
    options: [
      "Requirements Specification",
      "System Design (High-level Architecture)",
      "Detailed Design",
      "Unit Design"
    ],
    correct: [1],
    explanation: "In the V-model, Integration Testing corresponds to the System Architecture / High-level Design phase."
  },
  {
    id: 130,
    set: "C",
    type: "single",
    question: "Test Documentation typically includes which artefacts?",
    options: [
      "Source code and build scripts",
      "Test plan, test cases, test data, test scripts, and test reports",
      "Project budget and resource plan",
      "User manuals and training materials"
    ],
    correct: [1],
    explanation: "Test documentation includes: test plan, test cases, test data, test scripts, test execution logs, and test summary reports."
  },
  {
    id: 131,
    set: "C",
    type: "single",
    question: "Test Closure activities include:",
    options: [
      "Writing new test cases",
      "Finalising and archiving test artefacts, lessons learned, and confirming exit criteria are met",
      "Assigning testers to new projects",
      "Deploying the software to production"
    ],
    correct: [1],
    explanation: "Test closure: confirm exit criteria met, archive test artefacts, conduct lessons learned, finalise reports, and release resources."
  },
  {
    id: 132,
    set: "C",
    type: "single",
    question: "Regression Testing should be performed when:",
    options: [
      "A new project starts",
      "Code changes are made to ensure existing functionality is not broken",
      "The system is first deployed",
      "A new tester joins the team"
    ],
    correct: [1],
    explanation: "Regression testing is triggered by code changes (fixes, enhancements) to confirm previously working features still work."
  },
  {
    id: 133,
    set: "C",
    type: "single",
    question: "In the context of risk in testing, 'product risk' refers to:",
    options: [
      "Risk that the project will be over budget",
      "Risk that the product itself may fail or cause harm to users",
      "Risk that testers will leave the project",
      "Risk that requirements will change"
    ],
    correct: [1],
    explanation: "Product risk (quality risk) is the risk that a product feature may not work correctly or may cause harm/damage."
  },
  {
    id: 134,
    set: "C",
    type: "single",
    question: "Project risk in testing includes:",
    options: [
      "Functional defects in the software",
      "Security vulnerabilities",
      "Risks related to the delivery of the testing project (resources, schedule, budget)",
      "Performance issues"
    ],
    correct: [2],
    explanation: "Project risk includes risks to the testing project itself: resource availability, schedule slippage, tool procurement issues, etc."
  },
  {
    id: 135,
    set: "C",
    type: "single",
    question: "Which factor is NOT typically used to calculate risk level?",
    options: [
      "Likelihood of failure",
      "Impact of failure",
      "Colour of the UI",
      "Complexity of the component"
    ],
    correct: [2],
    explanation: "Risk = Likelihood × Impact. Complexity contributes to likelihood. UI colour is irrelevant to risk assessment."
  },
  {
    id: 136,
    set: "C",
    type: "single",
    question: "In a V-model, what does the left side represent?",
    options: [
      "Testing phases",
      "Development phases (requirements, design, implementation)",
      "Deployment phases",
      "Review phases"
    ],
    correct: [1],
    explanation: "The left side of the V-model represents the development phases; the right side represents corresponding testing phases."
  },
  {
    id: 137,
    set: "C",
    type: "single",
    question: "Which description BEST fits Acceptance Testing?",
    options: [
      "Testing by developers to verify their own code",
      "Formal testing with respect to user needs and requirements to decide on acceptance",
      "Automated testing run on a CI/CD pipeline",
      "Testing specific algorithms for correctness"
    ],
    correct: [1],
    explanation: "Acceptance testing is formal testing conducted to determine whether a system satisfies user needs and business requirements."
  },
  {
    id: 138,
    set: "C",
    type: "single",
    question: "Which of the following is a primary benefit of early testing in the SDLC?",
    options: [
      "It makes the code more complex",
      "Defects found earlier are significantly cheaper to fix",
      "It delays the release",
      "It reduces the need for documentation"
    ],
    correct: [1],
    explanation: "The cost of fixing a defect increases exponentially the later it is found. Early testing reduces overall project cost."
  },
  {
    id: 139,
    set: "C",
    type: "single",
    question: "In Agile, the concept of 'Definition of Done' (DoD) relates to testing because:",
    options: [
      "It specifies when a feature can be considered complete, typically including passing tests",
      "It defines when the project is cancelled",
      "It lists all tests that must be automated",
      "It defines the test environment setup"
    ],
    correct: [0],
    explanation: "The Definition of Done includes testing criteria — a feature is 'done' only when it meets all DoD conditions including relevant tests passing."
  },
  {
    id: 140,
    set: "C",
    type: "single",
    question: "Usability Testing evaluates:",
    options: [
      "The number of features implemented",
      "How easily and effectively users can use the system",
      "The system's response time under load",
      "Memory usage during execution"
    ],
    correct: [1],
    explanation: "Usability testing evaluates how easy, efficient, and satisfying the system is for its intended users."
  },
  {
    id: 141,
    set: "C",
    type: "single",
    question: "Security Testing aims to:",
    options: [
      "Measure system throughput",
      "Identify vulnerabilities and weaknesses that could be exploited by attackers",
      "Test user acceptance of security policies",
      "Verify that login pages look correct"
    ],
    correct: [1],
    explanation: "Security testing identifies vulnerabilities such as SQL injection, XSS, buffer overflow, and authentication weaknesses."
  },
  {
    id: 142,
    set: "C",
    type: "single",
    question: "Reliability Testing evaluates:",
    options: [
      "How secure the system is against attacks",
      "The probability that the system will perform its required functions under stated conditions for a specified period",
      "Whether the system meets all functional requirements",
      "Code quality metrics"
    ],
    correct: [1],
    explanation: "Reliability testing measures the ability of the system to perform required functions under stated conditions without failure over time."
  },
  {
    id: 143,
    set: "C",
    type: "single",
    question: "Maintainability Testing assesses:",
    options: [
      "How easy it is to change, update, or fix the software",
      "How fast the software performs",
      "Whether the software can recover from failures",
      "User interface aesthetics"
    ],
    correct: [0],
    explanation: "Maintainability is the degree to which the software can be modified to correct faults, improve performance, or adapt to changed environments."
  },
  {
    id: 144,
    set: "C",
    type: "single",
    question: "Portability Testing checks:",
    options: [
      "System performance under different network conditions",
      "Whether the software can be transferred from one environment to another",
      "Whether user data is portable",
      "Code compilation across compilers"
    ],
    correct: [1],
    explanation: "Portability testing verifies how easily software can be transferred from one hardware/software environment to another."
  },
  {
    id: 145,
    set: "C",
    type: "single",
    question: "Which ISTQB term describes the planned number and types of tests to be run in a testing phase?",
    options: [
      "Test Charter",
      "Test Suite",
      "Test Schedule",
      "Test Scope"
    ],
    correct: [1],
    explanation: "A Test Suite is a collection of test cases or test scripts that can be run as a group for a specific testing phase."
  },
  {
    id: 146,
    set: "C",
    type: "single",
    question: "In a risk-based testing approach, HIGH risk items should receive:",
    options: [
      "Less testing effort to save time",
      "More intensive testing effort",
      "Only automated testing",
      "Exploratory testing exclusively"
    ],
    correct: [1],
    explanation: "High-risk items (high likelihood × high impact) should receive proportionally more testing effort."
  },
  {
    id: 147,
    set: "C",
    type: "single",
    question: "What does 'shift-left testing' mean in modern software development?",
    options: [
      "Moving testing tasks to the left side of the Gantt chart",
      "Performing testing activities earlier in the development lifecycle",
      "Using only left-side V-model phases for testing",
      "Shifting testing responsibilities to developers permanently"
    ],
    correct: [1],
    explanation: "Shift-left means starting testing activities as early as possible in the SDLC to find defects sooner and reduce cost."
  },
  {
    id: 148,
    set: "C",
    type: "single",
    question: "A 'Test Basis' refers to:",
    options: [
      "The fundamental programming language used for test scripts",
      "The body of knowledge (requirements, design, code) used to create test cases",
      "The base version of the software under test",
      "The testing infrastructure (servers, tools)"
    ],
    correct: [1],
    explanation: "The test basis is the body of knowledge used for analysis and design of tests (e.g., requirements spec, design documents, code, risk analysis)."
  },
  {
    id: 149,
    set: "C",
    type: "single",
    question: "Which test lifecycle phase verifies that the test environment is set up correctly?",
    options: [
      "Test Planning",
      "Test Implementation and Execution",
      "Test Design",
      "Test Closure"
    ],
    correct: [1],
    explanation: "During Test Implementation and Execution, the environment is set up and verified as a prerequisite before running test cases."
  },
  {
    id: 150,
    set: "C",
    type: "multi",
    question: "Which of the following are true about the 'Spiral model'? (Select ALL that apply)",
    options: [
      "It incorporates risk analysis in each iteration",
      "It is suitable for large, high-risk projects",
      "It is identical to the waterfall model",
      "It combines elements of design and prototyping",
      "Each loop represents a phase of the process"
    ],
    correct: [0, 1, 3, 4],
    explanation: "The Spiral model: risk-driven, iterative, suitable for large/high-risk projects, combines design and prototyping. It is NOT the same as waterfall."
  },

  // ─────────────────────────────────────────────────────────────
  // SET D — Static Testing, Automation & Advanced Topics (Q 151-200)
  // ─────────────────────────────────────────────────────────────
  {
    id: 151,
    set: "D",
    type: "single",
    question: "Static Testing differs from Dynamic Testing in that:",
    options: [
      "Static testing requires the software to be executed",
      "Static testing examines work products without executing the code",
      "Static testing is always automated",
      "Static testing only applies to source code"
    ],
    correct: [1],
    explanation: "Static testing examines code, requirements, and other artefacts without executing the software (reviews, inspections, static analysis)."
  },
  {
    id: 152,
    set: "D",
    type: "single",
    question: "Which of the following is a STATIC testing technique?",
    options: [
      "Load testing",
      "Boundary value analysis",
      "Code inspection / review",
      "Regression testing"
    ],
    correct: [2],
    explanation: "Code inspection/review is a static technique — the code is examined without execution."
  },
  {
    id: 153,
    set: "D",
    type: "single",
    question: "Which formal review type is the MOST rigorous?",
    options: [
      "Walkthrough",
      "Informal review",
      "Technical review",
      "Inspection (Fagan inspection)"
    ],
    correct: [3],
    explanation: "Fagan Inspection is the most formal and rigorous review type, with defined roles, entry/exit criteria, checklists, and metrics."
  },
  {
    id: 154,
    set: "D",
    type: "single",
    question: "In a formal review, the role of the 'Moderator' is:",
    options: [
      "To write the document being reviewed",
      "To plan, facilitate, and follow up on the review",
      "To develop and execute the tests",
      "To approve the final release"
    ],
    correct: [1],
    explanation: "The Moderator leads the review meeting: plans it, ensures it follows the process, facilitates the discussion, and follows up on actions."
  },
  {
    id: 155,
    set: "D",
    type: "single",
    question: "Which of the following defects can ONLY be found by static testing, NOT by dynamic testing?",
    options: [
      "Runtime null pointer exceptions",
      "Unreachable code and dead code",
      "Performance bottlenecks",
      "User interface layout issues"
    ],
    correct: [1],
    explanation: "Unreachable/dead code cannot cause a runtime failure (it never executes) but can be found by static analysis or code review."
  },
  {
    id: 156,
    set: "D",
    type: "single",
    question: "Test Automation is MOST beneficial for:",
    options: [
      "Exploratory testing",
      "Repetitive, regression, and smoke tests that are stable",
      "One-off ad hoc testing",
      "Tests that require visual inspection"
    ],
    correct: [1],
    explanation: "Automation ROI is highest for stable, repetitive tests (regression, smoke) that are run frequently."
  },
  {
    id: 157,
    set: "D",
    type: "single",
    question: "A major disadvantage of test automation is:",
    options: [
      "It runs tests faster than humans",
      "High initial setup cost and ongoing maintenance effort",
      "It eliminates manual testing entirely",
      "It generates too many false negatives"
    ],
    correct: [1],
    explanation: "Test automation requires significant upfront investment in tool selection, scripting, and ongoing maintenance as the application evolves."
  },
  {
    id: 158,
    set: "D",
    type: "single",
    question: "Which of the following is a common TEST AUTOMATION FRAMEWORK type?",
    options: [
      "Waterfall framework",
      "Data-driven testing framework",
      "Risk-based framework",
      "Inspection framework"
    ],
    correct: [1],
    explanation: "Data-driven frameworks store test data separately from scripts, allowing the same test logic to run with multiple data sets."
  },
  {
    id: 159,
    set: "D",
    type: "single",
    question: "Keyword-driven (action word) automation frameworks:",
    options: [
      "Store all test logic in the test data files",
      "Use keywords to represent actions, making tests readable by non-technical stakeholders",
      "Execute tests based on random keywords",
      "Require testers to write in Python"
    ],
    correct: [1],
    explanation: "Keyword-driven frameworks use keywords (action words) to represent test actions, allowing non-programmers to create test cases."
  },
  {
    id: 160,
    set: "D",
    type: "single",
    question: "CI/CD (Continuous Integration/Continuous Delivery) pipelines benefit testing by:",
    options: [
      "Eliminating the need for any manual testing",
      "Automatically running tests on every code commit to detect regressions quickly",
      "Replacing acceptance testing",
      "Making test automation unnecessary"
    ],
    correct: [1],
    explanation: "CI/CD pipelines trigger automated tests on every commit, providing rapid feedback and catching regressions early."
  },
  {
    id: 161,
    set: "D",
    type: "single",
    question: "Static code analysis tools detect issues such as:",
    options: [
      "Runtime performance under load",
      "Coding standard violations, potential null dereferences, and unreachable code",
      "UI responsiveness on different devices",
      "User acceptance criteria"
    ],
    correct: [1],
    explanation: "Static analysis tools (e.g., SonarQube, PMD) detect code standard violations, potential bugs, and code smells without execution."
  },
  {
    id: 162,
    set: "D",
    type: "single",
    question: "A Walkthrough review is characterised by:",
    options: [
      "Strictly defined roles and formal defect logging",
      "The author presenting the work product to peers for feedback",
      "No participant preparation required",
      "Being the most formal review type"
    ],
    correct: [1],
    explanation: "In a walkthrough, the author leads participants through the document to gather feedback. It is less formal than an inspection."
  },
  {
    id: 163,
    set: "D",
    type: "single",
    question: "What is the primary purpose of a 'Technical Review'?",
    options: [
      "To evaluate business suitability of requirements",
      "To evaluate technical implementation decisions and find technical defects",
      "To perform user acceptance testing",
      "To assess the project budget"
    ],
    correct: [1],
    explanation: "Technical reviews evaluate technical aspects — software architecture, design decisions, technical compliance — by peers."
  },
  {
    id: 164,
    set: "D",
    type: "single",
    question: "Mutation Testing is used to:",
    options: [
      "Test software on multiple operating systems",
      "Evaluate the effectiveness of a test suite by introducing small code changes (mutants)",
      "Generate random test data",
      "Test database schema changes"
    ],
    correct: [1],
    explanation: "Mutation testing introduces small artificial changes (mutants) to the code; if the test suite catches them, it is effective. If not, the suite needs improvement."
  },
  {
    id: 165,
    set: "D",
    type: "single",
    question: "A 'mutation score' of 85% means:",
    options: [
      "85% of test cases passed",
      "85% of mutants were detected (killed) by the test suite",
      "85% code coverage was achieved",
      "The code has 85% fewer defects after testing"
    ],
    correct: [1],
    explanation: "Mutation score = (killed mutants / total mutants) × 100%. 85% means 85% of artificial defects were caught by the tests."
  },
  {
    id: 166,
    set: "D",
    type: "single",
    question: "AI and Machine Learning are increasingly used in testing for tasks such as:",
    options: [
      "Making business decisions about software deployment",
      "Test data generation, test prioritisation, and defect prediction",
      "Replacing human testers entirely",
      "Writing requirements specifications"
    ],
    correct: [1],
    explanation: "AI/ML in testing: automated test generation, prioritising tests based on change risk, defect prediction from historical data, and IO analysis."
  },
  {
    id: 167,
    set: "D",
    type: "single",
    question: "Which ISTQB testing term describes testing conducted without a formal test plan for new or unknown functionality?",
    options: [
      "Regression Testing",
      "Exploratory Testing",
      "Acceptance Testing",
      "Sanity Testing"
    ],
    correct: [1],
    explanation: "Exploratory testing is simultaneous learning, test design, and execution — no predefined script, used when the tester needs to learn about the system."
  },
  {
    id: 168,
    set: "D",
    type: "single",
    question: "Model-Based Testing (MBT) generates test cases from:",
    options: [
      "Production defect reports",
      "A formal or semi-formal model of the system under test",
      "Random input generation",
      "User manuals"
    ],
    correct: [1],
    explanation: "MBT derives test cases from models (state machines, activity diagrams, etc.) that describe the expected system behaviour."
  },
  {
    id: 169,
    set: "D",
    type: "single",
    question: "Continuous Testing in a DevOps context means:",
    options: [
      "Running tests only once a week",
      "Testing as a continuous, integrated activity throughout the entire delivery pipeline",
      "Having testers work 24 hours a day",
      "Automating only unit tests"
    ],
    correct: [1],
    explanation: "Continuous testing integrates testing at every stage of the DevOps pipeline, providing rapid feedback to developers and operations."
  },
  {
    id: 170,
    set: "D",
    type: "single",
    question: "Which of the following is a benefit of peer review / inspection?",
    options: [
      "It can only be applied to code, not requirements",
      "It finds defects earlier and cheaper than dynamic testing",
      "It replaces all dynamic testing",
      "It requires test execution environments"
    ],
    correct: [1],
    explanation: "Reviews find defects in artefacts before they are implemented, avoiding costly downstream propagation."
  },
  {
    id: 171,
    set: "D",
    type: "single",
    question: "Which tool category supports static analysis of source code?",
    options: [
      "Performance testing tools",
      "Test management tools",
      "Linters and static code analysers",
      "Load injection tools"
    ],
    correct: [2],
    explanation: "Linters and static analysers (e.g., ESLint, SonarQube, FindBugs) analyse source code without execution."
  },
  {
    id: 172,
    set: "D",
    type: "single",
    question: "In test automation, a 'Page Object Model (POM)' is a design pattern that:",
    options: [
      "Maps test pages to database tables",
      "Encapsulates UI page interactions in separate classes, improving maintainability",
      "Generates test pages automatically",
      "Models network page requests"
    ],
    correct: [1],
    explanation: "POM encapsulates UI interactions for each page in a separate class, making test scripts more readable and maintainable."
  },
  {
    id: 173,
    set: "D",
    type: "single",
    question: "Which ISTQB activity is part of Test Implementation (NOT Test Design)?",
    options: [
      "Identifying test conditions",
      "Creating test data and setting up the test environment",
      "Analysing the test basis",
      "Identifying coverage items"
    ],
    correct: [1],
    explanation: "Test implementation includes creating/obtaining test data, setting up the test environment, and preparing test scripts — design is the earlier phase."
  },
  {
    id: 174,
    set: "D",
    type: "single",
    question: "A 'Test Oracle' is:",
    options: [
      "A database used to store test results",
      "A mechanism to determine whether test output is correct (expected result source)",
      "A testing expert consultant",
      "A special type of test tool"
    ],
    correct: [1],
    explanation: "A test oracle is a source used to determine whether the actual output is correct — it can be a specification, another system, or human knowledge."
  },
  {
    id: 175,
    set: "D",
    type: "single",
    question: "Fault seeding (error seeding) is used to:",
    options: [
      "Create new features for testing",
      "Estimate the number of remaining faults by comparing detected seeded vs. natural faults",
      "Train developers to write buggy code",
      "Automate regression testing"
    ],
    correct: [1],
    explanation: "Fault seeding inserts known faults into code. The ratio of seeded faults found vs. natural faults found estimates remaining natural faults."
  },
  {
    id: 176,
    set: "D",
    type: "single",
    question: "In defect reports, 'severity' refers to:",
    options: [
      "How urgently the defect must be fixed",
      "The degree of impact the defect has on the system functionality",
      "The number of test cases affected",
      "The difficulty of fixing the defect"
    ],
    correct: [1],
    explanation: "Severity describes the impact on functionality (Critical/Major/Minor/Trivial). Priority describes urgency of fix."
  },
  {
    id: 177,
    set: "D",
    type: "single",
    question: "In defect reports, 'priority' refers to:",
    options: [
      "The impact on end users",
      "How urgently the defect needs to be addressed relative to business needs",
      "The technical complexity of the fix",
      "The number of users affected"
    ],
    correct: [1],
    explanation: "Priority is a business/scheduling decision about how urgently the defect must be addressed. High severity does not always mean high priority and vice versa."
  },
  {
    id: 178,
    set: "D",
    type: "single",
    question: "Which of the following describes 'Continuous Integration (CI)'?",
    options: [
      "Deploying code to production continuously",
      "Merging developer code changes frequently and running automated builds and tests",
      "Manual testing performed after each deployment",
      "Integration testing performed once per release"
    ],
    correct: [1],
    explanation: "CI involves frequent code merges (multiple times a day) with automated build and test execution to detect integration issues early."
  },
  {
    id: 179,
    set: "D",
    type: "single",
    question: "According to ISTQB, which of the following is NOT a review type?",
    options: [
      "Inspection",
      "Walkthrough",
      "Regression",
      "Technical Review"
    ],
    correct: [2],
    explanation: "Regression is a type of dynamic testing, not a review type. Review types: Informal Review, Walkthrough, Technical Review, Inspection."
  },
  {
    id: 180,
    set: "D",
    type: "single",
    question: "The primary aim of a 'Bug Report Template' is to:",
    options: [
      "Assign blame to developers",
      "Provide all information needed to reproduce, understand, and fix a defect",
      "Track tester productivity",
      "Generate automated test cases"
    ],
    correct: [1],
    explanation: "A bug report should include: ID, title, severity, priority, environment, steps to reproduce, expected/actual results, attachments — enabling efficient resolution."
  },
  {
    id: 181,
    set: "D",
    type: "single",
    question: "Which tool is primarily used for automated UI testing of web applications?",
    options: [
      "JUnit",
      "Selenium / Playwright",
      "JMeter",
      "SonarQube"
    ],
    correct: [1],
    explanation: "Selenium and Playwright are tools for automated browser/UI testing of web applications."
  },
  {
    id: 182,
    set: "D",
    type: "single",
    question: "JMeter is primarily used for:",
    options: [
      "Unit testing Java code",
      "Performance and load testing",
      "Static code analysis",
      "Mobile UI automation"
    ],
    correct: [1],
    explanation: "Apache JMeter is a performance and load testing tool used to simulate multiple users and measure system performance."
  },
  {
    id: 183,
    set: "D",
    type: "single",
    question: "Which testing concept refers to testing only the changed functionality and its direct dependents?",
    options: [
      "Full regression testing",
      "Selective regression testing / impact analysis",
      "Smoke testing",
      "Acceptance testing"
    ],
    correct: [1],
    explanation: "Selective regression testing uses impact analysis to test only the areas affected by a change, reducing regression test time."
  },
  {
    id: 184,
    set: "D",
    type: "single",
    question: "In ISTQB terminology, a 'Test Condition' is:",
    options: [
      "A precondition for the test environment",
      "An aspect of the test object that can be verified by one or more test cases",
      "A conditional branch in a test script",
      "A rule for test data validity"
    ],
    correct: [1],
    explanation: "A test condition is a testable aspect of a component or system (feature, transaction, quality attribute) identified from the test basis."
  },
  {
    id: 185,
    set: "D",
    type: "single",
    question: "The 'Agile Testing Quadrants' categorise tests by:",
    options: [
      "Test level and test type",
      "Whether tests support the team or critique the product, and whether they are technology-facing or business-facing",
      "Automated vs. manual and functional vs. non-functional",
      "Cost and execution time"
    ],
    correct: [1],
    explanation: "Agile Testing Quadrants (Brian Marick) organise tests on two axes: team-supporting vs. product-critique AND technology-facing vs. business-facing."
  },
  {
    id: 186,
    set: "D",
    type: "single",
    question: "API Testing verifies:",
    options: [
      "User interface appearance",
      "The interfaces between software components via direct calls to the API",
      "Database physical structure",
      "Network configuration"
    ],
    correct: [1],
    explanation: "API testing verifies the functionality, reliability, performance, and security of APIs without going through the UI."
  },
  {
    id: 187,
    set: "D",
    type: "single",
    question: "Contract Testing in microservices ensures:",
    options: [
      "Legal contracts are stored correctly",
      "Service interactions conform to agreed-upon contracts between provider and consumer",
      "All microservices share the same database schema",
      "API documentation is up to date"
    ],
    correct: [1],
    explanation: "Contract testing verifies that each microservice's API matches the contract agreed between it and its consumers, catching integration issues early."
  },
  {
    id: 188,
    set: "D",
    type: "single",
    question: "Which of the following is a key benefit of Test-Driven Development?",
    options: [
      "Eliminates the need for system testing",
      "Encourages modular, testable design and provides a safety net for refactoring",
      "Reduces the number of requirements",
      "Eliminates all performance defects"
    ],
    correct: [1],
    explanation: "TDD encourages cleaner, more modular designs (for testability), creates a comprehensive regression suite, and gives confidence when refactoring."
  },
  {
    id: 189,
    set: "D",
    type: "multi",
    question: "Which of the following are benefits of static analysis tools? (Select ALL that apply)",
    options: [
      "Early detection of potential bugs without execution",
      "Enforcement of coding standards",
      "Replacement of all manual testing",
      "Detection of security vulnerabilities (OWASP Top 10)",
      "Measurement of code complexity metrics"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Static analysis provides: early bug detection, standards enforcement, security vulnerability detection, and complexity metrics. It does NOT replace manual testing."
  },
  {
    id: 190,
    set: "D",
    type: "single",
    question: "A 'Test Harness' is:",
    options: [
      "A safety strap for hardware testing",
      "A collection of stubs, drivers, and other software required to run tests",
      "A test management tool",
      "A performance testing benchmark"
    ],
    correct: [1],
    explanation: "A test harness (test framework) is the combination of stubs, drivers, test data, and configuration needed to execute tests against the component under test."
  },
  {
    id: 191,
    set: "D",
    type: "single",
    question: "Which role in a formal inspection is responsible for collecting and recording defects found?",
    options: [
      "Moderator",
      "Author",
      "Scribe / Recorder",
      "Reviewer"
    ],
    correct: [2],
    explanation: "The Scribe (Recorder) documents defects, issues, and action items raised during the inspection meeting."
  },
  {
    id: 192,
    set: "D",
    type: "single",
    question: "End-to-End (E2E) testing validates:",
    options: [
      "Individual functions in isolation",
      "The complete workflow from start to finish across all system components",
      "Only the database layer",
      "Frontend rendering only"
    ],
    correct: [1],
    explanation: "E2E testing validates entire business workflows across all integrated components from front-end to back-end to database."
  },
  {
    id: 193,
    set: "D",
    type: "single",
    question: "Which of the following best describes 'Technical Debt' in the context of software quality and testing?",
    options: [
      "Budget overspend on testing tools",
      "The implied cost of rework caused by choosing a quick/easy solution instead of a better approach",
      "Defects deliberately introduced for training",
      "Outstanding invoices for software licenses"
    ],
    correct: [1],
    explanation: "Technical debt is the future rework cost accumulated by taking shortcuts (quick fixes, skipping tests, poor design) to meet short-term deadlines."
  },
  {
    id: 194,
    set: "D",
    type: "single",
    question: "A 'Test Summary Report' produced at test closure should include:",
    options: [
      "Source code changes made during the project",
      "Summary of testing activities, metrics (defects found/fixed), coverage achieved, and outstanding risks",
      "Project financial statements",
      "Customer invoices"
    ],
    correct: [1],
    explanation: "Test summary reports contain: testing activities, evaluation criteria, deviations, metrics (defects, coverage), residual risks, and conclusions."
  },
  {
    id: 195,
    set: "D",
    type: "single",
    question: "In formal inspection, the 'Author' role involves:",
    options: [
      "Facilitating the review meeting",
      "Presenting the work product and accepting/rejecting raised issues",
      "Writing the inspection report",
      "Assigning reviewers"
    ],
    correct: [1],
    explanation: "The author owns the work product being reviewed, presents it (in walkthroughs), answers questions, and ultimately owns defect fixes."
  },
  {
    id: 196,
    set: "D",
    type: "multi",
    question: "Which of the following are typical quality gates in a CI/CD pipeline? (Select ALL that apply)",
    options: [
      "Automated unit tests passing",
      "Code coverage threshold met",
      "Manager approval email received",
      "Static analysis checks passing",
      "Integration tests passing"
    ],
    correct: [0, 1, 3, 4],
    explanation: "Automated quality gates include: unit test pass rate, coverage thresholds, static analysis results, and integration test pass rates. Manager email approval is not a pipeline quality gate."
  },
  {
    id: 197,
    set: "D",
    type: "single",
    question: "Exploratory Testing sessions are often structured using a 'Test Charter' which specifies:",
    options: [
      "The exact test cases to execute",
      "The mission, target area, and intended approach for the session",
      "The pass/fail criteria for each test",
      "The automation tool to be used"
    ],
    correct: [1],
    explanation: "A test charter guides exploratory testing by defining: mission (what to explore), target (which area), and approach (how) without scripting every step."
  },
  {
    id: 198,
    set: "D",
    type: "single",
    question: "Which of the following correctly describes the difference between VERIFICATION and VALIDATION in ISO 9000 terms?",
    options: [
      "Verification: right product; Validation: product right",
      "Verification: product right; Validation: right product",
      "They are the same concept",
      "Verification is dynamic; Validation is static"
    ],
    correct: [1],
    explanation: "Verification = 'Am I building the product right?' (against specification). Validation = 'Am I building the right product?' (against user needs)."
  },
  {
    id: 199,
    set: "D",
    type: "single",
    question: "The Capability Maturity Model Integration (CMMI) Level 3 ('Defined') means:",
    options: [
      "Processes are ad hoc and unpredictable",
      "Processes are managed and measured",
      "Processes are well characterised, understood, and described in standards with procedures",
      "Processes are optimised with continuous improvement"
    ],
    correct: [2],
    explanation: "CMMI Level 3 (Defined): processes are well characterised and understood, defined as standards, procedures, tools, and methods for the organisation."
  },
  {
    id: 200,
    set: "D",
    type: "single",
    question: "According to Prof. Attila Kovacs / ISTQB, which combination of principles MOST accurately summarises the fundamental limits of software testing?",
    options: [
      "Testing can prove correctness; bugs are always clusterable",
      "Exhaustive testing is possible; testing always builds quality into software",
      "Testing shows presence of defects (not absence); exhaustive testing is impossible; testing is context-dependent",
      "All defects can be found with enough time; testing should be the last activity"
    ],
    correct: [2],
    explanation: "Three fundamental ISTQB principles: (1) Testing shows presence of defects, not absence; (2) Exhaustive testing is impossible; (3) Testing is context-dependent."
  }
];
