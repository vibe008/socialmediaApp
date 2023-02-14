import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue , useAnimatedProps , runOnJS } from 'react-native-reanimated'
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'
const HEIGHT = 300

const IntrestBar = () => {
  const [value , setvalue] = useState(0)
  const c = useSharedValue(8)

  
  
  const gestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = c.value
      console.log("strt", ctx.startX)
    },
    onActive: (event, ctx) => {
      c.value = ctx.startX + event.translationY  > 0 ? 0 : event.translationY
      // event.translationY = Math.abs(event.translationY)
      // event.translationY = event.translationY >= 0 ? 0 :  event.translationY
      // setvalue(c.value)
      console.log("active", c.value)
      console.log("activestart", ctx.startX)
      // console.log("translatey",Math.abs( event.translationY))
      console.log("translatey", event.translationY)
      
    },
    // onEnd : ()=>{
    //  runOnJS(onvaluechange)({
    //   min :  Math.round(c.value / (max-min /step)*step),
    //   max : Math.round(c.value / (max-min /step)*step)
    //  })
    //   }
      
    })
    
    const circlestyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: c.value 
          },
          
        ]
      }
    })
    
    const Atexinput = Animated.createAnimatedComponent(TextInput);
  const animatedtext =  useAnimatedProps(()=>{
    console.log("final val" ,c.value)
    return{
      // Text : `$${min + Math.round(c.value / (max-min /step)*step) }`
      Text : c.value
    }
    
  })
  return (

    <GestureHandlerRootView>
      <View style={styles.seekbar}>
        <View style={styles.first}>
          <View style={[styles.longOne, styles.longOneAni]}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
        </View>
        <View style={styles.second}>
          <View style={styles.longOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
        </View>
        <View style={styles.third}>
          <View style={styles.longOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
        </View>
        <View style={styles.fourth}>
          <View style={styles.longOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
        </View>
        <View style={styles.fifth}>
          <View style={styles.longOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
          <View style={styles.shortOne}></View>
        </View>
        <PanGestureHandler onGestureEvent={gestureEvent}>
          <Animated.View style={[styles.circle, circlestyle]}>
            {/* <View style={{ backgroundColor: "green", padding: 2, width: 30, height: 30, borderRadius: 30 / 2 }}>
            </View> */}
            {/* <Atexinput defaultValue={'0'} editable={false} useAnimatedProps={animatedtext}  style={{color:"black"}}/> */}
            {/* <TextInput>
              
            </TextInput> */}
      {/* <Atexinput defaultValue={'0'}  animatedProps={animatedtext}  style={{color:"black"}}>
      
      </Atexinput> */}
          </Animated.View>
        </PanGestureHandler>
      </View>
            {/* <Text style={{color:"black"}}>{max}</Text> */}
    </GestureHandlerRootView>
  )
}

export default IntrestBar

const styles = StyleSheet.create({
  seekbar: {
    backgroundColor: "green",
    height:300,
    width: 50,
    position: "relative"
  },
  circle: {
    width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: "white", position: "absolute", right: -20, bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding:10
  },
  longOne: {
    backgroundColor: "black", height: 2, width: 40, marginTop: 6
  },
  shortOne: {
    backgroundColor: "black", height: 2, width: 20, marginTop: 6
  },
  // longOneAni:{
  //   width:20, backgroundColor:"white"
  // }
})