import { useState } from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useAuth } from "../config/AuthContext";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../api/axios";

const IniciarSesion = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  const onLogin = async (data) => {
    try {
      const result = await authenticateUser(data.email, data.password);

      if (result.success) {
       
        const usuario = { email: data.email, rol: result.rol || "usuario" };
        login(usuario);

        if (usuario.rol === "admin") {
          navigate("/admin");
        } else {
          navigate("/clases");
        }
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al autenticar:", error);
      alert("Error de conexión o del servidor");
    }
  };

  const onRegister = (data) => {
    alert("Usuario registrado: " + data.email);
  };

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
    helperText: "Mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.",
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
    {
      ...emailField,
      placeholder: "ejemplo@correo.com",
      helperText: "Ejemplo: ejemplo@correo.com",
    },
    {
      ...passwordField,
      label: "Crear contraseña",
      helperText: "Mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Paper sx={{ width: "100%", maxWidth: 420, p: 3 }}>
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
            <Form
              fields={registerFields}
              onSubmit={onRegister}
              title="Registrarse"
              btnText="Registrarse"
            />
          )}
        </Paper>
      </Box>
      <Footer />
    </Box>
  );
};

export default IniciarSesion;