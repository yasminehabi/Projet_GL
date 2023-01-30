from findin.models import Custommer,UserModel, Annfav,AnnonceModel
from findin.serializers import CustomerSerializer,UserSerializer,AnnonceSerializer,  AnnfavSerializer,AnnonceSerializer
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
        user = self.kwargs['user']
        user_annfav = Annfav.objects.filter(User=user)
        annonce_ids = [annfav.titreAnnfav.id for annfav in user_annfav]
        return AnnonceModel.objects.filter(id__in=annonce_ids)


class AnnfavCreateView(generics.CreateAPIView):
    serializer_class = AnnfavSerializer

    def perform_create(self, serializer):
        user_id = self.request.data.get('User')
        user = UserModel.objects.get(id=user_id)
        titreAnnfav = self.request.data.get('titreAnnfav')
        annfav = Annfav.objects.filter(
            User=user, titreAnnfav=titreAnnfav).first()
        if annfav:
            # Annfav instance already exists
            return
        serializer.save()


class AnnfavDestroyView(generics.DestroyAPIView):
    serializer_class = AnnfavSerializer

    def perform_destroy(self, instance):
        user_id = self.request.data.get('User')
        user = UserModel.objects.get(id=user_id)
        titreAnnfav = self.request.data.get('titreAnnfav')
        titreAnnfav = AnnonceModel.objects.get(id=titreAnnfav)
        annfav = Annfav.objects.get(User=user, titreAnnfav=titreAnnfav)
        annfav.delete()

class AnnonceListAPIView(generics.ListAPIView):
    queryset = AnnonceModel.objects.all()
    serializer_class = AnnonceSerializer

    def get_queryset(self):
        search = self.request.query_params.get('search', None)
        module = self.request.query_params.get('module', None)
        wilaya = self.request.query_params.get('wilaya', None)
        commune = self.request.query_params.get('commune', None)
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)

        if search is not None:
            queryset = AnnonceModel.objects.filter(titreAnn__icontains=search)
            if module:
                queryset = queryset.filter(théme=module)
            if wilaya:
                queryset = queryset.filter(Wilaya=wilaya)
            if commune:
                queryset = queryset.filter(Commune=commune)
            if start_date and end_date:
                start_datetime = datetime.datetime.combine(datetime.datetime.strptime(
                    start_date, "%Y-%m-%d").date(), datetime.time.min)
                end_datetime = datetime.datetime.combine(datetime.datetime.strptime(
                    end_date, "%Y-%m-%d").date(), datetime.time.max)
                queryset = queryset.filter(
                    date__range=[start_datetime, end_datetime])
        else:
            queryset = AnnonceModel.objects
            if module:
                queryset = queryset.filter(théme=module)
            if wilaya:
                queryset = queryset.filter(Wilaya=wilaya)
            if commune:
                queryset = queryset.filter(Commune=commune)
            if start_date and end_date:
                start_datetime = datetime.datetime.combine(datetime.datetime.strptime(
                    start_date, "%Y-%m-%d").date(), datetime.time.min)
                end_datetime = datetime.datetime.combine(datetime.datetime.strptime(
                    end_date, "%Y-%m-%d").date(), datetime.time.max)
                queryset = queryset.filter(
                    date__range=[start_datetime, end_datetime])
        return queryset


class ExtendUserUpdate(generics.RetrieveUpdateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    
    
    
    
@api_view(['PUT','GET'])
def UserConnect(request,email):
    try:
        data=UserModel.objects.get(email=email)
    except UserModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
       serializer=UserSerializer(data)
       return Response({'user': serializer.data})
    elif request.method =='PUT':
        serializer=UserSerializer(data,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'users':serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
   
@api_view(['GET','POST'])     
def annonces(request):
    #invoke serializer and return to client
    if request.method =='GET':
      data=AnnonceModel.objects.all()
      serializer=AnnonceSerializer(data, many=True)
      return Response({'annonces': serializer.data})
    elif request.method =='POST':
        
        serializer=AnnonceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'annonces':serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','POST'])     
def annoncepost(request,email):
    #invoke serializer and return to client
    if request.method =='GET':
      data=AnnonceModel.objects.all()
      serializer=AnnonceSerializer(data, many=True)
      return Response({'annonces': serializer.data})
    elif request.method =='POST':
        user=UserModel.objects.get(email=email)
        user=UserSerializer(user)
        print(user.data)
        id=user.data['id']
        data=request.data
        data['annonceur']=id
        serializer=AnnonceSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'annonces':serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PATCH','DELETE'])   
def annonce(request,id):
    try:
        data=AnnonceModel.objects.get(pk=id)
    except AnnonceModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
       serializer=AnnonceSerializer(data)
       return Response({'annonces': serializer.data})
    elif (request.method =='DELETE') :
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method =='PATCH':
        serializer=AnnonceSerializer(data,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'annonces':serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def AnnonceUser(request,email):
    try:
        user=UserModel.objects.get(email=email)
        user=UserSerializer(user)
        data=AnnonceModel.objects.get(name=user.data['id'])
    except AnnonceModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
       serializer=AnnonceSerializer(data)
       return Response({'annonces_user': serializer.data})
