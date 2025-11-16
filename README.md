# Tienda de Juegos - Proyecto

Este repositorio contiene un sitio estático de ejemplo para un proyecto de clase (Programador + Tester).

Estructura:
- `index.html` — Inicio
- `galeria.html` — Galería con filtros
- `contacto.html` — Formulario de contacto con validación
- `style.css`, `fonts.css` — estilos
- `script.js` — lógica de filtros y validación
- `tests/site.test.js` — pruebas automáticas (Jest + jsdom)
- `.github/workflows/ci.yml` — workflow para ejecutar tests en GitHub Actions

Requisitos para ejecutar tests localmente:
- Node.js (recomiendo LTS >=18). Descarga: https://nodejs.org/

Comandos:
```powershell
cd 'C:\Users\Usuario\Desktop\Julian\Workspace\Pagina de juegos_html_css'
npm install
npm test
```

Si no puedes ejecutar npm localmente, el workflow de GitHub Actions (`.github/workflows/ci.yml`) ejecutará los tests automáticamente en cada push o pull request hacia `main`.

Pruebas manuales sugeridas:
- Abrir `galeria.html` y usar los botones de filtro (Todos / Acción / Estrategia / Indie).
- Abrir `contacto.html` y probar enviar con/ sin correo.
- Verificar responsive con DevTools (grid pasa a 1 columna en móvil, menú colapsa).

Reporte de pruebas manuales: `TEST_REPORT.md`.
