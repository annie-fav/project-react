import React, { useState, useEffect } from 'React'

// const Usuarios = () => {

//     const [usuarios, setUsuarios] = useState([{ nombre: "Nirvana" }, { nombre: "Bianca" }])

//     const Nicolas = { nombre: "Nicolas" };
//     const agregaNicolas = () => {
//         setUsuarios([...usuarios, Nicolas])

//     }


//     return (
//         <>
//             <h1>Usuario</h1>
//             <button onClick={agregaNicolas}>Add Username</button>
//             <ul>
//                 {usuarios.map((usuario, indice) => {
//                     <h2>{usuario.nombre}</h2>
//                 })}
//             </ul>
//         </>
//     )

// }

// export default Usuarios


// const MiComponente = () => {

//     const [contador, setContador] = useState(0);
//     const [numero, setNumero] = useState(0);

//     useEffect( () => {
//         setNumero(numero + 2);

        // setTimeout(() => {
        //     console.log("useEffect")
        // }, 2000)

    //     const interval = setInterval(() => {
    //         console.log(ping)
    //     }, 2000)

    //     return (() => {
    //        clearInterval(interval)
    //     })

    // }, [contador]);
  


    // const sumar = () => {
    //     setContador(contador + 1)
    // }

//     const restar = () => {
//         setContador(contador - 1)
//     }

//     const reset = () => {
//         setContador(0)
//     }

//     }

// const Ejemplo = () => {

// const [show setShow] = useState(true)

// const alternar = () => {
//     setShow(!show)
// }

// return (
//    <>
//    {show ? <MiComponente/> : <h1>No hay nada</h1>}
//    <button onClick={alternar}>Alternar</button>
//    </>
// )

// }


// // Promesas

// const initialProducts = [
//     { name: "Manzanas", id:0, price:200 },
//     { name: "Bananas", id:1, price:210 },
//     { name: "Peras", id:2, price:220 },
//     { name: "Sandia", id:3, price:230 }
// ]

// const Promesa = new Promise((res, rej) => {
//     res(initialProducts)
// })

//    const [products, setProducts] = useState([]);


//    useEffect(() => {
//     Promesa
//     .then((data) => {
//         console.log("esta todo bien");
//         console.log(data);
//         setProducts(data);
//     })
//     .catch(() => {
//         console.log("error")
//     })
//    }, []);

//      return (

//         <>
        
//         {products.map((product) => {
//             <span key={product.id}>{product.name}</span>
//         })}
        
//         </>
//      )


     // Desafio

    //  const ItemCount = ( { initial, stock, onAdd } ) => {

    //   const [count, setCount] = useState(initial)

    //     let contador = 0;
        
    //     const decrese = () => {
    //         contador = contador - 1
    //     }

    //     const decrease = () => count > initial && setCount(count - 1)
    //     const increase = () => count < stock && setCount(count + 1)

    //     return (
    //         <>
    //           <button disabled={count===initial} onClick={decrese}>-</button>
    //           <p>{contador}</p>
    //           <button disabled={count === stock} onClick={increase}>+</button>
    //           <button>Add to Cart</button>
    //         </>
    //     )
    //  }

    //  export default ItemCount

    

   fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => response.json())
   .then((data) => console.log(data))
