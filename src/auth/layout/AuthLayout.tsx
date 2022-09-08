import { Grid , Typography , TextField , Button , Link } from '@mui/material';

export const AuthLayout = ({children,title=''}:any) => {
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
            <Typography variant='h5' sx={{mb:1}}>{title}</Typography>
            {children}
        </Grid>
    </Grid>
    )
}