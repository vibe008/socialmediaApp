import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Br_lines = () => {
  return (
<View style={styles.brline}></View>
  )
} 

export default Br_lines

const styles = StyleSheet.create({
  brline:{
    marginTop: 10,
    width: 40,
    color: "blue",
    backgroundColor: "#237fe4",
    height: 4,
    borderRadius: 3,
   marginLeft:2
  }
})