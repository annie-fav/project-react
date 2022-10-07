import React from "react"
import './ItemDetail.css'

const ItemCount = props => {
  const { contador, setContador, isBought, stock = 9 } = props

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


  return (
    <>
      <div className="containerButton">
        <>
          <button disabled={isBought} className="buttonLeft" onClick={decrement}>-</button>
          <p className="pContador">{contador}</p>
          <button disabled={isBought} className="buttonRight" onClick={increment} stock="9">+</button>
        </>
      </div>
    </>
  )
}

export default ItemCount
