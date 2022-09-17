import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { CircleLoader } from 'react-spinners';


const ItemDetailContainer = (props) => {
  const { item_id } = props
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

    <>
      <div>
        {loading ? <CircleLoader className="spinner" color="#d636b8" /> : (<ItemDetail items={item.id} />)}
      </div>
    </>
  )

}

export default ItemDetailContainer