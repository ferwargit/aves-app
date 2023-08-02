from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin

# from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, DeleteView

from .forms import AvistajeForm, CustomUserCreationForm, UserLoginForm
from .models import Avistaje, Contacto


def quienes(request):
    return render(request, "user/quienes.html")


def create_user(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Te has registrado con éxito")
            username = request.POST["username"]
            password = request.POST["password1"]
            user = authenticate(request, username=username, password=password)
            login(request, user=user)
            return redirect("home")
        else:
            for field, errors in form.errors.items():
                for error in errors:
                    messages.error(request, f"{field.capitalize()}: {error}")
    else:
        form = CustomUserCreationForm()
    return render(request, "user/create_user.html", {"form": form})


def login_user(request):
    if request.method == "POST":
        form = UserLoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user=user)
                messages.success(request, "¡Inicio de sesión exitoso!")
                return redirect("home")
            else:
                messages.error(request, "Usuario o contraseña incorrectos")
    else:
        form = UserLoginForm()
    return render(request, "user/login_user.html", {"form": form})


def logout_user(request):
    logout(request)
    messages.success(request, "¡Cierre de sesión exitoso!")
    return redirect("home")


def contacto(request):
    if request.method == "POST":
        contacto = Contacto()
        nombre = request.POST.get("nombre")
        username = request.POST.get("username")
        email = request.POST.get("email")
        mensaje = request.POST.get("mensaje")
        contacto.nombre = nombre
        contacto.username = username
        contacto.email = email
        contacto.mensaje = mensaje
        contacto.save()
        messages.success(request, "Mensaje enviado con éxito, Gracias por contactarnos")
        return redirect("home")
    return render(request, "user/contacto.html")


class CrearAvistaje(LoginRequiredMixin, CreateView):
    model = Avistaje
    form_class = AvistajeForm
    template_name = "user/crear_lista.html"
    success_url = reverse_lazy("listar_avistajes")

    def get_initial(self):
        return {"id_user": self.kwargs["pk"]}


class ListarAvistajes(LoginRequiredMixin, ListView):
    model = Avistaje
    template_name = "user/lista_avistajes.html"
    context_object_name = "avistajes"

    def get_queryset(self):
        self.queryset = Avistaje.objects.filter(id_user_id=self.request.user.pk).filter(activo=True)
        return self.queryset


class EliminarAvistaje(LoginRequiredMixin, DeleteView):
    model = Avistaje
    success_url = reverse_lazy("listar_avistajes")

    def post(self, request, *args, **kwargs):
        avistaje = self.get_object()
        avistaje.activo = False
        avistaje.save()
        return redirect(self.success_url)
        