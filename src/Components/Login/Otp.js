import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import OTPTextInput from 'react-native-otp-textinput';
import Arrow from './common/Arrow';
import Br_lines from './common/Br_lines';
import styles from './common/Style'

const Otp = ({ navigation }) => {

    const otpInput = useRef(null);


    const [otpval, setOtpval] = useState("")


    const setText = () => {
        otpInput.current.setValue("1234")
    }

    const VerifyOtp = () => {
        setOtpval("")
        otpInput.current.clear()
        if (otpval == '1234') {
            navigation.navigate('Chathome') 
            console.log(otpval)
        }
        else {
            navigation.navigate('Auth')
            console.log("no routs")
            console.log(otpval)
        }
        
        // navigation.navigate('Chathome')
    }

    return (
        <View style={styles.outerconatiner}>
            <View style={styles.innerconatiner}>

                <View>
                    <Arrow heading="Enter OTP" navigation={navigation} />
                    <Br_lines />
                </View>


                <View style={{ marginTop: 12, }}>
                    <Text style={{ fontWeight: "500" }}>Enter your OTP code here</Text>

                    {/* <TextInput

                        value={otpval}
                        onChangeText={(otpval) => setOtpval(otpval)}
                        style={{ padding: 10 }}
                        placeholder='1234'
                    /> */}

                    <OTPTextInput
                        tintColor="blue"
                        defaultValue={otpval}
                        // value={otpval}
                        handleTextChange={(value)=>{
                            console.log(value)
                            setOtpval(value)
                        }}
                        ref={otpInput}
                        
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={VerifyOtp}
                // onPress={() => navigation.navigate('Rtlchat')}
                >


                    <Text>VERIFY</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Otp
