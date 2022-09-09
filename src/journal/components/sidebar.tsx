import { Box , Drawer , Toolbar , Typography , Divider } from '@mui/material';
import { ListSidebar } from './listSidebar';

export const SideBar = ({dw}:{dw:number}) => {
    return(
        <Box    component='nav'
                sx={{ width: { sm: dw }, flexShrink: { sm: 0 } }}
        >
            <Drawer     variant='permanent'
                        open
                        sx={{
                            display:{xs:'block'},
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: dw }}}
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