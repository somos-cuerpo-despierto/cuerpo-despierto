import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card"; // Usa tu Card reutilizable

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

const QueHacemos = () => (
  <>
    <Navbar />
    <Box sx={{ minHeight: "80vh", py: 6, px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {trabajos.map((trabajo) => (
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
            <Card
              nombre={trabajo.nombre}
              foto={trabajo.foto}
              descripcion={trabajo.descripcion}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    <Footer />
  </>
);

export default QueHacemos;