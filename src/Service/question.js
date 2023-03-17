import apiUrl from "./env"
const getQuestions = async()=>{
    const resp = await fetch(apiUrl+'question/list') 
    return await resp.json()

}
 export default getQuestions