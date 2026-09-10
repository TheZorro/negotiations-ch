(function () {
  var root = document.documentElement, buttons = document.querySelectorAll('[data-set-lang]');
  function setLang(l) {
    root.setAttribute('data-lang', l); root.setAttribute('lang', l);
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.setLang === l ? 'true' : 'false'); });
    try { history.replaceState(null, '', (l === 'de' ? location.pathname : '?lang=en') + location.hash); } catch (e) {}
  }
  var p = new URLSearchParams(location.search).get('lang');
  setLang(p === 'en' || (!p && (navigator.language || '').slice(0, 2) === 'en') ? 'en' : 'de');
  buttons.forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.setLang); }); });
})();
