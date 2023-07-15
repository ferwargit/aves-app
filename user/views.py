from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
# from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView

from .forms import AvistajeForm, CustomUserCreationForm, UserLoginForm
from .models import Avistaje


def quienes(request):
    return render(request, "user/quienes.html")


def create_user(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Te has registrado con éxito")
            return redirect("home")
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
                return redirect("home")
            else:
                messages.error(request, "Usuario o contraseña incorrectos")
    else:
        form = UserLoginForm()
    return render(request, "user/login_user.html", {"form": form})


def logout_user(request):
    logout(request)
    return redirect("home")


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
        self.queryset = Avistaje.objects.filter(id_user_id=self.request.user.pk)
        return self.queryset
