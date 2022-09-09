import { Box } from '@mui/system';
import { NavBar , SideBar } from '../components';

const drawerWidth = '15vw';

export const JournalLayout = ({children}:any) => {
    return(
        <Box sx={{display:'flex'}}>

            <NavBar dw={drawerWidth} />
            
            <SideBar dw={drawerWidth}/>
            
            <Box
                component='main'
                sx={{flexGrow:1,p:3}}
            >
                {/*Toolbar*/}
                {children}
            </Box>
        
        </Box>
    )
}