import BarraLateral from "./components/BarraLateral"
import ContentNote from "./components/ContentNote"
import './index.css'

const NotesPage = () => {
   return (
      <div className="notesPage">
         <BarraLateral/>

         <ContentNote/>
      </div>
   )
}

export default NotesPage