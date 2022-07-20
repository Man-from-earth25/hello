from django.contrib import admin
from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)





urlpatterns = [
    
    path('', admin.site.urls),
    path('blockchain', include('blockchain.urls')),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    

]


if settings.DEBUG: 
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
    
if settings.DEBUG == True:
    print("Debug True")
if settings.DEBUG == False:
    print("Debug False")
    
