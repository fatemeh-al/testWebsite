from django.db import models

class User(models.Model):
    username = models.CharField(max_length = 200, unique = True)
    password = models.CharField(max_length = 200)
    email = models.EmailField( max_length=254)

    def __str__(self):
        return "username:" + self.username + "\nemail:" + self.email 
    
    


# Create your models here.
