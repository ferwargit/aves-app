from django.db import models

# Create your models here.
class Location(models.Model):
    nameBird = models.CharField(max_length=100, verbose_name="Bird-Name")
    ecorregion= models.CharField(max_length=100, verbose_name="Ecorregion")
    latitude = models.FloatField(verbose_name="Latitude")
    longitude = models.FloatField(verbose_name="Longitude")

    class Meta:
        verbose_name = "Location"
        verbose_name_plural = "Locations"
        ordering = ['nameBird']

    def __str__(self):
        return self.nameBird