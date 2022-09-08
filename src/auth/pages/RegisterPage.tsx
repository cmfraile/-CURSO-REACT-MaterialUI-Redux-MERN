import { Google } from '@mui/icons-material';
import { Link as RrdLink } from 'react-router-dom';
import { Grid , Typography , TextField , Button , Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return(
    <AuthLayout title='Crea una cuenta'>
    <form>
        
            <Grid item>
                <TextField  label='Nombre completo'
                            type='text'
                            sx={{margin:'10px 0px'}}
                            fullWidth
            /></Grid>
            <Grid item>
                <TextField  label='correo'
                            type='email'
                            sx={{margin:'10px 0px'}}
                            fullWidth
            /></Grid>
            <Grid item>
                <TextField  label='pass1'
                            placeholder='contraseña'
                            type='password'
                            sx={{margin:'10px 0px'}}
                            fullWidth
            /></Grid>
            <Grid item>
                <TextField  label='pass2'
                            type='password'
                            sx={{margin:'10px 0px'}}
                            fullWidth
            /></Grid>

            <Grid container spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12}><Button fullWidth variant='contained'>Crear cuenta</Button></Grid>
            </Grid>
            
            <Grid container direction='row' justifyContent='end'>
                <Link component={ RrdLink } color='inherit' to='/auth/login'>
                    Logear
                </Link>
            </Grid>
    </form>
    </AuthLayout>
    )
}