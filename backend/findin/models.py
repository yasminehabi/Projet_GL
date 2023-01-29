from django.db import models

class Custommer(models.Model):
    name=models.CharField(max_length=200)
    industry=models.CharField(max_length=100)
    
    
class UserModel(models.Model):
    
    name=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    birthday=models.DateField(max_length=20)
    useraddress=models.CharField(max_length=200)
    phonenumber= models.CharField(max_length=10)    




class catégorie(models.Model):

    nomcatégorie = models.CharField(max_length=50)

    def __str__(self):
        return self.nomcatégorie


# classe adresse

class adresse (models.Model):

    Wilaya = models.CharField(max_length=200)
    Commune = models.CharField(max_length=200)
    adresseIMB = models.CharField(max_length=1000)
    adresseURL = models.CharField(max_length=1000)

    def __str__(self):
        return self.adresseIMB


class théme (models.Model):

    théme = models.CharField(max_length=100)

    def __str__(self):
        return self.théme


# classe Ann

class Annonce (models.Model):

    titreAnn = models.CharField(max_length=50)
    catégorie = models.ForeignKey(catégorie, on_delete=models.DO_NOTHING)
    théme = models.ForeignKey(théme, on_delete=models.DO_NOTHING)
    modalité = models.CharField(max_length=10)
    Description = models.CharField(max_length=500)
    tarif = models.CharField(max_length=200)
    lieudeFormation = models.ForeignKey(adresse, on_delete=models.DO_NOTHING)
    photos = models.CharField(max_length=300)

    def __str__(self):
        return self.titreAnn


# Classe Annonce Favoris

class Annfav (models.Model):
    User = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    titreAnnfav = models.ForeignKey(Annonce, on_delete=models.DO_NOTHING)




