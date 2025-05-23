import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "¿Quiénes Somos?", path: "/quienesSomos" },
  { label: "¿Qué Hacemos?", path: "/queHacemos" },
  { label: "Contacto", path: "/contacto" },
  { label: "Iniciar Sesión", path: "/iniciarSesion" },
  { label: "Clases", path: "/clases" },
 
];

export default function Navbar() {
  const user = null; 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#000" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontFamily: 'Anton, sans-serif' }}
          >
            Cuerpo Despierto
          </Typography>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                fontFamily: 'Anton, sans-serif',
                color: 'inherit',
                '&.active': {
                  color: '#F57927',
                },
              }}
              end={item.path === "/"}
            >
              {item.label}
            </Button>
          ))}
          {user && user.rol === "admin" && <Link to="/admin">Panel Admin</Link>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}