import {useState, useEffect} from 'react';
import Error from './Error';

/**
 * Este componente retorna el contenido del formulario principal.
 * @returns 
 */
function Formulario({pacientes,setPacientes, paciente,setPaciente}) {
  const [petOwner,setPetOwner] = useState('');
  const [petName,setPetName] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error,setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      setPetOwner(paciente.petName);
      setPetName(paciente.petOwner);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  },[paciente])

  const generarId=()=>{
    const random =Math.random().toString(36).substring(2)
    const fecha =Date.now().toString(36)
    return random+fecha
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    //validacion del formulario
    if([petOwner,petName,email,fecha,sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)

    //Objeto de paciente del formulario
    const objectPet={
      petOwner,
      petName,
      email,
      fecha,
      sintomas
    }

    if (paciente.id){
      objectPet.id=paciente.id;

      const pasientesActualizados= pacientes.map( pacienteState => pacienteState.id === paciente.id ? objectPet: pacienteState)
      setPacientes(pasientesActualizados)
      setPaciente({})
    } else{
      //nuevo Registro
      objectPet.id =  generarId();
      setPacientes([...pacientes,objectPet]);
    }
    //console.log(objectPet);
    

    //reiniciar campos
    setPetOwner('')
    setPetName('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">
          Administralos
        </span>
      </p>
      <form className="bg-white shadow-md raunded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        {error && <Error> 
                    <p>Todos los Campos Son Obligatorios</p>
                  </Error>}
        <div className="mb-5">
          <label htmlFor="petOwner" className="block text-gray-700 uppercase font-bold w-full">
            Nombre Propietario
           
          </label>

          <input 
            id="petOwner"
            type="text" 
            placeholder="Nombre del Propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 raunded-md"
            value={petOwner}
            onChange={(e)=>setPetOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>

          <input 
            id="petName"
            type="text" 
            placeholder="Nombre de la Mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 raunded-md"
            value={petName}
            onChange={(e)=>setPetName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input 
            id="email"
            type="email" 
            placeholder="Email Contacto Propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 raunded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>

          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 raunded-md"
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>

          <textarea 
            id="sintomas"  
            placeholder="Describe los Sintomas" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 raunded-md"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}/>
        </div>

        <input 
          type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
            value={paciente.id? 'Editar Paciente': 'Agregar Paciente'} />
      </form>
    </div>
  )
}

/* esta etiqueta trae un icono falta ver como se cuadara al lado de input de nombre del propietario
  <svg class="h-8 
              w-8 
              text-indigo-500"  
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
    <path stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  https://www.tailwindtoolbox.com/icons
*/
export default Formulario