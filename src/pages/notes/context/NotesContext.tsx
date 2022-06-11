import { createContext } from "react";
import { INote } from "../interface/Note.interface";


interface NotesState {
   note: INote,
   listNotes: INote[],
   selectedNote: Function,
   handleChangeForm: Function
}

const NotesContext = createContext({} as NotesState)

export default NotesContext