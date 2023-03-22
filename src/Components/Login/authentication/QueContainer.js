import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import getQuestions from '../../../Service/question'

const QueContainer = ({navigation}) => {
    const [questionRespData,setQuestionRespData] = useState()
    const [count,setCount] = useState(0)
    const [calibration,setCalibration] = useState({'@':0,'#':0,'$':0,'%':0,'&':0,'*':0})
    const countHandler=(newcount)=>{
        setCount(newcount)
    }
    useEffect(()=>{
      (async()=>{
        console.log("getQuestions",getQuestions())
        const resp = await getQuestions()
        setQuestionRespData(resp.message)
      })()
    },[])
  return (
    <>
      {questionRespData && 
        <Questions
          item={questionRespData[count]} 
          countHandler={countHandler} 
          count={count} 
          length = {questionRespData.length} 
          calibration = {calibration}
          setCalibration = {setCalibration}
          navigation={navigation}/>
      }
    
    </>

  )
}

export default QueContainer

const styles = StyleSheet.create({})