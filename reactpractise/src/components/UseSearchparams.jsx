import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function UseSearchparams() {

  
    const [searchParams, setSearchParams] = useSearchParams()
    const [users, setUsers] = useState([])



    const fetchData = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users?${searchParams}`);
            const data = await res.json();
            console.log(data)
            setUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    


    useEffect(() => {
        fetchData(searchParams);
   
    }, [searchParams]);
    
    return (
        <div>
            <input 
                onInput={(e) => setSearchParams({q: e.target.value})}
                type="text" name="q" id="searchinput" placeholder="Search" />

            {users.map((item) => (
                <div className="items" key={item.id}>
                    <h5>{item.name}</h5>
                    <p>{item.phone}</p>
                    <p>{item.username}</p>
                </div>
            ))}
        </div>
    )
}

export default UseSearchparams