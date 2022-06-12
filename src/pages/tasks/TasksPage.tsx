import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import CreateCategoryModal from './components/CreateCategoryModal';
import AppBarTask from './components/AppBarTask';
import DrawerTask from './components/DrawerTask';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
   open?: boolean;
}>(({ theme, open }) => ({
   flexGrow: 1,
   padding: theme.spacing(3),
   transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   marginLeft: `-${drawerWidth}px`,
   ...(open && {
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
   }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
   justifyContent: 'flex-end',
}));

const TasksPage = () => {

   const theme = useTheme();
   const [open, setOpen] = React.useState(false);
   const [openModal, setOpenModal] = React.useState(false);

   const handleOpenModal = () => setOpenModal(true);
   const handleCloseModal = () => setOpenModal(false);

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBarTask open={open} handleDrawerOpen={handleDrawerOpen} />
         <DrawerTask open={open} DrawerHeader={DrawerHeader} theme={theme} handleDrawerClose={handleDrawerClose} handleOpenModal={handleOpenModal} />
         <Main open={open}>
            <DrawerHeader />
            asfsd
            asfas
            asfs
         </Main>

         <CreateCategoryModal openModal={openModal} handleCloseModal={handleCloseModal} />
      </Box>
   )
}

export default TasksPage