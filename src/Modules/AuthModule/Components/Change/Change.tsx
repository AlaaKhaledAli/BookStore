import { Box, TextField, Typography } from "@mui/material";

export default function Change() {
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
        Change Your Password Easily
      </Typography>
      <form >
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
          <label style={{ marginBottom: '16px' , fontFamily: 'Roboto' ,fontWeight: '500'}}>Old password</label>
          <TextField variant="outlined" type="password" style={{}} />
          <label style={{ marginBottom: '16px' , fontFamily: 'Roboto' ,fontWeight: '500'}}>New password</label>
          <TextField variant="outlined" type="password" style={{}} />
          <button type="submit" style={{fontSize: '16px',fontWeight: '500', margin: "16px 0" ,  padding: '10px', borderRadius: '5px', backgroundColor: "#EF6B4A", color: '#fff', border: 'none' }}>Save</button>

        </Box>
      </form>
    </>
  )
}
