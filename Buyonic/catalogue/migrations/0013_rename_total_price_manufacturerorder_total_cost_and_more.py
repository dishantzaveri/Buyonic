# Generated by Django 4.0 on 2021-12-20 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0012_manufacturerorder_discount_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='manufacturerorder',
            old_name='total_price',
            new_name='total_cost',
        ),
        migrations.AddField(
            model_name='manufacturerorder',
            name='confirmed',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='manufacturerorder',
            name='final_payment',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='manufacturerorder',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
    ]
