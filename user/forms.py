from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm

from .models import Avistaje, Province

class UserLoginForm(forms.Form):
    username = forms.CharField(
        max_length=150,
        widget=forms.TextInput(
            attrs={
                'id': 'username',
                'type': 'text',
                'class': 'form-control'
            }
        )
    )

    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                'id': 'password1',
                'type': 'password',
                'class': 'form-control'
            }
        )
    )
    

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(
        required=True,
        widget=forms.TextInput(
            attrs={
                'id': 'emailRegister',
                'type': 'email',
                'class': 'form-control'
            }
        )
    )
    username = forms.CharField(
        max_length=150,
        widget=forms.TextInput(
            attrs={
                'id': 'username',
                'type': 'text',
                'class': 'form-control'
            }
        )
    )
    password1 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                'id': 'password1',
                'type': 'password',
                'class': 'form-control'
            }
        )
    )
    password2 = forms.CharField(
        label='Confirmar password',
        widget=forms.PasswordInput(
            attrs={
                'id': 'password2',
                'type': 'password',
                'class': 'form-control'
            }
        )
    )
    image = forms.ImageField(required=False)
    province = forms.ModelChoiceField(required=False, queryset=Province.objects.all())

    class Meta:
        # model = User
        model = get_user_model() # ¡captura el propio modelo de usuario personalizado!
        fields = ("username", "email", "province", "image", "password1", "password2")

    def save(self, commit=True):
        user = super(CustomUserCreationForm, self).save(commit=False)
        user.email = self.cleaned_data["email"]
        #user.province = self.cleaned_data["province"]
        #user.image = self.cleaned_data["image"]
        if commit:
            user.save()
        return user

class AvistajeForm(forms.ModelForm):
    activo = forms.BooleanField(initial=True)
    class Meta:
        model = Avistaje
        fields = "__all__"