import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

const FormularioContacto = () => {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setEnviado(true);
    reset();
    // Aquí puedes enviar los datos a tu backend si lo necesitas
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 400,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        background: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
      }}
      autoComplete="off"
    >
      <Typography variant="h5" sx={{ fontFamily: "Anton, sans-serif", mb: 1 }}>
        Contáctanos
      </Typography>
      <TextField
        label="Nombre"
        {...register("nombre", {
          required: "El nombre es obligatorio",
          minLength: { value: 2, message: "Mínimo 2 caracteres" },
        })}
        error={!!errors.nombre}
        helperText={errors.nombre?.message}
        required
      />
      <TextField
        label="Apellido"
        {...register("apellido", {
          required: "El apellido es obligatorio",
          minLength: { value: 2, message: "Mínimo 2 caracteres" },
        })}
        error={!!errors.apellido}
        helperText={errors.apellido?.message}
        required
      />
      <TextField
        label="Teléfono"
        {...register("telefono", {
          required: "El teléfono es obligatorio",
          pattern: {
            value: /^[0-9]{9,15}$/,
            message: "Introduce un teléfono válido (solo números, 9-15 dígitos)",
          },
        })}
        error={!!errors.telefono}
        helperText={errors.telefono?.message}
        required
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
      <TextField
        label="Correo electrónico"
        {...register("email", {
          required: "El correo es obligatorio",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Introduce un correo electrónico válido",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        required
        type="email"
      />
      <TextField
        label="¿En qué podemos ayudarte?"
        {...register("pregunta", {
          required: "Por favor, escribe tu consulta",
          minLength: { value: 5, message: "Mínimo 5 caracteres" },
        })}
        error={!!errors.pregunta}
        helperText={errors.pregunta?.message}
        required
        multiline
        minRows={3}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#F57927",
          color: "#000",
          fontFamily: "Anton, sans-serif",
          "&:hover": { backgroundColor: "#fb8c00" },
        }}
      >
        Enviar
      </Button>
      {enviado && (
        <Typography color="success.main" sx={{ mt: 1 }}>
          ¡Formulario enviado correctamente!
        </Typography>
      )}
    </Box>
  );
};

export default FormularioContacto;