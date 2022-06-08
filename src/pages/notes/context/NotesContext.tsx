import { createContext } from "react";
import { INote } from "../interface/Note.interface";


interface NotesState {
   note: INote,
   listNotes: INote[]
}

const NotesContext = createContext({} as NotesState)

export default NotesContext