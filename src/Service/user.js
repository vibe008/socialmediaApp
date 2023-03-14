import apiUrl from "./env"

const saveUserData = async(data)=>{
    const resp = await fetch(apiUrl+'user/adduser',{body:data,headers: {
        "Content-Type": "multipart/form-data",
    },method:'post'})
    return await resp.json()
}