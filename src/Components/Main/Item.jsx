import React from 'react'
import ItemCount from './ItemCount'
import './ItemListContainer.css'

const Item = (props) => {
    const { item } = props




    return (
        <div className="card" key={item.id} href=''>
            <img className="img-card" src={item.img} alt={item.id} />
            <p className="title">{item.title}</p>
            <p className="price">Price: {item.price}</p>
            <hr></hr>
            <button className="seeDetail" onClick="">See detail</button>
        </div>
    )
}

export default Item