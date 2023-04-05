// import apiUrl from './env.js'
const login = async(data)=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+"user/verify/"+data)
    return await resp.json()
}
export default login
