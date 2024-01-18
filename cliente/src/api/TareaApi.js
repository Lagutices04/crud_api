import axios from 'axios'
 const  TareaApi = axios.create({
    baseURL: 'http://localhost:8000/tareas/api/v1/tareas/'
})
export const getAllTareas = () => TareaApi.get("/");
  
export const createTarea = (tarea) => TareaApi.post("/",tarea);
