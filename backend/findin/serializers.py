from rest_framework import serializers
from findin.models import Custommer,UserModel,Annonce, adresse, théme, catégorie,Annfav,AnnonceModel

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Custommer
        fields = '__all__' 
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserModel
        fields = '__all__'