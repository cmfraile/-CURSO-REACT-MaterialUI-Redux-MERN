import { Box , Drawer , Toolbar , Typography , Divider } from '@mui/material';
import { ListSidebar } from './listaSidebar';

export const SideBar = ({dw}:{dw:string}) => {
    return(
        <Box    component='nav'
                sx={{
                    left:{xs:'0px'},
                    minwidth:{xs:'20vw'},
                }}
        >
            <Drawer     variant='permanent'
                        open={true}
                        sx={{
                            display:{xs:'block'},
                            '&. MuiDrawer-paper':{boxSizing:'border-box',width:'20vw'},}}
            >
                
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Carlos Fraile Gómez
                    </Typography>
                </Toolbar>
                <Divider/>
                <ListSidebar arr={['lorem','ipsum','dolor']} />
            </Drawer>
        </Box>    
    )
}