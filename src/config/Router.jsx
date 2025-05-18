import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';



export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienesSomos" element={<div>¿Quiénes Somos?</div>} />
            <Route path="/queHacemos" element={<div>¿Qué Hacemos?</div>} />
            <Route path="/contacto" element={<div>Contacto</div>} />
            <Route path="/iniciarSesion" element={<div>Iniciar Sesión</div>} />
        </Routes>
        </BrowserRouter>
    );
    }

