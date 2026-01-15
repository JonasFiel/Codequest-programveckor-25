readme.MD

# Codequest, Grupp 1

## Projekt

Namn på deltagare: Harald Gromark, Oliver Nilsson, Jonas Fielding, Erkhembayar Erdene, Baimai

Tävlar i kategori: UI/UX, Allmänt

Ett webbprojekt byggt för Codequest-programveckor. Projektet innehåller flera sidor (start, spel, profiler, inställningar) och syftar till att demonstrera interaktivitet, responsiv design och enklare "spelmekanik". Detta ska vara som en lärnings app för att lära sig programmering, insperat av samma concept som duolingo.

Oliver: Jobbat med app projektet även fortsatt jobba med design och även poster. 
Harald: har jobbat med app projektet och var även med att skapa design och brainstorming i början.
Baimai: har varit sjuk de flesta dagarna så hon hjälpa med design och 'bas' filen i projektet.
Jonas: gjorde resten av webbprojektet var även med i början för design och brainstorming. 
Erkhembayar: Hjälpte till med brainstorming i början av veckan. Annars inte varit närvarande. 

## Funktioner

- Menyer och navigering mellan sidor
- Flera olika banor / levelar som innehåller olika typer av grundlig lärnings
- Flera svårighetsgrader
- Användarprofil och inställningar
- Både svenska och engleska
- Byta färgthema

## Teknisk beskrivning

Projektet är en webbplats men även app byggd med HTML, CSS och JavaScript, medan appen är byggd med hjälp av flutterflow. 
Huvudstruktur (Webbsidan):

- `index.html` – startsida
- `play-*.html` / `play-*.js` – olika spelvyer
- `profil.html` / `profil.js` – profilsida
- `settings.js` / `language.js` – inställningar och språkval

Arkitektur: Sidorna är separata HTML-filer som delar CSS i rotmappen och i mappen `bas` finns återanvändbara stil och reset-filer. JavaScript-filer hanterar UI-interaktioner och enkel state-hantering i klienten (ingen backend).

Tekniska val:

- Responsiv CSS för mobil och desktop
- Filstruktur organiserad så att varje vy har egna `*.html`, `*.js` och `*.css` där det är relevant

Beskrivning för icke-programmerare:

Webbsidan är en samling dokument som webbläsaren laddar. JavaScript-filerna sköter knapptryckningar, navigering och små spelmoment. CSS bestämmer hur sidan ser ut. Medan HTML är grunden för hemsidan. 

## Externt producerade komponenter

Lista över externa bibliotek/verktyg som använts (om några):

## Installera och köra (juryn)

För detta projekt räcker det att man bara öppnar index.html i webbläsaren. 

## Kontakt

Projektkontakt: Harald Gromark, Oliver Nilsson, Jonas Fielding, Erkhembayar Erdene, Baimai

