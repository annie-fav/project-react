import React from 'react';
import { useState } from 'react';
import UserList from './UserList'

const Users = () => {

      const [user, setUser] = useState('')
      const [users, setUsers] = useState([])
    
    const handlerChange = (e) => {
        setUser(e.target.value)
    }

    const handlerClick = () => {
       setUsers([...users, user]);
    }

    const deleteUser = (userD) => {

        const filtrado = users.filter((user) => { return user !== userD })
        setUsers(filtrado);        
        
        // setUsers(user.filter((user) => { return user !== userD }))
    }

    return (
        <>
          <div>
            <input type="text" onChange={handlerChange}></input>
            <button onClick={handlerClick}>Add to the List</button>
            <UserList users={users} deleteUser={deleteUser}/>     
          </div>
        </>
    )
}

export default Users