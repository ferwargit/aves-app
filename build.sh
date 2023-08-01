#!/usr/bin/env bash
# exit on error
set -o errexit

# poetry install

python manage.py collectstatic --no-input
python manage.py migrate
python manage.py loaddata province.json status.json familias.json grupos.json habitat.json movimientos_estacionales.json plumajes.json tamanios_y_formas.json estados.json birds.json