from django.urls import path
from .views import CriminalDetailViewSet, ImageMatch

urlpatterns=[
    path('criminal-details/', CriminalDetailViewSet.as_view()),
    path('criminal-details/<int:id_no>/', CriminalDetailViewSet.as_view()),
    path('match-image/', ImageMatch.as_view()),
]