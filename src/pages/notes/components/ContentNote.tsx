import { Box, Button, Divider, Modal, Typography } from "@mui/material"
import { useContext, useState } from "react"
import NotesContext from "../context/NotesContext"
import ModalNote from "./ModalNote";
import EditIcon from '@mui/icons-material/Edit';

const ContentNote = () => {

  const { note } = useContext(NotesContext)

  const [openModal, setOpenModal] = useState(false)
  const [titleOver, setTitleOver] = useState(false)
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className="contenidoNota">
      <div onMouseOver={() => setTitleOver(true)} onMouseOut={() => setTitleOver(false)} style={{display: 'flex'}}>
        <Typography variant="h3" component="h3" style={{textTransform: "uppercase" }}>
          {note.title}
        </Typography>

        {
          titleOver && (
            <EditIcon></EditIcon>
          )
        }
      </div>


      {/* TODO: button for confirm edit title */}

      <div style={{ paddingTop: '20px' }}>
        <p>
          {note.content}
        </p>
      </div>

      <Button variant="contained" className="addNota" onClick={handleOpen}>Crear Nota</Button>
      <ModalNote handleClose={handleClose} openModal={openModal} />
    </div>
  )
}

export default ContentNote