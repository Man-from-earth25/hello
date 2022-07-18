from rest_framework import serializers
from .models import Blockchains


class BlockchainSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Blockchains
        fields = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']










                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
