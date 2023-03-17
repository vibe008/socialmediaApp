import apiUrl from "./env"
const getQuestions = async()=>{
    const resp = await fetch(apiUrl+'question/list') 
    console.log(resp)
    return await resp.json()

}
 export default getQuestions