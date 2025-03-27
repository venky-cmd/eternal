from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth
from .models import Profile
from django.contrib.auth import authenticate, login

# Create your views here.
def register(request):
    if request.method == 'POST':
        firstName = request.POST['firstName']
        lastName = request.POST['lastName']
        Username = request.POST['Username']
        email = request.POST['email']
        phone = request.POST['phone']
        password = request.POST['password']
        confirmPassword = request.POST['confirmPassword']

        # Validate all fields are filled
        if not all([firstName, lastName, Username, email, phone, password, confirmPassword]):
            messages.error(request, 'All fields are required')
            return render(request, 'login.html')

        if password == confirmPassword:
            if User.objects.filter(username=Username).exists():
                messages.error(request, 'Username already exists')
                return render(request, 'login.html')
            elif User.objects.filter(email=email).exists():
                messages.error(request, 'Email already exists')
                return render(request, 'login.html')
            elif Profile.objects.filter(phone=phone).exists():
                messages.error(request, 'Mobile number already exists')
                return render(request, 'login.html')
            else:    
                try:
                    user = User.objects.create_user(
                        username=Username, 
                        first_name=firstName, 
                        last_name=lastName, 
                        email=email, 
                        password=password
                    )
                    profile = Profile.objects.create(user=user, phone=phone)
                    auth.login(request, user)
                    messages.success(request, 'Account Created Successfully')
                    return redirect('home')
                except Exception as e:
                    messages.error(request, 'Error creating account. Please try again.')
                    return render(request, 'login.html')
        else:
            messages.error(request, 'Passwords do not match')
            return render(request, 'login.html')
    return render(request, 'login.html')

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not username or not password:
            messages.error(request, 'Please enter both username and password')
            return render(request, 'login.html')

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'Login successful!')
            return redirect('home')  # Replace 'home' with the name of your homepage URL
        else:
            messages.error(request, 'Invalid username or password')
            return render(request, 'login.html')

    return render(request, 'login.html')

def logout(request):
    auth.logout(request)
    messages.success(request, 'Logged out successfully')
    return redirect('home')

