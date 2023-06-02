from django.db import models

# Create your models here.
class Family(models.Model):
    familia = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Familia'
        verbose_name_plural = 'Familias'

    def __str__(self):
        return self.familia

class Habitat(models.Model):
    habitat = models.CharField(max_length=50)

    def __str__(self):
        return self.habitat

class TamanioForma(models.Model):
    tamanio = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Tamaño y forma'
        verbose_name_plural = 'Tamaños y formas'

    def __str__(self):
        return self.tamanio    

class MovimientoEstacion(models.Model):
    temporada = models.CharField(max_length=50)

    def __str__(self):
        return self.temporada
    
    class Meta:
        verbose_name = 'Movimiento estacional'
        verbose_name_plural = 'Movimientos estacionales'

class Plumaje(models.Model):
    plumaje = models.CharField(max_length=50)
    
    def __str__(self):
        return self.plumaje
    
class Grupo(models.Model):
    grupo = models.CharField(max_length=50)

    def __str__(self):
        return self.grupo
    
class Bird(models.Model):
    nombre = models.CharField(max_length=100)
    nombre_cientifico = models.CharField(max_length=100)
    nombre_ingles = models.CharField(max_length=100)
    familia = models.ForeignKey(Family, on_delete=models.SET_NULL, null=True) # campo q se puede agrupar
    descripcion = models.TextField(max_length=1000)
    tamanio = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='tamanio_ave')
    habitat = models.ForeignKey(Habitat, on_delete=models.SET_NULL, null=True)
    voz = models.CharField(max_length=50) # puede llegar a ser sonido
    alimentacion = models.CharField(max_length=100)
    cria = models.CharField(max_length=100)
    movimientos_estacionales = models.ForeignKey(MovimientoEstacion, on_delete=models.SET_NULL, null=True)
    status_conservacion = models.CharField(max_length=100)
    largo_pico = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='pico')
    largo_patas = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='patas')
    forma_alas = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='alas')
    largo_cuello = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='cuello')
    cuello_vuelo = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='cuello_vuelo')
    largo_cola = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='largo_cola')
    forma_cola = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='forma_cola')
    patron_coloracion = models.ForeignKey(Plumaje, on_delete=models.SET_NULL, null=True)
    cabeza = models.ForeignKey(TamanioForma, on_delete=models.SET_NULL, null=True, related_name='cabeza')
    grupo = models.ForeignKey(Grupo, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'{self.nombre} - {self.nombre_cientifico}'
