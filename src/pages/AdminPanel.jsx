import { Box, Typography, List, ListItem, ListItemText, Button, Divider } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const clases = [
  { id: 1, nombre: "Readaptacion Fisica", inscritos: 12 },
  { id: 2, nombre: "Consciencia Corporal", inscritos: 8 },
  { id: 3, nombre: "Fuerza Funcional", inscritos: 15 },
];

const usuarios = [
  { id: 1, nombre: "Ana", email: "ana@email.com" },
  { id: 2, nombre: "Luis", email: "luis@email.com" },
];

const AdminPanel = () => {
  const handleEditarClase = (clase) => {
    alert(`Editar clase: ${clase.nombre}`);
  };

  const handleVerUsuario = (usuario) => {
    alert(`Ver usuario: ${usuario.nombre} (${usuario.email})`);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box sx={{ flex: 1, maxWidth: 700, mx: "auto", mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontFamily: "Anton, sans-serif" }}>
          Panel de Administración
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Clases</Typography>
        <List>
          {clases.map((clase) => (
            <ListItem key={clase.id}>
              <ListItemText primary={clase.nombre} secondary={`Inscritos: ${clase.inscritos}`} />
              <Button
                variant="outlined"
                color="primary"
                aria-label={`Editar ${clase.nombre}`}
                onClick={() => handleEditarClase(clase)}
              >
                Editar
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" sx={{ mt: 2 }}>Usuarios</Typography>
        <List>
          {usuarios.map((usuario) => (
            <ListItem key={usuario.id}>
              <ListItemText primary={usuario.nombre} secondary={usuario.email} />
              <Button
                variant="outlined"
                color="secondary"
                aria-label={`Ver ${usuario.nombre}`}
                onClick={() => handleVerUsuario(usuario)}
              >
                Ver
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminPanel;