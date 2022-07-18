from django.contrib import admin
from .models import Blockchain
from .models import Blockchains
from .models import DjangoTest
from .models import Blockchain_info

# Blockchains test
class BlockchainsAdmin(admin.ModelAdmin): 
    list_display = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']
# Django test
class DjangoTestAdmin(admin.ModelAdmin): 
    list_display = [
    "binary",
    "boolean",
    "char",
    "date",
    "dateTime",
    "decimal",
    "duration",
    "email",
    "file",
    "float",
    "integer",
    "genericIPAddress",
    "positiveInteger",
    "positiveSmallInteger",
    "slug",
    "smallInteger",
    "text",
    "time",
    "uRL",
    "uUID"
  ]

    
    
# Blockchains Info
class Blockchain_infoAdmin(admin.ModelAdmin): 
    list_display = [
        
        "bigInteger",
        "binary",
        "boolean",
        "char",
        "date",
        "dateTime",
        "decimal",
        "duration",
        "email",
        "file",
        "float",
        "integer",
        "images",
        "genericIPAddress",
        "positiveInteger",
        "positiveSmallInteger",
        "slug",
        "smallInteger",
        "text",
        "time",
        "uRL",
        "uUID"        
        
    ]

# Blockchains test
class BlockchainAdmin(admin.ModelAdmin): 
    list_display = [
        
        "like",
        "dislike",
        "icon",
        "name",
        "shortName",
        "email",
        "website",
        "chain",
        "chainId",
        "networkId",
        "rpc",
        "facets",
        "nativeCurrency",
        "infoURL",
        "slip44",
        "standard",
        "ens",
        "exprolers",
        "hello",
        "youtube",
        "facebook",
        "snapchat",
        "discord",
        "tiktok",
        "thanksTo"
        "otherProduct",
        "supportedPlatform",
        "status",
        "info",
        "secured",
        "issue",
        "helpSupport",
        
        
    ]



@admin.register(Blockchain)
@admin.register(Blockchains)
@admin.register(Blockchain_info)
@admin.register(DjangoTest)




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
