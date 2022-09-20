import React from 'react'

import './ItemListContainer.css';

const Item = (props) => {
    const { item, setSelectedId } = props

    return (
        <div>
            <div className="card" key={item.id} href=''>
                <img className="img-card" src={item.img} alt={item.id} />
                <p className="title">{item.title}</p>
                <p className="price">Price: {item.price}</p>
                <hr></hr>
                <button className="seeDetail" onClick={() => { setSelectedId(item.id)} }>See Detail</button>
            </div>
            
        </div>
    )
}

export default Item