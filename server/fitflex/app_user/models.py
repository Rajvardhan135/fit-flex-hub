from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.hashers import check_password

class AppUserModel(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    username = models.CharField(max_length=150, unique=False)
    liked_workout = ArrayField(models.IntegerField(), blank=True, null=True)
    calories_burnt = models.IntegerField(default=0)
    hrs_spend = models.IntegerField(default=0)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.email