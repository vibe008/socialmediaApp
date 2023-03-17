import apiUrl from "./env"

const getInterests = async()=>{
    const resp = await fetch(apiUrl+'interest/list') 
    return await resp.json()

}
 export default getInterests