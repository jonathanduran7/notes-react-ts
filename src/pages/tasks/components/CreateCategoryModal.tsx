import { Modal, Typography } from "@mui/material"
import { Box } from "@mui/system"


const styleModal = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 350,
   height: 200,
   bgcolor: 'white',
   borderRadius: 2,
   boxShadow: 24,
   p: 4,
};

interface Props {
   openModal: boolean,
   handleCloseModal: Function
}

const CreateCategoryModal = ({openModal, handleCloseModal}: Props) => {
   return (
      <Modal
         open={openModal}
         onClose={() => handleCloseModal()}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={styleModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
               Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
         </Box>
      </Modal>
   )
}

export default CreateCategoryModal