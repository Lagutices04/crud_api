from rest_framework import serializers
#permitira seleccionar los campos
from .models import Task
from .models import ArchivosAdjuntos


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class ArchivosSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArchivosAdjuntos
        fields = '__all__'

        #creamos un serializador que pasara los datos de python a json