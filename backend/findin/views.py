from findin.models import Custommer,UserModel,Annonce, adresse, théme, catégorie,Annfav
from findin.serializers import CustomerSerializer,UserSerializer,AnnonceSerializer, adresseSerializer, thémeSerializer, catégorieSerializer, AnnfavSerializer
from django.http import JsonResponse, Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status,generics

@api_view(['GET','POST'])
def customers(request):
    #invoke serializer and return to client
    if request.method =='GET':
      data=Custommer.objects.all()
      serializer=CustomerSerializer(data, many=True)
      return Response({'customers': serializer.data})
    elif request.method =='POST':
        serializer=CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer':serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET','POST','DELETE'])
def customer(request,id):
    try:
        data=Custommer.objects.get(pk=id)
    except Custommer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
       serializer=CustomerSerializer(data)
       return Response({'customer': serializer.data})
    elif (request.method =='DELETE') :
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method =='POST':
        serializer=CustomerSerializer(data,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer':serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            
@api_view(['GET','POST'])     
def users(request):
    #invoke serializer and return to client
    if request.method =='GET':
      data=UserModel.objects.all()
      serializer=UserSerializer(data, many=True)
      return Response({'users': serializer.data})
    elif request.method =='POST':
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'users':serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','POST','DELETE'])
def user(request,id):
    try:
        data=UserModel.objects.get(pk=id)
    except UserModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
       serializer=UserSerializer(data)
       return Response({'users': serializer.data})
    elif (request.method =='DELETE') :
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method =='POST':
        serializer=UserSerializer(data,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'users':serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class AnnonceListFav(generics.ListAPIView):
    serializer_class = AnnonceSerializer

    def get_queryset(self):
        r_id = self.request.data.get('r')
        try:
            extenduser = ExtendUser.objects.get(r=r_id)
            annfav_list = Annfav.objects.filter(User=extenduser.r)
            annonce_list = []
            for annfav in annfav_list:
                annonce = Annonce.objects.get(id=annfav.titreAnnfav.id)
                annonce_list.append(annonce)
            return annonce_list
        except ExtendUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class ExtendUserUpdate(generics.RetrieveUpdateAPIView):
    queryset = ExtendUser.objects.all()
    serializer_class = ExtendSerializer


class AnnfavCreateView(generics.CreateAPIView):
    serializer_class = AnnfavSerializer

    def perform_create(self, serializer):
        user_id = self.request.data.get('User')
        user = User.objects.get(id=user_id)
        titreAnnfav_id = self.request.data.get('titreAnnfav')
        titreAnnfav = Annonce.objects.get(id=titreAnnfav_id)
        annfav = Annfav.objects.filter(User=user, titreAnnfav=titreAnnfav).first()
        if annfav:
            # Annfav instance already exists
            return
        serializer.save()


class AnnfavDestroyView(generics.DestroyAPIView):
    serializer_class = AnnfavSerializer

    
    def perform_destroy(self, instance):
        user_id = self.request.data.get('User')
        user = User.objects.get(id=user_id)
        titreAnnfav_id = self.request.data.get('titreAnnfav')
        titreAnnfav = Annonce.objects.get(id=titreAnnfav_id)
        annfav = Annfav.objects.get(User=user, titreAnnfav=titreAnnfav)
        annfav.delete()


class AnnonceListAPIView(generics.ListAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer

    def get_queryset(self):
        search = self.request.query_params.get('search', None)
        modalité = self.request.query_params.get('modalité', None)
        wilaya = self.request.query_params.get('wilaya', None)
        commune = self.request.query_params.get('commune', None)

        if search is not None :
            queryset = Annonce.objects.filter(titreAnn__icontains=search)
            if modalité:
                queryset = queryset.filter(modalité=modalité)
            if wilaya:
                queryset = queryset.filter(lieudeFormation__Wilaya=wilaya)
            if commune:
                queryset = queryset.filter(lieudeFormation__Commune=commune)
        else :
            queryset = Annonce.objects
            if modalité:
                queryset = queryset.filter(modalité=modalité)
            if wilaya:
                queryset = queryset.filter(lieudeFormation__Wilaya=wilaya)
            if commune:
                queryset = queryset.filter(lieudeFormation__Commune=commune)
        return queryset