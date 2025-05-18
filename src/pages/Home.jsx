import Navbar from "../components/Navbar"
import { Box, Grid, Typography } from "@mui/material";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Box
          sx={{
            flexGrow: 1,
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 8,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center" // Centra verticalmente los items
            justifyContent="center" // Centra horizontalmente los items
          >
            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "" }}>
              <Box sx={{ width: "100%", maxWidth: 250 }}>
                <video
                  src=""
                  controls
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ width: "100%", borderRadius: 16 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={7} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Anton, sans-serif", mb: 2 }}
              >
                Bienvenida/o a Cuerpo Despierto
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 20 }}>
                Somos un espacio vivo donde el movimiento se transforma en
                consciencia, y la fuerza nace desde el respeto al cuerpo.
                <br />
                <br />
                En nuestros talleres despertamos el cuerpo, reconectamos con su inteligencia y lo preparamos para una vida activa, fluida y sin dolor.
                Próximamente abrimos nuestras clases regulares. ¿Te animas a despertar tu cuerpo con nosotras?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Home;