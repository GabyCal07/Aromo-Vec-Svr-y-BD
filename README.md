# Aromo-Vec-Svr-y-BD
Web con paginas dinámicas y uso de BD

Esta web está armada para un barrio privado. Actualmente los vecinos intercambian información y recomiendan contactos a través de whatsapp. Generalmente las consultas se repiten porque la información queda perdida en la cantidad de mensajes existentes en el chat. La idea es centrar toda esta información en este website para que sea más sencillo consultarla.

El website está armado con páginas dinámicas. Las páginas están armadas con SSR, utilizando un motor de templates EJS. Cuenta con los partials necesarios para que la misma pueda crecer en el tiempo.
Está armada en gran parte con Bootstrap. Esto permite realizar cambios de manera sencilla.

El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone de:

 - Website en servidor (SSR)
 - REST API

**Keywords**: NodeJS, EJS, API, MongoDB, Heroku

## Levantar el proyecto
Para levantar el proyecto en forma local:

 1. Descargar los repos
 2. Instalar módulos en el **/website** y en la  **/api**

    *npm i* 

Para que funcione el sitio es necesario primero levantar el servicio en **/api**.

#### Levantar API

 1. Levantar una instancia local de MongoDB que exponga el puerto 27017. 
 2. Crear una base llamada **aromo** en MongoDB.
 3. Reemplazar en mongoose.js dentro de **src/db**, const uri='mongodb://127.0.0.1:27017/aromo'.
 4. Levantar el servicio con el comando `node index.js` dentro de **api/src**. Opcionalmente se puede usar `nodemon index.js` si se va a trabajar sobre la API. Este servicio corre en el puerto 3001.
 5. A través de Postman por ejemplo, agregar grupos, categorías y proveedores en la base **aromo** de acuerdo a los modelos correspondientes dentro de **src/model**.

#### Levantar Website

 1. Reemplazar **https://aromo-api.herokuapp.com/** por **http://localhost:3001/** en los request de categorias.js, grupos.js y proveedores.js dentro de **website/utils**

Una vez corriendo el servicio API, levantar el proyecto **website** con los comandos `node app.js` o `nodemon app.js` en la carpeta **/website**. Este proyecto corre en el puerto 3000.


Si bien la REST API cuenta con endpoints para crear, actualizar y borrar grupos, categorías y proveedores; por el momento, el website solo utiliza el endpoint para listarlos y así armar el site.


### Base de Datos

Nombre de la base: **aromo**. 
Tiene tres modelos: 
- grupos: detalla los grupos de mantenimiento, salud, mascotas y alimentos.
- categorías: detalla los rubros contenidos dentro de cada grupo 
    Ejemplos: mantenimiento/pintores, salud/urgencias, mascotas/veterinarias, etc...
- proveedores: información de los proveedores de cada categoría.


### Nota

Clasificados por el  momento no está desarrollado. Tiene una lógica diferente.



  

