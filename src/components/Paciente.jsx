//rfce

function Paciente({paciente}) {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 raunded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '} 
          <span className="font-normal normal-case">{paciente.petOwner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre de la Mascota: {' '} 
          <span className="font-normal normal-case">{paciente.petName}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">email: {' '} 
          <span className="font-normal normal-case">{paciente.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '} 
          <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '} 
          <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
            Editar
          </button>
          <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
            Eliminar
          </button>
        </div>
      </div>
  )
}

export default Paciente