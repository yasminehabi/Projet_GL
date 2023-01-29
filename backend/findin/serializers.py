from rest_framework import serializers
from findin.models import Custommer,UserModel,Annonce, adresse, théme, catégorie,Annfav

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Custommer
        fields = '__all__' 
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserModel
        fields = '__all__'


class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = ("titreAnn", "catégorie", "théme", "modalité", "Description", "tarif",
                  "lieudeFormation", "photos")


class adresseSerializer(serializers.ModelSerializer):
    class Meta:
        model = adresse
        fields = ('Wilaya', 'Commune', 'adresseIMB', 'adresseURL')


class thémeSerializer(serializers.ModelSerializer):
    class Meta:
        model = théme
        fields = ("théme")


class catégorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = catégorie
        fields = ("nomcatégorie")

class AnnfavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annfav
        fields = ('User', 'titreAnnfav')