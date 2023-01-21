import { Text, View, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from 'react'
import styles from './common/Style';
import Br_lines from './common/Br_lines'

import Otp from '../Login/Otp'
import { mouseProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
// import Front_page from './Front_page';

const Login = ({navigation}) => {
    const [value, setValue] = useState("")
    const [isChecked, setChecked] = useState(false);
    const [visible, setVisible] = useState(false);




 
    
const toggleotp = ()=>{
    // const  num = "1234567891"
    // const newval = value
    // if(newval.length === num.length){
    //     navigation.navigate("Otp")
    //     console.log(num);
    //     // setOtppage(false)
    //     console.log(value)
    // }
    // else{
    //     console.log(num.length)

    //     console.log("not");
    //     Alert.alert("plese enter valid number")
    //     // setOtppage(true)
    // }
    // setValue("")
    navigation.navigate("Otp")

}
const [countryinfo ,  setCountryInfo] = useState(null)

    useEffect(() => { 

        fetch("https://restcountries.com/v2/all").then(res=>{
            console.log(res)
            res.json().then(r=>{
                // console.log(r)
                const ourArr = r.map(item=>{
                    return {
                        flag : item.flags.svg,
                        code : item.callingCodes[0]
                    }
                })
                setCountryInfo(countryinfo=>countryinfo=ourArr)
            })
        })
        // setTimeout(() => {
        //     setVisible(!visible);
        // }, 1000);
    }, []);
    return ( 



        <>
            {/* {visible && <Front_page/> } */}
            {/* {visible ? "login": "landingpage" } */}


           {/* {otppage ?  "" : "" } */}
           
        {/* //    login page start */}
           <View style={styles.outerconatiner}>
                <View style={styles.innerconatiner}>

                    <View>
                        <Text style={styles.mainheading}>Join your</Text>
                        <Text style={styles.mainheading}>Community</Text>
                        <Br_lines />
                    </View>

                    <Text style={{ marginTop: 20, fontWeight: "500" }}>Plese enter your number to sign in</Text>

                    <View style={styles.inputcontainer}>
                        <View >
                            <Image style={styles.images}
                                source={{
                                    // uri: 'https://flagcdn.com/16x12/in.png ',
                                    uri:countryinfo? countryinfo[0].svg:"https://flagcdn.com/16x12/in.png"
                                }} />

                        </View>
                        <View style={{ marginLeft: 10 }}><Text>+91</Text></View>
                        <TextInput
                        value={value}
                            style={{ marginLeft: 10 }}
                            placeholder='9714545454'
                            onChangeText={(value)=> setValue(value)}
                            
                        />
                    </View>

                    <View style={styles.checkboxContainer}>
                        <View>
                            <Checkbox
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#237fe4' : undefined}
                            />
                        </View>
                        <View>
                            <Text style={{
                                marginLeft: 8,
                                padding: 2,
                            }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus  hewheioeiehihi.</Text>
                        </View>

                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "skyblue",
                            padding: 10, marginTop: 17, borderRadius: 3, display: "flex",
                            alignItems: "center"
                        }}
                        onPress={toggleotp}
                        
                        disabled={isChecked === false}
                    >
                        <Text>NEXT</Text>
                    </TouchableOpacity>

                </View>
            </View> 
            {/* // login page end */}
            
            
            




        </>

    )
}

export default Login


