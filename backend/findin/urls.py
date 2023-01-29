"""findin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from findin import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/customers/',views.customers, name='customers'),
    path('api/customers/<int:id>',views.customer, name='customer'),
    path('api/users/',views.users, name='users'),
    path('api/users/<int:id>',views.user, name='user'),
    path('annonces/', views.AnnonceListAPIView.as_view(), name='annonce-list'),
    path('annoncesFav/', views.AnnonceListFav.as_view(), name='annonce-list'),
    path('extendusers/<int:pk>/', views.ExtendUserUpdate.as_view(), name='extenduser-update'),
    path('annfav/create/', views.AnnfavCreateView.as_view(), name='annfav-create'),
    path('annfav/delete/', views.AnnfavDestroyView.as_view(), name='annfav-delete'),,
    path('api/annonces/',views.annonces, name='annonces'),
     path('api/annonces/<str:email>',views.annoncespost, name='annonces'),
    path('api/annonce/<int:id>',views.annonce, name='annonce'),
    path('api/annonceuser/<str:email>',views.AnnonceUser, name='annonce_user'),
    path('api/connect/<str:email>',views.UserConnect, name='connect'),
]
