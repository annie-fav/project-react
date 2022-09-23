import React, { useState } from "react"
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import './ItemDetail.css'


const ItemCount = props => {
  const { item, stock = 9, addItemToCart } = props

  const [contador, setContador] = useState(0)
  const [isBought, setIsBought] = useState(false)

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
        text: `You added ${contador} products, Yayyy!`,
        icon: "success",
        button: "Aww yess!",
      })
      setIsBought(true);
      addItemToCart(item, contador);
    } else {
      swal("Sorry", "You didn't put any object on the cart");
    }
  }

  return (
    <>
      <div className="containerButton">
        {!isBought ? (<>
          <button disabled={isBought} className="buttonLeft" onClick={decrement}>-</button>
          <p className="pContador">{contador}</p>
          <button disabled={isBought} className="buttonRight" onClick={increment} stock="9">+</button>
        </>) : null
        }

      </div>
      <br></br>

      {!isBought ?
        <button className="AddtoCart" onClick={onAdd}>Add to Cart</button> :
        <Link to="/cart">
          <button className="AddtoCart">Go to Checkout</button>
        </Link>
      }
    </>
  )
}

export default ItemCount
