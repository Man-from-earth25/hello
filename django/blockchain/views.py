from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView 
from .serializers import BlockchainSerializer
from .serializers import DjangoTestSerializer
from .models import Blockchains
from .models import DjangoTest


# //////////////////////////////// Blockchains //////////////////////////////
# ListAPIView
class BlockchainsList(ListAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
  
# Postdata    
class BlockchainsCreate(CreateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveAPIView    
class BlockchainsRetrieve(RetrieveAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# UpdateAPIView    
class BlockchainsUpdate(UpdateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# DestroyAPIView    
class BlockchainsDelete(DestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# GetAndPost
class BlockchainsListCreate(ListCreateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveUpdateAPIView    
class BlockchainsRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveDestroyAPIView
class BlockchainsRetrieveDestroy(RetrieveDestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveUpdateDestroyAPIView
class BlockchainsRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# //////////////////////////////// DjangoTest //////////////////////////////
# ListAPIView
class DjangoTestList(ListAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
    filterset_fields = ['name','id']
# Postdata    
class DjangoTestCreate(CreateAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# RetrieveAPIView    
class DjangoTestRetrieve(RetrieveAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# UpdateAPIView    
class DjangoTestUpdate(UpdateAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# DestroyAPIView    
class DjangoTestDelete(DestroyAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# GetAndPost
class DjangoTestListCreate(ListCreateAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# RetrieveUpdateAPIView    
class DjangoTestRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# RetrieveDestroyAPIView
class DjangoTestRetrieveDestroy(RetrieveDestroyAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# RetrieveUpdateDestroyAPIView
class DjangoTestRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
    
    





    
# Index and Add.
def index(request):
    return HttpResponse("Index")
def add(request):
    return HttpResponse("Add")
    
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
