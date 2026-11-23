from django.db import models

# Create your models here.
class Teacher(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    position = models.CharField(max_length=100)
    image = models.ImageField(upload_to='teacher_images/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0, null=False, blank=False)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name