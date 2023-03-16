import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import getQuestions from '../../../Service/question'
const demoquestionRespData =[
    {
      _id: "641196fa4a042cea0207878d",
      query: "Which one of the following river flows between Vindhyan and Satpura ranges?",
      op1: "Narmada",
      op2: "Mahanadi",
      op3: "Son",
      op4: "Netravati",
      ans: "Narmada",
      status: 1,
      createdDateTime: "2023-03-15T09:55:53.995Z",
      __v: 0
    },
    {
      _id: "641197364a042cea0207878f",
      query: "The Central Rice Research Station is situated in?",
      op1: "Chennai",
      op2: "Cuttack",
      op3: "Bangalore",
      op4: "Quilon",
      ans: "Cuttack",
      status: 1,
      createdDateTime: "2023-03-15T09:55:53.995Z",
      __v: 0
    }
  ]

const QueContainer = ({navigation}) => {
    const [questionRespData,setQuestionRespData] = useState()
    const [count,setCount] = useState(0)
    const countHandler=(newcount)=>{
        setCount(newcount)
    }
    useEffect(()=>{
      (async()=>{
        const resp = await getQuestions()
        setQuestionRespData(resp.message)
      })()
    },[])
  return (
    <>
      {questionRespData && 
        <Questions item={questionRespData[count]} countHandler={countHandler} count={count} length = {questionRespData.length} navigation={navigation}/>
      }
    
    </>

  )
}

export default QueContainer

const styles = StyleSheet.create({})