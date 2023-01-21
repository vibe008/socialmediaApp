import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Arrow from '../common/Arrow'
import styles from '../common/Style'
import Br_lines from '../common/Br_lines'
const Test = () => {
  return (
    <View style={styles.outerconatiner}>
      <View style={styles.innerconatiner}>
        <View>
          <Arrow heading="Woukd you like to ive a test" />
          <Br_lines />
        </View>
        <View style={{ marginTop: 12 }}>
          <TouchableOpacity style={{ backgroundColor: "#237fe4", padding: 10, borderRadius: 3, display: "flex", alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>
              YES
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={{ backgroundColor: "white", padding: 10, borderRadius: 3, display: "flex", alignItems: 'center' }}>
            <Text>
              NOT NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Test

