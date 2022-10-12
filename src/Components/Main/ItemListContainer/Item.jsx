import React from 'react'
import { Link } from 'react-router-dom'

import './ItemListContainer.css';

const Item = (props) => {
    const { item } = props

    return (
        <div>
            <div className="card" key={item.id} href=''>
                <img className="img-card" src={item.img} alt={item.id} />
                <p className="title">{item.title}</p>
                <p className="price">Price: {item.price}</p>
                <hr></hr>
                <Link to={"/detail/" + item.id}>
                   <button className="seeDetail" >See Detail</button>
                </Link>
            </div>
        </div>
    )
}

export default Item