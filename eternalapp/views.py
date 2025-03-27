from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404

def home(request):
    return render(request, 'home.html')

def index(request):
    return render(request, 'index.html')

def user_login(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')

def logout_view(request):
    return render(request, 'logout.html')

def computer_courses(request):
    return render(request, 'computer_courses.html')

def data_structures(request):
    return render(request, 'data_structures.html')

def algorithms(request):
    return render(request, 'algorithms.html')

def jee(request):
    return render(request, 'jee.html')

def gate(request):
    return render(request, 'gate.html')

def quiz(request):
    return render(request, 'quiz.html')

def sample_papers(request):
    return render(request, 'sample_papers.html')

