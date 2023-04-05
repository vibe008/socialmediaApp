// import apiUrl from "./env"
const getQuestions = async()=>{
    const resp = await fetch('http://13.234.43.25/serverapi/api/'+'question/list') 
    return await resp.json()

}
 export default getQuestions