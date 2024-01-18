from django.db import models

# Create your models here.

class Task(models.Model):
    #pide que de la clase models HEREDE  a models
    tittle = models.CharField(max_length=200)
    #cadena de texto limitada
    description = models.TextField(blank=True)
    #cadena de texto extensa que guardara tambien el campo vacio por eso su estado inicial esta en TRUE
    done = models.BooleanField(default=False)

    def __str__(self) :
        return self.tittle
    
    # creamos un metodo string 
    # el self quiere decir que es un metodo que puede acceder a la misma instancia del objeto
    # este metodo nos mostrara el titulo de cada tarea que se añada en el panel de administracion

class ArchivosAdjuntos(models.Model):
    nombre = models.CharField(max_length=255)
    archivos = models.FileField(upload_to='archivos_adjuntos/')

    def __str__(self) :
        return self.nombre
    