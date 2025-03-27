from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='accounts_register'),
    path('login/', views.user_login, name='accounts_login'),
    path('logout/', views.logout, name='accounts_logout'),
]