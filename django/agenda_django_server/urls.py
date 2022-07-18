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
    
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('blockchain/', include('blockchain.urls')),
    path('todo/', include('todo.urls')),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    
    # Jwt
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]


if settings.DEBUG: 
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
