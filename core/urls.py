from django.urls import path
from .views import dashboard
from .views_auth import login_view, logout_view

urlpatterns = [
    path("", dashboard, name="dashboard"),
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
]
