import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";

const loginFields = [
  {
    name: "email",
    label: "Correo electrónico",
    type: "email",
    required: true,
    validation: {
      required: "El correo es obligatorio",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Introduce un correo electrónico válido",
      },
    },
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    required: true,
    validation: {
      required: "La contraseña es obligatoria",
      minLength: { value: 8, message: "Mínimo 8 caracteres" },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        message: "Debe tener mayúscula, minúscula, número y símbolo",
      },
    },
    helperText: "Mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.",
  },
];

const IniciarSesion = () => {
  const onLogin = (data) => {
    // Aquí va la lógica de autenticación
    alert("Sesión iniciada para: " + data.email);
  };

  return (
    <>
      <Navbar />
      <Form
        fields={loginFields}
        onSubmit={onLogin}
        title="Iniciar Sesión"
        btnText="Iniciar sesión"
      />
      <Footer />
    </>
  );
};

export default IniciarSesion;