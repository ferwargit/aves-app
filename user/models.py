from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager, PermissionsMixin

# Create your models here.
class User(AbstractUser):
    image = models.ImageField(default='user_default.png', upload_to='user/')
    province = models.CharField(max_length=150, null=True, blank=True)

    objects = UserManager()