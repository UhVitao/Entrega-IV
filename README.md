# ONG Animal — Plataforma Web
**Entrega IV concluída** — HTML, CSS, JS, acessibilidade, minificação e pasta **/dist** pronta para deploy no **GitHub Pages**.

## 🚀 Como rodar
- Local: abra `index.html` (modo desenvolvimento) na raiz.
- Produção: use a pasta **/dist** (arquivos minificados).

## 🧱 Estrutura
```
/assets/         Imagens e ícones
/css/            Base, layout, components, pages (não minificados)
/js/             Módulos (ESM): core, ui, features, data
/dist/           HTML/CSS/JS minificados + .nojekyll + sitemap/robots
.github/         Templates de Issues/PR
```
Principais páginas: `index.html`, `projetos.html`, `cadastro.html`

## 🧩 Funcionalidades
- **Projetos**: filtros via hash (`#/projetos/adoção`, `#/projetos/castração`, `#/projetos/resgate`) e render dinâmico (templates JS).
- **Cadastro**: máscaras de CPF/CEP/Tel, validação de CPF, persistência no `localStorage` e histórico.
- **Menu responsivo** com acessibilidade (aria-expanded).
- **Preferências de tema**: **Alto contraste** e **Modo escuro** (com persistência).
- **Acessibilidade**: navegação por teclado, `skip-link`, foco visível, contraste testado (≥4.5:1), `aria` nos componentes.
- **Desempenho**: imagens otimizáveis, CSS/JS minificados em `/dist`, lazy loading pronto para uso (adicione `loading="lazy"` onde quiser).



## 🔀 Git/GitHub (Fluxo sugerido)
- Branches: `main` (prod), `develop` (integração), `feature/*`, `release/*`, `hotfix/*`.
- Commits semânticos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`.
- Use PRs com o checklist do template.

## 🛠️ Personalização de tema
- Ajuste cores em `css/base.css` (tokens: `--color-primary`, `--color-secondary`, `--color-accent`, `--orange-*`).
- Fundos suaves: `--bg-muted` (atual verde claro `#f1f8f4`).

---
Atualizado em 2025-10-30.
