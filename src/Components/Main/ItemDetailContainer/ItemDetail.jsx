import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import ItemCount from './ItemCount'
import './ItemDetail.css';

const ItemDetail = (props) => {
    const { item, addItemToCart, quantity } = props

    const [contador, setContador] = useState(0)
    const [isBought, setIsBought] = useState(false)
    

    const addToCart = () => {
        if (contador >= 1) {
            setIsBought(true);
            addItemToCart(item, contador);
            swal({
                title: "Good job!",
                text: `You added ${contador} products, Yayyy!`,
                icon: "success",
                button: "Aww yess!",
            })
        } else {
            swal("Sorry", "You didn't put any object on the cart");
        }
    }

    return !item ? null : (
        <div>
            <div id="container-detail-card">
                <div id="container-img-size-color">
                    <img id="img-detail" src={item.img} alt={item.id} />
                    <div id="select">
                        <button id="p-color">Choose a Color:
                            <select>
                                <option>Red</option>
                                <option>Yellow</option>
                                <option>Green</option>
                                <option>Blue</option>
                            </select>
                        </button>
                        <button id="p-size">Choose a Size:
                            <select>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </button>
                        <button id="button-price">{item.price}</button>
                    </div>
                </div>
                {!isBought ? <ItemCount contador={contador} setContador={setContador} stock={9} isBought={isBought} setIsBought={setIsBought} /> : null }
                {!isBought ? (<button className="AddtoCart" onClick={addToCart}>Add to Cart</button>) : 
                (<Link to="/cart">
                    <button className="AddtoCart">Go to Checkout</button>
                </Link>)}

            </div>
        </div>
    )
}


export default ItemDetail