import { Google } from '@mui/icons-material';
import { Link as RrdLink } from 'react-router-dom';
import { Grid , Typography , TextField , Button , Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return(
    <AuthLayout title='Login'>
    <form>
        
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
    </form>
    </AuthLayout>
    )
}