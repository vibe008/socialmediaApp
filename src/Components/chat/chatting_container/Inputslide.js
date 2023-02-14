import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// import InputRange from 'react-input-range'
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import FinalSlider from './FinalSlider';
// import Slider from 'react-native-slider'
const img = { uri: "../../../../assets/slidbg2.png" }
const Inputslide = () => {
  const [value, setValue] = useState(8);

  return (
    < >
      <View style={{ height: 100, width: 280, marginTop: 120, transform: [{ rotate: "-90deg" }], }}>
        <ImageBackground source={require("../../../../assets/slidbg2.png")} resizeMode="cover" style={styles.imgback}>
        </ImageBackground>
         <FinalSlider/>
      </View>

    </>

  )
}

export default Inputslide

const styles = StyleSheet.create(
  {
    outer_slider: {

      padding: 20,
      backgroundColor:"red",
      width:80
    },
    slider: {
      // paddingRight:50,
      width: 280,
      padding: 50,
      
    },
    backgroundimg: {
      width: "100%",
      height: "100%",
      // flex:1
    },
    parentcontainer: {
      height: 300,
      width: 300,
      backgroundColor: "green",
      marginTop: 80,
      marginLeft: 30
      // flex:1
    },
    imgback: {
      height: "100%",
      width: "100%",
      resizeMode: "cover",

    }
  }
)