import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import QuienesSomos from "../pages/QuienesSomos";
import QueHacemos from'../pages/QueHacemos';
import Contacto from '../pages/Contacto';
import IniciarSesion from '../pages/IniciarSesion';
import { useAuth } from "../config/AuthContext";
import { Navigate } from "react-router-dom";
import Clases from '../pages/Clases';
import ReservaClases from '../pages/ReservaClases';
import AdminPanel from '../pages/AdminPanel';

function PrivateRoute({ children }) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/iniciarSesion" />;
    return children;
}

function AdminRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/iniciarSesion" />;
  if (user.rol !== "admin") return <Navigate to="/" />;
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
                    path="/clases"
                    element={
                        <PrivateRoute>
                            <Clases />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/reserva-clases"
                    element={
                        <PrivateRoute>
                            <ReservaClases />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <AdminRoute>
                            <AdminPanel />
                        </AdminRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

