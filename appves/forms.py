from django import forms
from .models import Bird, LineaAvistaje,TamanioForma

class BirdForm(forms.ModelForm):
    tamanio = forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(tamanio_aves=True))
    largo_pico = forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(pico_aves=True))
    largo_patas = forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(patas_aves=True))
    forma_alas= forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(alas_aves=True))
    largo_cuello= forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(cuello_aves=True))
    cuello_vuelo= forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(cuello_vuelo_aves=True))
    largo_cola= forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(largo_cola_aves=True))
    forma_cola= forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(forma_cola_aves=True))
    cabeza= forms.ModelChoiceField(
            queryset=TamanioForma.objects.filter(cabeza_aves=True))
    class Meta:
        model = Bird
        fields = "__all__"
        widgets = {
            'nombre': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Ingrese nombre de ave'
                }
            ),
            'nombre_cientifico': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Ingrese nombre cientifico del ave'
                }
            ),
            'nombre_ingles': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Ingrese nombre en ingrles del ave'
                }
            ),
            'familia': forms.Select(
                attrs={
                    'class': 'form-control'
                }
            ),
        
        
            
        }
        
        

class LineaAvistajeForm(forms.ModelForm):
    class Meta:
        model = LineaAvistaje
        fields = "__all__"
        widgets = {
            'id_ave': forms.Select(
                attrs={
                    'class': 'form-control'
                }
            ),
            'cantidad': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Ingrese cantidad avistada'
                }
            ),
            'latitud' : forms.TextInput(
                attrs={
                    'class': 'form-control'
                }
            ),
            'longitud' : forms.TextInput(
                attrs={
                    'class': 'form-control'
                }
            ),
        }
