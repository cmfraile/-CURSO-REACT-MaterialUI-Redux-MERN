import { List , ListItem , ListItemButton , ListItemIcon , Grid , ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

const lorem:string = 'Lorem Ipsum is simply dummy text of'

export const ListSidebar = ({arr}:{arr:string[]}):JSX.Element => {
    return(
        <List>
            {
                arr.map((x:string) => (
                    <ListItem key={x} >
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                                    <Grid container>
                                        <ListItemText primary={ x }/>
                                        <ListItemText secondary={ lorem }/>
                                    </Grid>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    )
}