import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";

const videoHome = import.meta.env.VITE_VIDEO_HOME;

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
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: 4,
              maxWidth: 1200,
              mx: "auto",
            }}
          >
            {/* Video vertical */}
            {videoHome && (
              <Box
                sx={{
                  width: { xs: "100%", md: 400 },
                  maxWidth: 500,
                  aspectRatio: "9/16",
                  mb: { xs: 2, md: 0 },
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <video
                  src={videoHome}
                  controls
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 16,
                    objectFit: "cover",
                    background: "#000",
                  }}
                  preload="metadata"
                  aria-label="Video de bienvenida"
                />
              </Box>
            )}
            {/* Texto */}
            <Box sx={{ width: "100%", maxWidth: 600, textAlign: "center", flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Anton, sans-serif", mb: 2 }}
              >
                Bienvenid@ a Cuerpo Despierto
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 20 }}>
                Somos un espacio vivo donde el movimiento se transforma en
                consciencia, y la fuerza nace desde el respeto al cuerpo.
                <br />
                <br />
                En nuestros talleres despertamos el cuerpo, reconectamos con su inteligencia y lo preparamos para una vida activa, fluida y sin dolor.
                Próximamente abrimos nuestras clases regulares.<br /><br />
                ¿Te animas a despertar tu cuerpo con nosotras?
              </Typography>
            </Box>
          </Box>
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Home;