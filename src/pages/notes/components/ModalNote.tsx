import { Modal, Typography } from "@mui/material"
import { Box } from "@mui/system"

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'white',
   boxShadow: 24,
   p: 4,
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
               {/* Aca va el formulario */}
               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
         </Box>
      </Modal>
   )
}

export default ModalNote