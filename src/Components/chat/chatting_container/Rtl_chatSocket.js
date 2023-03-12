import { Image, StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, Alert, Button } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import * as  Audio from 'expo-av';
import moment from 'moment/moment';
// import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from '../../styles/Rtl_style'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import IntrestBar from './IntrestBar';

import io from 'socket.io-client'

const socket = io.connect("http://localhost:3000")
const Rtl_chat = ({ navigation }) => {
    const [showbar, setShowbar] = useState(false)
    const [inputvalue, setInputvalue] = useState("")
    const [newvalue, setNewvalue] = useState("")
    const [inputmenu, setInputmenu] = useState(false)

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
          const messageData = {
            
            author: username,
            message: currentMessage,
            time:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
            };
            console.log(time);
    
          await socket.emit("send_message", messageData);
          setMessageList((list) => [...list, messageData]);
          setCurrentMessage("");
        }
      };
    
      useEffect(() => {
        socket.on("receive_message", (data) => {
          setMessageList((list) => [...list, data]);
        });
      }, [socket]);

    const [username , setUsername] = useState("")
    const flatlistref = useRef()




    const currUser = 'shbsd33bjj44'
    const friendUser = 'shbsd33bjj45'
    const convertTime = (date) => {
        let time = moment(date).format('LT')
        return time
    }
    const convertDay = (date) => {
        let time = moment(date).format('dddds')
        return time
    }
    const message = [
        {
            id: 1,
            senderId: 'shbsd33bjj44',
            receiverId: 'shbsd33bjj45',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "hii , how are you"
        },
        {
            id: 2,
            senderId: 'shbsd33bjj45',
            receiverId: 'shbsd33bjj44',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "good"
        },
        {
            id: 3,
            senderId: 'shbsd33bjj44',
            receiverId: 'shbsd33bjj45',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquid mollitia!"
        },
        {
            id: 4,
            senderId: 'shbsd33bjj45',
            receiverId: 'shbsd33bjj44',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            id: 5,
            senderId: 'shbsd33bjj45',
            receiverId: 'shbsd33bjj44',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquid "
        },
        {
            id: 6,
            senderId: 'shbsd33bjj44',
            receiverId: 'shbsd33bjj45',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum "
        },
        {
            id: 7,
            senderId: 'shbsd33bjj45',
            receiverId: 'shbsd33bjj44',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "Lorem ipsum dolor sit amet consectetur  "
        },
        {
            id: 8,
            senderId: 'shbsd33bjj45',
            receiverId: 'shbsd33bjj44',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "Lorem ipsum dolor sit amet consectetur  "
        },
        {
            id: 9,
            senderId: 'shbsd33bjj44',
            receiverId: ' shbsd33bjj45',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "Lorem ipsum dolor sit amet consectetur  "
        },
        {
            id: 10,
            senderId: 'shbsd33bjj44',
            receiverId: 'shbsd33bjj45',
            date: '2023-01-16T06:51:56.247Z',
            time: '2023-01-16T06:51:56.247Z',
            message: "Lorem ipsum dolor sit amet consectetur  "
        },
    ]

    // const [renderMsg, setRenderMsg] = useState(message)
    // const newMsg = () => {
    //     setRenderMsg((curData) => {
    //         return [...curData, { id: Math.random().toString(36).slice(2), senderId: currUser, receiverId: friendUser, message: inputvalue, date: new Date(), time: new Date() }]
    //     })

    //     setInputvalue('')
    // }
    // useEffect(() => {
    //     // console.log(renderMsg)
    //     const timeout = setTimeout(() => {
    //         flatlistref.current.scrollToEnd({ animated: true })
    //     }, 100)

    // }, [renderMsg])



    const UserName = async () => {
        try {
            const username = await AsyncStorage.getItem('username');
          
            return username;
            // console.log( "nunm",phoneNumber);
            // setUserNumber(phoneNumber)
        } catch (error) {
            console.log(error);
        }
      }
    
      useEffect(() => {
        const getUsername = async () => {
            const userName = await UserName();
            setUsername(userName)
            // setUserNumber(userName);
            console.log(userName)
        }
        getUsername();
    }, []);

    const ShowInputMenu = () => {
        setInputmenu(!inputmenu)


    }


    return (<>
        <SafeAreaView style={styles.rtl_chat_container}>

            {/* top  */}
            <View style={styles.new_User_profile}>

                <View  >
                    <AntDesign name="arrowleft" size={28} onPress={() => navigation.goBack()} color={"#227ee3"} />
                </View>

                <View style={styles.user_images}>
                    <Image style={{ height: 40, width: 40, borderRadius: 40 / 2, resizeMode: 'contain', }}
                        source={{
                            uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }} />
                </View>

                <View style={styles.Screeen_Name_container}>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>{username}</Text>
                </View>

                <View style={styles.user_percentage}>
                    <Text style={{ fontSize: 10, color: "white" }}>25%</Text>
                </View>
            </View>
            {/* top end */}


            {/* messages container  */}
            <FlatList
                style={{}}
                data={messageList }
                showsVerticalScrollIndicator={false}
                ref={flatlistref}
                // keyExtractor={message.id}
                renderItem={(element) => {
                    return (
                        <View style={styles.chat_container}>


                            {(element.item.username === element.item.author ) ?

                                /* right message */

                                <View style={styles.right_chat_container}>
                                    <View style={styles.Right_message}>
                                        <View style={styles.inne_righ_message}>
                                            <Text style={{color:"white"}} >
                                                {/* {newvalue} */}
                                                {element.item.message}
                                            </Text>
                                        </View>
                                        <View style={styles.right_time}>
                                            <Text style={{ fontSize: 12, marginRight: 6 , color:"white" }}>{convertTime(element.item.time)}</Text>
                                            {/* <Ionicons name="ios-eye-outline" size={14} color="black" /> */}
                                            <Ionicons name="ios-eye-off-outline" size={14} color="white" />
                                        </View>
                                    </View>
                                </View>

                                :

                                /* left message */
                                <View style={styles.left_chat_contaier}>
                                    <View style={styles.Left_message}>
                                        <View style={styles.inner_left_message}>
                                            <Text  >
                                                {element.item.message}
                                            </Text>
                                        </View>
                                        <View style={styles.left_time}>
                                            <Text style={{ fontSize: 12 }}>{convertTime(element.item.time)}</Text>
                                        </View>
                                    </View>
                                </View>
                            }


                            {/* left message */}


                        </View>
                    )
                }}
            />

            {/* messages container end*/}


            {/* input container */}

            <View style={styles.input_main_container}>
                <View style={styles.input_container}>

                    <View style={styles.plusicon} >
                        {inputmenu ? <Entypo name="cross" size={24} color="white" onPress={ShowInputMenu} /> : <AntDesign name="plus" size={24} color="white" onPress={ShowInputMenu} />}


                    </View>
                    {/* <Button
                        title={recording ? 'Stop Recording' : 'Start Recording'}
                        onPress={recording ? stopRecording : startRecording}
                    /> */}
                    <View>
                        <TextInput style={styles.send_massage_container}
                            placeholder='Message....'
                            value={currentMessage}
                            onChangeText={(event) => {
                                setCurrentMessage(event);
                            }}
                            onSubmitEditing={sendMessage}
                        />
                    </View>
                    <View style={styles.cam_emoji_section}>


                        {/* <View style={styles.open_camera} >
                            <Feather name="camera" size={24} color="black" />
                        </View> */}
                        <View style={styles.emoji}>
                            <Entypo name="emoji-happy" size={24} color="black" />
                        </View>
                    </View>
                </View>

                <View style={[inputmenu ? styles.input_popup_show : styles.input_popup]}>
                    <View style={styles.popup_box}>
                        <Image style={{ width: "100%", height: "100%" }}
                            source={require("../../../../assets/camera.png")}
                        />
                    </View>
                    <View style={styles.popup_box}>
                        <Image style={{ width: "100%", height: "100%" }}
                            source={require("../../../../assets/audio.png")}
                        />
                    </View>
                    <View style={styles.popup_box}>
                        <Image style={{ width: "100%", height: "100%" }}
                            source={require("../../../../assets/gallery.png")}
                        />
                    </View>
                    <View style={styles.popup_box}>
                        <Image style={{ width: "100%", height: "100%" }}
                            source={require("../../../../assets/document.png")}
                        />
                    </View>
                </View>
            </View>
            {/* input container end */}


            {/* <View style={styles.itrest_bar}>
                <IntrestBar showbar={showbar} />
            </View>

            <View style={styles.view_bar}>
                <AntDesign name="doubleleft" size={24} color="orange" onPress={toggleBar} />
            </View> */}
        </SafeAreaView>

    </>
    )
}

export default Rtl_chat

