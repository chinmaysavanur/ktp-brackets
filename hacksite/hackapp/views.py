from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import requests

# Create your views here.
def index(request):
    response = requests.get(f'https://api.challonge.com/v1/tournaments.json?api_key={ settings.API_KEY }')
    tournaments = response.json()
    tournamentsList = []

    for tournament in tournaments: 
        tournamentsList.append({
                "name": tournament['tournament']['name'],
                "url": tournament['tournament']['url']
            })

    context = { 'data': tournamentsList }

    return render(request, 'hackapp/index.html', context)

def signup(request, tournament_url):
    context = { 
        "api_key": settings.API_KEY,
        "tournament_url": tournament_url 
        }
    return render(request, 'hackapp/signup.html', context)

def bracket(request, tournament_url): 
    context = { "tournament_url": tournament_url }
    return render(request, 'hackapp/bracket.html', context)

def create(request): 
    context = { "api_key": settings.API_KEY }
    return render(request, 'hackapp/create.html', context)
    