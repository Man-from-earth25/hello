from django.db import models
from datetime import datetime

name = "Python"
op1 = "Emon"
op2 = "emon"
first = "1"
second = "2"
third = "3"
fourth = "4"
fifth = "5"

ALERT_CHOICES = (
  (first,"Verified"),
  (second,"Can Be Trusted"),
  (third,"Security Is Low"),
  (fourth,"Seems Suspicious"),
  (fifth,"Has Potential Risks")
)
EXPERIENCE_CHOICES = (
  (first,"Very Well"),
  (second,"Good"),
  (third,"Can Be Better"),
  (fourth,"Bad"),
  (fifth,"Awful")
)

# Blockchains only for Test
class Blockchains(models.Model): 
    name = models.CharField(max_length=100)
    stars = models.IntegerField()
    age = models.IntegerField()
    email = models.CharField(max_length=100)
    Comment = models.CharField(max_length=100)
    bff = models.CharField(max_length=100)
# Django Test
class DjangoTest(models.Model): 
    bigInteger = models.BigIntegerField(null=True,blank=True)
    binary = models.BinaryField(null=True,blank=True)
    boolean = models.BooleanField(null=True,blank=True)
    char = models.CharField(null=True,blank=True,max_length=100)
    date = models.DateField(null=True,blank=True)
    dateTime = models.DateTimeField(null=True,blank=True)
    decimal = models.DecimalField(null=True,blank=True,max_digits=50,decimal_places=10)
    duration = models.DurationField(null=True,blank=True)
    email = models.EmailField(null=True,blank=True)
    file = models.FileField(upload_to ='files',null=True,blank=True)
    float = models.FloatField(null=True,blank=True)
    integer = models.IntegerField(null=True,blank=True)
    images = models.FileField(upload_to ='images',null=True,blank=True)    
    genericIPAddress = models.GenericIPAddressField(null=True,blank=True)
    positiveInteger = models.PositiveIntegerField(null=True,blank=True)
    positiveSmallInteger = models.PositiveSmallIntegerField(null=True,blank=True)
    slug = models.SlugField(null=True,blank=True)
    smallInteger = models.SmallIntegerField(null=True,blank=True)
    text = models.TextField(null=True,blank=True)
    time = models.TimeField(null=True,blank=True)
    uRL = models.URLField(null=True,blank=True)
    uUID = models.UUIDField(null=True,blank=True)
# Blockchain Info
class Blockchain_info(models.Model): 
    bigInteger = models.BigIntegerField(null=True,blank=True)
    binary = models.BinaryField(null=True,blank=True)
    boolean = models.BooleanField(null=True,blank=True)
    char = models.CharField(null=True,blank=True,max_length=100)
    date = models.DateField(null=True,blank=True)
    dateTime = models.DateTimeField(null=True,blank=True)
    decimal = models.DecimalField(null=True,blank=True,max_digits=50,decimal_places=10)
    duration = models.DurationField(null=True,blank=True)
    email = models.EmailField(null=True,blank=True)
    file = models.FileField(upload_to ='files',null=True,blank=True)
    float = models.FloatField(null=True,blank=True)
    integer = models.IntegerField(null=True,blank=True)
    images = models.FileField(upload_to ='images',null=True,blank=True)    
    genericIPAddress = models.GenericIPAddressField(null=True,blank=True)
    positiveInteger = models.PositiveIntegerField(null=True,blank=True)
    positiveSmallInteger = models.PositiveSmallIntegerField(null=True,blank=True)
    slug = models.SlugField(null=True,blank=True)
    smallInteger = models.SmallIntegerField(null=True,blank=True)
    text = models.TextField(null=True,blank=True)
    time = models.TimeField(null=True,blank=True)
    uRL = models.URLField(null=True,blank=True)
    uUID = models.UUIDField(null=True,blank=True)
# Blockchain
class Blockchain(models.Model): 
    like = models.BigIntegerField(null=True,blank=True)
    dislike = models.BigIntegerField(null=True,blank=True)
    icon = models.FileField(upload_to ='images',null=True,blank=True)
    name = models.CharField(null=True,blank=True,max_length = 50)
    shortName = models.CharField(null=True,blank=True,max_length = 23)
    email = models.EmailField(null=True,blank=True)
    website = models.URLField(null=True,blank=True)
    chain = models.CharField(null=True,blank=True,max_length = 13)
    chainId = models.SmallIntegerField(null=True,blank=True)
    networkId = models.SmallIntegerField(null=True,blank=True)
    rpc = models.TextField(null=True,blank=True)
    facets = models.TextField(null=True,blank=True)
    nativeCurrency = models.TextField(null=True,blank=True)
    infoURL = models.URLField(null=True,blank=True)
    slip44 = models.IntegerField(null=True,blank=True)  
    standard = models.BooleanField(null=True,blank=True)
    ens = models.TextField(null=True,blank=True)
    exprolers = models.TextField(null=True,blank=True)
    hello = models.URLField(null=True,blank=True)
    youtube = models.URLField(null=True,blank=True)
    facebook = models.URLField(null=True,blank=True)
    snapchat = models.URLField(null=True,blank=True)
    discord = models.URLField(null=True,blank=True)
    tiktok = models.URLField(null=True,blank=True)
    thanksTo = models.CharField(null=True,blank=True,max_length = 230)
    otherProduct = models.TextField(null=True,blank=True)
    supportedPlatform = models.CharField(max_length=500,null=True,blank=True)
    issue = models.TextField(null=True,blank=True)
    helpSupport = models.URLField(null=True,blank=True)
    alert = models.CharField(choices=ALERT_CHOICES,max_length= 500,null=True,blank=True)
    experience = models.CharField(choices=EXPERIENCE_CHOICES,max_length= 250,null=True,blank=True)
    info = models.TextField(null=True,blank=True)
