import { useForm } from "react-hook-form";
import { Box, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import Btn from "./Button";

const sanitizeInput = (value) =>
  value.replace(/<[^>]*>?/gm, ""); 

const Form = ({ fields, onSubmit, title = "Contacto", btnText = "Enviar" }) => {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    setEnviado(true);
    onSubmit && onSubmit(data);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
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
      <Typography variant="h5" sx={{ fontFamily: "Anton, sans-serif", mb: 1, textAlign: "center" }}>
        {title}
      </Typography>

      {}
      {fields
        ? fields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              type={field.type || "text"}
              placeholder={field.placeholder}
              {...register(field.name, field.validation)}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message || field.helperText}
              required={field.required}
              multiline={field.multiline}
              minRows={field.minRows}
              inputProps={field.inputProps}
              onChange={
                field.onChange
                  ? (e) => field.onChange(e, setValue)
                  : undefined
              }
            />
          ))
        
        : (
          <>
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
              placeholder="ejemplo@correo.com"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Introduce un correo electrónico válido. Ejemplo: ejemplo@correo.com",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message || "Ejemplo: ejemplo@correo.com"}
              required
              type="email"
            />
            <TextField
              label="¿En qué podemos ayudarte?"
              {...register("pregunta", {
                required: "Por favor, escribe tu consulta",
                minLength: { value: 5, message: "Mínimo 5 caracteres" },
                maxLength: { value: 200, message: "Máximo 200 caracteres" },
                validate: (value) =>
                  sanitizeInput(value) === value || "No se permiten etiquetas HTML o scripts",
              })}
              error={!!errors.pregunta}
              helperText={
                errors.pregunta?.message ||
                "Máximo 200 caracteres."
              }
              required
              multiline
              minRows={3}
              inputProps={{ maxLength: 200 }}
              onChange={(e) => setValue("pregunta", sanitizeInput(e.target.value))}
            />
          </>
        )
      }

      <Btn type="submit">{btnText}</Btn>
      {enviado && (
        <Alert severity="success" sx={{ mt: 1, textAlign: "center" }}>
          ¡Formulario enviado correctamente!
        </Alert>
      )}
    </Box>
  );
};

export default Form;