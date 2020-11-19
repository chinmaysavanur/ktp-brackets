from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Player(models.Model):
	    user = models.OneToOneField(User, on_delete=models.CASCADE)
		#phoneNumber = models.IntegerField(primary_key = true, help_text="Phone number that we store for each user")
#		name = models.TextField(default = "Chinmay ;)", help_text="first and last name to Display")
		pledgeClass = models.TextField(default="Eldon", help_text="name of the pledge class a user belongs to")
		totalPoints = models.IntegerField(help_text="points that a player has accumulated")
		#add in some code to indicate what games they are playing, please
		#password = models.TextField(default="", help_text="password for a given user")
