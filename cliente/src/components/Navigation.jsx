import { Link } from "react-router-dom"
 export function Navigation () {
    return (
        <div>
            <Link to={"/tareas"}>
                <h1>tareas app</h1>
            </Link>
            <Link to={"/tareas-creadas "}>task create</Link>
            </div>
    )
}
