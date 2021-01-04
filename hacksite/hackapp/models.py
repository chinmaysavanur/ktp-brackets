from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Tournament:
    def __init__(self, name, id, url):
        self.name = name
        self.id = id
        self.url = url
class Player(models.Model):
	# Player inherits from Django's built-in user model
	# The primary key for a player will be their username (phone number)
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	points = models.IntegerField(blank=True, default=0)
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
    # store tournament or game object (tournament id) paired with participant id thats returned on sign up
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Player.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.player.save()
#class Leaderboard(models.Model):
    # Member variables to store the current players with the most and least accumulated points
    #firstPlace = models.ForeignKey(Player, null=True, blank=True, on_delete=models.CASCADE)
    #secondPlace = models.ForeignKey(Player, null=True, blank=True, on_delete=models.CASCADE)
    #thirdPlace = models.ForeignKey(Player, null=True, blank=True, on_delete=models.CASCADE)
    #lastPlace = models.ForeignKey(Player, null=True, blank=True, on_delete=models.CASCADE)

#class Game(models.Model):
    # Insert code related to a game
