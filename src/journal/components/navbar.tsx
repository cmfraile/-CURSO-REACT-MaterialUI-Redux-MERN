import { AppBar , IconButton , Toolbar , Grid , Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({dw}:{dw:string}) => {
    return(
        <AppBar position='fixed'
                sx={{
                    right:{xs:'0px'},
                    minwidth:{xs:'80vw',}
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