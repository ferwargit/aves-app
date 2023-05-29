from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager, PermissionsMixin

# Create your models here.
class Province(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self) -> str:
        return self.name
    
class User(AbstractUser):
    image = models.ImageField(default='user_default.png', upload_to='user/')
    province = models.ForeignKey(Province, on_delete=models.SET_NULL, null=True, blank=True)

    objects = UserManager()