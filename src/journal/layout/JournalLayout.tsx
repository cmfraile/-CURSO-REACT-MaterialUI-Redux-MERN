import { Box } from '@mui/system';

const drawerWidth = '12 vw';

export const JournalLayout = ({children}:any) => {
    return(
        <Box sx={{display:'flex'}}>

            {/*Navbar*/}
            
            {/*Sidebar*/}
            
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