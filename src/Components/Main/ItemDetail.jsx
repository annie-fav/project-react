import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount'

const ItemDetail = (props) => {

    const { itemId, openDetail, setOpenDetail } = props;

    return (
        <div>
            <div id="container-detail-card">
                <div id="img-size">
                    <img src={itemId.img} />
                </div>
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
                    <br />
                    <button id="button-price">{itemId.price}</button>
                </div>
            </div>
            <ItemCount stock="9" />
        </div>
    )
}


export default ItemDetail