import { Google } from '@mui/icons-material';
import { Link as RrdLink } from 'react-router-dom';
import { Grid , Typography , TextField , Button , Link } from '@mui/material'

export const LoginPage = () => {
    return(
        <Grid   container
                spacing={0}
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{minHeight:'100vh',backgroundColor:'primary.main',pt:4}}
        >

        <Grid   item
                sx={{backgroundColor:'white',padding:3,borderRadius:3}}
        >
            <Typography variant='h5' sx={{mb:1}}> Login </Typography>
            <Grid item>
                <TextField  label='Correo'
                            type='email'
                            sx={{margin:'10px 0px'}}
                            fullWidth
            /></Grid>
            <Grid item>
                <TextField  label='pass'
                            type='password'
                            sx={{margin:'10px 0px'}}
                            fullWidth
            /></Grid>

            <Grid container spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12} sm={6}><Button fullWidth variant='contained'>Login</Button></Grid>
                <Grid item xs={12} sm={6}><Button fullWidth variant='contained'><Google sx={{margin:'0px 5px'}}/>Google</Button></Grid>
            </Grid>
            
            <Grid container direction='row' justifyContent='end'>
                <Link component={ RrdLink } color='inherit' to='/auth/register'>
                    Crear una cuneta
                </Link>

            </Grid>

        </Grid>

        

        </Grid>
    )
}