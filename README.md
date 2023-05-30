# AppVes

### Como crear entorno virtual para levantar la webapp localmente (usamos venv pero puede ser cualquiera)

En Windows

> $ python -m venv venv
>
> $ .\venv\Scripts\activate

---

### Instalar las dependencias necesarias desde requirements.txt

- Instalacion desde cero

> $ pip -r requirements.txt

- Actualizar en el venv existente

> $ pip -r requirements.txt -I

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

> $ python manage.py dumpdata [app].[class model] > [nombre archivo].json

Cargar datos a tabla province desde json

> $ python manage.py loaddata province.json
