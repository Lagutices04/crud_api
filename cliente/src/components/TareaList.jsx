import { useEffect, useState } from "react"
import { getAllTareas } from "../api/TareaApi";
import { TareaCard } from "./TareaCard";


export function TareaList() {
    const [tareas, setTareas] = useState([])

    useEffect(() => {
        async function loadTareas() {

            const res = await getAllTareas();
            //console.log(res.data);
            setTareas(res.data)
        }
        loadTareas();
        //esto se ejecuenta mientras esta haciendo otra operacion
        //el set tareas me mostrara el objeto data
    }, []);

    return (
        <div>
            {tareas.map(tarea => (
                <TareaCard key={tarea.id} tarea={tarea} />
            ))}

        </div>
    )
}
