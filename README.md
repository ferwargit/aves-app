# AppVes

- Crear entorno virtual para levantar la webapp localmente (usamos venv)

En Windows

> py -m venv venv

> ...\venv\Scripts\activate

- Instalacion desde cero de las dependencias del proyecto

> pip i -r requirements.txt

- Actualizar en el venv existente

> pip i -r requirements.txt -I

- Ejecutar migraciones de la app

> py manage.py makemigrations

> py manage.py migrate

## Comandos Django

- Crear superusuario para el manejo del Admin

> py manage.py createsuperuser

Levantar la webapp

> py manage.py runserver

Crear json con datos para cargar en tablas

> $ python manage.py dumpdata --indent 2 [app].[class model] > [nombre archivo].json

Cargar de datos json

> py manage.py loaddata province.json status.json familias.json grupos.json habitat.json movimientos_estacionales.json plumajes.json tamanios_y_formas.json birds.json