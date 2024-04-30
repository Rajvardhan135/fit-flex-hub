from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .validations import custom_validation, validate_email, validate_password
import json
from .models import AppUserModel
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password, check_password

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        username = data.get('username')
        password = data.get('password')
        if not email or not username or not password:
            return JsonResponse({'error': 'Email, username, and password are required'}, status=400)
        # Check if the username or email already exists
        if AppUserModel.objects.filter(username=username).exists() or AppUserModel.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Username or email already exists'}, status=400)
        # Create the user
        hashed_password = make_password(password)
        user = AppUserModel.objects.create(username=username, email=email, password=hashed_password)
        return JsonResponse({'message': 'User registered successfully'}, status=201)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

@csrf_exempt  
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        # Authenticate user
        user = authenticate(request, username=username, password=password)
        print(f'users {user}')

        if user is not None:
            return JsonResponse({'username': username})
        else:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def logout_view(request):
    logout(request)
    return JsonResponse({"message": "Logout successful"})

@csrf_exempt
def like_exercise(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        exercise_id = data.get('exerciseId')
        username = data.get('username')

        try:
            user = AppUserModel.objects.get(username=username)
        except AppUserModel.DoesNotExist:
            return JsonResponse({'error': 'User does not exist'}, status=400)

        if exercise_id is None:
            return JsonResponse({'error': 'Exercise Id is required'}, status=400)

        try:
            # Ensure user is not None before modifying liked_workout
            if user is not None:
                exercise_id = int(exercise_id)
                # Initialize liked_workout as an empty list if it's None
                if user.liked_workout is None:
                    user.liked_workout = []
                user.liked_workout.append(exercise_id)
                user.save()
                return JsonResponse({'message': f'Exercise {exercise_id} successfully added to the array field'})
            else:
                return JsonResponse({'error': 'User does not exist'}, status=400)
        except ValueError:
            return JsonResponse({'error': 'Invalid exercise id format'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
    
from .models import AppUserModel

@csrf_exempt
def unlike_exercise(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        exercise_id = data.get('exerciseId')
        username = data.get('username')

        try:
            user = AppUserModel.objects.get(username=username)
        except AppUserModel.DoesNotExist:
            return JsonResponse({'error': 'User does not exist'}, status=400)

        if exercise_id is None:
            return JsonResponse({'error': 'Exercise Id is required'}, status=400)

        try:
            if user is not None:
                exercise_id = int(exercise_id)
                if user.liked_workout is not None and exercise_id in user.liked_workout:
                    user.liked_workout.remove(exercise_id)
                    user.save()
                    return JsonResponse({'message': f'Exercise {exercise_id} successfully removed from the array field'})
                else:
                    return JsonResponse({'error': f'Exercise {exercise_id} not found in the array field'}, status=404)
            else:
                return JsonResponse({'error': 'User does not exist'}, status=400)
        except ValueError:
            return JsonResponse({'error': 'Invalid exercise id format'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


@csrf_exempt
def getLikedExercise(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        try:
            user = AppUserModel.objects.get(username=username)
        except AppUserModel.DoesNotExist:
            return JsonResponse({'error': 'User does not exist'}, status=400)
        if user is not None:
            if user.liked_workout is not None:
                return JsonResponse({'liked_workout': user.liked_workout})
            else:
                return JsonResponse({'liked_workout': []})
        else:
            return JsonResponse({'error': 'User does not exist'}, status=400)
        
    else:
        return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)
    
@csrf_exempt
def getProgress(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        try:
            user = AppUserModel.objects.get(username=username)
        except AppUserModel.DoesNotExist:
            return JsonResponse({'error': 'User does not exist'}, status=400)
        if user is not None:
            return JsonResponse({'calories': user.calories_burnt, 'hrs': user.hrs_spend})
        else:
            return JsonResponse({'error': 'User does not exist'}, status=400)
        
    else:
        return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)

@csrf_exempt 
def update_progress(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        calories = data.get('calories')
        hrs = data.get('hrs')
        username = data.get('username')

        try:
            user = AppUserModel.objects.get(username=username)
        except AppUserModel.DoesNotExist:
            return JsonResponse({'error': 'User does not exist'}, status=400)
        
        try:
            if user is not None:
                user.calories_burnt += calories
                user.hrs_spend += hrs
                user.save()
                return JsonResponse({'message': 'Succesfully added progress'})
            else:
                return JsonResponse({'error': 'User does not exist'}, status=400)
        except ValueError:
            return JsonResponse({'error': 'Invalid exercise id format'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
    
