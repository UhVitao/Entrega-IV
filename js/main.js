
function initThemeToggles(){
  const root = document.documentElement;
  const btnContrast = document.getElementById('toggle-contrast');
  const btnDark = document.getElementById('toggle-dark');

  const saved = localStorage.getItem('theme-prefs');
  if (saved){
    const { contrast, dark } = JSON.parse(saved);
    if (contrast) root.setAttribute('data-theme', 'contrast');
    if (dark) root.setAttribute('data-dark', '1');
    if (btnContrast) btnContrast.setAttribute('aria-pressed', contrast ? 'true' : 'false');
    if (btnDark) btnDark.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }

  function save(){
    localStorage.setItem('theme-prefs', JSON.stringify({
      contrast: root.getAttribute('data-theme') === 'contrast',
      dark: root.hasAttribute('data-dark')
    }));
  }

  if (btnContrast){
    btnContrast.addEventListener('click', () => {
      const isOn = root.getAttribute('data-theme') === 'contrast';
      if (isOn) root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', 'contrast');
      btnContrast.setAttribute('aria-pressed', (!isOn).toString());
      save();
    });
  }
  if (btnDark){
    btnDark.addEventListener('click', () => {
      const isOn = root.hasAttribute('data-dark');
      if (isOn) root.removeAttribute('data-dark');
      else root.setAttribute('data-dark', '1');
      btnDark.setAttribute('aria-pressed', (!isOn).toString());
      save();
    });
  }
}

import { initMenuA11y } from './ui/menu.js';
import { initCadastroForm } from './features/form.js';
import { initProjects } from './features/projects.js';
import { initRouter } from './core/router.js';

function onReady(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

onReady(() => {
  initThemeToggles();
  initMenuA11y();
  initRouter();

  const path = location.pathname;
  if (path.endsWith('cadastro.html')) {
    initCadastroForm();
  }
  if (path.endsWith('projetos.html')) {
    initProjects();
  }
});
