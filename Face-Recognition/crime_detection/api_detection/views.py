import encodings
from functools import partial
from pathlib import Path
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *
from datetime import datetime

import cv2
import numpy as np
import face_recognition
import os
import json
import ast

BASE_DIR = Path(__file__).resolve().parent

class CriminalDetailViewSet(APIView):
    def post(self, request):
        name=request.data['criminal_name']
        age=request.data['criminal_age']
        image_url=request.data['criminal_image']
        status_criminal=request.data['status']
        crime=request.data['crime_committed']

        criminal=CriminalDetail.objects.create(
            criminal_name=name, criminal_age=age , criminal_image=image_url , status=status_criminal, crime_committed=crime
        )
        criminal.save()

        users=CriminalDetail.objects.get(criminal_name=name)
        img_url=users.criminal_image.url
        img_url=img_url.replace("/","\\")
        img_url=os.path.join(os.path.dirname(BASE_DIR), '') + img_url
        
        # img_url=r"C:\Users\lenovo\OneDrive\Desktop\Face-Recognition\crime_detection" + img_url
        
        curImg=cv2.imread(img_url)
        curImg=cv2.cvtColor(curImg,cv2.COLOR_BGR2RGB)
        encode=face_recognition.face_encodings(curImg)[0]
        users.encodings=[encode]
        users.save()
        # encodings=request.data['encode']
        return Response({"status": "success"}, status=status.HTTP_200_OK)

    def get(self, request, id_no=None, format=None):
        id=id_no
        if id is not None:
            criminal=CriminalDetail.objects.get(id=id)
            serializer=CriminalDetailSerializer(criminal)
            return Response(serializer.data)
        
        criminal=CriminalDetail.objects.all()
        serializer=CriminalDetailSerializer(criminal, many=True)
        return Response(serializer.data)
    
    def patch(self, request, id_no, format=None):
        id=id_no
        criminal=CriminalDetail.objects.get(id=id)
        serializer=CriminalDetailSerializer(criminal, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Partial Data Updated'})
        else:
            return Response(serializer.errors)
    
    def delete(self, request, id_no, format=None):
        id=id_no
        criminal=CriminalDetail.objects.get(id=id)
        criminal.delete()
        return Response({'msg':'Data Deleted'})

class ImageMatch(APIView):
    def post(self, request):
        image=request.data['test_image']
        criminal=ImageMatchDetail.objects.create(
            test_image=image, temp_integer=99
        )
        criminal.save()
        
        users=ImageMatchDetail.objects.get(temp_integer=99)
        image=users.test_image.url
        response_url = image
        image=image.replace("/","\\")
        image=os.path.join(os.path.dirname(BASE_DIR), '') + image
        #image=r"C:\Users\lenovo\OneDrive\Desktop\Face-Recognition\crime_detection" + image

        encodeList=[]
        id_list=[]
        for users in CriminalDetail.objects.all():
            print(type(users.encodings))
            encodings= eval(users.encodings[7:-2])
            encodeList.append(encodings)
            id_list.append(users.id)
        
        image_read=cv2.imread(image)
        image_read=cv2.cvtColor(image_read,cv2.COLOR_BGR2RGB)

        faces=face_recognition.face_locations(image_read)
        encodes=face_recognition.face_encodings(image_read,faces)
        names=[]

        criminal.delete()

        for encodeFace,faceLoc in zip(encodes,faces):
            matches=face_recognition.compare_faces(encodeList,encodeFace)
            faceDis=face_recognition.face_distance(encodeList,encodeFace)
            print(faceDis)            
            matchIndex=np.argmin(faceDis)
            print(matchIndex)

            if matches[matchIndex]:
                name=CriminalDetail.objects.get(id=id_list[matchIndex]).criminal_name.upper()
                names.append(name)
                print(name)
                y1,x2,y2,x1=faceLoc
                cv2.rectangle(image_read,(x1,y1),(x2,y2),(0,255,0),2)
                cv2.rectangle(image_read,(x1,y2),(x2,y2),(0,255,0),cv2.FILLED)
                cv2.putText(image_read,name,(x1,y2+20),cv2.FONT_HERSHEY_DUPLEX,1,(255,0,0),2)
                # image_read=cv2.cvtColor(image_read,cv2.COLOR_RGB2BGR)

            else:
                return Response({"status": "Match not found", "data": "Match Not Found"}, status=status.HTTP_200_OK)

        # cv2.imshow('Image', image_read)
        image_read=cv2.cvtColor(image_read,cv2.COLOR_RGB2BGR)
        cv2.imwrite(image, image_read)
        cv2.waitKey(0)
        return Response({"status": "Match found", "data": names, "url" : response_url}, status=status.HTTP_200_OK)
