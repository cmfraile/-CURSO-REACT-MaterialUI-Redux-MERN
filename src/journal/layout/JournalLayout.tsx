import { Box } from '@mui/system';
import { NavBar , SideBar } from '../components';

const dw = 280;

export const JournalLayout = ({children}:any) => {
    return(
        <Box sx={{display:'flex'}}>

            <NavBar dw={dw} />
            
            <SideBar dw={dw} />
            
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