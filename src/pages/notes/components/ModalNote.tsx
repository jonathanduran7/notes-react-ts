import { Modal, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

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
                  <TextField label="Titulo" placeholder="Insertar el titulo" variant="standard" fullWidth />
               </div>

               <div style={{marginTop: '20px'}}>
                  <TextField label="Contenido" placeholder="Inserte el contenido de la nota..." variant="standard" fullWidth multiline rows={22} />
               </div>
            </Typography>
         </Box>
      </Modal>
   )
}

export default ModalNote