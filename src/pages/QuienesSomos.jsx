import { useState } from "react";
import { Box, Grid, Button, Typography, Collapse } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fotoIrene = import.meta.env.VITE_FOTO_IRENE;
const fotoMarta = import.meta.env.VITE_FOTO_MARTA;

const personas = [
  {
    nombre: "Irene",
    foto: fotoIrene,
    descripcion: [
      "Mi nombre es Irene, soy Licenciada en CAFyD, profesora de Educación Física, Instructora de ground, Les Mills (Body Pump, Body Combat, Body Balance, Sh'bam, Aquadynamic) Ciclo Indoor (entre otras más...) y entrenadora Personal.", <br />,
      "Me encanta la mágia que se crea cuando las personas conectan con su cuerpo, y a la vez, con ellas mismas, cómo rompen límites y se convierten en super heroínas.", <br />,
      "¿Resultados? Primero vienen por dentro.", <br />,
      "¡Bienvenid@s a nuestra mágia!",
    ],
  },
  {
    nombre: "Marta",
    foto: fotoMarta,
    descripcion: [
      "Soy Marta, Licenciada en CAFyD, profesora de Educación Física, Instructora Oficial de Ground, Certificada en Técnicas MAT y Mapping Training System.",<br />,
      "Me apasiona el conocimiento sobre este gran regalo que nos ha dado la vida, ¡el cuerpo humano! Y mi misión es romper el paradigma tradicional de salud, movimiento y calidad de vida, porque creo que el movimiento nos hace imparables.", <br />,
      "¿Dejamos de vovernos porque envejecemos? ó ¿Envejecemos porque dejamos de movernos?", <br />,
        "¡Bienvenid@s a nuestra mágia!",
    ],
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
            <Grid
              item
              xs={12}
              md={5}
              key={persona.nombre}
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
                {/* División solo para la foto */}
                <Box sx={{ width: "100%", height: 650, overflow: "hidden" }}>
                  <img
                    src={persona.foto}
                    alt={persona.nombre}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
                {/* División para el botón */}
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
                    {open[idx] ? "Ocultar info" : `Sobre ${persona.nombre}`}
                  </Button>
                </Box>
                {/* División para el texto */}
                <Collapse in={open[idx]} sx={{ width: "100%", px: 3, pb: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "Saira semi condensed, sans-serif",
                      fontSize: 16,
                      textAlign: "justify",
                    
                      color: "#000",
                    }}
                  >
                    {persona.descripcion.map((line, index) => (
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

export default QuienesSomos;