import { StyleSheet, Text, TextInput, View , ImageBackground} from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedProps, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)
import { LinearGradient } from 'expo-linear-gradient';
const Slider_hight = 400
const Knoob_Width = 30
const FinalSlider = (props) => {
    const y = useSharedValue(0)

    const handleGesture = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.StartY = y.value
            console.log("start", ctx.StartY)
        },
        onActive: (event, ctx) => {
            y.value = ctx.StartY + event.translationY > 0 ? 0 : ctx.StartY + event.translationY < -372 ? -372 : ctx.StartY + event.translationY
            // y.value = 10
            console.log("yvalue", (y.value/372)*100)

        }
    })


    const stylebar = useAnimatedStyle(() => {
        return {
            // backgroundColor:"pink",
            height: -y.value + 40,
            width: 60,
            borderRadius: 10

        }
    })
    const gradientstyle = useAnimatedStyle(() => {
        return {
            height: -y.value + 10,
            opacity: -y.value

        }
    })

    const styleknoob = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: -y.value },
            ]
        }
    })
    const number = useAnimatedProps(() => {
        return {
            text: `${props.myData.defaultTrust}%`
            // text : `${Math.ceil((-y.value/372)*100)}%`

        }
    })
    return (
        <GestureHandlerRootView style={styles.main}>
                        <View style={styles.slider}>
                <AnimatedLinearGradient
                    style={[styles.gradient, gradientstyle]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    locations={[
                        0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.92, 0.94, 0.96, 0.98, 1,
                    ]}
                    colors={['#D50000', '#B71C1C', '#C62828', '#FF8A80', '#EF5350', '#E57373', '#EF9A9A', '#FFCDD2', '#c9e9f6', '#b3e0f2', '#9dd7ef', '#87ceeb', '#71c5e7', '#5bbce4', '#45b3e0']}>
                    <Animated.View style={[styles.bar, stylebar]} />
                </AnimatedLinearGradient>
                <PanGestureHandler onGestureEvent={handleGesture}>
                    <Animated.View style={[styles.knoob, styleknoob]} >
 
                    </Animated.View>
                </PanGestureHandler>
                <AnimatedTextInput style={styles.textinputstyle}
                            defaultValue='0' animatedProps={number} editable={false}
                        />
            </View>
        </GestureHandlerRootView>
    )
}

export default FinalSlider

const styles = StyleSheet.create({
    slider: {
        backgroundColor: "white",
        // marginTop: 90,
        borderRadius: 10,
        height: Slider_hight,
        width: 10,
        marginLeft: 100,
        transform: [{ rotate: "-180deg" }],
        
    
    },
    bar: {
        // backgroundColor:"red",
        height: "100%",
        width: "100%",
        position: "absolute",
        // bottom:0
    },
    knoob: {
        backgroundColor: "#227ee3",
        width: Knoob_Width,
        height: Knoob_Width,
        borderRadius: Knoob_Width / 2,
        position: "absolute",
        // bottom:0,
        alignItems: "center",
        // justifyContent: "center",
        alignSelf: "center"
    },
    gradient: {
        // height: min_height ,
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    textinputstyle: {
        position: "absolute",
        // top:"30%"
        left: -38,
        transform: [{ rotate: "180deg" }],
        color: "white",
        backgroundColor:"#227ee3",
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        alignItems:"center",
        justifyContent:"center",
        // alignSelf:"center",
        display:"flex",
        // padding:5,
        bottom:113,
        // paddingLeft:7,
        fontSize:10,
        textAlign:"center",
        borderColor:"white",
        borderWidth:1,
        
        
    }, 
       imgback: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
  
      },
    //   main:{
    //     width:200,
    //     height:600,
    //   }
})