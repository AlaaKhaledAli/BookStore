import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function Reset() {
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
        Reset Your Password Now !      
        </Typography>
      <form >
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
          <label style={{ marginBottom: '16px' }} >E-mail</label>
          <TextField variant="outlined" sx={{ mb: 2 }} />
                    <label style={{ marginBottom: '16px' }} >OTP</label>
          <TextField variant="outlined" sx={{ mb: 2 }} />
          <label style={{ marginBottom: '16px' }}>Password</label>
          <TextField variant="outlined" type="password" style={{}} />
          <FormGroup sx={{ my: 0}}>
            <FormControlLabel control={<Checkbox sx={{ color: "#6251DD",fontSize:"150px"  }} />} sx={{ color: "#6251DD"}} label="Remember Me" />
          </FormGroup>
          <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: "#EF6B4A", color: '#fff', border: 'none', fontSize: '20px', fontWeight: "bold" }}>Send</button>
          <Link to="/" style={{ textDecoration: "none", textAlign: "center", marginTop: "16px" }}>
            <Button variant="outlined" size="large" sx={{ color: blue[300], transition: 'all 0.3s ease', '&:hover': { color: "#1565c0" }, width: "1" }}>
              Login
            </Button>
          </Link>
        </Box>
      </form>
    </>
  )
}
