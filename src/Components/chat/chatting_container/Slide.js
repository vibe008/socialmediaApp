import React, { useState } from 'react';
import { View,  Text , StyleSheet ,ImageBackground, Image} from 'react-native';
// import {Slider} from '@miblanchard/react-native-slider';
// import { RNFluidicSlider } from 'react-native-fluidic-slider'
// import VerticalSlider from 'rn-vertical-slider';
const images = { uri:'../../../../assets/scale1.png'}
const Slide = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={{ flex:1 ,  marginTop:90} }>
{/* <VerticalSlider
   style={styles.slider}
          value={value}
          disabled={false}
          min={0}
          max={100}
          onChange={(value) => {
            setValue(value)
            console.log("CHANGE", value);
          }}
          width={50}
          height={300}
          step={1}
          borderRadius={5}
          minimumTrackTintColor={"#237fe4"}
          maximumTrackTintColor={"white"}
          showBallIndicator
          ballIndicatorColor={"white"}
          ballIndicatorTextColor={"black"}
          ballIndicatorPosition={60}
          animationDuration={4}
          showBackgroundShadow={9}

        /> */}

    </View>
  );
};

export default Slide;
const styles = StyleSheet.create({
    stylethumb:{
        backgroundColor:"green",
        height:40,
        height:40,
        borderRadius:40/2,
        position:"absolute",
        // top:100
    },
    containerStyle:{
        // transform:[{rotate:'90deg'}]
    },
    slider:{
        
    }
})