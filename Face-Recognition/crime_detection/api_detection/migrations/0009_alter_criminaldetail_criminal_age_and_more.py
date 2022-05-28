# Generated by Django 4.0.4 on 2022-05-15 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_detection', '0008_alter_criminaldetail_criminal_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='criminaldetail',
            name='criminal_age',
            field=models.IntegerField(blank=True, max_length=4, null=True),
        ),
        migrations.AlterField(
            model_name='criminaldetail',
            name='encodings',
            field=models.CharField(blank=True, max_length=6000, null=True),
        ),
    ]