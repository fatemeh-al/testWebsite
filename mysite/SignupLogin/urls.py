from django.urls import path 

from . import views

app_name = 'SignupLogin'
urlpatterns = [
    path('', views.SignupLogin, name='index'),
    path('admin', views.admin, name = 'admin')
]