# AppVes

### Como crear entorno virtual para levantar la webapp localmente (usamos venv pero puede ser cualquiera)

En Windows

> $ python -m venv venv
>
> $ .\venv\Scripts\activate

---

### Instalar las dependencias necesarias desde requirements.txt

- Instalacion desde cero

> $ pip install -r requirements.txt

- Actualizar en el venv existente

> $ pip install -r requirements.txt -I

---

## Comandos Django

Crear superusuario para el manejo del Admin

> $ python manage.py createsuperuser

Levantar la webapp

> $ python manage.py runserver

Ejecutar migraciones de la app

> $ python manage.py makemigrations
>
> $ python manage.py migrate

Crear json con datos para cargar en tablas

> $ python manage.py dumpdata --indent 2 [app].[class model] > [nombre archivo].json

Cargar datos a tabla province desde json

> $ python manage.py loaddata province.json

# Carga de todos los DATOS de todos los json JUNTOS hasta el momento (10-06-23)

py manage.py loaddata_ascii appves/fixtures/grupos.json appves/fixtures/habitat.json appves/fixtures/movimientos_estacionales.json appves/fixtures/tamanios_y_formas.json appves/fixtures/familias.json appves/fixtures/plumajes.json appves/fixtures/birds.json user/fixtures/province.json
