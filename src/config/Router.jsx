import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import QuienesSomos from "../pages/QuienesSomos";
import QueHacemos from'../pages/QueHacemos';
import Contacto from '../pages/Contacto';
import IniciarSesion from '../pages/IniciarSesion';
import ReservaClases from '../pages/ReservaClases';
import { useAuth } from "../config/AuthContext";
import { Navigate } from "react-router-dom";

// Componente para proteger rutas privadas
function PrivateRoute({ children }) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/iniciarSesion" />;
    return children;
}

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quienesSomos" element={<QuienesSomos />} />
                <Route path="/queHacemos" element={<QueHacemos />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/iniciarSesion" element={<IniciarSesion />} />
                <Route
                    path="/reserva-clases"
                    element={
                        <PrivateRoute>
                            <ReservaClases />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

