import React, { useState } from "react"
import swal from 'sweetalert';
import './ItemDetail.css'


const ItemCount = props => {
  const { stock = 9 } = props

  const [contador, setContador] = useState(0)

  const decrement = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  const increment = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const onAdd = () => {

    if (contador >= 1) {
      swal({
        title: "Good job!",
        text: "You add the product Sucees!",
        icon: "success",
        button: "Aww yiss!",
      })
    } else {
      swal("Sorry", "You didn't put any object on the cart");
    }
  }

  return (
    <>
       
      <div className="containerButton">
        <button className="buttonLeft" onClick={decrement}>-</button>
        <p className="pContador">{contador}</p>
        <button className="buttonRight" onClick={increment} stock="9">+</button>
      </div>
      <br></br>
      <hr/>
      <button className="AddtoCart" onClick={onAdd}>Add to Cart</button>
    </>
  )
}

export default ItemCount
