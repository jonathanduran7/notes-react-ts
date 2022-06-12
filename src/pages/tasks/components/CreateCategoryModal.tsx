import { Button, Modal, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useContext } from "react";
import TaskContext from "../context/TaskContext";


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

const CreateCategoryModal = ({ openModal, handleCloseModal }: Props) => {

   const { form, handleSubmit, handleChangeForm } = useContext(TaskContext)

   return (
      <Modal
         open={openModal}
         onClose={() => handleCloseModal()}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={styleModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
               Crear Categoria
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="div">
               <TextField
                  variant="standard"
                  placeholder="Inserte Titulo"
                  label="Titulo"
                  fullWidth
                  autoComplete="false"
                  value={form.title}
                  name="title"
                  onChange={(e) => handleChangeForm(e)}
                  />

               <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'end', gap: '5px' }}>
                  <Button variant="outlined" onClick={() => handleCloseModal()}>Cancelar</Button>
                  <Button variant="contained" onClick={() => handleSubmit(handleCloseModal)}>Confirmar</Button>
               </div>
            </Typography>
         </Box>
      </Modal>
   )
}

export default CreateCategoryModal