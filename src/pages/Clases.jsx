import { useState } from "react";
import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const clasesDisponibles = [
  { id: 1, nombre: "Yoga Suave" },
  { id: 2, nombre: "Movilidad Articular" },
  { id: 3, nombre: "Fuerza Funcional" },
];

const Clases = () => {
  const [apuntadas, setApuntadas] = useState([]);

  const toggleClase = (id) => {
    setApuntadas((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box sx={{ flex: 1, maxWidth: 500, mx: "auto", mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontFamily: "Anton, sans-serif" }}>
          Apúntate a las clases
        </Typography>
        <List>
          {clasesDisponibles.map((clase) => (
            <ListItem
              key={clase.id}
              secondaryAction={
                <Button
                  variant={apuntadas.includes(clase.id) ? "outlined" : "contained"}
                  color={apuntadas.includes(clase.id) ? "error" : "primary"}
                  onClick={() => toggleClase(clase.id)}
                >
                  {apuntadas.includes(clase.id) ? "Desapuntarse" : "Apuntarse"}
                </Button>
              }
            >
              <ListItemText primary={clase.nombre} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Footer />
    </Box>
  );
};

export default Clases;