import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome } from "@expo/vector-icons"
import AsyncStorage from '@react-native-async-storage/async-storage'
const opstyle = { backgroundColor: "white", width: 300, display: "flex", flexDirection: "row", margin: 10, padding: 20, borderRadius: 5, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
 }
const deficon= 'circle-o'
const defColor = 'black'


const Questions = (props) => {
  const [initVal , setInitVal] = useState(0)
  const [mark,setMark] = useState(initVal)
  const [selected1,setSelected1] = useState({opstyle,deficon,op:props.item.op1,defColor})
  const [selected2,setSelected2] = useState({opstyle,deficon,op:props.item.op2,defColor})
  const [selected3,setSelected3] = useState({opstyle,deficon,op:props.item.op3,defColor})
  const [selected4,setSelected4] = useState({opstyle,deficon,op:props.item.op4,defColor})
  // const [isDotCircle,setIsDotCircle] = useState(false)
  useEffect(() => {
    setInitVal(mark)
    setSelected1({opstyle,deficon,op:props.item.op1,defColor})
    setSelected2({opstyle,deficon,op:props.item.op2,defColor})
    setSelected3({opstyle,deficon,op:props.item.op3,defColor})
    setSelected4({opstyle,deficon,op:props.item.op4,defColor})
  }, [props]);
  
  return (
    <View style={{ marginTop: 50, marginHorizontal: 15 , height:"100%"}}>
      <Text style={{ color: "orange", fontWeight: "500", fontSize: 20 }}>Question {props.count+1}/{props.length}</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>{props.item.query}
        </Text>
      </View>
      {/* <FlatList
        data={questionData}
        renderItem={({ item }) => {
          return(
            <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity
              onPress={(e) => {
                setSelected({...selected,backgroundColor: "red"})
              }}
              activeOpacity={0.5} style={selected}>
              <View style={{ marginRight: 20 }}>
                <FontAwesome name='circle-o' size={20} color="white" />
              </View>
              <View>
                <Text style={{ color: "white" }}>{item.id}</Text>
              </View>
            </TouchableOpacity>

          </View>
          )

        }}
      /> */}
            <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity
              onPress={(e) => {
                if(props.item.ans === props.item.op1)
                  setMark(initVal+10)
                else
                  setMark(initVal+Math.ceil(Math.random()*9))
                setSelected1({...selected1,opstyle:{...selected1.opstyle,backgroundColor: "black"},deficon:'dot-circle-o',defColor:'white'})
                setSelected2({opstyle,deficon,op:props.item.op2,defColor})
                setSelected3({opstyle,deficon,op:props.item.op3,defColor})
                setSelected4({opstyle,deficon,op:props.item.op4,defColor})
              }}
              activeOpacity={0.5} style={selected1.opstyle}>
              <View style={{ marginRight: 20 }}>
            <FontAwesome name={selected1.deficon} size={20} color={selected1.defColor} />    
              </View>
              <View>
                <Text style={{color:selected1.defColor}}>{selected1.op}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(e) => {
                if(props.item.ans === props.item.op2)
                  setMark(initVal+10)
                else
                  setMark(initVal+Math.ceil(Math.random()*9))
                setSelected2({...selected2,opstyle:{...selected2.opstyle,backgroundColor: "black"},deficon:'dot-circle-o',defColor:'white'})
                setSelected1({opstyle,deficon,op:props.item.op1,defColor})
                setSelected3({opstyle,deficon,op:props.item.op3,defColor})
                setSelected4({opstyle,deficon,op:props.item.op4,defColor})
              }}
              activeOpacity={0.5} style={selected2.opstyle}>
              <View style={{ marginRight: 20 }}>
                <FontAwesome name={selected2.deficon} size={20} color={selected2.defColor}/>
              </View>
              <View>
                <Text style={{ color: selected2.defColor }}>{selected2.op}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(e) => {
                if(props.item.ans === props.item.op3)
                  setMark(initVal+10)
                else
                  setMark(initVal+Math.ceil(Math.random()*9))
                setSelected3({...selected3,opstyle:{...selected3.opstyle,backgroundColor: "black"},deficon:'dot-circle-o',defColor:'white'})
                setSelected2({opstyle,deficon,op:props.item.op2,defColor})
                setSelected1({opstyle,deficon,op:props.item.op1,defColor})
                setSelected4({opstyle,deficon,op:props.item.op4,defColor})
              }}
              activeOpacity={0.5} style={selected3.opstyle}>
              <View style={{ marginRight: 20 }}>
                <FontAwesome name={selected3.deficon} size={20} color={selected3.defColor} />
              </View>
              <View>
                <Text style={{ color: selected3.defColor }}>{selected3.op}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(e) => {
                if(props.item.ans === props.item.op4)
                  setMark(initVal+10)
                else
                  setMark(initVal+Math.ceil(Math.random()*9))
                setSelected4({...selected4,opstyle:{...selected4.opstyle,backgroundColor: "black"},deficon:'dot-circle-o',defColor:'white'})
                setSelected2({opstyle,deficon,op:props.item.op2,defColor})
                setSelected3({opstyle,deficon,op:props.item.op3,defColor})
                setSelected1({opstyle,deficon,op:props.item.op1,defColor})
              }}
              activeOpacity={0.5} style={selected4.opstyle}>
              <View style={{ marginRight: 20 }}>
                <FontAwesome name={selected4.deficon} size={20} color={selected4.defColor}/>
              </View>
              <View>
                <Text style={{ color: selected4.defColor }}>{selected4.op}</Text>
              </View>
            </TouchableOpacity>
          </View>

      <TouchableOpacity style={{ marginTop: 20, backgroundColor: "gray", padding: 20, borderRadius: 5, width: 300, alignSelf: "center" }}
        onPress={async()=>{
          setInitVal(mark)
          console.log(mark)
          if(props.count ===props.length-1)
          {
            const data = await AsyncStorage.getItem('userData')
            const newdata = {...JSON.parse(data),quizResult:mark}
            await AsyncStorage.setItem('userData',JSON.stringify(newdata))
            props.navigation.navigate('Profile')
          }else
          props.countHandler(props.count+1)
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({})