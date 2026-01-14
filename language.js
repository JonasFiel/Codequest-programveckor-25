(function () {
  const KEY = 'lang';
  const translations = {
    sv: {
      "nav.world":"Världskarta","nav.profile":"Profil","nav.settings":"Inställningar",
      "map.title":"Världskarta","map.subtitle":"Utforska olika områden, gå från vänster till höger!",
      "modal.start":"Starta","modal.cancel":"Avbryt","modal.description":"Tryck Start för att börja.",
      "area.castle":"Slott","area.castle.desc":"Ett gammalt storslaget slott där riddare och mysterier väntar bakom tunga portarna.",
      "area.village":"By","area.village.desc":"En livlig by med marknadsstånd och lokalbefolkning som kan erbjuda uppdrag.",
      "area.forest":"Skog","area.forest.desc":"En tät, dimmig skog full av stigar, vilda djur och gömda skatter.",
      "area.cave":"Grotta","area.cave.desc":"En mörk grotta där ekon och skatter gömmer sig bland stenarna.",
      "area.lake":"Sjön","area.lake.desc":"En fridfull sjö — perfekt för fiske, men vattnet kan dölja gamla hemligheter.",
      "area.bigarea":"Torn med drake","area.bigarea.desc":"Ett torn med draklegender — farligt men fullt av rikedomar för de modiga.",
      "area.tower":"Torn","area.tower.desc":"Ett vakttorn som vakar över landskapet, hem för vakter och gamla legender.",
      "area.fields":"Fält","area.fields.desc":"Vidsträckta fält med öppna ytor — bra för träning och enkla möten.",
      "area.mine":"Gruva","area.mine.desc":"En gruva rik på malm men fylld av instabila gångar och gömda faror.",
      "area.swamp":"Sumpmark","area.swamp.desc":"En kvävande sumpmark där marken slinker och dimman döljer faror.",
      "area.desert":"Öken","area.desert.desc":"En obarmhärtig öken — hetta under dagen och köld om natten; vatten är dyrbart.",
      "area.island":"Ö","area.island.desc":"En avlägsen ö med hemligheter på stranden och mystiska ruiner.",
      "area.ruins":"Ruiner","area.ruins.desc":"Förfallna ruiner fyllda av gåtor, gamla fällor och glömda skatter.",
      "area.port":"Hamnen","area.port.desc":"En livlig hamn där sjöhandlare och rykten möts — alltid något på gång.",
      "index.title":"Code Quest — Logga in",
      "index.subtitle":"Ditt äventyr in i tech‑världen börjar här!",
      "index.login":"Logga in",
      "index.username":"Användarnamn",
      "index.password":"Lösenord",
      "index.remember":"Kom ihåg mig",
      "index.forgot":"Glömt lösenordet?",
      "index.loginButton":"Logga in",
      "index.signupLink":"Skapa ett konto",
      "index.or":"Eller",
      "signup.title":"Skapa ett konto",
      "signup.create":"Skapa konto",
      "signup.username":"Användarnamn",
      "signup.email":"E‑post",
      "signup.password":"Lösenord",
      "signup.confirm":"Bekräfta lösenord",
      "signup.success":"Konto skapat! Loggar in…",
      "signup.passwordMismatch":"Lösenorden matchar inte.",
      "settings.accountHeading":"Konto",
      "settings.accountNote":"Klicka på Logga ut för att återgå till inloggning.",
      "settings.logout":"Logga ut",
      "settings.logoutConfirm":"Är du säker att du vill logga ut?",
      "settings.loggingOut":"Loggar ut…",
      "settings.loggedOut":"Utloggad",
      "settings.restartTour":"Starta rundtur",
      "question.title":"Välj svårighetsgrad",
      "question.subtitle":"Välj din svårighetsgrad!",
      "question.selectPrompt":"Välj en svårighetsgrad",
      "question.easy":"Lätt",
      "question.medium":"Normal",
      "question.hard":"Svår",
      "question.selected":"Vald",
      "question.redirect":"Startar… Omdirigerar till kartan.",
      "question.startNow":"Starta",
      "tour.prev":"Föregående","tour.next":"Nästa","tour.skip":"Hoppa över","tour.finish":"Klar",
      "tour.nav.title":"Navigera","tour.nav.desc":"Här hittar du navigeringen, tema- och språkval.",
      "tour.map.title":"Utforska kartan","tour.map.desc":"Klicka ett område för att se detaljer och starta uppdrag.",
      "tour.map.first.title":"Första området","tour.map.first.desc":"Börja här för en enkel introduktion.",
      "tour.profile.avatar.title":"Din avatar","tour.profile.avatar.desc":"Här kan du byta avatar och hantera profilinfo.",
      "tour.profile.xp.title":"Erfarenhet","tour.profile.xp.desc":"XP fylls när du klarar uppdrag och ger nivåer.",
      // lägg till under sv:
      "play.title":"Spela","play.score":"Poäng","play.correct":"Rätt!","play.wrong":"Fel",
      "play.finish":"Slutfört","play.xpGained":"XP erhölls","play.backToMap":"Tillbaka till kartan","play.confirmExit":"Vill du avsluta spelet?",
      "play.noQuestions":"Inga frågor för detta område",
    },
    en: {
      "nav.world":"World Map","nav.profile":"Profile","nav.settings":"Settings",
      "map.title":"World Map","map.subtitle":"Explore different regions — move from left to right!",
      "modal.start":"Start","modal.cancel":"Cancel","modal.description":"Press Start to begin.",
      "area.castle":"Castle","area.castle.desc":"An ancient stronghold where knights and mysteries lurk behind heavy gates.",
      "area.village":"Village","area.village.desc":"A bustling village with market stalls and locals who may offer quests.",
      "area.forest":"Forest","area.forest.desc":"A dense, misty forest filled with winding paths, wild beasts and hidden treasures.",
      "area.cave":"Cave","area.cave.desc":"A dark cave where echoes and loot hide among the rocks.",
      "area.lake":"Lake","area.lake.desc":"A tranquil lake — perfect for fishing, though its waters may hide old secrets.",
      "area.bigarea":"Dragon Tower","area.bigarea.desc":"A tower of dragon legends — perilous yet rich with treasures for the bold.",
      "area.tower":"Tower","area.tower.desc":"A watchtower overlooking the land, home to vigilant guards and old tales.",
      "area.fields":"Fields","area.fields.desc":"Wide fields of crops and livestock — light dangers, good for training.",
      "area.mine":"Mine","area.mine.desc":"An old mine rich in ore but riddled with collapsed tunnels and creatures.",
      "area.swamp":"Swamp","area.swamp.desc":"A choking swamp where the ground may swallow you and fog hides mysteries.",
      "area.desert":"Desert","area.desert.desc":"Vast desert with scorching days and cold nights — water is a precious commodity.",
      "area.island":"Island","area.island.desc":"A small island with secrets on its shores and ruins inland.",
      "area.ruins":"Ruins","area.ruins.desc":"Ruined remains of a bygone era — full of puzzles, traps and forgotten treasures.",
      "area.port":"Port","area.port.desc":"A busy port where ships arrive with goods, rumors and sea-borne dangers.",
      "index.title":"Code Quest — Sign in",
      "index.subtitle":"Your adventure into the tech world starts here!",
      "index.login":"Sign in",
      "index.username":"Username",
      "index.password":"Password",
      "index.remember":"Remember me",
      "index.forgot":"Forgot password?",
      "index.loginButton":"Sign in",
      "index.signupLink":"Create account",
      "index.or":"Or",
      "signup.title":"Create an account",
      "signup.create":"Create account",
      "signup.username":"Username",
      "signup.email":"Email",
      "signup.password":"Password",
      "signup.confirm":"Confirm password",
      "signup.success":"Account created! Signing in…",
      "signup.passwordMismatch":"Passwords do not match.",
      "settings.accountHeading":"Account",
      "settings.accountNote":"Click Log out to return to the sign-in screen.",
      "settings.logout":"Log out",
      "settings.logoutConfirm":"Are you sure you want to log out?",
      "settings.loggingOut":"Signing out…",
      "settings.loggedOut":"Signed out",
      "question.title":"Choose difficulty",
      "question.subtitle":"Choose your difficulty!",
      "question.selectPrompt":"Choose a difficulty",
      "question.easy":"Easy",
      "question.medium":"Medium",
      "question.hard":"Hard",
      "question.selected":"Selected",
      "question.redirect":"Starting… redirecting to the map.",
      "question.startNow":"Start",
      "tour.prev":"Previous","tour.next":"Next","tour.skip":"Skip","tour.finish":"Done",
      "tour.nav.title":"Navigate","tour.nav.desc":"Here you find the navigation, theme and language options.",
      "tour.map.title":"Explore the map","tour.map.desc":"Click an area to see details and start quests.",
      "tour.map.first.title":"First area","tour.map.first.desc":"Start here for an easy introduction.",
      "tour.profile.avatar.title":"Your avatar","tour.profile.avatar.desc":"Here you can change your avatar and manage profile info.",
      "tour.profile.xp.title":"Experience","tour.profile.xp.desc":"XP fills as you complete quests and grants levels.",
      // och under en:
      "play.title":"Play","play.score":"Score","play.correct":"Correct!","play.wrong":"Wrong",
      "play.finish":"Finished","play.xpGained":"XP gained","play.backToMap":"Back to map","play.confirmExit":"Do you want to exit the game?",
      "play.noQuestions":"No questions for this area",
    }
  };

  function savedOrDefault() {
    try { const s = localStorage.getItem(KEY); if (s) return s; } catch (e) {}
    return (navigator.language && navigator.language.startsWith('sv')) ? 'sv' : 'en';
  }

  function apply(lang) {
    const dict = translations[lang] || translations.sv;
    document.documentElement.lang = lang;
    // translate elements with data-i18n (supports data-i18n-attr for setting attributes)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr') || 'text';
      const txt = dict[key];
      if (typeof txt === 'undefined') return;
      if (attr === 'html') el.innerHTML = txt;
      else if (attr === 'text') el.textContent = txt;
      else el.setAttribute(attr, txt);
    });
    // translate option elements
    document.querySelectorAll('option[data-i18n]').forEach(opt => {
      const k = opt.getAttribute('data-i18n'); const t = dict[k]; if (t) opt.textContent = t;
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent('i18n:languagechange', { detail: { lang } }));
  }

  window.i18n = { setLanguage: apply, getLanguage: () => document.documentElement.lang || savedOrDefault(), translations };
  apply(savedOrDefault());

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang-select]').forEach(sel => {
      sel.value = window.i18n.getLanguage();
      sel.addEventListener('change', () => window.i18n.setLanguage(sel.value));
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', () => window.i18n.setLanguage(window.i18n.getLanguage() === 'sv' ? 'en' : 'sv'));
    });
  });
})();