import { useState, useEffect } from 'react';

export default function UserList(){
    const [userList, setUserList]=useState([]);

    async function fetchAllUsers(){
        try{
            const apiResponse = await fetch('https://dummyjson.com/users')
            const result = await apiResponse.json();
            console.log(result)
            if(result?.users){
                setUserList(result?.users)
            }
        }catch(error){
            console.log(error)
        }
    }

    // useEffect(()=>{
    //     fetchAllUsers();
    // },[])

    return(
        <div>
            <h1>All User Lists</h1>
            <ul>{userList && userList.length > 0 ? userList.map(userItem=>
                <li key={userItem?.id}>{userItem?.firstName}{userItem?.lastName}</li>
            ) : <h3>No Users Found !</h3> }</ul>
            <button onClick={fetchAllUsers}>Fetch</button>
        </div>
    )
}