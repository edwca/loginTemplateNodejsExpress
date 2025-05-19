
## Relaciones del proyecto
````bash
[server.js]
    |
    v
[src/app.js]  <--- (configura el servidor Express, dice cómo manejar las rutas y archivos)
    |
    v
[src/routes/index.js]  <--- (agrupa todas las rutas del servidor)
    |
    v
[src/routes/authRoutes.js]  <--- (aquí está la ruta que recibe el login)
    |
    v
[Función que valida usuario y contraseña (falta logica real con db)]
    |
    v
 (responde si el login es correcto o no)

----------------------------------------------

[public/login.html]  <--- (archivo HTML que ves en el navegador)
    |
    v
[Formulario con usuario y contraseña]
    |
    v
[Botón "Ingresar"] --- al hacer clic ---> 
    |
    v
[Envía datos a la ruta /api/login]  (que está manejada por authRoutes.js)
````