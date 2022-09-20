import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { CircleLoader } from 'react-spinners';


const ItemDetailContainer = (props) => {
  const { selectedId = null } = props

  const [ item, setItem ] = useState()
  // const [ product, setProduct ] = useState({})
  const [loading, setLoading] = useState(true)

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
            setItem(data.find(x => x.id === selectedId))
        })

  }, [selectedId])


  return (

    <>
      <div>
        {loading ? <CircleLoader className="spinner" color="#d636b8" /> : <ItemDetail item={item} />}
      </div>
    </>
  )

}

export default ItemDetailContainer