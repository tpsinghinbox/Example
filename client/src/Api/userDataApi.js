import axios from "axios"

const getUserById = async (p)=>{  
    const response = await axios.get(`/api/user/get/${p}`)
    return response
}

const updateAccountDetail = async (account) => {
    const config = {
        header:{
            'Content-Type':'application/json'
        }
    }
    const response = await axios.post('/api/user/updateaccount', account, config)
    return response
}
// const getUserById1 = async (id) => {
//     const config = {
//         header:{
//             'Content-Type':'application/json'
//         }
//     }
//     const response = await axios.post('/api/user/get', m, config)
//     return response
// }




// const getMobileNumber = async (m) => {
//     const config = {
//         header:{
//             'Content-Type':'application/json'
//         }
//     }
//     const response = await axios.post('/api/user/checkmobile', m, config)
// }

// const updateInitlizeData = async(data) =>{
//     const config = {
//         header:{
//             'Content-Type':'application/json'
//         }
//     }
//     const response = await axios.post('/api/user/updateinitilize', data, config)
//     return response
// }

export const userDataApi = {
    getUserById,
    updateAccountDetail
}

