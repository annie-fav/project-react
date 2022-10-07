import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import ItemCount from './ItemCount'
import './ItemDetail.css';

const COLOR_OPTIONS = [
    {
        label: "White",
        value: "White",
    },
    {
        label: "Red",
        value: "Red",
    },
    {
        label: "Yellow",
        value: "Yellow",
    },
    {
        label: "Blue",
        value: "Blue",
    },
    {
        label: "Green",
        value: "Green",
    },
];

const SIZE_OPTIONS = [
    {
        label: "XS",
        value: "XS",
    },
    {
        label: "S",
        value: "S",
    },
    {
        label: "M",
        value: "M",
    },
    {
        label: "L",
        value: "L",
    },
    {
        label: "XL",
        value: "XL",
    },
];

const ItemDetail = (props) => {
    const { item, addItemToCart } = props

    const [contador, setContador] = useState(0)
    const [isBought, setIsBought] = useState(false)

    const [color, setColor] = useState('white')
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const [size, setSize] = useState('XS')
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const addToCart = () => {
        if (contador >= 1) {
            setIsBought(true);
            addItemToCart(item, contador, { size, color });
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
                            <select value={color} onChange={handleColorChange}>
                                {COLOR_OPTIONS.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </button>
                        <button id="p-size">Choose a Size:
                            <select value={size} onChange={handleSizeChange}>
                                {SIZE_OPTIONS.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </button>
                        <button id="button-price">$${item.price}</button>
                    </div>
                </div>
                {!isBought ? <ItemCount contador={contador} setContador={setContador} stock={9} isBought={isBought} setIsBought={setIsBought} /> : null}
                {!isBought ? (<button className="AddtoCart" onClick={addToCart}>Add to Cart</button>) :
                    (<Link to="/cart">
                        <button className="AddtoCart">Go to Checkout</button>
                    </Link>)}

            </div>
        </div>
    )
}


export default ItemDetail