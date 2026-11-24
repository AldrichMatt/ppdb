from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    slug = models.SlugField(max_length=60, unique=True, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']