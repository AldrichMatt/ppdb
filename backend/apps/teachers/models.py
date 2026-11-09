from django.db import models

# Create your models here.
class Teacher(models.Model):
    employee_number = models.CharField(max_length=30, unique=True)
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    