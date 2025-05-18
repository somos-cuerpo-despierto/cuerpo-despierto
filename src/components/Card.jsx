import { Box, Typography, Collapse } from "@mui/material";
import Btn from "../components/Button"; 
import { useState } from "react";

const Card = ({ nombre, foto, descripcion }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f5f5f5",
        borderRadius: 2,
        p: 0,
        boxShadow: 2,
        maxWidth: 400,
        width: "100%",
        overflow: "hidden",
      }}
    >
      
      <Box sx={{ width: "100%", height: 650, overflow: "hidden" }}>
        <img
          src={foto}
          alt={nombre}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      
      <Box sx={{ width: "100%", p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Btn onClick={() => setOpen((prev) => !prev)}>
          {open ? "Ocultar" : "Mostrar"} {nombre}
        </Btn>
        <Collapse in={open} sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontFamily: "Saira Semi Condensed, sans-serif",
              fontSize: 16,
              mt: 2,
              textAlign: "justify",
                color: "#000",
            }}
          >
            {Array.isArray(descripcion)
              ? descripcion.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))
              : descripcion}
          </Typography>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Card;