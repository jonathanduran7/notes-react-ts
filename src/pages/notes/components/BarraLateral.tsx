import { TextField } from "@mui/material"

const BarraLateral = () => {
   return (
      <div className="barraLateral">
         {/* Buscador */}
         <div>
            <TextField id="standard-basic" label="Search" variant="standard" />
         </div>

         {/* lista de ntoas */}
         <div>lista de notas</div>
      </div>
   )
}

export default BarraLateral