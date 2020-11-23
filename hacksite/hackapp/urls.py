from django.urls import path
from . import views

app_name = 'hackapp' # in case we have another app that also has a path called signup, etc, to help differentiate, used in our index.html file when we do hackapp:signup to route
urlpatterns = [
    path('', views.index, name="index"),
    path('signup/', views.signup, name="signup"),
    path('bracket/<str:tournament_url>/', views.bracket, name="bracket"),
    path('create/', views.create, name="create")
]