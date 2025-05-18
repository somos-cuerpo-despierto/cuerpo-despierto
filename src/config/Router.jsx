import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import QuienesSomos from "../pages/QuienesSomos";
import QueHacemos from'../pages/QueHacemos';
import Contacto from '../pages/Contacto';
import IniciarSesion from '../pages/IniciarSesion';
import { AuthProvider } from './AuthContext';




export default function Router() {
    return (
        <AuthProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienesSomos" element={<QuienesSomos />} />
            <Route path="/queHacemos" element={<QueHacemos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/iniciarSesion" element={<IniciarSesion /> } />
        </Routes>
        </BrowserRouter>
        </AuthProvider>
    );
    }

