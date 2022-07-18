from django.shortcuts import render
from django.http import HttpResponse
from .serializers import BlockchainSerializer
from .models import Blockchains
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView 


# ListAPIView
class BlockchainList(ListAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
    filterset_fields = ['name','id']
    
# Postdata    
class BlockchainCreate(CreateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
    
# RetrieveAPIView    
class BlockchainRetrieve(RetrieveAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
    
# UpdateAPIView    
class BlockchainUpdate(UpdateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer

# DestroyAPIView    
class BlockchainDelete(DestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer

# GetAndPost
class BlockchainListCreate(ListCreateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer

# RetrieveUpdateAPIView    
class BlockchainRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
    
# RetrieveDestroyAPIView
class BlockchainRetrieveDestroy(RetrieveDestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
    
# RetrieveUpdateDestroyAPIView
class BlockchainRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer


    
    
    
    
    
    
# Index and Add.
def index(request):
    return HttpResponse("Index")
def add(request):
    return HttpResponse("Add")
    
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
