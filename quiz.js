// ...new file...
(function () {
  // bank of bilingual questions (sv + en)
  const BANK = {
    castle: {
      easy: [
        { q: { sv: "Vad står HTML för?", en: "What does HTML stand for?" }, choices: [{ sv: "Hyper Text Markup Language", en: "Hyper Text Markup Language" }, { sv: "Home Tool Markup Language", en: "Home Tool Markup Language" }], a: 0 },
        { q: { sv: "Vilken tag används för en rubrik?", en: "Which tag is used for a heading?" }, choices: [{ sv: "<h1>", en: "<h1>" }, { sv: "<p>", en: "<p>" }], a: 0 }
      ],
      medium: [
        { q: { sv: "Vilken tag används för en länk?", en: "Which tag is used for a link?" }, choices: [{ sv: "<a>", en: "<a>" }, { sv: "<link>", en: "<link>" }], a: 0 },
        { q: { sv: "Vilket attribut anger destinationen för en länk?", en: "Which attribute sets the destination of a link?" }, choices: [{ sv: "href", en: "href" }, { sv: "src", en: "src" }], a: 0 }
      ],
      hard: [
        { q: { sv: "Hur skriver man en kommentar i HTML?", en: "How do you write a comment in HTML?" }, choices: [{ sv: "<!-- kommentar -->", en: "<!-- comment -->" }, { sv: "/* kommentar */", en: "/* comment */" }], a: 0 },
        { q: { sv: "Vilken tag används för en punktlista?", en: "Which tag is used for an unordered list?" }, choices: [{ sv: "<ul>", en: "<ul>" }, { sv: "<ol>", en: "<ol>" }], a: 0 }
      ]
    },

    fields: { // CSS basics
      easy: [
        { q: { sv: "Vilken CSS-egenskap ändrar textfärg?", en: "Which CSS property changes text color?" }, choices: [{ sv: "color", en: "color" }, { sv: "font-color", en: "font-color" }], a: 0 },
        { q: { sv: "Hur väljer du element med klassen 'card'?", en: "How do you select elements with class 'card'?" }, choices: [{ sv: ".card", en: ".card" }, { sv: "#card", en: "#card" }], a: 0 }
      ],
      medium: [
        { q: { sv: "Vad gör 'display: flex'?", en: "What does 'display: flex' do?" }, choices: [{ sv: "Aktiverar flexbox layout", en: "Enables flexbox layout" }, { sv: "Gör element dolda", en: "Hides elements" }], a: 0 },
        { q: { sv: "Hur deklarerar du en CSS-variabel?", en: "How do you declare a CSS variable?" }, choices: [{ sv: "--my-color: #fff;", en: "--my-color: #fff;" }, { sv: "var(--my-color)", en: "var(--my-color)" }], a: 0 }
      ],
      hard: [
        { q: { sv: "Vilken property styr avstånd mellan rader i grid/flex?", en: "Which property controls spacing between items in grid/flex?" }, choices: [{ sv: "gap", en: "gap" }, { sv: "margin", en: "margin" }], a: 0 },
        { q: { sv: "Vad gör 'flex-direction'?", en: "What does 'flex-direction' control?" }, choices: [{ sv: "Riktning för flex-children", en: "Direction for flex children" }, { sv: "FONTSIZE", en: "FONT SIZE" }], a: 0 }
      ]
    },

    forest: { // JavaScript basics
      easy: [
        { q: { sv: "Hur deklarerar du en konstant i JavaScript?", en: "How do you declare a constant in JavaScript?" }, choices: [{ sv: "const", en: "const" }, { sv: "var", en: "var" }], a: 0 },
        { q: { sv: "Hur definierar du en funktion?", en: "How do you define a function?" }, choices: [{ sv: "function namn() {}", en: "function name() {}" }, { sv: "def namn() {}", en: "def name() {}" }], a: 0 }
      ],
      medium: [
        { q: { sv: "Vilken metod lägger till en händelselyssnare?", en: "Which method adds an event listener?" }, choices: [{ sv: "addEventListener", en: "addEventListener" }, { sv: "attachEvent", en: "attachEvent" }], a: 0 },
        { q: { sv: "Vad returnerar Math.max(1,2,3)?", en: "What does Math.max(1,2,3) return?" }, choices: [{ sv: "3", en: "3" }, { sv: "1", en: "1" }], a: 0 }
      ],
      hard: [
        { q: { sv: "Vad används async/await till?", en: "What are async/await used for?" }, choices: [{ sv: "Hantera asynkrona operationer", en: "Handle async operations" }, { sv: "Synkron kö", en: "Synchronous queue" }], a: 0 },
        { q: { sv: "Vad är 'closure' i JavaScript?", en: "What is a closure in JavaScript?" }, choices: [{ sv: "En funktion som behåller tillgång till yttre variabler", en: "A function that retains access to outer variables" }, { sv: "En typ av loop", en: "A type of loop" }], a: 0 }
      ]
    },

    cave: { // Algorithms / logic
      easy: [
        { q: { sv: "Vad är binärsökningens komplexitet i stora O?", en: "What is binary search complexity in Big O?" }, choices: [{ sv: "O(log n)", en: "O(log n)" }, { sv: "O(n)", en: "O(n)" }], a: 0 },
        { q: { sv: "Vad gör en loop?", en: "What does a loop do?" }, choices: [{ sv: "Upprepar kod", en: "Repeats code" }, { sv: "Stoppar programmet", en: "Stops the program" }], a: 0 }
      ],
      medium: [
        { q: { sv: "Vad är en rekursiv funktion?", en: "What is a recursive function?" }, choices: [{ sv: "En funktion som anropar sig själv", en: "A function that calls itself" }, { sv: "En funktion utan retur", en: "A function without return" }], a: 0 },
        { q: { sv: "Vad betyder 'greedy algorithm'?", en: "What is a greedy algorithm?" }, choices: [{ sv: "Väljer lokalt bästa val", en: "Chooses the locally best" }, { sv: "Garanterar globalt optimum", en: "Guarantees global optimum" }], a: 0 }
      ],
      hard: [
        { q: { sv: "Vad är 'dynamic programming' i korthet?", en: "What is dynamic programming in brief?" }, choices: [{ sv: "Dela problem i delproblem och memoization", en: "Split into subproblems and memoize" }, { sv: "Randomisering", en: "Randomization" }], a: 0 },
        { q: { sv: "Vad indikerar O(n^2)?", en: "What does O(n^2) indicate?" }, choices: [{ sv: "Dubbel loop / kvadratisk komplexitet", en: "Double loop / quadratic complexity" }, { sv: "Logaritmisk", en: "Logarithmic" }], a: 0 }
      ]
    },

    lake: { // Accessibility
      easy: [
        { q: { sv: "Varför använda alt-attr på bilder?", en: "Why add alt attribute to images?" }, choices: [{ sv: "För skärmläsare", en: "For screen readers" }, { sv: "För layout", en: "For layout" }], a: 0 },
        { q: { sv: "Vad förbättrar läsbarheten?", en: "What improves readability?" }, choices: [{ sv: "Kontrast", en: "Contrast" }, { sv: "Animationshastighet", en: "Animation speed" }], a: 0 }
      ],
      medium: [
        { q: { sv: "Vad gör aria-label?", en: "What does aria-label do?" }, choices: [{ sv: "Ger en tillgänglig text för element", en: "Provides accessible label for an element" }, { sv: "Lägger till CSS-klass", en: "Adds CSS class" }], a: 0 },
        { q: { sv: "Vad betyder tabindex='-1'?", en: "What does tabindex='-1' mean?" }, choices: [{ sv: "Kan fokuseras programatiskt, inte via tabb", en: "Focusable programmatically but not via tab" }, { sv: "Fullt tabbbar", en: "Fully tabbable" }], a: 0 }
      ],
      hard: [
        { q: { sv: "Vad står WCAG för?", en: "What does WCAG stand for?" }, choices: [{ sv: "Web Content Accessibility Guidelines", en: "Web Content Accessibility Guidelines" }, { sv: "Web Code and Graphics", en: "Web Code and Graphics" }], a: 0 },
        { q: { sv: "Varför använda semantisk HTML?", en: "Why use semantic HTML?" }, choices: [{ sv: "För bättre tillgänglighet och struktur", en: "For better accessibility and structure" }, { sv: "För att göra sidan snabbare", en: "To make page faster" }], a: 0 }
      ]
    },

    tower: { // DOM & events
      easy: [
        { q: { sv: "Hur hämtar du ett element med id 'app'?", en: "How do you get an element with id 'app'?" }, choices: [{ sv: "document.getElementById('app')", en: "document.getElementById('app')" }, { sv: "document.query('.app')", en: "document.query('.app')" }], a: 0 },
        { q: { sv: "Hur ändrar du textinnehåll i ett element?", en: "How do you change text content of an element?" }, choices: [{ sv: "element.textContent = 'hej'", en: "element.textContent = 'hi'" }, { sv: "element.html = 'hej'", en: "element.html = 'hi'" }], a: 0 }
      ],
      medium: [
        { q: { sv: "Vad gör event.preventDefault()?", en: "What does event.preventDefault() do?" }, choices: [{ sv: "Förhindrar standardbeteende", en: "Prevents default behavior" }, { sv: "Stoppar alla events", en: "Stops all events" }], a: 0 },
        { q: { sv: "Hur skapar du ett nytt element i DOM?", en: "How do you create a new element in the DOM?" }, choices: [{ sv: "document.createElement('div')", en: "document.createElement('div')" }, { sv: "Element('div')", en: "Element('div')" }], a: 0 }
      ],
      hard: [
        { q: { sv: "Vad är event delegation?", en: "What is event delegation?" }, choices: [{ sv: "Lyssna på förälder istället för varje barn", en: "Listen on parent instead of each child" }, { sv: "Att dela events", en: "To split events" }], a: 0 },
        { q: { sv: "Vad gör stopPropagation()?", en: "What does stopPropagation() do?" }, choices: [{ sv: "Stoppar bubbla för event", en: "Stops event bubbling" }, { sv: "Förhindrar default", en: "Prevents default" }], a: 0 }
      ]
    },

    village: { // Git basics
      easy: [
        { q: { sv: "Vilket kommando initierar ett git-repo?", en: "Which command initializes a git repo?" }, choices: [{ sv: "git init", en: "git init" }, { sv: "git start", en: "git start" }], a: 0 },
        { q: { sv: "Hur skapar du en ny branch?", en: "How do you create a new branch?" }, choices: [{ sv: "git branch namn", en: "git branch name" }, { sv: "git new branch", en: "git new branch" }], a: 0 }
      ],
      medium: [
        { q: { sv: "Hur lägger du till förändringar för commit?", en: "How do you stage changes for commit?" }, choices: [{ sv: "git add", en: "git add" }, { sv: "git push", en: "git push" }], a: 0 },
        { q: { sv: "Hur hämtar du fjärrändringar?", en: "How to fetch remote changes?" }, choices: [{ sv: "git pull", en: "git pull" }, { sv: "git copy", en: "git copy" }], a: 0 }
      ],
      hard: [
        { q: { sv: "Vad gör git rebase?", en: "What does git rebase do?" }, choices: [{ sv: "Flyttar och omskriver commits", en: "Reapplies commits on top of another base" }, { sv: "Tar bort repo", en: "Deletes the repo" }], a: 0 }
      ]
    },

    mine: { // Debugging / performance
      easy: [
        { q: { sv: "Vad är första steget i debugging?", en: "What's the first step in debugging?" }, choices: [{ sv: "Observera och reproducera felet", en: "Observe and reproduce the bug" }, { sv: "Radera filer", en: "Delete files" }], a: 0 }
      ],
      medium: [
        { q: { sv: "Vilket verktyg används för att profila prestanda i webbläsare?", en: "Which tool profiles performance in browsers?" }, choices: [{ sv: "DevTools profiler", en: "DevTools profiler" }, { sv: "Paintbrush", en: "Paintbrush" }], a: 0 }
      ],
      hard: [
        { q: { sv: "Vad betyder minnesläcka (memory leak)?", en: "What does memory leak mean?" }, choices: [{ sv: "Minnet frigörs inte korrekt", en: "Memory not freed correctly" }, { sv: "Extra minne allokeras ok", en: "Extra memory allocated OK" }], a: 0 }
      ]
    }
  };

  function shuffle(arr) { return arr.slice().sort(() => Math.random() - 0.5); }
  function getDifficulty() { return localStorage.getItem('difficulty') || 'medium'; }
  function getMultiplier() { const d = getDifficulty(); return d === 'hard' ? 3 : d === 'medium' ? 2 : 1; }

  function getQuestions(area, count = 6) {
    const diff = getDifficulty();
    const pool = (BANK[area] && (BANK[area][diff] || BANK[area].medium)) || [];
    return shuffle(pool).slice(0, Math.min(count, pool.length));
  }

  function textOf(txtObj) {
    const lang = window.i18n?.getLanguage?.() || 'sv';
    if (typeof txtObj === 'string') return txtObj;
    return (txtObj && txtObj[lang]) || txtObj?.sv || '';
  }

  window.quiz = { getQuestions, getMultiplier, getDifficulty, textOf, BANK };
})();