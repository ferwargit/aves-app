from django import forms
from .models import Bird, LineaAvistaje,TamanioForma, Status

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
    status = forms.ModelChoiceField(queryset=Status.objects.all(), initial=0)
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
                    'placeholder': 'Ingrese nombre en ingles del ave'
                }
            ),
            'familia': forms.Select(
                attrs={
                    'class': 'form-control'
                }
            ),
        
        
            
        }
        
        

class LineaAvistajeForm(forms.ModelForm):
    activo = forms.BooleanField(initial=True)
    id_ave = forms.ModelChoiceField(queryset=Bird.objects.all(),
                                    empty_label="-- Selecciona un ave --",
                                    widget=forms.Select(attrs={'class': 'form-control'}))
    class Meta:
        model = LineaAvistaje
        fields = "__all__"
        widgets = {
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
