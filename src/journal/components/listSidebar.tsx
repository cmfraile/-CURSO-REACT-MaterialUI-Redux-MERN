import { List , ListItem , ListItemButton , ListItemIcon , Grid , ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

const lorem:string = 'Lorem Ipsum is simply dummy text of Exercitation cillum irure elit consectetur.'

export const ListSidebar = ({arr}:{arr:string[]}):JSX.Element => {
    return(
        <List>
            {
                arr.map((x:string) => (
                    <ListItem key={x} disablePadding>
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