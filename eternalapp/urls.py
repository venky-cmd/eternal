from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('gate/', views.gate, name='gate'),
    path('jee/', views.jee, name='jee'),
    path('computer_courses/', views.computer_courses, name='computer_courses'),
    path('quiz/', views.quiz, name='quiz'),
    path('login/', views.user_login, name='user_login'),
    path('register/', views.register, name='register'),
    path('data_structures/', views.data_structures, name='data_structures'),
    path('algorithms/', views.algorithms, name='algorithms'),
    path('sample_Papers/', views.sample_papers, name='sample_papers'),
]
