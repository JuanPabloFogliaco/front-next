# Front Next.js - Club cannabis medicinal.

La aplicacion tiene el objetivo de generar odenes para productos de un club de cannabis medicinal.

A nivel funcional:

Tiene un login, un register en el cual podes formar parte del club.
Una ves logeado se accede a la home, donde se pueden visualizar los productos, se pueden sumar a un "carro de compras", el carro muestra la cantidad que vas sumando, tambien se puede ver el detalle para ir sumando mas o restando para simplificar la experiencia de usuario. Luego se puede generar un pedido al cual le llega a los administradores de la app. Este pedido tambien queda registrado y en estado de espera aprobacion en una seccion de la app donde el usuario puede ver el estado de la orden.

A nivel tecnico: 
-Docker:
Se usar Docker para ejecuta un ambiente de desarrollo, si bien se puede correr el proyecto con el comando npm run dev hay que ejecutar el contenedor. Esto me permite tener la app mas controlada, las dependencias, envs, procesos en segundo plano, etc.
Tambien me ayuda a tener un ambiente muy similar al productivo, ya que en prod tambien uso Docker.

-Sesion:
La aplicacion se basa en un token, si tenes token accedes a toda la app sino quedas en la vista root donde podes logear o registrarte. Este token tiene un tiempo definido, pasado el tiempo se vence y te regresa al login, ya que la aplicacion valida en cada request que se envie al server si el token del cliente sigue siendo valido.

## Tabla de contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)

## Requisitos

- Node.js (versión 20.2.0)
- npm (versión 9.6.6)
- Docker (versión 24.0.2)

## Instalación 

1. Clona el repositorio:

        ```bash
        git clone https://github.com/JuanPabloFogliaco/front-next.git

## Configuración
1. Una ves clonado el proyecto e instalado node y npm en el equipo hay que pararse en el root del proyecto asi instalamos las dependencias con este comando:
    
        ```bash
        npm i
   
2. Con Docker ya instalado en el equipo, deberiamos poder buildear el proyecto creando una imagen, luego a esta imagen ejecutarla para que genere un contenedor, el cual va a tener todo el codigo del front, variables de entorno y dependencias instaladas gracias al archivo Dockerfile.local en el proyecto.

  2.1 Creamos la imagen y corroboramos:
  
        ```bash
        docker build -t frontend -f Dockerfile.local .
   
        docker images
    
  2.2 Si buildeo la imagen bien, entonces hay que crear el contenedor. Como queremos que para desarrollo el contenedor este a la           escucha de los cambios del proyecto que vamos haciendo tenemos que apuntar el contenedor al directorio de la app en nuestro           equipo. Parados en el root de la app ejecutamos este comando para que nos de la ruta: 
         
            ```bash
            pwd
      
  2.3 Construimos contenedor y ejecutamos: 
 
            ```bash
            docker run -p 3000:3000 -v  /home/jpi/Proyectos/front-next:/app --name frontend-app frontend
            
   
