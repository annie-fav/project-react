import React from 'react'

const UserList = ({users, deleteUser}) => {



    return (
        <div>
        { users.map((user, i) => { 
         return( 
        <div key={i}>
            <h2>{user}</h2>
            <button onClick={ () => deleteUser(user) }>Delete User</button>
        </div> 
         )})}
       </div>
    )

}

export default UserList