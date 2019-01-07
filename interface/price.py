# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from nishuihan import models
from django.forms.models import model_to_dict
from django.core import serializers  # query序列化
import json


def savePrice(request):
    # message = request.POST
    message = request.body
    if message == "":
        return JsonResponse({"resultcode": "1", "message": "传入值为空"})
    jsonMsg = json.loads(message)
    id = jsonMsg["key"]
    date = jsonMsg["date"]
    copperRatio = jsonMsg["copperRatio"]
    yuanbaoRatio = jsonMsg["yuanbaoRatio"]
    try:
        data = models.GoldPrice.objects.filter(date=date)
        if data.exists():
            data.update(copperRatio=copperRatio, yuanbaoRatio=yuanbaoRatio)
            return JsonResponse({"resultcode": "0", "message": "修改成功"})
        else:
            data.create(date=date, copperRatio=copperRatio, yuanbaoRatio=yuanbaoRatio)
            return JsonResponse({"resultcode": "0", "message": "新增成功"})
    except Exception as msg:
        return JsonResponse({"resultcode": "1", "message": "传入参数格式不对"})


def deletePrice(request):
    message = request.body
    jsonMsg = json.loads(message)
    date = jsonMsg["date"]
    try:
        models.GoldPrice.objects.filter(date=date).delete()
    except Exception as msg:
        print(msg.message)
        return JsonResponse({"resultcode": "1", "message": "传入参数格式不对"})

    return JsonResponse({"resultcode": "0", "message": "删除成功"})


def getPrice(request):
    message = request.GET
    data = models.GoldPrice.objects.all()
    msg = []
    for i in data:
        datadic = model_to_dict(i)
        a = datadic["date"].strftime("%Y-%m-%d %H:%M:%S")
        datadic["date"] = a
        msg.append(datadic)
    return JsonResponse({"resultcode": "0", "message": msg})
