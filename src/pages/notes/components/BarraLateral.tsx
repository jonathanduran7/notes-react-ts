import { Button, Divider, List, ListItem, ListItemText, TextField } from "@mui/material"
import { useContext } from "react";
import NotesContext from "../context/NotesContext";
import { INote } from "../interface/Note.interface";

const style = {
   width: '100%',
   maxWidth: 360,
   bgcolor: 'background.paper',
};

const BarraLateral = () => {

   const {listNotes, selectedNote} = useContext(NotesContext)

   return (
      <div className="barraLateral">
         <div className="search">
            <TextField id="standard-basic" label="Search" variant="standard" fullWidth />
         </div>

         <div className="listNotes">
            <List sx={style} component="nav" aria-label="mailbox folders">
               {
                  listNotes.map(note => (
                     <ListItem button divider onClick={() => selectedNote(note)} key={note.id}>
                        <ListItemText primary={`${note.title}`} />
                     </ListItem>
                  ))
               }
            </List>
         </div>
      </div>
   )
}

export default BarraLateral