from django.db import models

# Create your models here.
class Media(models.Model):
    path = models.FileField(upload_to='media/')
    filename = models.CharField(max_length=255)
    mime_type = models.CharField(max_length=50)
    size = models.PositiveIntegerField()
    dimensions = models.CharField(max_length=50, blank=True, null=True)
    alt_text = models.CharField(max_length=200, blank=True, null=True)
    order = models.PositiveIntegerField(default=0, null=False, blank=False)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.filename