import { Box, Button, Divider, Modal, Typography } from "@mui/material"
import { useContext, useState } from "react"
import NotesContext from "../context/NotesContext"
import ModalNote from "./ModalNote";

const ContentNote = () => {

  const { note } = useContext(NotesContext)

  const [openModal, setOpenModal] = useState(false)
  const [titleOver, setTitleOver] = useState(false)
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className="contenidoNota">
      <Typography variant="h2" component="h2" onMouseOver={() => setTitleOver(true)} onMouseOut={() => setTitleOver(false)}>
        {note.title} {titleOver && "Esta seleccionado"}
        {/* <button onMouseOver={() => setTitleOver(true)} onMouseOut={() => setTitleOver(false)} >hola</button> */}
      </Typography>

      <div style={{paddingTop: '20px'}}>
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