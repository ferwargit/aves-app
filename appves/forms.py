from django import forms
from .models import Bird

class BirdForm(forms.ModelForm):
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
