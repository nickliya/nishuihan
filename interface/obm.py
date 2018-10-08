# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse


def obm(request):
    return render(request, 'obm.html')


