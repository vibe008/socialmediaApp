import apiUrl from "./env"

const getInterest = async()=>{
    const resp = await fetch(apiUrl+'/interest/list') 
    console.log(resp)
    return await resp.json()

}
 export default getInterest