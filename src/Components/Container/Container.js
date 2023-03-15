import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Chat_landing from '../chat/Chat_landing'
import Login from '../Login/Login'
const Container = () => {
    const [checkLogin,setCheckLogin] = useState(null)
    useEffect(
        ()=>{
             AsyncStorage.getItem('userDataResp').then((data)=>{
                console.log(data)
                if(data){
                    setCheckLogin(true)
                }else{
                    setCheckLogin(false)
                }
             })
           
    }
    ,[])
  return (
  <>
      {checkLogin?<Chat_landing/>:<Login/>}
  </>
  )
}

export default Container

const styles = StyleSheet.create({})