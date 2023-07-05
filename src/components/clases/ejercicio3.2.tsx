import React from "react";

const Usuario = ({nombre,edad,telefono,email}:{nombre:string,edad:string,telefono:string,email:string}) => {

    return(
        <div>
            <h2> ej 3.2</h2>
            <h2>Usuario {nombre}</h2>
            <h2>edad: {edad}</h2>
            <h2>telefono: {telefono}</h2>
            <h2>email : {email}</h2>
        </div>
    )
}


export default Usuario;