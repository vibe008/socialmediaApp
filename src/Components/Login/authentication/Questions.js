import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from "@expo/vector-icons"
import AsyncStorage from '@react-native-async-storage/async-storage'
const opstyle = {
  backgroundColor: "white", width: 300, display: "flex", flexDirection: "row", margin: 10, padding: 15, borderRadius: 5, shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}
const selectopstyle = {
  backgroundColor: "black", width: 300, display: "flex", flexDirection: "row", margin: 10, padding: 15, borderRadius: 5, shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}
const deficon = 'circle-o'
const Questions = (props) => {
  // const [question,setQuestion] = useState()
  const [selected, setSelected] = useState()
  const [cal, setCal] = useState()
  // useEffect(()=>{
  //     console.log(props.item.options)
  //     setQuestion(props.item)
  // },[props])
  const handleOk = async (defaultTrust, personality) => {
    const data = await AsyncStorage.getItem('userData')
    const newdata = { ...JSON.parse(data), quizResult: defaultTrust, personality }
    await AsyncStorage.setItem('userData', JSON.stringify(newdata))
    props.navigation.navigate('Profile')
  }
  return (
    <>
      <View style={{ marginTop: 50, marginHorizontal: 15, height: "100%" }}>
        <Text style={{ color: "orange", fontWeight: "500", fontSize: 20 }}>Question {props.count + 1}/{props.length}</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>{props.item.query}</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
          <FlatList
            data={props.item.options}
            renderItem={data => {
              return (
                <TouchableOpacity
                  onPress={(e) => {
                    setSelected(data.item._id)
                    const newCal = { ...props.calibration }
                    newCal[data.item.option[1]] = props.calibration[data.item.option[1]] + 1
                    setCal(newCal)
                    console.log(newCal)
                  }}
                  activeOpacity={0.5} style={selected === data.item._id ? selectopstyle : opstyle}>
                  <View style={{ marginRight: 20 }}>
                    <FontAwesome size={20} name={selected === data.item._id ? 'dot-circle-o' : deficon} style={selected === data.item._id && { color: 'white' }} />
                  </View>
                  <View style={{ width: '90%' }}>
                    <Text style={selected === data.item._id && { color: 'white' }}>{data.item.option[0]}</Text>
                  </View>
                </TouchableOpacity>
              )
            }
            }
            // <Text>{data.item.option[0]}</Text>}}
            keyExtractor={item => item._id}
          />
          <TouchableOpacity style={{ marginTop: 20, backgroundColor: "gray", padding: 20, borderRadius: 5, width: 300, alignSelf: "center" }}
            onPress={async () => {
              if (selected) {
                if (props.count + 1 === props.length) {
                  let defaultTrust = 20
                  let personality = ''
                  for (let key of Object.keys(cal)) {
                    console.log(key, cal[key] * 100 / 12, 'Per')
                    if ((cal[key] * 100 / 12) >= 55) {
                      defaultTrust = 55
                      switch (key) {
                        case '@':
                          personality = 'Your spirit animal is a Bear. You are relaxed and reliable.'
                          break;
                        case '#':
                          personality = 'Your spirit animal is an Owl. You are wise and dependable.'
                          Alert.alert('Congratulations!', personality)
                          break;
                        case '&':
                          personality = 'Your spirit animal is a Dolphin. You are fun and chatty.'
                          Alert.alert('Congratulations!', personality)
                          break;
                        case '%':
                          personality = 'Your spirit animal is an Eagle. You are free and open to possibilities.'
                          Alert.alert('Congratulations!', personality)
                          break;
                        case '$':
                          personality = 'Your spirit animal is a Tiger. You are strong and determined.'
                          Alert.alert('Congratulations!', personality)
                          break;
                        case '*':
                          personality = 'Your spirit animal is a Hare. You are mysterious and unique.'
                          Alert.alert('Congratulations!', personality)
                          break;
                        default:
                          break;
                      }
                    }
                  }
                  if (defaultTrust === 20 && !personality) {
                    Alert.alert('Oops!', 'Hey looks like you did not attempt the test seriously, do try again with a relaxed mind.', [{ text: 'OK', onPress: async () => await handleOk(defaultTrust, personality) }])
                  } else {
                    Alert.alert('Congratulations!', personality, [{ text: 'OK', onPress: async () => await handleOk(defaultTrust, personality) }])
                  }

                } else {
                  props.setCalibration(cal)
                  props.countHandler(props.count + 1, cal)
                }
              } else {
                Alert.alert('Please Select An Option!')
              }

            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>Next</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

export default Questions

const styles = StyleSheet.create({})