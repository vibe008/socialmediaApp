import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useRef ,useEffect } from 'react'
import OTPTextInput from 'react-native-otp-textinput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Arrow from './common/Arrow';
import Br_lines from './common/Br_lines';
import styles from './common/Style'
import styles1 from '../styles/Login_style'
import login from '../../Service/login';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
const Otp = ({ navigation }) => {

    const otpInput = useRef(null);


    const [otpval, setOtpval] = useState("")
    const [userNumber , setUserNumber] = useState("")
    const setText = () => {
        otpInput.current.setValue("1234")
    }
    const retrievePhoneNumber = async () => {
        try {
            const phoneNumber = await AsyncStorage.getItem('phonenumber');
          
            return phoneNumber;
            // console.log( "nunm",phoneNumber);
            // setUserNumber(phoneNumber)
        } catch (error) {
            console.log(error);
        }
      }
    
      useEffect(() => {
        const getPhoneNumber = async () => {
            const userNumber = await retrievePhoneNumber();
            setUserNumber(userNumber);
            console.log(userNumber)
        }
        getPhoneNumber();
    }, []);

    const VerifyOtp = async() => {
        const deviceId = Device.osInternalBuildId;
        console.log(deviceId)
        let number = userNumber
        const data = number+"/"+otpval+"/"+deviceId
        const resp = await login(data)
        console.log(resp)
       
        setOtpval("")
        otpInput.current.clear()
        if(resp.status === 201){
            Alert.alert('Wrong otp Try again!')
        }
        else if(resp.status === 202){
            Alert.alert('Device not verified!')
        }
        else if (resp.isUserPresent) {
            await AsyncStorage.setItem('userDataResp',JSON.stringify(resp))
            navigation.navigate('Chathome') 
            console.log("new page",otpval)
        }
       
        else if(resp.status === 200){
            navigation.navigate('Auth')
            console.log("no routs")
            console.log(otpval)
        }
        // if (otpval == '1234') {
        //     navigation.navigate('Chathome') 
        //     console.log("new page",otpval)
        // }
        // else {
        //     navigation.navigate('Auth')
        //     console.log("no routs")
        //     console.log(otpval)
        // }
        
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
                        tintColor="#227ee3"
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
                    style={styles1.verifybutton}
                    onPress={VerifyOtp}
                // onPress={() => navigation.navigate('Rtlchat')}
                >


                    <Text style={{color:"white" , fontSize:20 , fontWeight:"bold"}}>VERIFY</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Otp

