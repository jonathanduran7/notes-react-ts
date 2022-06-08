import { useState } from "react"
import { NotesData } from "../../../utils/NotesData"
import { INote } from "../interface/Note.interface"
import NotesContext from "./NotesContext"

interface Props {
   children: JSX.Element | JSX.Element[]
}

const initialValue: INote = {
   id: 0,
   title: '',
   content: '',
}

export const NotesProvider = ({children}: Props) => {

   const [note, setNote] = useState<INote>(initialValue)
   const [listNotes, setListNotes] = useState<INote[]>(NotesData)

   const data = {note,listNotes}
   return (
      <NotesContext.Provider value={data}>
         {children}
      </NotesContext.Provider>
   )
}