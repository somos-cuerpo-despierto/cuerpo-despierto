import { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";

// Campos base reutilizables
const emailField = {
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
};

const passwordValidation = {
  required: "La contraseña es obligatoria",
  minLength: { value: 8, message: "Mínimo 8 caracteres" },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    message: "Debe tener mayúscula, minúscula, número y símbolo",
  },
};

const passwordField = {
  name: "password",
  label: "Contraseña",
  type: "password",
  required: true,
  validation: passwordValidation,

};

const loginFields = [emailField, passwordField];

const registerFields = [
  {
    name: "nombre",
    label: "Nombre",
    required: true,
    validation: {
      required: "El nombre es obligatorio",
      minLength: { value: 2, message: "Mínimo 2 caracteres" },
      pattern: {
        value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
        message: "Solo letras y espacios",
      },
    },
  },
  {
    name: "apellido",
    label: "Apellido",
    required: true,
    validation: {
      required: "El apellido es obligatorio",
      minLength: { value: 2, message: "Mínimo 2 caracteres" },
      pattern: {
        value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
        message: "Solo letras y espacios",
      },
    },
  },
  emailField,
  {
    ...passwordField,
    label: "Crear contraseña",
  },
];

const IniciarSesion = () => {
  const [tab, setTab] = useState(0);

  const onLogin = (data) => {
    alert("Sesión iniciada para: " + data.email);
  };

  const onRegister = (data) => {
    alert("Usuario registrado: " + data.email);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Box
          sx={{
            flex: 1,
            maxWidth: 900,
            mx: "auto",
            mt: 8,
            mb: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            alignItems: "flex-start",
            color: "#000",
          }}
        >
          <Paper sx={{ flex: 1, p: 3, minWidth: 320 }}>
            <Tabs value={tab} onChange={(_, v) => setTab(v)} centered>
              <Tab label="Iniciar Sesión" />
              <Tab label="Registrarse" />
            </Tabs>
            {tab === 0 && (
              <Form
                fields={loginFields}
                onSubmit={onLogin}
                title="Iniciar Sesión"
                btnText="Iniciar sesión"
              />
            )}
            {tab === 1 && (
              <>
                <Form
                  fields={registerFields}
                  onSubmit={onRegister}
                  title="Registrarse"
                  btnText="Registrarse"
                />
                <Typography sx={{ fontSize: 13, mt: 1, textAlign: "center", color: "#666" }}>
                  La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.
                </Typography>
              </>
            )}
          </Paper>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default IniciarSesion;