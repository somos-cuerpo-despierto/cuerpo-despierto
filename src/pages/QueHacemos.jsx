import { useState } from "react";
import { Box, Grid, Button, Typography, Collapse } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fotoReadaptacion = import.meta.env.VITE_FOTO_READAPTACION;
const fotoConsciencia = import.meta.env.VITE_FOTO_CONSCIENCIA;
const fotoFuerza = import.meta.env.VITE_FOTO_FUERZA;

const trabajos = [
  {
    nombre: "Readaptación Física",
    foto: fotoReadaptacion,
    descripcion: [
      "Recupera tu movimiento, reconecta con tu cuerpo.",
      "En nuestras clases trabajamos la readaptación física como un proceso personalizado para ayudarte a recuperar movilidad, fuerza y funcionalidad tras una lesión, dolor o inactividad prolongada. Nos enfocamos en movimientos conscientes, progresivos y seguros, adaptados a tus necesidades reales, para que vuelvas a confiar en tu cuerpo y moverte con libertad.",
    ],
  },
  {
    nombre: "Consciencia Corporal",
    foto: fotoConsciencia,
    descripcion: [
      "Estar presente en tu cuerpo es el primer paso para transformarlo.",
      "La consciencia corporal es la base de todo lo que hacemos. A través del movimiento atento y la respiración, te guiamos para que reconozcas cómo se mueve tu cuerpo, cómo responde y qué necesita. Esta atención mejora la postura, reduce tensiones y te ayuda a moverte con más eficiencia y bienestar en tu día a día.",
    ],
  },
  {
    nombre: "Entrenamiento de Fuerza",
    foto: fotoFuerza,
    descripcion: [
      "Fuerza desde el equilibrio y la intención.",
      "En nuestras clases desarrollamos la fuerza con un enfoque funcional y respetuoso con el cuerpo. No se trata solo de cargar peso, sino de construir una estructura sólida que te permita vivir, moverte y disfrutar sin dolor ni limitaciones. Integramos ejercicios de fuerza adaptados a cada nivel, desde la base hasta el rendimiento.",
    ],
  },
];

const QueHacemos = () => {
  const [open, setOpen] = useState([false, false, false]);

  const handleToggle = (idx) => {
    setOpen((prev) =>
      prev.map((item, i) => (i === idx ? !item : item))
    );
  };

  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "80vh", py: 6, px: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          {trabajos.map((trabajo, idx) => (
            <Grid
              item
              xs={12}
              md={4}
              key={trabajo.nombre}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background: "#f5f5f5",
                  borderRadius: 2,
                  p: 0,
                  boxShadow: 2,
                  width: "100%",
                  maxWidth: 400,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                {/* Foto */}
                <Box sx={{ width: "100%", height: 650, overflow: "hidden" }}>
                  <img
                    src={trabajo.foto}
                    alt={trabajo.nombre}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                {/* Botón */}
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", py: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Anton, sans-serif",
                      backgroundColor: "#F57927",
                      color: "#000",
                      "&:hover": {
                        backgroundColor: "#fb8c00",
                      },
                    }}
                    onClick={() => handleToggle(idx)}
                  >
                    {open[idx] ? "Ocultar info" : `Sobre ${trabajo.nombre}`}
                  </Button>
                </Box>
                {/* Texto */}
                <Collapse in={open[idx]} sx={{ width: "100%", px: 3, pb: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "Saira Semi Condensed, sans-serif",
                      fontSize: 16,
                      textAlign: "justify",
                      color: "#000",
                    }}
                  >
                    {trabajo.descripcion.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Typography>
                </Collapse>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default QueHacemos;