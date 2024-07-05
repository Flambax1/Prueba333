from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import Producto
from .forms import ProductoForm
from .forms import ContactoForm
from .models import FormularioContacto

# Create your views here.
def index(request):
    context={"clase": "inicio"}
    return render(request, 'productos/index.html', context)

def registro(request):
    if request.method != "POST":
        context={"clase": "registro"}
        return render(request, 'productos/registro.html', context)
    else:
        nombre = request.POST["nombre"]
        email = request.POST["email"]
        password = request.POST["password"]
        user = User.objects.create_user(nombre, email, password)
        user.save()
        context={"clase": "registro", "mensaje":"Los datos fueron registrados"}
        return render(request, 'productos/registro.html', context)
    
def ayuda(request):
    context={"clase": "ayuda"}
    return render(request, 'productos/ayuda.html', context)

def garantia(request):
    context={"clase": "garantia"}
    return render(request, 'productos/garantia.html', context)

def audifono(request):
    context={"clase": "audifono"}
    return render(request, 'productos/audifono.html', context)

def teclado(request):
    context={"clase": "teclado"}
    return render(request, 'productos/teclado.html', context)

def mouse(request):
    context={"clase": "mouse"}
    return render(request, 'productos/mouse.html', context)

def pcgamer(request):
    context={"clase": "pcgamer"}
    return render(request, 'productos/pcgamer.html', context)

def notebook(request):
    context={"clase": "notebook"}
    return render(request, 'productos/notebook.html', context)

def monitor(request):
    context={"clase": "monitor"}
    return render(request, 'productos/monitor.html', context)

def quienes_somos(request):
    context={"clase": "quienes_somos"}
    return render(request, 'productos/quienes_somos.html', context)


def producto_list(request):
    productos = Producto.objects.all()
    return render(request, 'productos/producto_list.html', {'productos': productos})

def producto_detail(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    return render(request, 'productos/producto_detail.html', {'producto': producto})

def producto_create(request):
    if request.method == "POST":
        form = ProductoForm(request.POST)
        if form.is_valid():
            producto = form.save()
            return redirect('producto_detail', pk=producto.pk)
    else:
        form = ProductoForm()
    return render(request, 'productos/producto_form.html', {'form': form})

def producto_update(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == "POST":
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            producto = form.save()
            return redirect('producto_detail', pk=producto.pk)
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'productos/producto_form.html', {'form': form})

def producto_delete(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == "POST":
        producto.delete()
        return redirect('producto_list')
    return render(request, 'productos/producto_confirm_delete.html', {'producto': producto})

def crud(request):
    productos = Producto.objects.all()
    context = {'productos': productos}
    return render(request, 'productos/producto_list.html', context)

def contacto(request):
    if request.method == 'POST':
        form = ContactoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ContactoForm()
    return render(request, 'productos/contacto.html', {'form': form})

def ver_contactos(request):
    contactos = FormularioContacto.objects.all()
    return render(request, 'productos/ver_contactos.html', {'contactos': contactos})

def eliminar_contacto(request, contacto_id):
    contacto = FormularioContacto.objects.get(id=contacto_id)
    contacto.delete()
    return redirect('ver_contactos')

def TerminosyCondiciones(request):
    context={"clase": "TerminosyCondiciones"}
    return render(request, 'productos/TerminosyCondiciones.html', context)

def Blog(request):
    context={"clase": "Blog"}
    return render(request, 'productos/Blog.html', context)

def Blog1Nintendo(request):
    context={"clase": "Blog1Nintendo"}
    return render(request, 'productos/Blog1Nintendo.html', context)

def Blog2Nintendo(request):
    context={"clase": "Blog2Nintendo"}
    return render(request, 'productos/Blog2Nintendo.html', context)

def Blog3Nintendo(request):
    context={"clase": "Blog3Nintendo"}
    return render(request, 'productos/Blog3Nintendo.html', context)