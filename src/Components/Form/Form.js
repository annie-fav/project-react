import React, {Fragment} from 'react'
import { useState, useContext } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import '../Form/Form.css'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

import { CartContext } from '../../Context/CartContext';
import { db } from "../../Firebase/Firestore"

const Form = (props) => {
    const { cart, clear } = useContext(CartContext);

    const total = cart.reduce((acc, item) => {
        return acc + (item.item.price * item.quantity)
    }, 0)

    const [datos, setDatos] = useState({
        Name: "",
        Surname: "",
        DNI: "",
        NameCard: "",
        NumberCard: "",
    })
    
     const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
     }

    const buy = (e) => {
        const ventasCollection = collection(db, "sells");
        
        addDoc(ventasCollection, {
            comprador: datos,
            items: cart,
            date: serverTimestamp(),
            total: total,
        })
            .then(result => {                                       
                swal({
                    title: "Good job!",
                    text: "Your shop is succes " + datos.Name + " Your ID is: " + result.id + " Congratulations!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                clear()
            })
            .catch(e => {
                console.log('ups error')
                console.error(e)
            })
    }

    return (

        <div>
            <Fragment>
                <h1>Form</h1>
                <form >
                   <div className="container-form">
                   <div>
                    <input type="text" placeholder="Name" className="form" name="Name" onChange={handleInputChange}></input>
                   </div>
                   <div>
                    <input type="text" placeholder="Surname" className="form" name="Surname" onChange={handleInputChange}></input>
                   </div>
                   <div>
                    <input type="Number" placeholder="DNI" className="form" name="DNI" onChange={handleInputChange}></input>
                   </div>
                   <div>
                    <input type="Text" placeholder="Name-Card" className="form" name="Name-Card" onChange={handleInputChange}></input>
                   </div>
                   <div>
                    <input type="Number" placeholder="Number-Card" className="form" name="Number-Card" onChange={handleInputChange}></input>
                   </div>
                   </div>
                </form>
                <div className="container-button">
                   <button type="Submit" className="button" onClick={buy}>Submit</button>
                   <Link className="Link-Home"to="/">Cancel</Link>
                   </div>
                </Fragment>
                  
        </div>
    )   
}

export default Form