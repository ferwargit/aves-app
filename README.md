# aves-app

### 1) Para levantar la webapp localmente crear un entorno virtual (usamos venv pero puede ser cualquiera)

En WINDOWS

> py -m venv venv
>
> .\venv\Scripts\activate

### 2) Instalar las dependencias necesarias del requirements

> pip install -r requirements.txt -I

El comando `pip install -r requirements.txt -I` incluye la opción ``-I`` o ``--ignore-installed``. Esta opción indica a **pip** que ignore los paquetes ya instalados en tu entorno y reinstale todas las dependencias enumeradas en el archivo **requirements.txt**, incluso si ya se encuentran instaladas con la versión especificada. Esto puede ser útil en situaciones en las que necesitas reinstalar paquetes para solucionar problemas de dependencias o si quieres asegurarte de que todos los paquetes estén en las versiones especificadas en **requirements.txt**.

### 3) Con el entorno virtual creado, levantamos el servidor

> $ python manage.py runserver

Verificamos el funcionamiento de la webapp.  
Detenemos el servidor con `CTRL+C` y ejecutamos los siguientes comandos:

#### Ejecutar migraciones de la app
> py manage.py makemigrations
>
Este comando crea nuevas migraciones basadas en los cambios que hayas realizado en tus modelos. Es necesario ejecutar este comando cada vez que realices cambios en tus modelos para generar las migraciones correspondientes.
>
> py manage.py migrate
>
 Este comando aplica las migraciones pendientes a la base de datos. Después de crear las migraciones con makemigrations, debes ejecutar este comando para aplicar los cambios en la base de datos.
> py manage.py loaddata province.json
>
Este comando carga los datos del archivo JSON province.json en la base de datos. Este paso se realiza después de aplicar las migraciones, ya que es necesario que las tablas y las relaciones en la base de datos estén correctamente configuradas antes de cargar los datos.