# Tienda Online de Juegos

Sitio web para una tienda de videojuegos, desarrollado como proyecto final con roles de programador y tester.

Repositorio: https://github.com/pJulianV/Pagina_Juegos_html_css

## Lo que desarrollé

### Como Programador

**Estructura HTML**: Creé 3 páginas:
- Inicio: Introducción a la tienda con 9 productos destacados
- Galería: 6 productos con filtros por categoría
- Contacto: Formulario para comunicarse

**Diseño Responsive**: Usé CSS Flexbox y Grid para que se vea bien en móvil y escritorio. El sitio se adapta automáticamente según el tamaño de pantalla.

**Interactividad**: 
- Filtros en la galería para ver productos por categoría (Todos, Acción, Estrategia, Indie)
- Validación del formulario para asegurar que el email es obligatorio y tiene formato correcto

### Como Tester

**Pruebas Manuales**: Probé el sitio de forma manual en TEST_REPORT.md:
- Responsive en diferentes dispositivos
- Filtros funcionan correctamente
- Validación del email funciona
- HTML está bien estructurado
- Es accesible para lectores de pantalla

**Pruebas Automáticas**: Usé Jest + jsdom para 12 tests automatizados:
- 4 tests para validar que los filtros funcionan
- 8 tests para validar la validación del email
- Resultado: 12/12 tests pasando

## Cómo usar

### Para ejecutar solo las pruebas

```
npm install
npm test
```

### Para ejecutar el servidor con envío de emails

1. Configura el archivo `.env` con tus datos de Gmail
2. Ejecuta:
```
npm start
```
3. Abre http://localhost:3000/contacto.html y prueba el formulario

Para detalles sobre cómo configurar el email, ver SETUP_EMAIL.md

## Entregables en GitHub

- Código HTML, CSS y JavaScript funcional
- 12 tests automáticos en tests/site.test.js
- Reporte de pruebas manuales en TEST_REPORT.md
- Documentación técnica en CAMBIOS_Y_SOLUCIONES.md

## Cumplimiento

Todo lo requerido está completo y funcionando:
- 3 páginas HTML - Cumple
- Diseño responsive con Flexbox/Grid - Cumple
- Filtros funcionales - Cumple
- Validación de email - Cumple
- Pruebas manuales documentadas - Cumple
- 12 tests automáticos pasando - Cumple
- Código en GitHub - Cumple

100% de requisitos completados.
