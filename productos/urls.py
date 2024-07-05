from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('registro', views.registro, name='registro'),
    path('ayuda', views.ayuda, name="ayuda"),
    path('garantia', views.garantia, name="garantia"),
    path('audifono', views.audifono, name="audifono"),
    path('teclado', views.teclado, name="teclado"),
    path('mouse', views.mouse, name="mouse"),
    path('pcgamer', views.pcgamer, name="pcgamer"),
    path('notebook', views.notebook, name="notebook"),
    path('monitor', views.monitor, name="monitor"),
    path('quienes_somos', views.quienes_somos, name="quienes_somos"),
    path('producto_list', views.producto_list, name='producto_list'),
    path('crud', views.crud, name='crud'),
    path('producto/<int:pk>/', views.producto_detail, name='producto_detail'),
    path('producto/new/', views.producto_create, name='producto_create'),
    path('producto/<int:pk>/edit/', views.producto_update, name='producto_update'),
    path('producto/<int:pk>/delete/', views.producto_delete, name='producto_delete'),
    path('contacto/', views.contacto, name='contacto'),
    path('ver_contactos/', views.ver_contactos, name='ver_contactos'),
    path('eliminar_contacto/<int:contacto_id>/', views.eliminar_contacto, name='eliminar_contacto'),
    path('TerminosyCondiciones', views.TerminosyCondiciones, name="TerminosyCondiciones"),
    path('Blog', views.Blog, name="Blog"),
    path('Blog1Nintendo', views.Blog1Nintendo, name="Blog1Nintendo"),
    path('Blog2Nintendo', views.Blog1Nintendo, name="Blog2Nintendo"),
    path('Blog3Nintendo', views.Blog1Nintendo, name="Blog3Nintendo")

]