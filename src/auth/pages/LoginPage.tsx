import { Grid , Typography , TextField } from '@mui/material'

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
        </Grid>

        </Grid>
    )
}