import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React , { useRef }from 'react'
import { GestureDetector , Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
// const { WIDTH : SCREN_WIDTH} = Dimensions.get('window' - 80)
const WIDTH = Dimensions.get('window').width -80
const Demo = () => {
  const x = useSharedValue(0)
  const contex = useSharedValue({x:0})
  const handlegesture = Gesture.Pan().onStart(()=>{
    contex.value = { x : x.value}
  }).onUpdate((event)=>{
    x.value = event.translationX + contex.value.x
      console.log(event.translationX)
    
  })

  const boxstyle =  useAnimatedStyle(()=>{
    return{
      transform:[{translateX : x.value}]
    }
  })
  return (
    <GestureHandlerRootView>


    <GestureDetector gesture={handlegesture} style={styles.box}>
    <Animated.View style={[styles.showbar , boxstyle]}>
        {/* <Inputslide /> */}
        {/* <View
            style={{ position: "absolute", top: 50, left: 200 }}>
            <AntDesign name='doubleleft' size={30} color={"red"} onPress={barOpen} />
        </View> */}
    </Animated.View >
</GestureDetector>
</GestureHandlerRootView>
  )
}

export default Demo

const styles = StyleSheet.create({
  showbar: {
        height: 100,
        width: WIDTH,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:90,
        // position:"absolute",
        left: -WIDTH + 20,
        top:20
        // left: WIDTH / -330
        // left: SCREN_WIDTH
      },
})