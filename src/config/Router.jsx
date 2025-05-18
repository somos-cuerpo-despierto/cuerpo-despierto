import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import QuienesSomos from "../pages/QuienesSomos";
import QueHacemos from'../pages/QueHacemos';
import Contacto from '../pages/Contacto';



export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienesSomos" element={<QuienesSomos />} />
            <Route path="/queHacemos" element={<QueHacemos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/iniciarSesion" element={<div>Iniciar Sesión</div>} />
        </Routes>
        </BrowserRouter>
    );
    }

