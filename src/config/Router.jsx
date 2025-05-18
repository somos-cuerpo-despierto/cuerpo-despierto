import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import QuienesSomos from "../pages/QuienesSomos";



export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienesSomos" element={<QuienesSomos />} />
            <Route path="/queHacemos" element={<div>¿Qué Hacemos?</div>} />
            <Route path="/contacto" element={<div>Contacto</div>} />
            <Route path="/iniciarSesion" element={<div>Iniciar Sesión</div>} />
        </Routes>
        </BrowserRouter>
    );
    }

