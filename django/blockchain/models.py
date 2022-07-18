from django.db import models

# Model Test.
class Blockchains(models.Model): 
    name = models.CharField(max_length=100)
    stars = models.IntegerField()
    age = models.IntegerField()
    email = models.CharField(max_length=100)
    Comment = models.CharField(max_length=100)
    bff = models.CharField(max_length=100)
