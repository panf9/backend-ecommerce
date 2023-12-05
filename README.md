# Proyecto Ecommerce - Backend

## Intalación de dependencias

Luego de clonar el proyecto ejecutamos el siguiente comando:

```sh
npm i
```

## Variables de entorno

Creamos la carpeta .env y dentro de ella declaramos las siguientes variables de entorno y modificamos sus valores según nuestro propios datos.

```sh
PORT=3000

DB_NAME='your-database-name'
DB_USER='postgres'
DB_PASSWORD='your-pass'
DB_HOST='localhost'
DB_PORT='5432'
DB_DRIVER='postgres'

TZ="America/Lima"

JWT_SECRET_KEY = "secret-key"
JWT_ACCESS_EXPIRE ="50m"
JWT_RECRESH_EXPIRE = "3h"
```

## Migración de la base de datos

Primeramente debemos de tener creado nuestra base de datos en postgres. Luego ejecuatmos el siguiente comando:

```sh
npx makemigration name-migration
npx runmigration
```

## Finalmente ejecutamos el proyecto:

```sh
npm run dev
```
