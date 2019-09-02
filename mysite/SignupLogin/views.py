from django.shortcuts import render,redirect
from django.views import generic
from .models import User

def SignupLogin(request):
    if(request.method == "POST"):
        print('in POST')
        return redirect('/admin/', permanent=True)
    else:
        print('in GET')
        return render(request,'SignupLogin/index.html')


def admin(request):
    print('in ADMIN')
    return render(request, 'SignupLogin/test.html')
# Create your views here.

