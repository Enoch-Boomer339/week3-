
  const questions = [
    {
      q: "Which HTML tag is used to define the largest heading?",
      options: ["&lt;h6&gt;", "&lt;heading&gt;", "&lt;h1&gt;", "&lt;head&gt;"],
      answer: 2
    },
    {
      q: "Which CSS property changes the text color?",
      options: ["font-color", "text-color", "color", "foreground"],
      answer: 2
    },
    {
      q: "What does 'CSS' stand for?",
      options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Styling System", "Computer Style Sheets"],
      answer: 1
    },
    {
      q: "Which JavaScript method adds an item to the end of an array?",
      options: ["push()", "append()", "add()", "insert()"],
      answer: 0
    },
    {
      q: "In HTML, which attribute specifies an alternate text for an image?",
      options: ["title", "src", "alt", "caption"],
      answer: 2
    },
    {
      q: "Which CSS value makes an element take up the full width of its container?",
      options: ["display: inline", "display: block", "display: flex", "display: span"],
      answer: 1
    },
    {
      q: "How do you write a comment in JavaScript?",
      options: ["&lt;!-- comment --&gt;", "** comment **", "# comment", "// comment"],
      answer: 3
    },
    {
      q: "Which HTML element is used to link an external CSS file?",
      options: ["&lt;style&gt;", "&lt;css&gt;", "&lt;link&gt;", "&lt;script&gt;"],
      answer: 2
    },
    {
      q: "What is the correct JavaScript syntax to change the content of an element with id='demo'?",
      options: [
        "document.getElement('demo').innerHTML = 'Hi'",
        "document.getElementById('demo').innerHTML = 'Hi'",
        "#demo.innerHTML = 'Hi'",
        "demo.change('Hi')"
      ],
      answer: 1
    },
    {
      q: "Which CSS property controls the space between elements' borders and their content?",
      options: ["margin", "spacing", "padding", "gap"],
      answer: 2
    }
  ];

  const LABELS = ['A', 'B', 'C', 'D'];
  let current = 0, score = 0, answered = false;

  function startQuiz() {
    show('quizScreen');
    renderQuestion();
  }

  function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  function renderQuestion() {
    answered = false;
    const q = questions[current];
    document.getElementById('qNum').textContent = current + 1;
    document.getElementById('scoreDisplay').textContent = score;
    document.getElementById('progressFill').style.width = `${(current / questions.length) * 100}%`;
    document.getElementById('questionText').textContent = q.q;
    document.getElementById('feedbackMsg').textContent = '';
    document.getElementById('feedbackMsg').className = 'feedback-msg';

    const grid = document.getElementById('optionsGrid');
    grid.innerHTML = '';

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="opt-label">${LABELS[i]}</span>${opt}`;
      btn.onclick = () => selectAnswer(i, btn);
      grid.appendChild(btn);
    });
  }

  function selectAnswer(index, btn) {
    if (answered) return;
    answered = true;

    const q = questions[current];
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    const fb = document.getElementById('feedbackMsg');

    if (index === q.answer) {
      score++;
      btn.classList.add('correct');
      fb.textContent = '✓ Correct!';
      fb.className = 'feedback-msg correct';
    } else {
      btn.classList.add('wrong');
      allBtns[q.answer].classList.add('correct');
      fb.textContent = '✗ Not quite — the correct answer is highlighted.';
      fb.className = 'feedback-msg wrong';
    }

    document.getElementById('scoreDisplay').textContent = score;

    setTimeout(() => {
      current++;
      if (current < questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    }, 1400);
  }

  function showResult() {
    show('resultScreen');
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const wrong = total - score;

    document.getElementById('statCorrect').textContent = score;
    document.getElementById('statWrong').textContent = wrong;
    document.getElementById('statPct').textContent = pct + '%';
    document.getElementById('ringLabel').textContent = pct + '%';

    const titles = [
      [0,  39,  "Keep Practicing!", "Every expert was once a beginner. Try again!"],
      [40, 69,  "Good Effort!",     "You're getting there — a bit more practice and you'll ace it."],
      [70, 89,  "Well Done!",       "Solid knowledge! Just a couple of gaps to fill."],
      [90, 100, "Outstanding! 🎉",  "You really know your HTML, CSS, and JS!"]
    ];
    const [,, title, sub] = titles.find(([lo, hi]) => pct >= lo && pct <= hi);
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultSubtitle').textContent = sub;

    // animate ring
    const circumference = 345;
    const offset = circumference - (pct / 100) * circumference;
    const ring = document.getElementById('ringFill');
    ring.style.setProperty('--offset', offset);
    requestAnimationFrame(() => requestAnimationFrame(() => ring.classList.add('animate')));
  }