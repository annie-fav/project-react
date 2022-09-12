import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    useEffect(() => {
      setLoading(true);

      setTimeout(() => {
            setLoading(false)
            setItemList(ItemDetail)
        }, 2000)
    }, [])
     

    return (
     
       <> 
        <div>
          {loading ? <CircleLoader className="spinner" color="#d636b8" /> : (<ItemDetail items={items} />)}
        </div> 
       <ItemDetail/>  
       </>
    )

}

export default itemDetailContainer