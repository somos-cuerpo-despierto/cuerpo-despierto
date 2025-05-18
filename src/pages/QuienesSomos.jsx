import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useState } from "react";

const fotoIrene = import.meta.env.VITE_FOTO_IRENE;
const fotoMarta = import.meta.env.VITE_FOTO_MARTA;

const personas = [
  {
    nombre: "Irene",
    foto: fotoIrene,
    descripcion: [
      "Mi nombre es Irene, soy Licenciada en CAFyD, profesora de Educación Física, Instructora de ground, Les Mills (Body Pump, Body Combat, Body Balance, Sh'bam, Aquadynamic) Ciclo Indoor (entre otras más...) y entrenadora Personal.",
      "Me encanta la mágia que se crea cuando las personas conectan con su cuerpo, y a la vez, con ellas mismas, cómo rompen límites y se convierten en super heroínas.",
      "¿Resultados? Primero vienen por dentro.",
      "¡Bienvenid@s a nuestra mágia!",
    ],
  },
  {
    nombre: "Marta",
    foto: fotoMarta,
    descripcion: [
      "Soy Marta, Licenciada en CAFyD, profesora de Educación Física, Instructora Oficial de Ground, Certificada en Técnicas MAT y Mapping Training System.",
      "Me apasiona el conocimiento sobre este gran regalo que nos ha dado la vida, ¡el cuerpo humano! Y mi misión es romper el paradigma tradicional de salud, movimiento y calidad de vida, porque creo que el movimiento nos hace imparables.",
      "¿Dejamos de vovernos porque envejecemos? ó ¿Envejecemos porque dejamos de movernos?",
      "¡Bienvenid@s a nuestra mágia!",
    ],
  },
];

const QuienesSomos = () => (
  <>
    <Navbar />
    <Box sx={{ minHeight: "80vh", py: 6, px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {personas.map((persona) => (
          <Grid item xs={12} md={5} key={persona.nombre}>
            <Card
              nombre={persona.nombre}
              foto={persona.foto}
              descripcion={persona.descripcion}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    <Footer />
  </>
);

export default QuienesSomos;