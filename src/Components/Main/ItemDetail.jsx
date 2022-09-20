import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const { item } = props;

    return !item ? null : (
        <div>
            <div id="container-detail-card">
                <div id="container-img-size-color">
                    <img id="img-detail" src={item.img} alt={item.id}/>
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
                <ItemCount stock="9" />
            </div>
        </div>
    )
}


export default ItemDetail