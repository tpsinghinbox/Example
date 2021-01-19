import { setCookies, getCookies, deleteCookies } from "./Cookie"
import { setLocalStorage, getLocalStorage, deleteLocalStorae } from "./Localstorage"


export const setAuth = (token, user) =>{

    setCookies("token", token)
    setLocalStorage("user", user)

}

export const isAuthnticate = ()  =>{ 
    if(getCookies('token') && getLocalStorage('user')){        
        return getLocalStorage('user')
    }else{
        return false
    }
}

export const Logout = next =>{
    deleteCookies('token')
    deleteLocalStorae('user')
    next()
}

export const getLocalstorageValue = (key)=>{
    if(getLocalStorage(key)){        
        return getLocalStorage(key)
    }else{
        return false
    }
}

export const updateLocalStorage = (key, values) =>{
    setLocalStorage(key, values)
}