import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import VerticalSlider from 'rn-vertical-slider'
const IntrestBar = (showbar) => {
  const [val , setVal] =  useState(val)
  return (

<>

<View style={styles.showbar  }>
<VerticalSlider
          value={val}
          // disabled={false}
          min={0}
          max={100}
          onChange={(val) => {
            setVal(val)
            console.log(val)
            // console.log("CHANGE", value);
          }}
          // onComplete={(value: number) => {

          // }}
          width={50}
          height={300}
          step={1}
          borderRadius={5}
          minimumTrackTintColor={[
            "#2ecc71",
            "#27ae60",
            "#f1c40f",
            "#f39c12",
            "#d35400",
            "#c0392b"
          ]}
          maximumTrackTintColor="#ecf0f1"
          showBallIndicator
          ballIndicatorTextColor={"white"}
        />
         </View>


          </>
  )
}

export default IntrestBar

const styles = StyleSheet.create({
  showbar:{
    left:20,
    backgroundColor:"red",
    height:200,
    width:100,
    position:"absolute",
    top:"40%",
    backgroundColor:"green"
    // display:"none"
  }
,
  hidebar:{
    left:0,
    backgroundColor:"red",
    height:200,
    width:100,
    zIndex:9,
    display:'flex'
  }
})