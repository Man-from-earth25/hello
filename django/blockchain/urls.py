from django.urls import path
from . import views





urlpatterns = [
    
    path('', views.index, name='index'),
    path('add/', views.add, name='add'),
    
    path('bt/', views.BlockchainList.as_view()),
    path('bt/c', views.BlockchainCreate.as_view()),
    path('bt/gp', views.BlockchainListCreate.as_view()),
    path('bt/r/<int:pk>/', views.BlockchainRetrieve.as_view()),
    path('bt/u/<int:pk>/', views.BlockchainUpdate.as_view()),
    path('bt/d/<int:pk>/', views.BlockchainDelete.as_view()),
    path('bt/ru/<int:pk>/', views.BlockchainRetrieveUpdate.as_view()),
    path('bt/rd/<int:pk>/', views.BlockchainRetrieveDestroy.as_view()),
    path('bt/rud/<int:pk>/', views.BlockchainRetrieveUpdateDestroy.as_view()),

    path('dt/', views.DjangoTestList.as_view()),
    path('dt/c', views.DjangoTestCreate.as_view()),
    path('dt/gp', views.DjangoTestListCreate.as_view()),
    path('dt/r/<int:pk>/', views.DjangoTestRetrieve.as_view()),
    path('dt/u/<int:pk>/', views.DjangoTestUpdate.as_view()),
    path('dt/d/<int:pk>/', views.DjangoTestDelete.as_view()),
    path('dt/ru/<int:pk>/', views.DjangoTestRetrieveUpdate.as_view()),
    path('dt/rd/<int:pk>/', views.DjangoTestRetrieveDestroy.as_view()),
    path('dt/rud/<int:pk>/', views.DjangoTestRetrieveUpdateDestroy.as_view()),
    
    
]
