from django.urls import path
from . import views

urlpatterns = [
    # path('getlivebusyness/<path:url>/', views.get_live_busyness, name='get live busyness'),
    path('getpopulartimes/<path:url>/', views.get_popular_times, name='get popular times'),
    path('getlivebusyness/<path:url>/',views.get_live_busyness, name='get popular times'),
    path('getfullinfo/<path:url>/',views.get_full_info, name='get full info'),
]