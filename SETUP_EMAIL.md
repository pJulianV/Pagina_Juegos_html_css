# Guía: Configurar envío de emails

## Pasos para hacer que el formulario envíe emails

### 1. Instalar dependencias

```
npm install
```

### 2. Configurar archivo .env

Edita el archivo `.env` con tus datos:

```
PORT=3000
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASSWORD=tu_contraseña_app
EMAIL_TO=correo_donde_quieres_recibir@ejemplo.com
NODE_ENV=development
```

### 3. Obtener contraseña de Gmail (Importante)

Si usas Gmail, **no uses tu contraseña normal**. Sigue estos pasos:

1. Ve a https://myaccount.google.com/
2. Seguridad > Contraseñas de aplicación
3. Selecciona "Mail" y "Windows" (o tu dispositivo)
4. Google te dará una contraseña de 16 caracteres
5. Copia esa contraseña en EMAIL_PASSWORD del .env

### 4. Ejecutar el servidor

```
npm start
```

El servidor correrá en http://localhost:3000

### 5. Probar el formulario

1. Abre http://localhost:3000/contacto.html en el navegador
2. Completa el formulario
3. Si todo está bien, recibirás un email en la dirección configurada en EMAIL_TO

## Notas

- El archivo `.env` **no se sube a GitHub** (está en .gitignore)
- Solo funciona localmente o en un servidor con Node.js
- Para producción, necesitarías alojar el servidor en Heroku, Render, DigitalOcean, etc.

## Solucionar problemas

Si no llegan los emails:
1. Verifica que .env esté bien configurado
2. Revisa la consola del servidor (npm start) por mensajes de error
3. Permite acceso a apps menos seguras en tu cuenta Gmail
4. Verifica que la contraseña de app sea correcta
