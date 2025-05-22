import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL = "http://localhost:8080";

function ReservaClases() {
  const [clases, setClases] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setMensaje('Debes iniciar sesión');
      return;
    }
    fetch(`${API_URL}/api/clases`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status === 401) throw new Error('Sesión expirada');
        return res.json();
      })
      .then(data => setClases(data))
      .catch((err) => setMensaje(err.message || 'Error al cargar las clases'));
  }, [token]);

  const reservar = async (claseId) => {
    setMensaje('');
    try {
      const res = await fetch(`${API_URL}/api/reservas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ claseId })
      });
      if (res.ok) {
        setMensaje('¡Reserva realizada con éxito!');
      } else if (res.status === 401) {
        setMensaje('Sesión expirada, vuelve a iniciar sesión');
      } else {
        setMensaje('No se pudo realizar la reserva');
      }
    } catch {
      setMensaje('Error de conexión');
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <h2>Reservar Clases</h2>
        {mensaje && <p>{mensaje}</p>}
        <ul>
          {clases.map(clase => (
            <li key={clase.id}>
              <strong>{clase.nombre}</strong> - {clase.descripcion} ({clase.durationMin} min)
              <button onClick={() => reservar(clase.id)}>Reservar</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ReservaClases;