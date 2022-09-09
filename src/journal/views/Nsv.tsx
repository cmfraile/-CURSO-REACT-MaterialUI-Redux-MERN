import { StarOutline } from '@mui/icons-material';
import { Grid , Typography , TextField , Button , Link } from '@mui/material';

export const NothingSelectedView = ():JSX.Element => {
    return(
        <Grid   container
                spacing={0}
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Grid item xs={12}><StarOutline sx={{fontSize:100,color:'white'}}/></Grid>
            <Grid item xs={12}><Typography color='white' variant='h5'>Crea una nota</Typography></Grid>
        </Grid>
    )
}