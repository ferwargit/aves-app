from django.core.validators import FileExtensionValidator
from user.models import Avistaje
from django.db import models


class Family(models.Model):
    familia = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=2000)

    class Meta:
        verbose_name = "Familia"
        verbose_name_plural = "Familias"

    def __str__(self):
        return self.familia


class Habitat(models.Model):
    habitat = models.CharField(max_length=50)

    def __str__(self):
        return self.habitat


class TamanioForma(models.Model):
    descripcion = models.CharField(max_length=50)
    pico_aves = models.BooleanField(null = False)
    tamanio_aves = models.BooleanField(null = False)
    patas_aves = models.BooleanField(null = False)
    alas_aves = models.BooleanField(null = False)      
    cuello_aves= models.BooleanField(null = False)
    cuello_vuelo_aves= models.BooleanField(null = False)
    largo_cola_aves= models.BooleanField(null = False)
    forma_cola_aves= models.BooleanField(null = False)
    cabeza_aves = models.BooleanField(null = False)

    class Meta:
        verbose_name = "Tamaño y forma"
        verbose_name_plural = "Tamaños y formas"

    def __str__(self):
        return self.descripcion


class MovimientoEstacion(models.Model):
    temporada = models.CharField(max_length=50)

    def __str__(self):
        return self.temporada

    class Meta:
        verbose_name = "Movimiento estacional"
        verbose_name_plural = "Movimientos estacionales"

class StatusConservacion(models.Model):
    estado = models.CharField(max_length=50)

    def __str__(self):
        return self.estado

    class Meta:
        verbose_name = "Estado de conservacion"
        verbose_name_plural = "Estados de conservacion"


class Plumaje(models.Model):
    plumaje = models.CharField(max_length=50)

    def __str__(self):
        return self.plumaje


class Grupo(models.Model):
    grupo = models.CharField(max_length=50)

    def __str__(self):
        return self.grupo


class Status(models.Model):
    status = models.CharField(max_length=30)

    def __str__(self):
        return self.status


class Bird(models.Model):
    nombre = models.CharField(max_length=100)
    nombre_cientifico = models.CharField(max_length=100)
    nombre_ingles = models.CharField(max_length=100)
    familia = models.ForeignKey(
        Family, on_delete=models.SET_NULL, null=True
    )  # campo q se puede agrupar
    descripcion = models.TextField(max_length=1000)
    imagen = models.ImageField(
        upload_to="bird_images/",
        default="bird_images/default.jpg",
        validators=[FileExtensionValidator(["jpg", "jpeg", "png", "gif"])],
    )
    tamanio = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="tamanio_ave"
    )
    habitat = models.ForeignKey(Habitat, on_delete=models.SET_NULL, null=True)
    voz = models.CharField(max_length=1000)  # puede llegar a ser sonido
    audio = models.FileField(
        upload_to="bird_audios/",
        blank=True,
        validators=[
            FileExtensionValidator(allowed_extensions=["mp3", "wav"]),
        ],
        max_length=10 * 1024 * 1024,  # 10 MB
    )
    alimentacion = models.CharField(max_length=1000)
    cria = models.CharField(max_length=1000)
    movimientos_estacionales = models.ForeignKey(
        MovimientoEstacion, on_delete=models.SET_NULL, null=True
    )
    status_conservacion = models.ForeignKey(
        StatusConservacion, on_delete=models.SET_NULL, null=True
    )
    largo_pico = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="pico"
    )
    largo_patas = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="patas"
    )
    forma_alas = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="alas"
    )
    largo_cuello = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="cuello"
    )
    cuello_vuelo = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="cuello_vuelo"
    )
    largo_cola = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="largo_cola"
    )
    forma_cola = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="forma_cola"
    )
    patron_coloracion = models.ForeignKey(
        Plumaje, on_delete=models.SET_NULL, null=True
    )
    cabeza = models.ForeignKey(
        TamanioForma, on_delete=models.SET_NULL, null=True, related_name="cabeza"
    )
    grupo = models.ForeignKey(
        Grupo, on_delete=models.SET_NULL, null=True
    )
    status = models.ForeignKey(
        Status, on_delete=models.SET_NULL, null=True
    )

    def __str__(self):
        return f"{self.nombre} - {self.nombre_cientifico}"


class LineaAvistaje(models.Model):
    id_avistaje = models.ForeignKey(Avistaje, on_delete=models.CASCADE, null=False)
    id_ave = models.ForeignKey(Bird, on_delete=models.SET_NULL, null=True)
    cantidad = models.IntegerField(null=False, default=1)
    latitud = models.FloatField(null=False)
    longitud = models.FloatField(null=False)
