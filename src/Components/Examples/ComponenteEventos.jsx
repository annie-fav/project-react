import React from 'react';

const ComponenteEventos = () => {

    // Propagacion de Eventos
     const handlerClick = (event) => {
        event.stopPropagation();
        console.log("hice click")
     }

    const handlerOnchange = (event) => {
        console.log(event.target)
        console.dir(event.target)
        console.log(event.target.value)
    }


    // Evita que el evento se cumpla
    const eventoPrevenido = (e) => {
        e.preventDefault();
        console.log("prevenido")
    }


    const tecleoPrevenido = (e) => {
        e.preventDefault();
        console.log("tecleo prevenido");
    }


   
    const handlerClickDiv = () => {
      console.log('click en div')
    }


    return (
       <div onClick={handlerClickDiv}>
        <h1>Componente Eventos</h1>
        <button onClick={handlerClick} id="button">Click</button>
        <input onKeyDown={tecleoPrevenido} type="text" onChange={handlerOnchange}></input>
        <a onClick={eventoPrevenido} href="http://google.com">ir a google</a>       
       </div>
    )
}



export default ComponenteEventos;