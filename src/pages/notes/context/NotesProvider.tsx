import React, { useState } from "react"
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
   const [listNotes, setListNotes] = useState<INote[]>([])

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

   const resetValue = () => {
      setNote(initialValue)
   }

   const handleSubmit = () => {
      const id = listNotes.length + 1
      note.id = id
      setListNotes([...listNotes, note])
      setNote(initialValue)
   }

   const data = {note,listNotes, selectedNote, handleChangeForm, handleSubmit,resetValue}
   return (
      <NotesContext.Provider value={data}>
         {children}
      </NotesContext.Provider>
   )
}