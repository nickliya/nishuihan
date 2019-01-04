# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


# Create your models here.

class Skill(models.Model):
    skillName = models.CharField(max_length=64)
    skillPrice = models.FloatField()
    roleId = models.IntegerField(default=1)

    class Meta:
        db_table = "skill"  # 自定义表的名称
        app_label = "nishuihan"  # 定义是哪个app


class GoldPrice(models.Model):
    date = models.DateTimeField()
    copperRatio = models.FloatField()
    yuanbaoRatio = models.FloatField()

    class Meta:
        db_table = "goldPrice"  # 自定义表的名称
        app_label = "nishuihan"  # 定义是哪个app