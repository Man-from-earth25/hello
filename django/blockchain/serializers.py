from rest_framework import serializers
from .models import Blockchains
from .models import DjangoTest


# Blockchains Test
class BlockchainSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Blockchains
        fields = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']
# Django Test
class DjangoTestSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = DjangoTest
        fields = "__all__"









                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
