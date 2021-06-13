from django.db import models


class UserModel(models.Model):
    objects = models.Manager()
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
