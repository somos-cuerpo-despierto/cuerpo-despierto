import axios from "axios";


const API_URL = "http://localhost:8080/api/auth";

export const authenticateUser = async (email, password) => {
  const token = btoa(`${email}:${password}`); 

  try {
    const response = await axios.get(`${API_URL}/check`, {
      headers: {
        Authorization: `Basic ${token}`,
      }
      
    });
    return {
      success: true,
    };
  } catch (error) {
    console.error("Error de autenticación:", error.response?.data || error.message);
    return {
      success: false,
      error: "Credenciales inválidas o error de conexión",
    };
  }
};