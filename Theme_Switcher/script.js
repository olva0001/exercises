const themeSelector = document.getElementById('theme');


themeSelector.addEventListener('change', (e) => {
  const selectedTheme = e.target.value.toLowerCase();
  document.body.setAttribute('data-theme', selectedTheme);
});
