# Generated by Django 4.1.4 on 2023-01-29 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('findin', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='annoncemodel',
            name='date',
            field=models.DateField(null=True),
        ),
    ]