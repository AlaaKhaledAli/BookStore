import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Controller, useForm } from "react-hook-form";
import type { RegisterFormData } from "../../../../Constants/RegisterFormData/RegisterFormData";
import { useRegisterMutation } from "../../AuthApiSlice/AuthApiSlice";
import { Link, useNavigate } from "react-router-dom"
export default function Register() {
  const [createRegister] = useRegisterMutation();
  let { control, register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();
  const navigate = useNavigate();
  let onSubmit = async (data: RegisterFormData) => {
    let res = await createRegister(data).unwrap();
    console.log(res);
    navigate("/Auth");
  }
  return (
    <>
      <div className="px-10 md:px-15 lg:px-25">
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "inline-flex", flexDirection: "column", flexGrow: 1 }}>
                <label style={{ marginBottom: '10px' }} >First Name</label>
                <TextField variant="outlined" sx={{ mb: 2 }} {...register("firstName", { required: "First name is required" })} />
                <p className="text-red-600">{errors.firstName?.message}</p>
              </Box>
              <Box sx={{ display: "inline-flex", flexDirection: "column", flexGrow: 1, paddingLeft: "16px" }}>
                <label style={{ marginBottom: '10px' }} >Last Name</label>
                <TextField variant="outlined" sx={{ mb: 2 }} {...register("lastName", { required: "Last Name is required" })} />
                <p className="text-red-600">{errors.lastName?.message}</p>
              </Box>
            </Box>
            <label style={{ marginBottom: '16px' }} >E-mail</label>
            <TextField variant="outlined" sx={{ mb: 2 }} {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address"
              }
            })} />
            <p className="text-red-600">{errors.email?.message}</p>
            <label style={{ marginBottom: '16px' }} >Password</label>
            <TextField variant="outlined" type="password" style={{}}  {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
              }
            })} />
            <p className="text-red-600">{errors.password?.message}</p>
            <FormControl variant="filled" sx={{ my: 5, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Controller
                name="role"
                control={control}
                rules={{ required: "role is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Role"
                  >
                    <MenuItem value={"publisher"}>Publisher</MenuItem>
                    <MenuItem value={"reader"}>Reader</MenuItem>
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
      </div>
    </>
  )
}
