from django.db import models

# Create your models here.
class Program(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50,
        choices=[
            ('program', 'Program'), 
            ('ekstrakurikuler', 'Ekstrakurikuler')
        ], default='program')
    description = models.TextField()
    image = models.ImageField(upload_to='program_images/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name