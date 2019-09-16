# Veton
Proyecto final para Davinci. Aplicación de gestión para veterinarias y usuarios de mascotas.

## Tecnologías
- React
- Redux
- Lumen (laravel)
- Lando / Docker
- pm2 
- MariaDb

## Comandos para correr la aplicación
Se utilizo docker para empaquetar todo el contenido de la aplicación  utilizando pm2 para correr react como servicio y lando para el backend en php, apache y mariadb. 

Solo se debe correr el comando:
- lando start (la primera vez demorara ya que se debe instalar todas las dependencias)

Cuando se termina de trabajar se debe correr el comando:
- lando stop (para que no quede ningun puerto abierto ni recursos corriendo de fondo)

Para reiniciar el contenedor usar el comando:
- lando restart

Y tambien se han expuesto comandos de npm ,pm2 y php artisan para utilizarlos en el proyecto agregar la palabra lando delante por ej:
- lando npm install ....

Si se desea exponer otros comandos por favor consultar con el equipo para configurar.

En el caso de querer utilizar php artisan solo ingresar por cd back a la carpeta y utilizar ahi mismo los comandos requeridos expuestos por lando por ej:
- lando artisan make:migration

## Otros
Para hacer un rebuild de toda la app y reinstalar dependencias utilizamos el comando:
- lando rebuild

Para destruir el contenedor y volverlo a generar utilizar los comandos:
-lando destroy
-lando start

## back
- generar el archivo local .env y copiar exactamente las lineas de .env.example este archivo no esta versionado cada usuario tendra su configuración local con la base de .env.example.



