# Veton

Proyecto final para Davinci. Aplicación de gestión para veterinarias y usuarios de mascotas.

## Tecnologías

- React
- Redux
- Laravel
- Homestead
- Vagrant
- MariaDb

## Comandos para correr la aplicación

Esta aplicación esta corriendo bajo la virtualización en vagrant con una caja homestead.

- Para poder utilizar la api se debe tener instalado previamente alguna app de virtualización como
  HyperV, Virtual Box(recomendado), Vmware.
- Luego instalar vagrant.
- En la carpeta back correr composer install y luego hacer un vagrant up
- vagrant global-status para ver las cajas levantadas
- vagrant destroy [name|id] para destruir una caja requiere confirmación y debe estar apagada.
- vagrant halt [name|id] para apagar la virtual
- vagrant list-commands para más comandos
  En todos los casos se puede usar -f o --force para forzar.

## front

- Hacer npm install sobre la carpeta front y luego npm start
- Recordar que antes de comitear hacer un npm run lin:fix y luego un lint.

## back

- generar el archivo local .env y copiar exactamente las lineas de .env.example este archivo no esta versionado cada usuario tendra su configuración local con la base de .env.example.
