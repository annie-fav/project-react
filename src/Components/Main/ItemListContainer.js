import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const { welcome } = props;
    const cards = [
        { id:1 },
        { id:2 },
        { id:3 },
        { id:4 },
        { id:5 },
        { id:6 },
        { id:7 },
        { id:8 },
        { id:9 },
        { id:10 },
        { id:11 },
        { id:12 }

    ]

    return (
        <>
        <p className="Welcome"> {welcome} </p>
        <br></br>
        <div className="cards-container">
             { cards.map( (cards) => {
            return <div className="card" key={cards.id} href=''>{cards.id}</div>
             }) }
       </div>
       </>
    )
}

export default ItemListContainer