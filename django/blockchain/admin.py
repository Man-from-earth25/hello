from django.contrib import admin
from .models import Blockchains
from .models import DjangoTest

# Blockchains test.
@admin.register(Blockchains)
class BlockchainsAdmin(admin.ModelAdmin): 
    list_display = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']

# Django test.
@admin.register(DjangoTest)
class DjangoTestAdmin(admin.ModelAdmin): 
    list_display = "__all__"






                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
