from django.db import models

# Create your models here.
class SchoolProfile(models.Model):
    school_name = models.CharField(max_length=100)
    history = models.TextField()
    vision = models.TextField()
    mission = models.JSONField()
    welcome_message = models.TextField() #sambutan/kata pengantar untuk pengunjung website
    headmaster_name = models.CharField(max_length=100)
    headmaster_image = models.ImageField(upload_to='headmaster_images/', blank=True, null=True)
    banner_image = models.ImageField(upload_to='school_banners/', blank=True, null=True)
    address = models.TextField()
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    socials = models.JSONField()
    maps_embed = models.URLField(blank=True, null=True)
    updated_by = models.ForeignKey('users.User', on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'School Profile - ' + self.school_name

    class Meta:
        ordering = ['-created_at']