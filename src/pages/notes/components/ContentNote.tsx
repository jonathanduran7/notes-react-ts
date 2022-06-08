import { Typography } from "@mui/material"
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
    </div>
  )
}

export default ContentNote