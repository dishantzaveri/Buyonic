# Generated by Django 4.0 on 2021-12-19 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_alter_myuser_address_alter_myuser_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='contact',
            field=models.BigIntegerField(null=True, unique=True),
        ),
    ]