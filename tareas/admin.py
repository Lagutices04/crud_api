from django.contrib import admin

from .models import Task
#importamos el modulo de tareas

from .models import ArchivosAdjuntos


admin.site.register(Task)
#añadimos el modulo de tareas en el panel de administracion de tareas

admin.site.register(ArchivosAdjuntos)
#aca subiremos archivos de nuestro pc