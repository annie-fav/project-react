import React, { useState, useEffect } from 'react';

import { CircleLoader } from 'react-spinners';
import { getDocs, collection, query, where } from "firebase/firestore"
import { useParams } from 'react-router-dom'

import ItemList from './ItemList';
import { db } from "../../../Firebase/Firestore"

import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const { welcome } = props;
    let { IdCategory } = useParams();

    const [items, setItemList] = useState([])
    const [loading, setLoading] = useState(true)

    // const URL_BASE = '/data.json'


    useEffect(() => {

        const producstCollection = collection(db, "products");
        const q = query(producstCollection, where('category', '==', IdCategory || null));

        getDocs(IdCategory ? q : producstCollection)
            .then((data) => {
                const list = data.docs.map((products) => { return { ...products.data(), id: products.id } })
                setItemList(list)
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => { setLoading(false) })

    }, [IdCategory])

    //     setLoading(true);

    //     const promiseRes = fetch(URL_BASE, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })

    //     promiseRes
    //         .then((response) => {
    //             const parsedData = response.json()
    //             return parsedData
    //         })
    //         .then((data) => {
    //             setLoading(false)
    //             if (IdCategory) {
    //                 const filteredItems = data.filter(product => product.category === IdCategory)
    //                 setItemList(filteredItems)
    //             } else {
    //                 setItemList(data)
    //             }
    //         })


    // }, [IdCategory])

    return (
        <div className=''>
            <div>
                <p className="Welcome">{welcome}</p>
            </div>
            <br></br>
            <div>
                {loading ? <CircleLoader className="spinner" color="#d636b8" /> : (<ItemList items={items} />)}
            </div>
        </div>
    )
}

export default ItemListContainer