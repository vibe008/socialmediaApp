// import apiUrl from "./env"

const getDiscovers = async(data)=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'connection/'+data) 
    return await resp.json()
}
const getFiltersDiscovers = async(data)=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'connection/filter/'+data) 
    return await resp.json()
}
const setActiveDiscover = async(data)=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'connection/active/'+data,{method:'patch'}) 
    return await resp.json()
}
const setDeactiveDiscover = async(data)=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'connection/deactive/'+data,{method:'patch'}) 
    return await resp.json()
}
const getChats = async(data)=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'connection/chatUsers/'+data) 
    return await resp.json()
}
const updateTrust = async(data)=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'connection/update-trust/'+data,{method:'patch'}) 
    return await resp.json()
}
const getTrust = async(data)=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'connection/get-trust/'+data,) 
    return await resp.json()
}
 export  {getDiscovers,getFiltersDiscovers,setActiveDiscover,setDeactiveDiscover,getChats,updateTrust,getTrust}