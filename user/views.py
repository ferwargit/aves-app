from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login
from .models import User
from .forms import CustomUserCreationForm, UserLoginForm
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def ir_home(request):
    return render(request, 'home.html')

def crear_cuenta(request):
    if request.method == 'GET':
        return render(request, 'add_user.html', {
            'form': CustomUserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:
            print(request.POST)
            
            user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password1'],
            )
    return HttpResponse("Cuenta creada con exito!!")

def login_user(request):
    if request.method == 'GET':
        return render(request, 'login_user.html', {
            'form': UserLoginForm
        })
    else:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            print(user)
            login(request, user=user)
            print("login exitoso!!")
            return redirect('home.html')
        else:
            print(user)
            return HttpResponse("Usuario inexistente")
