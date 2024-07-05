from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    precio = models.IntegerField()

    def __str__(self):
        return self.nombre
    
class FormularioContacto(models.Model):
    nombre = models.CharField(max_length=100)
    rut = models.CharField(max_length=12)
    ciudad = models.CharField(max_length=100)
    correo_electronico = models.EmailField()
    consulta = models.TextField()
    fecha_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.nombre} - {self.fecha_envio.strftime("%Y-%m-%d %H:%M")}'