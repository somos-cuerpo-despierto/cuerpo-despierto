import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

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
            <Box sx={{ flex: 1 }}>
                <Form />
            </Box>
            <Footer />
        </Box>
    );
}

export default Contacto;