readme.MD

# Codequest

## Projekt

Namn på deltagare: Harald Gromark, Oliver Nilsson, Jonas Fielding, Erkhembayar Erdene, en till

Tävlar i kategori: UI/UX, Allmänt


Ett webbprojekt byggt för Codequest-programveckor. Projektet innehåller flera sidor (start, spel, profiler, inställningar) och syftar till att demonstrera interaktivitet, responsiv design och enklare spelmekanik.

## Funktioner

- Menyer och navigering mellan sidor
- Flera spel-/spårningssidor (t.ex. slott, skog)
- Användarprofil och inställningar
- Flerspråkigt stöd (grundläggande)

## Teknisk beskrivning

Projektet är en statisk webbplats byggd med HTML, CSS och JavaScript. Huvudstruktur:

- `index.html` – startsida
- `play-*.html` / `play-*.js` – olika spelvyer
- `profil.html` / `profil.js` – profilsida
- `settings.js` / `language.js` – inställningar och språkval

Arkitektur: Sidorna är separata HTML-filer som delar CSS i rotmappen och i mappen `bas` finns återanvändbara stil- och reset-filer. JavaScript-filer hanterar UI-interaktioner och enkel state-hantering i klienten (ingen backend).

Tekniska val:

- Vanilj-JavaScript för enkelhet och kompatibilitet
- Responsiv CSS för mobil och desktop
- Filstruktur organiserad så att varje vy har egna `*.html`, `*.js` och `*.css` där det är relevant

Beskrivning för icke-programmerare:

Webbsidan är en samling dokument som webbläsaren laddar. JavaScript-filerna sköter knapptryckningar, navigering och små spelmoment; CSS bestämmer hur sidan ser ut.

## Externt producerade komponenter

Lista över externa bibliotek/verktyg som använts (om några):

- Inga externa ramverk används (ingen React/Vue). Om ni har använt externa scripts eller assets, ange dem här med namn och länk.

## Installera och köra (juryn)

Eftersom projektet är en statisk webbplats räcker det att öppna `index.html` i en webbläsare. För en bättre lokal serverupplevelse, kör från projektroten:

Windows / macOS / Linux (Python 3):

```bash
cd ..
python -m http.server 8000
# och öppna http://localhost:8000/ i webbläsaren
```

Eller använd VS Code Live Server-tillägget och öppna `index.html`.

Se också viktiga filer i projektroten: index.html, index.js, och mappar för varje vy.

## Förslag på vad ni kan fylla i

- Exakta namn på deltagare
- Vilken kategori ni tävlar i
- Kortare punktlista över vad varje person gjorde
- Eventuella externa resurser eller bilder ni lagt till

## Kontakt

Projektkontakt: Ange namn och e-post eller GitHub-användarnamn om ni vill.

---

Tack! Granska och fyll i de markerade platserna ovan innan inlämning.

