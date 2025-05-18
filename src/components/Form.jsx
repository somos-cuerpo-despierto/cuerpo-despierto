import { useForm } from "react-hook-form";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Btn from "./Button";

const Form = ({ fields, onSubmit, title, btnText }) => {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
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
      {title && (
        <Typography variant="h5" sx={{ fontFamily: "Anton, sans-serif", mb: 1, textAlign: "center" }}>
          {title}
        </Typography>
      )}
      {fields.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          type={field.type || "text"}
          {...register(field.name, field.validation)}
          error={!!errors[field.name]}
          helperText={errors[field.name]?.message || field.helperText}
          required={field.required}
          multiline={field.multiline}
          minRows={field.minRows}
          inputProps={field.inputProps}
        />
      ))}
      <Btn type="submit">{btnText || "Enviar"}</Btn>
      {enviado && (
        <Typography color="success.main" sx={{ mt: 1, textAlign: "center" }}>
          ¡Formulario enviado correctamente!
        </Typography>
      )}
    </Box>
  );
};

export default Form;