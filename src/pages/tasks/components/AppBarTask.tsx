import {  IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';


interface Props {
   open: boolean,
   handleDrawerOpen: Function
}

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
   open?: boolean;
}

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
   transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
}));


const AppBarTask = ({open,handleDrawerOpen}: Props) => {
   return (
      <AppBar position="fixed" open={open}>
         <Toolbar>
            <IconButton
               color="inherit"
               aria-label="open drawer"
               onClick={() => handleDrawerOpen()}
               edge="start"
               sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
               <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
               Task App
            </Typography>
         </Toolbar>
      </AppBar>
   )
}

export default AppBarTask