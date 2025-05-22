import api from "../api/axios";


useEffect(() => {
  api.get("/api/admin/clases")
    .then(res => setClases(res.data))
    .catch(err => setMensaje(err.response?.data?.message || "Error al cargar las clases"));
}, []);

