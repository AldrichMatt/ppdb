from django.db import models

# Create your models here.
class Logs(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.SET_NULL, null=True, blank=True)
    action = models.CharField(max_length=255)
    object_type = models.CharField(max_length=50)
    object_id = models.PositiveIntegerField()
    old_data = models.JSONField(blank=True, null=True)
    new_data = models.JSONField(blank=True, null=True)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Log - {self.user.username}({self.created_at.strftime('%Y-%m-%d %H:%M:%S')})"

    class Meta:
        ordering = ['-created_at']