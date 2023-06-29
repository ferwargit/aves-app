from django import forms
from .models import Avistaje, User, Province

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
    

class CustomUserCreationForm(forms.Form):

    email = forms.EmailField(
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

    province = forms.ModelChoiceField(queryset=Province.objects.all())

# class CustomUserChangeForm(UserChangeForm):
    
#     class Meta:
#         model = User
#         fields = ("email",)
class AvistajeForm(forms.ModelForm):
    class Meta:
        model = Avistaje
        fields = "__all__"