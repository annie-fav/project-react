import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <div className="cards-container">
           <div className="card">Card 1</div>
           <div className="card">Card 2</div>
           <div className="card">Card 3</div>
           <div className="card">Card 4</div>
           <div className="card">Card 5</div>
           <div className="card">Card 6</div>
           <div className="card">Card 1</div>
           <div className="card">Card 2</div>
           <div className="card">Card 3</div>
           <div className="card">Card 4</div>
           <div className="card">Card 5</div>
           <div className="card">Card 6</div>
       </div>
    )
}

export default Cards