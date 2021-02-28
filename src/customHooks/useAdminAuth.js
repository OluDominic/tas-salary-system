import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';



const CheckAdminAuth =()=> {
    const history = useHistory()

    
useEffect(()=> {
    currentUser()
    
}, [])

    const currentUser=(response)=> {
        let data = response.data;
            localStorage.setItem("userdata",JSON.stringify(data));
            if (!data) {
                history.push('/login')
            }
    }

    return currentUser
    
}

export default CheckAdminAuth