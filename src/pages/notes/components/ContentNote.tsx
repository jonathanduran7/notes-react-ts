import { Box, Button, Divider, Modal, Typography } from "@mui/material"
import { useContext, useState } from "react"
import NotesContext from "../context/NotesContext"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ContentNote = () => {

  const { note } = useContext(NotesContext)

  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className="contenidoNota">
      <Typography variant="h3" component="h2">
        {note.title}
      </Typography>

      <p>
        {note.content}
      </p>

      <Button variant="contained" className="addNota" onClick={handleOpen}>Crear Nota</Button>

      <Modal
        open={openModal}
        onClose={handleClose}
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
    </div>
  )
}

export default ContentNote