import React from 'react'
import { useState, useEffect } from 'react';

import { CircleLoader } from 'react-spinners';

import ItemList from './ItemList';
import './ItemListContainer.css';


const ItemListContainer = (props) => {
    const { welcome } = props;
    const [items, setItemList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        fetch('/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                const data = response.json()
                return data
            })
            .then((data) => {
                console.log(data)
                setLoading(false)
                setItemList(data)
            })

    }, [])

    return (
        <div className=''>
            <div>
                <p className="Welcome"> {welcome} </p>
            </div>
            <br></br>
            <div>
                {loading ? <CircleLoader className="spinner" color="#d636b8" /> : (<ItemList items={items} />)}
            </div>
        </div>
    )
}

export default ItemListContainer