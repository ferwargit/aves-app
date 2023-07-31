from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.utils import timezone


# Create your models here.
class Province(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class User(AbstractUser):
    image = models.ImageField(default="user_default.png", upload_to="user/")
    province = models.ForeignKey(
        Province, on_delete=models.SET_NULL, null=True, blank=True
    )

    objects = UserManager()


class Avistaje(models.Model):
    id_user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    nombre_avistaje = models.CharField(max_length=50, null=False)
    fecha_creacion = models.DateTimeField(default=timezone.now)


class Contacto(models.Model):
    nombre = models.CharField(max_length=50, null=False)
    username = models.CharField(max_length=50, null=True)
    email = models.EmailField(max_length=254, null=False)
    mensaje = models.TextField(max_length=500, null=False)
    fecha_creacion = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.nombre
