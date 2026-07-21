(function initializePortalTheme() {
  var storageKey = 'harper-portal-theme';
  var storedTheme = null;

  try {
    var candidate = window.localStorage.getItem(storageKey);
    if (candidate === 'light' || candidate === 'dark') {
      storedTheme = candidate;
    }
  } catch {
    storedTheme = null;
  }

  var systemPrefersDark = false;
  try {
    systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    systemPrefersDark = false;
  }

  var theme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  var root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.style.colorScheme = theme;

  var themeColor = document.querySelector(
    'meta[name="theme-color"][data-portal-theme-color]',
  );
  if (themeColor) {
    themeColor.setAttribute('content', theme === 'dark' ? '#0f1c23' : '#faf6f1');
  }
})();
