import { createContext } from "react";
import { INote } from "../interface/Note.interface";


interface NotesState {
   note: INote,
   form: INote,
   listNotes: INote[],
   selectedNote: Function,
   handleChangeForm: Function,
   handleSubmit: Function,
   resetValue: Function
}

const NotesContext = createContext({} as NotesState)

export default NotesContext