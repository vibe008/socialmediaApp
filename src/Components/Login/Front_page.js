import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Front_page = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>Front_page</Text>
    </View>
  )
}

export default Front_page

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"red"
    }
})