from dataclasses import fields
from rest_framework import serializers
from .models import *

class CriminalDetailSerializer(serializers.ModelSerializer):
    criminal_name=serializers.CharField(max_length=200)
    criminal_age=serializers.IntegerField()
    criminal_image=serializers.ImageField()
    status=serializers.CharField(max_length=100)
    crime_committed=serializers.CharField(max_length=100)
    encodings=serializers.CharField(max_length=6000, required=False)

    class Meta:
        model=CriminalDetail
        fields=('__all__')

class ImageMatchDetailSerializer(serializers.ModelSerializer):
    test_image=serializers.ImageField()
    temp_integer=serializers.IntegerField(required=False)
    test_encodings=serializers.CharField(max_length=6000, required=False)

    class Meta:
        model=ImageMatchDetail
        fields=('__all__')