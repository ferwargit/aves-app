# aves-app

## 1) Para hacer correr este programa es necesario tener instalado pipenv

En MAC
$ brew install pipenv

En Ubuntu 17.10
$ sudo apt install software-properties-common python-software-properties
$ sudo add-apt-repository ppa:pypa/ppa
$ sudo apt update
$ sudo apt install pipenv

En WINDOWS
$ pip install pipenv

## 2) Si ya fue instalado, hay que crear el entorno virtual(idealmente dentro del directorio del programa):

$ pipenv install

## 3) Con el entorno virtual creado, ejecutamos

$ pipenv run python app.py
