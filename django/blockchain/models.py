from django.db import models
from datetime import datetime

name = "Python"
def handle_uploaded_file(self, f):
    _datetime = datetime.now()
    datetime_str = _datetime.strftime("%Y-%m-%d-%H-%M-%S")
    # if there are more than one dots
    file_name_split = f.name.split('.')
    file_name_list = file_name_split[:-1]
    ext = file_name_split[-1]
    file_name_wo_ext = '.'.join(file_name_list)
    print(name)
    name = '/files/{0}-{1}.{2}'.format(file_name_wo_ext, datetime_str, ext)
print(name)



# Blockchains only for Test.
class Blockchains(models.Model): 
    name = models.CharField(max_length=100)
    stars = models.IntegerField()
    age = models.IntegerField()
    email = models.CharField(max_length=100)
    Comment = models.CharField(max_length=100)
    bff = models.CharField(max_length=100)
# Django Test.
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





