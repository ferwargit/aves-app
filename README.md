# aves-app

### 1) Para levantar la webapp localmente crear un entorno virtual (usamos venv pero puede ser cualquiera)

En WINDOWS

> $ python -m venv venv
>
> $ .\venv\Scripts\activate

### 2) Instalar las dependencias necesarias del requirements

> $ pip -r requirements.txt

### 3) Con el entorno virtual creado, levantamos el servidor

> $ python manage.py runserver

#### Ejecutar migraciones de la app
> python manage.py makemigrations
> python manage.py migrate
> python manage.py loaddata province.json
