from django.db import models
from django.contrib.auth.models import User

class Player(models.Model):
	# Player inherits from Django's built-in user model
	# The primary key for a player will be their username (phone number)
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	points = models.IntegerField(blank=True)
    # Player selects their pledge class
	ELDON = 'Eldon'
	OMICRON = 'Omicron'
	PI = 'Pi'
	RHO = 'Rho'
	SIGMA = 'Sigma'
	PLEDGE_CLASS_CHOICES = (
		(ELDON, 'Eldon'),
		(OMICRON, 'Omicron'),
		(PI, 'Pi'),
		(RHO, 'Rho'),
		(SIGMA, 'Sigma'),
	)
	pledgeClass = models.TextField(
		choices=PLEDGE_CLASS_CHOICES,
		default=ELDON,
	)
	
#class Leaderboard(models.Model):
    # Member variables to store the current players with the most and least accumulated points
    #firstPlace = models.ForeignKey(Player, null=True, blank=True, on_delete=models.CASCADE)
    #secondPlace = models.ForeignKey(Player, null=True, blank=True, on_delete=models.CASCADE)
    #thirdPlace = models.ForeignKey(Player, null=True, blank=True, on_delete=models.CASCADE)
    #lastPlace = models.ForeignKey(Player, null=True, blank=True, on_delete=models.CASCADE)

#class Game(models.Model):
    # Insert code related to a game