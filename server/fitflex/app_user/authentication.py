from django.contrib.auth.backends import BaseBackend
from .models import AppUserModel

class AppUserModelBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None):
        print(username, password)
        try:
            user = AppUserModel.objects.get(username=username)
            print(user)
            print(user.check_password(password))
            if user.check_password(password):
                return user
        except AppUserModel.DoesNotExist:
            # No user found with the provided username
            pass
        return None
