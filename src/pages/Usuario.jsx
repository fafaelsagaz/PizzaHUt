import { useEffect, useState } from "react";

function Usuario(){
    const [users,setUser] = useState([]);

    function data(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((json) => setUser(json))
    }

    useEffect(() =>{
        data();
    },[]);

    return(
        <div>
            <h1>Usuarios</h1>
            <br />
            <br />
            <ul>
                {users.map( user =>
                <li key={user.id}>{user.name}</li>

                )}
            </ul>
        </div>
    )
}

export default Usuario