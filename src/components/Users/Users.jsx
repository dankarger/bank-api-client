import React, {useEffect, useState} from "react";
import {getUsers} from "../API/Api";

const Users=()=> {
    const[users,setUsers]= useState([])

    useEffect(()=>{
        setUsers(getUsers())
    },[])

    const showUsers=()=>{

     users.map(user=> {
            return (
                <div id={user.id}>
                    <p>{user.first}</p>
                    <p>{user.last}</p>
                    <p>{user.cash}</p>
                    <p>{user.credit}</p>
                </div>
            )

        })
    }
    return(
        <div>
            <h1>hee</h1>
            {users&& showUsers()}
            {/*{showUsers}*/}
        </div>
    )
}
export default Users