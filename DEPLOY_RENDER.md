# Desplegar en Render

Sigue estos pasos para poner tu sitio en internet con Render:

## Paso 1: Crear cuenta en Render

1. Ve a https://render.com
2. Haz clic en "Sign Up"
3. Usa tu cuenta de GitHub

## Paso 2: Conectar tu repositorio

1. En Render, haz clic en "New" > "Web Service"
2. Selecciona "Deploy existing GitHub repository"
3. Busca y selecciona "Pagina_Juegos_html_css"
4. Render detectará automáticamente que es Node.js

## Paso 3: Configurar variables de entorno

En la sección "Environment", agrega estas variables:

```
EMAIL_USER=julianvargastrb@gmail.com
EMAIL_PASSWORD=tu_contraseña_de_app_gmail
EMAIL_TO=julianvargastrb@gmail.com
NODE_ENV=production
```

**Importante**: Usar contraseña de app de Gmail, no tu contraseña normal.

## Paso 4: Desplegar

1. Haz clic en "Deploy Web Service"
2. Espera a que termine (verás logs en pantalla)
3. Cuando esté listo, Render te dará una URL como: `https://pagina-juegos.onrender.com`

## Paso 5: Probar

1. Abre `https://tu-url.onrender.com/contacto.html`
2. Prueba el formulario
3. Deberías recibir un email en tu cuenta de Gmail

## Notas importantes

- El plan gratuito de Render es limitado
- Tu sitio puede tardar unos segundos en responder si está inactivo
- El .env nunca se sube a GitHub (está en .gitignore)
- Las variables se configuran en el panel de Render

## Si algo falla

1. Ve al dashboard de Render
2. Abre tu servicio
3. En la pestaña "Logs" verás los errores
4. Verifica que EMAIL_PASSWORD sea una contraseña de app de Gmail
