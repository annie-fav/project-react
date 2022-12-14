import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { CircleLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
import { db } from "../../../Firebase/Firestore"
import { doc, getDoc, collection } from "firebase/firestore"



const ItemDetailContainer = (props) => {
  const { addItem } = useContext(CartContext);

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  let { IdDetail } = useParams();

  useEffect(() => {
    setLoading(true);

    const producstCollection = collection(db, "products");
    const refDoc = doc(producstCollection, IdDetail)

    getDoc(refDoc)
      .then((result) => {
        return setItem({
          id: result.id,
          ...result.data(),
        }) 
      })
      .catch((e) => { 
        console.log(e)
      })
      .finally(() => { 
        setLoading(false) 
      })

  }, [IdDetail]);

  return (
    <>
      <div>
        {loading || !item ?
          <CircleLoader className="spinner" color="#d636b8" /> :
          <ItemDetail addItemToCart={addItem} item={item} />}
      </div>
    </>
  )
}

export default ItemDetailContainer