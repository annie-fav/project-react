import React from 'react'
import { useState } from 'react';


import './ItemListContainer.css'

const Item = (props) => {
    const { item } = props

    const [openDetail, setOpenDetail] = useState(false)

    return (
        <div>
            <div className="card" key={item.id} href=''>
                <img className="img-card" src={item.img} alt={item.id} />
                <p className="title">{item.title}</p>
                <p className="price">Price: {item.price}</p>
                <hr></hr>
                <button className="seeDetail" onClick={() => { setOpenDetail(true)} }>See Detail</button>
                {/* <ItemDetail itemId={item.id} openDetail={openDetail} setOpenDetail={setOpenDetail} /> */}
            </div>
            
        </div>
    )
}

export default Item