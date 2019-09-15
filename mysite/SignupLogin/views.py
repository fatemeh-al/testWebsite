from django.shortcuts import render,redirect
from django.views import generic
from .models import User
from django.http import JsonResponse
import json

def SignupLogin(request):
    if(request.method == "POST"):
        jsonData = json.loads(request.body)
        if(jsonData.get('mode') == 'signup'):
            print('in POST in SIGNUP')
            username = jsonData.get('username')
            password = jsonData.get('password')
            email = jsonData.get('email')
            try:
                newUser = User(username = username, password = password, email = email)
                newUser.save()
                print(User.objects.all())
                jsonResponse = JsonResponse({ 'success' : True , 'url' : 'http://127.0.0.1:8000/admin' })
            except:
                jsonResponse = JsonResponse({'success' : False})
            return jsonResponse
        elif(jsonData.get('mode') == 'login'):
            email = jsonData.get('email')
            password = jsonData.get('password')

            try:
                user = User.objects.get(email = email)
                if(user.password == password):
                    jsonResponse = JsonResponse({'success' : True, 'url' : 'http://127.0.0.1:8000/admin'})
                else:
                    jsonResponse = JsonResponse({'success' : False})
            except:
                jsonResponse = JsonResponse({'success' : False})

            return jsonResponse                    


    else:
        print('in GET')
        return render(request,'SignupLogin/index.html')


def admin(request):
    print('in ADMIN')
    return render(request, 'SignupLogin/test.html')
# Create your views here.

