from django.db import models

# Create your models here.
class Tournament:
    def __init__(self, name, id, url):
        self.name = name
        self.id = id
        self.url = url
