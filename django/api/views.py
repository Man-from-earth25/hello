from django.shortcuts import render
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.http import HttpResponse
from .serializers import StudentSerializer
from .models import Students
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView 


# ListAPIView
class StudentList(ListAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    filterset_fields = ['name','id']
    
# Postdata    
class StudentCreate(CreateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
# RetrieveAPIView    
class StudentRetrieve(RetrieveAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
# UpdateAPIView    
class StudentUpdate(UpdateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer

# DestroyAPIView    
class StudentDelete(DestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer

# GetAndPost
class StudentListCreate(ListCreateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer

# RetrieveUpdateAPIView    
class StudentRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
# RetrieveDestroyAPIView
class StudentRetrieveDestroy(RetrieveDestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
# RetrieveUpdateDestroyAPIView
class StudentRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer


    
    
    
    
    
    
    
    
# Index and Add.
def index(request):
    return HttpResponse("Hello world!")
def add(request):
    return render(request,"index.html")     
    
    





# Django Jwt Token.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
