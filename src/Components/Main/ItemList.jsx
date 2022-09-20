import React from 'react'
import Item from './Item';

const ItemList = (props) => {
    const { items = [], setSelectedId } = props;
    return (
        <div className="cards-container">
            {items.map((x) => {
                return (<Item key={x.name} setSelectedId={setSelectedId} item={x} />)
            })}
        </div>
    )
}

export default ItemList