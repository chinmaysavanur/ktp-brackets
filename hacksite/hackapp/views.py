from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

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

def usersignup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'hackapp/usersignup.html', {'form': form})
