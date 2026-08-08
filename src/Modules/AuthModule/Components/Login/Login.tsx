import { Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { LoginFormData } from "../../../../Constants/LoginFormData/LoginFormData";
import { useDispatch } from "react-redux";
import { useLoginMutation, setCredentials } from "../../AuthApiSlice/AuthApiSlice";

import { useState } from "react";
export default function Login() {
    const [createLogin] = useLoginMutation();
    let { register, formState: { errors }, handleSubmit } = useForm<LoginFormData>();
    const [apiError, setApiError] = useState<string | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let onSubmit = async (data: LoginFormData) => {
        try {
            const response = await createLogin(data).unwrap();
            dispatch(
                setCredentials({
                    accessToken: response.token,
                    user: {
                        email: data.email,
                    },
                })
            );

            localStorage.setItem("token", response.token);
                navigate("/");
        } catch (err:Object|any) {
            setApiError(err.data?.error || "Login failed");
        }
}
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
            Login to your account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
                <label style={{ marginBottom: '16px' }} >E-mail</label>
                <TextField variant="outlined" sx={{ mb: 2 }} {...register("email", { required: "Email is required" })} />
                <Typography className="text-red-600">{errors.email?.message}</Typography>
                <label style={{ marginBottom: '16px' }} >Password</label>
                <TextField variant="outlined" type="password" {...register("password",
                     { required: "Password is required",

                      })} />
                <Typography className="text-red-600">{errors.password?.message}</Typography>
                <FormGroup sx={{ my: 0 }}>
                    <FormControlLabel control={<Checkbox sx={{ color: "#6251DD" }} />} sx={{ color: "#6251DD" }} label="Remember Me" />
                </FormGroup>
                <p className="text-red-600">{apiError}</p>
                <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: "#EF6B4A", color: '#fff', border: 'none' }}>Login</button>
                <Link to="Register" style={{ textDecoration: "none", textAlign: "center", marginTop: "16px" }}>
                    Register
                </Link>
            </Box>
        </form>

    </>
)
}
