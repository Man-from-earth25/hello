from django.urls import path
from . import views





urlpatterns = [
    
    path('', views.index, name='index'),
    path('add/', views.add, name='add'),
    
    path('bt/', views.BlockchainsList.as_view()),
    path('bt/c', views.BlockchainsCreate.as_view()),
    path('bt/gp', views.BlockchainsListCreate.as_view()),
    path('bt/r/<int:pk>/', views.BlockchainsRetrieve.as_view()),
    path('bt/u/<int:pk>/', views.BlockchainsUpdate.as_view()),
    path('bt/d/<int:pk>/', views.BlockchainsDelete.as_view()),
    path('bt/ru/<int:pk>/', views.BlockchainsRetrieveUpdate.as_view()),
    path('bt/rd/<int:pk>/', views.BlockchainsRetrieveDestroy.as_view()),
    path('bt/rud/<int:pk>/', views.BlockchainsRetrieveUpdateDestroy.as_view()),

    path('dt/', views.DjangoTestList.as_view()),
    path('dt/c', views.DjangoTestCreate.as_view()),
    path('dt/gp', views.DjangoTestListCreate.as_view()),
    path('dt/r/<int:pk>/', views.DjangoTestRetrieve.as_view()),
    path('dt/u/<int:pk>/', views.DjangoTestUpdate.as_view()),
    path('dt/d/<int:pk>/', views.DjangoTestDelete.as_view()),
    path('dt/ru/<int:pk>/', views.DjangoTestRetrieveUpdate.as_view()),
    path('dt/rd/<int:pk>/', views.DjangoTestRetrieveDestroy.as_view()),
    path('dt/rud/<int:pk>/', views.DjangoTestRetrieveUpdateDestroy.as_view()),
    
    path('bi/', views.DjangoTestList.as_view()),
    path('bi/c', views.DjangoTestCreate.as_view()),
    path('bi/gp', views.DjangoTestListCreate.as_view()),
    path('bi/r/<int:pk>/', views.DjangoTestRetrieve.as_view()),
    path('bi/u/<int:pk>/', views.DjangoTestUpdate.as_view()),
    path('bi/d/<int:pk>/', views.DjangoTestDelete.as_view()),
    path('bi/ru/<int:pk>/', views.DjangoTestRetrieveUpdate.as_view()),
    path('bi/rd/<int:pk>/', views.DjangoTestRetrieveDestroy.as_view()),
    path('bi/rud/<int:pk>/', views.DjangoTestRetrieveUpdateDestroy.as_view()),

    path('b/', views.DjangoTestList.as_view()),
    path('b/c', views.DjangoTestCreate.as_view()),
    path('b/gp', views.DjangoTestListCreate.as_view()),
    path('b/r/<int:pk>/', views.DjangoTestRetrieve.as_view()),
    path('b/u/<int:pk>/', views.DjangoTestUpdate.as_view()),
    path('b/d/<int:pk>/', views.DjangoTestDelete.as_view()),
    path('b/ru/<int:pk>/', views.DjangoTestRetrieveUpdate.as_view()),
    path('b/rd/<int:pk>/', views.DjangoTestRetrieveDestroy.as_view()),
    path('b/rud/<int:pk>/', views.DjangoTestRetrieveUpdateDestroy.as_view()),
    
    
]
