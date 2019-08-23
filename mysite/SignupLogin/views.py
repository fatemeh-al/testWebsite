from django.shortcuts import render
from django.views import generic
from .models import User

def SignupLogin(request):
    return render(request,'SignupLogin/index.html')



# Create your views here.
