# 🌱 Cuerpo Despierto – Plataforma de Movimiento Consciente

Bienvenido al proyecto **Cuerpo Despierto**, una plataforma pedagógica diseñada para ofrecer clases de movimiento consciente, enfocadas en el bienestar corporal, la introspección y la práctica guiada.

Este proyecto está dividido en dos partes:

- 🧩 **Frontend**: SPA desarrollada con **React**, **Material UI** y **Axios**
- 🔐 **Backend**: API REST desarrollada con **Spring Boot**, seguridad mediante **JWT**, y persistencia en **PostgreSQL**

---

## 🔗 Índice

- [🧘 Frontend](#-frontend)
  - [Tecnologías](#tecnologías)
  - [Estructura](#estructura)
  - [Instalación y ejecución](#instalación-y-ejecución-frontend)
  - [📌 Autores y Licencia](#-autores-y-licencia)


## 🧘 Frontend

### Tecnologías

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)

### Estructura

src/
├── api/axios.js # Configuración de Axios
├── components/ # Navbar, Footer y otros componentes reutilizables
├── config/
│ ├── AuthContext.jsx # Contexto global para el estado de autenticación
│ └── Router.jsx # Rutas públicas y protegidas (con RequireAuth)
├── pages/
│ ├── Home.jsx # Página de inicio
│ ├── Login.jsx # Inicio de sesión
│ ├── Register.jsx # Registro de usuarios
│ ├── Clases.jsx # Página protegida con clases de movimiento
│ ├── Contacto.jsx # Formulario de contacto
│ └── QuienesSomos.jsx # Información institucional
└── main.jsx # Punto de entrada principal


### Instalación y ejecución 

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/cuerpo-despierto-front.git
cd cuerpo-despierto-front

2. Instala las dependencias:

npm install

3. Ejecuta la aplicación:

npm run dev

4. La aplicación estará disponible en:

http://localhost:5173

📌 Autores y Licencia

Desarrollado por:
Israel Espin 

Licencia:
Este proyecto se distribuye bajo la licencia MIT.

