import { Text, View, TextInput, Button, Image, TouchableOpacity, Alert, FlatList, Modal } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from 'react'
import styles from './common/Style';
import styles1 from '../styles/Login_style'
import Br_lines from './common/Br_lines'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchableDropdown from 'react-native-searchable-dropdown';
import login from '../../Service/login';
import {items} from '../Data/Data.js'
// import Front_page from './Front_page';
const Login = ({ navigation }) => {
    
    const [value, setValue] = useState("")
    const [isChecked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    const [countrycode, setCountrycode] = useState("91")
    const [flag, setFlag] = useState("https://flagcdn.com/w320/in.png")

    // })


    const selecteditems = (item) => {
        const code = item.callingCodes
        const flag = item.flag
        setFlag(flag)
        setCountrycode(code)
        setModalVisible(false)
    }

    const phonenumber = value

    AsyncStorage.setItem('phonenumber', phonenumber)

    // const deviceId = Constants.deviceId;



    const toggleotp = () => {
    if(value == ""){
    setChecked(true)

}
else{

    navigation.navigate("Otp")
}

    }

    


    return (



        <>
            {/* {visible && <Front_page/> } */}
            {/* {visible ? "login": "landingpage" } */}


            {/* {otppage ?  "" : "" } */}

            {/* //    login page start */}
            <View style={styles.outerconatiner}>
                <View style={styles.innerconatiner}>

                    <View>
                        <Text style={styles1.mainheading}>Join your</Text>
                        <Text style={styles1.mainheading}>Community</Text>
                        <Br_lines />
                    </View>

                    <Text style={styles1.signintext}>Plese Enter Your Number To Sign Up</Text>

                    <View style={styles1.inputcontainer}>
                        <View >

                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Image style={styles1.images}
                                    source={{
                                        uri: flag
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                        <View style={{ marginLeft: 10 }}><Text>+{countrycode}</Text></View>
                        <View>
                        <TextInput
                            value={value}
                            style={{ marginLeft: 10 , }}
                            placeholder='Plese Enter Your Number'
                            onChangeText={(value) => {
                                setValue(value)
                                console.log(value)
                            }
                            }
                            keyboardType="numeric"
                            maxLength={10}
                        />
                        
                    

                        </View>
                    </View>

                    <View style={styles1.checkboxContainer}>
                        <View>
                            <Checkbox
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#237fe4' : undefined}
                            />
                        </View>
                        <View style={{ width:"80%" , marginLeft:20}}>
                            <Text style={{
                                letterSpacing:0.8
                            }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus  hewheioeiehihi.</Text>
                        </View>

                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#227ee3",
                            padding: 10, marginTop: 17, borderRadius: 3, display: "flex",
                            alignItems: "center"
                        }}
                        onPress={toggleotp}

                        disabled={isChecked === false}
                    >
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>NEXT</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="fade"
                        closeOnClick={true}
                        transparent={true}
                        visible={modalVisible}
                    >
                        <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: "relative", }}>
                            <View style={{
                                flex: 0.2, backgroundColor: 'white', top: "30%", position: "absolute", width: 300, shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.23,
                                shadowRadius: 2.62,

                                elevation: 4,
                            }}>

                                <SearchableDropdown
                                    onTextChange={(text) => console.log(text)}
                                    onItemSelect={selecteditems}
                                    containerStyle={{ padding: 5 }}
                                    textInputStyle={{
                                        padding: 12,
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        backgroundColor: '#FAF7F6',
                                    }}
                                    itemStyle={{
                                        padding: 10,
                                        marginTop: 2,
                                        backgroundColor: '#FAF9F8',
                                        borderColor: '#bbb',
                                        borderWidth: 1,
                                    }}
                                    itemTextStyle={{
                                        color: '#222',
                                    }}
                                    itemsContainerStyle={{
                                        maxHeight: '60%',
                                    }}
                                    items={items}
                                    placeholder="Enter Your Coutry Name"
                                    resetValue={false}
                                    underlineColorAndroid="transparent"

                                />
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </View>
            {/* // login page end */}







        </>

    )
}

export default Login


