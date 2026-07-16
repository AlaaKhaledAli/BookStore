import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function ForgetPass() {
  return (
    <>
      <Typography component="div" variant="h6" my={2} color='text.secondary'>
        Welcome back!
      </Typography>
      <Typography variant="h1" sx={{
        fontSize: {
          xs: "16px",
          sm: "24px",
          md: "34px",
          lg: "40px"
        }
      }} my={1} gutterBottom>
        Forget Password  !!
      </Typography>
      <form >
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
          <label style={{ marginBottom: '16px' }} >E-mail</label>
          <TextField variant="outlined" sx={{ mb: 2 }} />
          <Link to="/" style={{ textDecoration: "none", textAlign: "center", marginTop: "16px" }}>
            <Button variant="outlined" size="large" sx={{ color: blue[300], transition: 'all 0.3s ease', '&:hover': { color: "#1565c0" }, width: "1" }}>
              Send
            </Button>
          </Link>
        </Box>
      </form>
    </>
  )
}
