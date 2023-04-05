// import apiUrl from "./env"

const saveUserData = async(data)=>{
    const fromdata = new FormData()
    fromdata.append('userData',JSON.stringify(data))
    // console.log('sending data:',fromdata)S
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'user/adduser',{body:fromdata,headers: {
        "Content-Type": "multipart/form-data",
    },method:'post'})
    return await resp.json()
}
export default saveUserData