import { AppBar , IconButton , Toolbar , Grid , Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({dw}:{dw:number}) => {
    return(
        <AppBar position='fixed'
                sx={{ 
                    width: { sm: `calc(100% - ${ dw }px)` },
                    ml: { sm: `${ dw }px` }
                }}
                >
            <Toolbar>
                <IconButton
                            color='inherit'
                            edge='start'
                >
                    {/* <MenuOutlined/> */}
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
                    <IconButton color='error'><LogoutOutlined/></IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}