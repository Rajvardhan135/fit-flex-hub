from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('like_exercise/', views.like_exercise, name='like_exercise'),
    path('unlike_exercise/', views.unlike_exercise, name='like_exercise'),
    path('get_liked_exercise/', views.getLikedExercise, name='get_like_exercise'),
    path('get_progress/', views.getProgress, name='get_progress'),
    path('update_progress/', views.update_progress, name='update_progress'),
]
