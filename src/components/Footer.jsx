import { Box, Typography, Link } from "@mui/material";

const Footer = () => (
  <Box sx={{ width: "100%", mt: 4 }}>
    <Box sx={{ height: 8, background: "#000" }} />
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#ddd",
        px: 2,
        py: 1,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: 4 }}>
        <Link
          href="#testimonios"
          underline="none"
          sx={{
            color: "#222",
            fontFamily: "Anton, sans-serif",
            fontSize: 16,
          }}
        >
          Testimonios
        </Link>
        <Link
          href="#contacto"
          underline="none"
          sx={{
            color: "#222",
            fontFamily: "Anton, sans-serif",
            fontSize: 16,
          }}
        >
          Contacto
        </Link>
        <Link
          href="https://instagram.com/"
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{
            color: "#222",
            fontFamily: "Anton, sans-serif",
            fontSize: 16,
          }}
        >
          Instagram
        </Link>
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Anton, sans-serif",
          fontWeight: "bold",
          fontSize: 22,
          color: "#000",
        }}
      >
        Cuerpo Despierto
      </Typography>
    </Box>
  </Box>
);

export default Footer;