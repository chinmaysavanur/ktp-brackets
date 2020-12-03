from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

from . import models
import requests

participant_id = 134634051
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.shortcuts import render, redirect
from .forms import NewUserForm, NewPlayerForm

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

def dashboard(request):
    return render(request, 'hackapp/dashboard.html')

def usersignup(request):
    if request.method == 'POST':
        user_form = NewUserForm(request.POST, instance=request.user)
        player_form = NewPlayerForm(request.POST, instance=request.user.player)
        if user_form.is_valid() and player_form.isvalid():
            user_form.save()
            player_form.save()

            username = user_form.cleaned_data.get('username')
            raw_password = user_form.cleaned_data.get('password1')
            first_name = user_form.cleaned_data.get('first_name')
            last_name = user_form.cleaned_data.get('last_name')
            email = user_form.cleaned_data.get('email')

            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('hackapp:dashboard')
    else:
        user_form = NewUserForm()
        player_form = NewPlayerForm()
    return render(request, 'hackapp/usersignup.html', {
        'user_form': user_form, 
        'player_form': player_form
    })

def userlogin(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=raw_password)
            if user is not None:
                login(request, user)
                #messages.info(request, f"You are now logged in as {username}")
                return redirect('hackapp:dashboard')
    else:
        form = AuthenticationForm()

    return render(request, 'hackapp/userlogin.html', {'form': form})