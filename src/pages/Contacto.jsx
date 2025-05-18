import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";

const Contacto = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                color: "#000",
            }}
        >
            <Navbar />
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Anton, sans-serif",
                            mb: 2,
                            textAlign: "center",
                            color: "#000",
                        }}
                    >
                        CONTACTO
                    </Typography>
                    <Form btnText="ENVIAR" />
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}

export default Contacto;