import Navbar from "../components/Navbar"
import { Box, Typography } from "@mui/material";
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 8,
            gap: 4,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 350, mb: 2 }}>
            <video
              src=""
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              style={{ width: "100%", borderRadius: 16 }}
            />
          </Box>
          <Box sx={{ width: "100%", maxWidth: 600, textAlign: "center" }}>
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
          </Box>
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Home;