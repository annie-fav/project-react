import React, {useState} from 'React'

const Usuarios = () => {

  const [ usuarios, setUsuarios ] = useState ([{ nombre: "Nirvana"}, {nombre: "Bianca"}])
 
   const Nicolas = {nombre: "Nicolas"};
   const agregaNicolas = () => {
      setUsuarios([...usuarios, Nicolas])

   }
    
   
  return (
    <>
    <h1>Usuario</h1>
    <button onClick={agregaNicolas}>Add Username</button>
    <ul>
        {usuarios.map((usuario, indice) => {
            <h2>{usuario.nombre}</h2>
        })}
    </ul>
    </>
  )

}

export default Usuarios