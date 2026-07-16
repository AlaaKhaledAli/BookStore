import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, type SelectChangeEvent } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Controller, useForm } from "react-hook-form";
import type { RegisterFormData } from "../../../../Constants/RegisterFormData/RegisterFormData";
import { useRegisterMutation } from "../../AuthApiSlice/AuthApiSlice";
import { Link,useNavigate } from "react-router-dom"
export default function Register() {
  const [createRegister, { isLoading: isRegisterLoading, error: registerError }] = useRegisterMutation();
  let { control,register, formState: { errors }, handleSubmit } = useForm<RegisterFormData>();
  const navigate=useNavigate();
  let onSubmit = async (data: RegisterFormData) => {
    let res = await createRegister(data).unwrap();
    console.log(res);
        navigate("/Auth");
  }
  return (
    <>
      <Box sx={{ width: "auto" }}>
        <Typography component="div" variant="h6" my={2} color='text.secondary'>
          Create new acccount
        </Typography>
        <Typography variant="h1" sx={{
          fontSize: {
            xs: "16px",
            sm: "24px",
            md: "34px",
            lg: "40px"
          }
        }} my={1} gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} >
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "inline-flex", flexDirection: "column", flexGrow: 1 }}>
                <label style={{ marginBottom: '10px' }} >First Name</label>
                <TextField variant="outlined" sx={{ mb: 2 }} {...register("firstName", { required: "First name is required" })} />

              </Box>
              <Box sx={{ display: "inline-flex", flexDirection: "column", flexGrow: 1, paddingLeft: "16px" }}>
                <label style={{ marginBottom: '10px' }} >Last Name</label>
                <TextField variant="outlined" sx={{ mb: 2 }} {...register("lastName", { required: "Password is required" })} />
              </Box>
            </Box>
            <label style={{ marginBottom: '16px' }} >E-mail</label>
            <TextField variant="outlined" sx={{ mb: 2 }} {...register("email", { required: "Email is required" })} />
            <label style={{ marginBottom: '16px' }} >Password</label>
            <TextField variant="outlined" type="password" style={{}}  {...register("password", { required: "Password is required" })} />
            <FormControl variant="filled" sx={{ my: 5, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
              <Controller
                name="age"
                control={control}
                rules={{ required: "Age is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Age"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            <button type="submit" style={{ fontSize: "24px", padding: '10px', borderRadius: '5px', backgroundColor: "#EF6B4A", color: '#fff', border: 'none' }}>Register</button>
            <Link to="/" style={{ textDecoration: "none", textAlign: "center", marginTop: "16px" }}>
              <Button variant="outlined" size="large" sx={{ color: blue[300], transition: 'all 0.3s ease', '&:hover': { color: "#1565c0" }, width: "1" }}>
                Login
              </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </>
  )
}
