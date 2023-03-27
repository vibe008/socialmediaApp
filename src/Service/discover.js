import apiUrl from "./env"

const getDiscovers = async(data)=>{
    const resp = await fetch(apiUrl+'connection/'+data) 
    return await resp.json()
}
const getFiltersDiscovers = async(data)=>{
    const resp = await fetch(apiUrl+'connection/filter/'+data) 
    return await resp.json()
}
const setActiveDiscover = async(data)=>{
    const resp = await fetch(apiUrl+'connection/'+data,{method:'patch'}) 
    return await resp.json()
}
const getChats = async(data)=>{
    const resp = await fetch(apiUrl+'connection/chatUsers/'+data) 
    return await resp.json()
}
 export  {getDiscovers,getFiltersDiscovers,setActiveDiscover,getChats}