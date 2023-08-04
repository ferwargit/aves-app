# AppVes

- Crear entorno virtual para levantar la webapp localmente (usamos venv)

En Windows

> py -m venv venv

> ...\venv\Scripts\activate

- Instalacion desde cero de las dependencias del proyecto

> pip install -r requirements.txt

- Actualizar en el venv existente

> pip install -r requirements.txt -I

- Ejecutar migraciones de la app

> py manage.py makemigrations

> py manage.py migrate

## Comandos Django

- Crear superusuario para el manejo del Admin

> py manage.py createsuperuser

Levantar la webapp

> py manage.py runserver

Crear json con datos para cargar en tablas

> py manage.py dumpdata --indent 2 [app].[class model] > [nombre archivo].json
> EJEMPLO: py -Xutf8 manage.py dumpdata --indent 2 appves.bird > birds.json

Cargar de datos json

> py manage.py loaddata province.json status.json familias.json grupos.json habitat.json movimientos_estacionales.json plumajes.json tamanios_y_formas.json estados.json birds.json

# Página de consulta a la API - Mapa de densidades

https://www.gbif.org/developer/maps