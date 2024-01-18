
from rest_framework import viewsets
from .serializer import TaskSerializer, ArchivosSerializer

from .models import Task,ArchivosAdjuntos



# Create your views here.

class TasksViews(viewsets.ModelViewSet):
   serializer_class = TaskSerializer
   #con esta clASE se van a saber que datos van a ser consultados y podra generar todo el crud
   queryset = Task.objects.all()


class ArchivosViews(viewsets.ModelViewSet):
   serializer_class = ArchivosSerializer
   queryset = ArchivosAdjuntos.objects.all()

