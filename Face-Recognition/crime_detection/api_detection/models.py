from email.policy import default
from django.db import models
    
class CriminalDetail(models.Model):
    criminal_name=models.CharField(max_length=200,null=True,blank=True)
    criminal_age=models.IntegerField(null=True,blank=True)
    criminal_image=models.ImageField(upload_to="Images",default="")
    status=models.CharField(max_length=100,null=True,blank=True)
    crime_committed=models.CharField(max_length=100,null=True,blank=True)
    encodings=models.CharField(max_length=6000,null=True,blank=True)

class ImageMatchDetail(models.Model):
    test_image=models.ImageField(upload_to="Test_Image",default="")
    temp_integer=models.IntegerField(null=True,blank=True)
    test_encodings=models.CharField(max_length=6000,null=True,blank=True)
