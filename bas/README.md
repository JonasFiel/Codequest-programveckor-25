readme.MD

# Codequest

## Projekt

Namn på deltagare: Harald Gromark, Oliver Nilsson, Jonas Fielding, Erkhembayar Erdene, Baimai

Tävlar i kategori: UI/UX, Allmänt


Ett webbprojekt byggt för Codequest-programveckor. Projektet innehåller flera sidor (start, spel, profiler, inställningar) och syftar till att demonstrera interaktivitet, responsiv design och enklare spelmekanik.

## Funktioner

- Menyer och navigering mellan sidor
- Flera spel-/spårningssidor (t.ex. slott, skog)
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

Webbsidan är en samling dokument som webbläsaren laddar. JavaScript-filerna sköter knapptryckningar, navigering och små spelmoment; CSS bestämmer hur sidan ser ut.

## Externt producerade komponenter

Lista över externa bibliotek/verktyg som använts (om några):

## Installera och köra (juryn)

Eftersom projektet är en statisk webbplats räcker det att öppna `index.html` i en webbläsare.

## Förslag på vad ni kan fylla i

- Exakta namn på deltagare
- Vilken kategori ni tävlar i
- Kortare punktlista över vad varje person gjorde
- Eventuella externa resurser eller bilder ni lagt till

## Kontakt

Projektkontakt: Harald Gromark, Oliver Nilsson, Jonas Fielding, Erkhembayar Erdene, Baimai

---

Tack! Granska och fyll i de markerade platserna ovan innan inlämning.

