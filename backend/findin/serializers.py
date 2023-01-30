from rest_framework import serializers
from findin.models import Custommer,UserModel,Annfav,AnnonceModel

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Custommer
        fields = '__all__' 
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserModel
        fields = '__all__'
        
        
class AnnonceSerializer(serializers.ModelSerializer):
    annonceur = serializers.CharField(source='annonceur.email')
    class Meta:
        model=AnnonceModel
        fields = ('titreAnn','catégorie','théme','modalité','Description','tarif','Wilaya','Commune','adresseIMB','adresseURL','image_url','date','annonceur')
        








class AnnfavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annfav
        fields = ('User', 'titreAnnfav')