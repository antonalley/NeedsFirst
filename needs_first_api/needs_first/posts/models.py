from django.db import models
import os
# Create your models here.

def postImageFile(instance, filename):
    # return f"{os.getcwd()}/postsImages/{instance.id}-{filename}"
    return '/'.join(['images', str(instance.owner_name), f"{instance.id}-{filename}"])

class Post(models.Model):
    category_options = [
        ('Crutches','Crutches'),
        ('Walker','Walker'),
        ('Scooter','Scooter'),
        ('Wheelchair','Wheelchair'),
        ('Hospital bed','Hospital bed'),
        ('CPAP Machine','CPAP Machine'),
        ('Toiletting','Toiletting'),
        ('Baby supplies','Baby supplies'),
        ('Recliners','Recliners'),
    ]
    image = models.ImageField('images', upload_to=postImageFile)
    category = models.CharField(max_length=100, choices=category_options)
    buy_price = models.FloatField()
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    rent_price_six = models.FloatField()
    rent_price_twelve = models.FloatField(default=0.0)
    owner_name = models.CharField(max_length=100, default="")
    owner_number = models.CharField(max_length=10, default="")
    city = models.CharField(max_length=150, default="")