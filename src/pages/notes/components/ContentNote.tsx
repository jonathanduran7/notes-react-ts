import { Button, Divider, Typography } from "@mui/material"
import { useContext } from "react"
import NotesContext from "../context/NotesContext"

const ContentNote = () => {

  const { note } = useContext(NotesContext)

  return (
    <div className="contenidoNota">
      <Typography variant="h3" component="h2">
        {note.title}
      </Typography>

      <p>
        {note.content}
      </p>

      <Button variant="contained" className="addNota">Crear Nota</Button>
    </div>
  )
}

export default ContentNote