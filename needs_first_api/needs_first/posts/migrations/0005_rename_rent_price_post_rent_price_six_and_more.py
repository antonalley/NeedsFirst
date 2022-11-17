# Generated by Django 4.1.3 on 2022-11-13 00:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_alter_post_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='rent_price',
            new_name='rent_price_six',
        ),
        migrations.RemoveField(
            model_name='post',
            name='rent_duration',
        ),
        migrations.AddField(
            model_name='post',
            name='rent_price_twelve',
            field=models.FloatField(default=0.0),
        ),
        migrations.AlterField(
            model_name='post',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
