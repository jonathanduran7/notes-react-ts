import styled from "@emotion/styled";
import { Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { useContext, useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TaskContext from "../context/TaskContext";

const drawerWidth = 240;

interface Props {
   open: boolean,
   handleOpenModal: Function,
   handleDrawerClose: Function,
   theme: any,
   DrawerHeader: any
}

const DrawerTask = ({ DrawerHeader, handleDrawerClose, open, theme, handleOpenModal }: Props) => {

   const {listTask} = useContext(TaskContext)

   return (
      <Drawer
         sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
               width: drawerWidth,
               boxSizing: 'border-box',
            },
         }}
         variant="persistent"
         anchor="left"
         open={open}
      >
         <DrawerHeader>
            <IconButton onClick={() => handleDrawerClose()}>
               {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
         </DrawerHeader>
         <Divider />
         <Button variant="contained" color="info" style={{ width: '90%', margin: '5px auto' }} onClick={() => handleOpenModal()}>
            Crear Categoria
         </Button>
         <List>
            {listTask.map((task) => (
               <ListItem key={task.id} disablePadding>
                  <ListItemButton>
                     <ListItemText primary={task.title} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Drawer>
   )
}

export default DrawerTask