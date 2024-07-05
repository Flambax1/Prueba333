from django.contrib import admin
from .models import Producto
from .models import FormularioContacto  # Importa el modelo


# Register your models here.
admin.site.register(Producto)


class FormularioContactoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'rut', 'ciudad', 'correo_electronico', 'fecha_envio')
    search_fields = ('nombre', 'correo_electronico', 'consulta')
    list_filter = ('fecha_envio', 'ciudad')

admin.site.register(FormularioContacto, FormularioContactoAdmin)