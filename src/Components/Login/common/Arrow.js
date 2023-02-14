import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const Arrow = (props) => {


    
  return (
     
    <View style={styles.arrowsection}>
    <AntDesign name="arrowleft" style={styles.arrow} onPress={() => props.navigation.goBack()}/>
    <Text style={styles.mainheading}>{props.heading}</Text>
 
</View>  )
}

export default Arrow

const styles = StyleSheet.create({    mainheading: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "",

},
arrow: {
    fontSize: 35,
    // marginLeft: 4,
    color:"#227ee3",
    
},})