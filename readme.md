
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

### Docker
````bash
docker build -t node-image : Construimos la imagen a partir del dockerfile
docker run -p 3000:3000 node-image : Este comando expone la app en una url desde el host
````

### Docker compose
````bash
-d : quita el verbose de la terminal
docker-compose --env-file .env.qa up -d  ## Ejecutar las pruebas con env desde .env.qa
docker-compose down (bajar los contenedores, pero no perdiendo los volumenes)
````

### Comun
````bash
npm run docker:clean ## Elimina las imagenes y contenedores creados
````
