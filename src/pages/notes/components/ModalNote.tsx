import { Button, Modal, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useContext } from "react";
import NotesContext from "../context/NotesContext";

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 600,
   bgcolor: 'white',
   boxShadow: 24,
   p: 4,
   borderRadius: 2,
   height: 500
};

interface Props {
   openModal: boolean,
   handleClose: Function,
}

const ModalNote = ({ openModal, handleClose }: Props) => {

   const { note, handleChangeForm } = useContext(NotesContext)

   return (
      <Modal
         open={openModal}
         onClose={() => handleClose()}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
               Crear Nota
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               <div>
                  <TextField
                     value={note.title}
                     label="Titulo"
                     name="title"
                     placeholder="Insertar el titulo"
                     variant="standard"
                     fullWidth
                     onChange={(e) => handleChangeForm(e)}
                  />
               </div>

               <div style={{ marginTop: '20px' }}>
                  <TextField
                     value={note.content}
                     name="content"
                     label="Contenido"
                     placeholder="Inserte el contenido de la nota..."
                     variant="standard"
                     fullWidth
                     multiline
                     rows={20}
                     onChange={(e) => handleChangeForm(e)}
                  />
               </div>

               <div style={{ display: 'flex', marginTop: '17px', gap: '5px', justifyContent: 'end' }}>
                  <Button variant="outlined" onClick={() => handleClose()}>Cancelar</Button>
                  <Button variant="contained" onClick={() => handleClose()}>Guardar</Button>
               </div>
            </Typography>
         </Box>
      </Modal>
   )
}

export default ModalNote