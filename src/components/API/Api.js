import axios from "axios";

export const getUsers = async ()=> {
    try{
        const users = await axios.get('http://127.0.0.1:3000/users',{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log('users',users)
        return  users
    }catch (e) {
        return []
    }

}

export const addUser=(user)=> {
    axios.post('http://127.0.0.1:3000/users', {"user":user}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

}