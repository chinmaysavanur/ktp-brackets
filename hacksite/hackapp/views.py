from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from . import models
import requests

participant_id = 134634051

# Create your views here.
def index(request):
    response = requests.get(f'https://api.challonge.com/v1/tournaments.json?api_key={ settings.API_KEY }')
    tournaments = response.json()
    tournamentsList = []

    for tournament in tournaments: 
        tournamentsList.append(models.Tournament(
            tournament['tournament']['name'], 
            tournament['tournament']['id'], 
            tournament['tournament']['url'])
        )
        
    context = { 'tournaments': tournamentsList }

    return render(request, 'hackapp/index.html', context)

def signup(request, tournament_url):
    context = { 
        "api_key": settings.API_KEY,
        "tournament_url": tournament_url 
        }
    return render(request, 'hackapp/signup.html', context)

def bracket(request, tournament_url): 
    state = 'open'

    response = requests.get(f'https://api.challonge.com/v1/tournaments/{ tournament_url }/matches.json?api_key={ settings.API_KEY }&state={ state }&participant_id={ participant_id }')
    matches = response.json()

    matchesList = []

    for match in matches:
        matchesList.append(match['match'])

    context = { 
        "tournament_url": tournament_url, 
        "participant_id": participant_id,
        "matches": matchesList
        }
    return render(request, 'hackapp/bracket.html', context)

def create(request): 
    context = { "api_key": settings.API_KEY }
    return render(request, 'hackapp/create.html', context)
    