import { Button, Divider, List, ListItem, ListItemText, TextField } from "@mui/material"
import { NotesData } from '../../../utils/NotesData'

const style = {
   width: '100%',
   maxWidth: 360,
   bgcolor: 'background.paper',
};

const BarraLateral = () => {

   const selectedNote = (id: number) => {
      console.log(id)
   }

   return (
      <div className="barraLateral">
         <div className="search">
            <TextField id="standard-basic" label="Search" variant="standard" fullWidth />
         </div>

         <div className="listNotes">
            <List sx={style} component="nav" aria-label="mailbox folders">
               {
                  NotesData.map(note => (
                     <ListItem button divider onClick={() => selectedNote(note.id)} key={note.id}>
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