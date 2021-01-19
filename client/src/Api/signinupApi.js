import axios from "axios"

const signIn = async (data)=>{

    const config = {
        header:{
            'Content-Type':'application/json'
        }
    }
    const response = await axios.post('/api/auth/signin', data, config)    
    return response
}

const signUp = async (data)=>{    
    const config = {
        header:{
            'Content-Type':'application/json'
        }
    }
    
    const response = await axios.post('/api/auth/signup', data, config)
    return response
}

export const userAuthApi = {
    signIn,
    signUp
}