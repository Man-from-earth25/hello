from django.contrib import admin
from .models import Blockchain
from .models import Blockchains
from .models import DjangoTest
from .models import Blockchain_info





# Blockchains test
@admin.register(Blockchains)
class BlockchainsAdmin(admin.ModelAdmin): 
    list_display = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']
# Django test
@admin.register(DjangoTest)
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
@admin.register(Blockchain_info)
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
# Blockchain
@admin.register(Blockchain)
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
        "thanksTo",
        "otherProduct",
        "supportedPlatform",
        "alert",
        "report",
        "info",
        "experience",
        "helpSupport",
        "smartContract",
        "smartContractGraph",
        "comment",
        "star",
        
        
    ]







                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
