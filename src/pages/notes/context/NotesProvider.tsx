import React, { useState } from "react"
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

   const selectedNote = (note: INote) => {
      setNote(note)
   }

   const handleChangeForm = (e: React.FormEvent<HTMLInputElement>)  => {
      const {name, value} = e.currentTarget

      setNote({
         ...note,
         [name]: value
      })
   }

   const data = {note,listNotes, selectedNote, handleChangeForm}
   return (
      <NotesContext.Provider value={data}>
         {children}
      </NotesContext.Provider>
   )
}