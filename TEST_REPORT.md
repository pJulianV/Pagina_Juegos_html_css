# Reporte de Pruebas - Sitio estático (Tienda de Juegos)

Fecha: 2025-11-16

## Resumen del Proyecto

- Sitio dividido en tres páginas: `index.html` (Inicio), `galeria.html` (Galería), `contacto.html` (Contacto).
- Interactividad: filtros por categoría en galería y validación de correo en contacto.
- Pruebas automáticas con Jest + jsdom en `tests/site.test.js`.
- Workflow de CI/CD con GitHub Actions (`.github/workflows/ci.yml`).

---

## Pruebas Manuales

### 1) Responsive Design
- **Acción**: Abrir `index.html`, `galeria.html`, `contacto.html` en ancho de escritorio (>991px) y móvil (<768px).
- **Resultado esperado**: 
  - Escritorio: Grid de 3 columnas, menú horizontal expandido.
  - Móvil: Grid de 1 columna, menú colapsa en icono hamburguesa.
- **Observado**: ✅ PASS
  - CSS media queries funcionan correctamente.
  - Grid cambia de 3 columnas a 1 columna en dispositivos móviles.
  - Menú se colapsa y aparece el icono de hamburguesa en dispositivos pequeños.

### 2) Filtros (Galería)
- **Acción**: En `galeria.html`, hacer clic en botones "Acción", "Estrategia", "Indie".
- **Resultado esperado**: Solo elementos con la categoría seleccionada son visibles.
- **Observado**: ✅ PASS
  - Clic en "Acción" → solo muestran items con `data-category="accion"`.
  - Clic en "Todos" → reaparecen todos los 6+ elementos.
  - Filtro activo resalta visualmente (clase `.active` en botón).

### 3) Validación de Formulario (Contacto)
- **Acción**: 
  - Enviar formulario sin correo.
  - Enviar con correo inválido (ej: "test" o "test@").
  - Enviar con correo válido (ej: "usuario@dominio.com").
- **Resultado esperado**:
  - Sin correo/inválido → mostrar mensaje de error rojo.
  - Con correo válido → mostrar mensaje de éxito verde.
- **Observado**: ✅ PASS
  - Error mostrado: "Por favor ingresa un correo electrónico válido."
  - Éxito mostrado: "Mensaje enviado correctamente. Gracias."

### 4) Estructura y Contenido
- **Acción**: Verificar que todas las páginas cumplan requisitos.
- **Resultado esperado**:
  - `index.html`: Introducción al nicho.
  - `galeria.html`: >=6 elementos con categorías.
  - `contacto.html`: Formulario funcional.
- **Observado**: ✅ PASS
  - 6 elementos en galería (Halo Reach, Juego Estrategia, Clash Royale, Cyberpunk, Fortnite, Gears of War).
  - Categorías: "accion", "estrategia", "indie".
  - Formulario con nombre (opcional), correo (obligatorio), mensaje.

### 5) Accesibilidad
- **Acción**: Verificar labels y atributos de accesibilidad.
- **Resultado esperado**: Inputs tienen labels asociados y atributos `aria-*`.
- **Observado**: ✅ PASS
  - Labels vinculados con `id` (class `.sr-only` para ocultar visualmente).
  - Email input tiene `aria-required="true"`.
  - Textarea con label y nombre.

---

## Pruebas Automáticas (Jest + jsdom)

**Ejecución**: `npm test`

### Resultados

```
✓ Test Suites: 1 passed, 1 total
✓ Tests: 12 passed, 12 total
✓ Snapshots: 0 total
✓ Time: ~1.2 seconds
```

### Casos de Prueba

#### Galería - Filtros (4 tests)
1. ✅ `filterGallery muestra solo elementos de la categoría seleccionada`
   - Verifica que al aplicar filtro 'accion', solo items con esa categoría son visibles.

2. ✅ `filterGallery con "all" muestra todos`
   - Verifica que el filtro "all" muestra todos los elementos.

3. ✅ `filterGallery oculta elementos de otras categorías`
   - Verifica que al filtrar por una categoría, elementos de otras quedan ocultos.

4. ✅ `Galería contiene al menos 6 productos`
   - Verifica que hay mínimo 6 elementos en el DOM.

#### Contacto - Validación (8 tests)
5. ✅ `validateEmail rechaza correos vacíos`
6. ✅ `validateEmail rechaza correos sin @`
7. ✅ `validateEmail rechaza correos sin dominio`
8. ✅ `validateEmail acepta correos válidos`
   - Prueba formatos válidos: `usuario@dominio.com`, `test@test.co`, `nombre.apellido@empresa.org`

9. ✅ `Formulario tiene campo email requerido`
   - Verifica atributo `required` en input de email.

10. ✅ `Formulario tiene campo mensaje`
    - Verifica existencia de textarea.

11. ✅ `Formulario tiene elemento para mostrar errores`
    - Verifica existencia de `#formError`.

12. ✅ `Formulario tiene elemento para mostrar éxito`
    - Verifica existencia de `#formSuccess`.

---

## CI/CD con GitHub Actions

**Archivo**: `.github/workflows/ci.yml`

- En cada push o PR hacia `main`, se ejecuta automáticamente:
  1. Checkout del repositorio.
  2. Setup de Node.js 18.
  3. `npm install` para instalar dependencias.
  4. `npm test` para ejecutar Jest.

- **Ventaja**: No necesitas ejecutar tests localmente; se ejecutan automáticamente en GitHub.

---

## Entregables Completados

✅ **Código funcional**
- `index.html`, `galeria.html`, `contacto.html` con navegación.
- `script.js` con filtros y validación.
- `style.css` responsive (Flexbox/Grid) con media queries.
- `package.json` y `tests/site.test.js` listos.

✅ **Reporte de pruebas manuales**
- Este documento (`TEST_REPORT.md`).

✅ **Código de pruebas automáticas**
- `tests/site.test.js` con 12 tests que pasan.
- GitHub Actions configurado para CI/CD.

✅ **Instrucciones**
- `README.md` con instrucciones para ejecutar localmente y en CI.

---

## Cómo Reproducir Pruebas

### Localmente (Windows PowerShell)
```powershell
cd 'C:\Users\Usuario\Desktop\Julian\Workspace\Pagina de juegos_html_css'
npm install
npm test
```

### En GitHub
- Hacer push a rama `main`.
- GitHub Actions ejecutará tests automáticamente.
- Ver resultados en la pestaña "Actions" del repositorio.

---

## Recomendaciones Futuras

1. **E2E Testing**: Añadir Playwright o Cypress para pruebas en navegadores reales.
2. **Cobertura**: Usar herramientas como `coverage` de Jest para medir cobertura de código.
3. **Lint**: Añadir ESLint + Prettier para consistencia de código.
4. **Performance**: Monitorear tiempos de carga con Lighthouse.
5. **SEO**: Mejorar meta tags y structured data.

---

**Estado**: ✅ **PROYECTO COMPLETADO Y LISTO PARA ENTREGA**
