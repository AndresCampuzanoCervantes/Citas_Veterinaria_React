import {useState, useEffect} from 'react';
/**
 * Este componente retorna el contenido del formulario principal.
 * @returns 
 */
function Formulario() {
  const [petOwner,setPetOwner] = useState('');
  const [petName,setPetName] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error,setError] = useState(false);

  const handleSubmit= (e)=>{
    e.preventDefault();
    //validacion del formulario
    if([petOwner,petName,email,fecha,sintomas].includes('')){
      setError(true)
      return;
    }

    setError(false)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pasientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">
          Administralos
        </span>
      </p>
      <form className="bg-white shadow-md raunded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        {error && 
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 raunded-md">
            <p>
              Todos los campos son obligatorios
            </p>
          </div>
        }
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
            value="Agregar Parciente" />
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