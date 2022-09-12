import React from 'react'
import Item from './Item';

const ItemList = (props) => {
    const { items = [] } = props;
    return (
        <div className="cards-container">
            {items.map((x) => {
                return (<Item item={x} />)
            })}
        </div>
    )
}

export default ItemList