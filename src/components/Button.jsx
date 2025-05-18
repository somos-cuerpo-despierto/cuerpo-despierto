import { Button } from "@mui/material";

const Btn = ({ children, ...props }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#F57927",
      color: "#000",
      fontFamily: "Anton, sans-serif",
      "&:hover": { backgroundColor: "#fb8c00" },
    }}
    {...props}
  >
    {children}
  </Button>
);

export default Btn;