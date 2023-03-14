import apiUrl from './env.js'
const login = async(data)=>{
    const resp = await fetch(apiUrl+"user/verify/"+data)
    return await resp.json()
}
export default login
