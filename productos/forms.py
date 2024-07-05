# forms.py
from django import forms
from .models import Producto
from .models import FormularioContacto  # Importa el modelo FormularioContacto

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['nombre', 'categoria', 'precio']

class ContactoForm(forms.ModelForm):
    class Meta:
        model = FormularioContacto
        fields = ['nombre', 'rut', 'ciudad', 'correo_electronico', 'consulta']
        widgets = {
            'consulta': forms.Textarea(attrs={'rows': 4}),
        }