from django.db import models


class Order(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    pizza_type = models.CharField(max_length=50)
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.pizza_type}"
