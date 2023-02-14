import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useAnimatedGestureHandler, useSharedValue, clockRunning } from 'react-native-reanimated'
import React from 'react'
import { PanGestureHandler ,GestureHandlerRootView   } from 'react-native-gesture-handler'


const WIDTH = Dimensions.get('window').width - 80
const KNOOBSIZE = 20
const MAXWIDTH = WIDTH - KNOOBSIZE / 2 + 6
  

const Slider = ({ min, max }) => {
    const x = useSharedValue(0)
    const sc = useSharedValue(1)

    const gesterHandler = useAnimatedGestureHandler({
        onStart: (_,ctx) => {
            console.log("start")
            ctx.startX = x.value
          
            
        },
        onActive: (event , ctx) => {
            console.log("active")
            x.value = ctx.startX + event.translationX < 0 ? 0 : ctx.startX + event.translationX > MAXWIDTH ? MAXWIDTH :ctx.startX + event.translationX
            sc.value = 1.3
        },
        onEnd: () => {
            console.log("end")
            sc.value = 1
        }
    })
    const styleLine = useAnimatedStyle(() => {
        return {
            backgroundColor: "green",
            height: 8,
            marginTop:  8,
            borderRadius: 8,
            width: x.value
        }
    })

    const styleKnoob = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value,
                },
                {
                    scale: sc.value
                },
                {
                    rotate: '45deg'
                }

            ]

        }
    })

    return (
        <>


            <GestureHandlerRootView  style={styles.container}>
                <View style={styles.lablecontainer}>
                    <Text style={styles.label}>{min}</Text>
                    <Text style={styles.label}>{max}</Text>
                </View>
                <View style={styles.track}></View>
                <Animated.View style={styleLine}></Animated.View>
                <PanGestureHandler onGestureEvent={gesterHandler}>
                    <Animated.View style={[styles.knoob, styleKnoob]} />
                </PanGestureHandler>
            </GestureHandlerRootView>
            
        </>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        // backgroundColor:"yellow"
    },
    track: {
        height: 8,
        backgroundColor: "#cccdb2",
        borderRadius: 8
    },
    lablecontainer: {
        width: WIDTH,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },
    label: {
        color: "black"
    },
    knoob: {
        height: KNOOBSIZE,
        width: KNOOBSIZE,
        borderTopRightRadius: KNOOBSIZE / 2,
        borderBottomRightRadius: KNOOBSIZE / 2,
        backgroundColor: "orange",
        marginTop: - (KNOOBSIZE / 2 - 12),
        marginLeft: -8,
        borderBottomLeftRadius: KNOOBSIZE / 2
    }

})