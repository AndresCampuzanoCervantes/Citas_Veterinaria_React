//rfce

function Paciente() {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 raunded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '} 
          <span className="font-normal normal-case">Juan</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre de la Mascota: {' '} 
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">email: {' '} 
          <span className="font-normal normal-case">afsasdf@asfasd.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '} 
          <span className="font-normal normal-case">10 Diciembre de 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '} 
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam corrupti rerum natus ea, vitae obcaecati qui esse eveniet nemo voluptatibus perferendis fugit id sequi nulla assumenda. Architecto, repellat perferendis?</span>
        </p>
      </div>
  )
}

export default Paciente