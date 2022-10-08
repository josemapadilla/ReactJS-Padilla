import React, {useState} from 'react'

export const Usuarios = () => {
const [usuarios, setUsuarios] = useState ([{nombre:'Nicolas'},{nombre:'Maria'}])
  
return (
    <div>
        <h1>Usuarios</h1>
        {usuarios.map((usuario,indice)=>{
            return <h1 key={indice}> {usuario.nombre} </h1>
        })
        }
    </div>
  )
}
