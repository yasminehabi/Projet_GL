from django.db import models

class Custommer(models.Model):
    name=models.CharField(max_length=300)
    industry=models.CharField(max_length=100)
    
    
class UserModel(models.Model):
    
    name=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    email=models.EmailField(max_length=100,unique=True)
    birthday=models.DateField(max_length=20)
    useraddress=models.CharField(max_length=200)
    phonenumber= models.CharField(max_length=10)
    def __str__(self) :
      return self.email 

# lets us explicitly set upload path and filename
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class AnnonceModel (models.Model):

    titreAnn = models.CharField(max_length=50)
    catégorie =  models.CharField(max_length=50)
    théme = models.CharField(max_length=100)
    modalité = models.CharField(max_length=10)
    Description = models.CharField(max_length=500)
    tarif = models.CharField(max_length=200)
    Wilaya = models.CharField(max_length=200)
    Commune = models.CharField(max_length=200)
    adresseIMB = models.CharField(max_length=1000)
    adresseURL = models.CharField(max_length=1000)
    image_url = models.ImageField(upload_to=upload_to, blank=True)
    date=models.DateTimeField(auto_now_add=True,null=True)
    annonceur=models.ForeignKey(UserModel, on_delete=models.CASCADE) 
    
   













# Classe Annonce Favoris

class Annfav (models.Model):
    User = models.ForeignKey(UserModel, on_delete=models.DO_NOTHING)
    titreAnnfav = models.ForeignKey(AnnonceModel, on_delete=models.DO_NOTHING)




