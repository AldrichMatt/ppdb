from django.db import models

# Create your models here.
class VisitorStats(models.Model):
    date = models.DateField(auto_now_add=True)
    page = models.CharField(max_length=255) #contoh : /beranda
    amount = models.PositiveIntegerField(default=1)
    
    def __str__(self):
        return f"{self.amount} visitor - {self.page} ({self.date.strftime('%Y-%m-%d')})"

    class Meta: 
        ordering = ['-date', '-amount']