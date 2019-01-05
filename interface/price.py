# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from nishuihan import models
from django.forms.models import model_to_dict
from django.core import serializers  # query序列化

def getPrice(request):
    message = request.GET
    data = models.GoldPrice.objects.all()
    # data = serializers.serialize('json', data)
    msg = []
    for i in data:
        datadic = model_to_dict(i)
        a = datadic["date"].strftime("%Y-%m-%d %H:%M:%S")
        datadic["date"] = a
        msg.append(datadic)
    return JsonResponse({"resultcode": "1", "message": msg})


