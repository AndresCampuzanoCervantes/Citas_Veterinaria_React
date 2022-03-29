import {useState} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pasientes,setPasientes] = useState([]);
 

  return (
    <div className="container mx-auto mt-20">
      <Header
         
      />
      <div className="mt-12 md:flex">
        <Formulario
          pasientes={pasientes}
          setPasientes={setPasientes}
        />
        <ListadoPacientes
          pacientes={pasientes}
        />
      </div>
    </div>
  )
}

export default App
