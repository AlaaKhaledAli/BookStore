import { Box, Container, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Outlet } from 'react-router-dom';

export default function Auth() {
    return (
        <>
            <Grid container spacing={2}>

                <Grid size={{xs:12,md:6}}>
                    <Box>
                        <CardMedia
                            component="img"
                            sx={{ maxWidth: '100%', maxHeight: "100dvh" }}
                            image="images/loginImg.jpg"
                            alt="Live from space album cover"
                        />
                    </Box>
                    </Grid>
                <Grid size={{xs:12,md:6}}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 5, alignItems: 'center' }}>
                    <CardContent sx={{ width: "0.8" }}>
                        <CardMedia
                            component="img"
                            sx={{ mx: 'auto', width: '25%', Height: "100dvh", mb: 5 }}
                            image="images/Logo.png"
                            alt="Live from space album cover"
                        />
                        <Outlet />

                    </CardContent>
                </Box>
                </Grid>


            </Grid>

        </>
    )
}
