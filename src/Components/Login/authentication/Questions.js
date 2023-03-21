import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const Questions = (props) => {
    const [question,setQuestion] = useState()
    useEffect(()=>{
        console.log(props.item.options)
        setQuestion(props.item)
    },[props])
  return (
    <>
    <View style={{ marginTop: 50, marginHorizontal: 15 , height:"100%"}}>
      <Text style={{ color: "orange", fontWeight: "500", fontSize: 20 }}>Question {props.count+1}/{props.length}</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>{props.item.query}</Text>
      </View>
      <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
      <FlatList 
        data={props.item.options}
        renderItem={data=><Text>{data.item.option[0]}</Text>}
        keyExtractor={item => item._id}
        />
      </View>
      
    </View>
    </>
  )
}

export default Questions

const styles = StyleSheet.create({})