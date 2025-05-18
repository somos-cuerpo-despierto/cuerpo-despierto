import { useState } from "react";
import { Box, Grid, Button, Typography, Collapse } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const personas = [
  {
    nombre: "Persona 1",
    foto: "https://via.placeholder.com/200x200?text=Persona+1",
    descripcion: "Texto sobre la Persona 1. Aquí puedes poner una breve biografía o información relevante.",
  },
  {
    nombre: "Persona 2",
    foto: "https://via.placeholder.com/200x200?text=Persona+2",
    descripcion: "Texto sobre la Persona 2. Aquí puedes poner una breve biografía o información relevante.",
  },
];

const QuienesSomos = () => {
  const [open, setOpen] = useState([false, false]);

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
          {personas.map((persona, idx) => (
            <Grid item xs={12} md={5} key={persona.nombre}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#f5f5f5",
                  borderRadius: 2,
                  p: 3,
                  boxShadow: 2,
                }}
              >
                <img
                  src={persona.foto}
                  alt={persona.nombre}
                  style={{
                    width: 200,
                    height: 200,
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginBottom: 16,
                  }}
                />
                <Btn onClick={() => handleToggle(idx)}>
                  {open[idx] ? "Ocultar" : "Mostrar"} {persona.nombre}
                </Btn>
                <Collapse in={open[idx]}>
                  <Typography
                    sx={{
                      fontFamily: "Anton, sans-serif",
                      fontSize: 16,
                      mt: 1,
                      textAlign: "center",
                    }}
                  >
                    {persona.descripcion}
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

export default QuienesSomos;