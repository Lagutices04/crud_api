import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TareaPage } from './pages/TareaPage'
import { TareaFormPage } from './pages/TareaFormPage'
import { Navigation } from './components/Navigation'
function App() {
  return (
    <BrowserRouter>
    <Navigation/> 
      <Routes>
        <Route path='/' element={<Navigate to="/tareas"/>} />
        <Route path='/tareas' element={<TareaPage />} />
        <Route path='/tareas-creadas' element={<TareaFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
//en el primer route enrrutamos para que automaticamente se vaya al apartado de tareas
// y en los otros dos enrrutamos el apartado de tareas y la creacion de tareas