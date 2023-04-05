// import apiUrl from "./env"

const getInterests = async()=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'interest/list') 
    return await resp.json()

}
 export default getInterests