import {
    Image, Text, View, FlatList, SafeAreaView, TextInput, Button, TouchableOpacity, NativeModules,
    LayoutAnimation, Modal,ImageBackground
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
import moment from 'moment/moment';
// import { AntDesign } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from '../../styles/Rtl_style'
import { Entypo } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import IntrestBar from './IntrestBar';
import socket from '../../../Socket/Socket';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
import Slide from './Slide';
// import { GestureDetector, TouchableOpacity } from 'react-native-gesture-handler';
import Inputslide from './Inputslide';
import Animated from 'react-native-reanimated';
import FinalSlider from './FinalSlider';
// import { Modal } from 'react-native-web';
const Rtl_chat = ({ navigation }) => {
    const [left, setLeft] = useState(-183)
    const [showbar, setShowbar] = useState(false)
    const [inputvalue, setInputvalue] = useState("")
    const [newvalue, setNewvalue] = useState("")
    const [inputmenu, setInputmenu] = useState(false)
    const flatlistref = useRef()
    const [modalVisible, setModalVisible] = useState(false);

    // start recording
    const [recording, setRecording] = useState();
    const [playsound, setPlaySound] = useState([]);
    const [soundmessage, setSoundmessage] = useState("")
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
    
    const [renderMsg, setRenderMsg] = useState(message)
    const barOpen = () => {
        // setShowbar(!showbar)
        LayoutAnimation.spring();
        if(left === -183){
            setLeft(-115)
        }
        else{
            setLeft(-183)
        }
        console.log("uuuuuuuu")
        setModalVisible(true)
    }
    const barClose = ()=>{
        LayoutAnimation.spring();
        setLeft(-183)
        setModalVisible(false)
    }
    async function startRecording() {
        try {
            const permission = await Audio.requestPermissionsAsync();
            if (permission.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true,
                });
                console.log('Starting recording..');
                const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY
                );

                setRecording(recording);
                console.log('Recording started');
            }

            else {
                setSoundmessage("not granted")
            }
        }
        catch (err) {
            console.error('Failed to start recording', err);
        }
    }
    function getDurationFormatted(data) {
        const minutes = data / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const second = Math.round((minutes - minutesDisplay) * 60);
        const displaysecond = second < 10 ? `0${second}  ` : second;
        return `${minutesDisplay}: ${displaysecond} `;
    }
    async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.createNewLoadedSoundAsync()
        console.log("uri",uri)
        const updateRecordings = [...playsound];
        const { sound, status } = await recording.createNewLoadedSoundAsync()
        updateRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.duration),
            file: recording.getURI()
        })
        setPlaySound(updateRecordings)
        console.log(playsound)

    }


    function getRecordingdLine() {
        return playsound.map((recordingline, index) => {
            return (
                <View key={index}>
                    {/* <Text> recording {index + 1} - {recordingline.duration}</Text> */}
                    <Button onPress={() => recordingline.sound.replayAsync()} title="play"></Button>
                </View>
            )
        })
    } 

    //  const user = Alert.prompt("jj")
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


    const newMsg = () => {
        setRenderMsg((curData) => {
            return [...curData, { id: Math.random().toString(36).slice(2), senderId: currUser, receiverId: friendUser, message: inputvalue, date: new Date(), time: new Date() , usersound : playsound }]
        })


         socket.emit("message" , inputvalue )
        setInputvalue('')
    }
    useEffect(() => {
        // console.log(renderMsg)
        const timeout = setTimeout(() => {
            flatlistref.current.scrollToEnd({ animated: true })
        }, 100)

    }, [renderMsg])


    useEffect(() => {
    socket.on("recive message" , (data)=>{
        console.log(data)
    })
    }, [])
    

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
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>screen name</Text>
                </View>

                <View style={styles.user_percentage}>
                    <Text style={{ fontSize: 10, color: "white" }}>25%</Text>
                </View>
            </View>
            {/* top end */}


            {/* messages container  */}
            <FlatList
                // style={{zIndex:99}}
                data={renderMsg}
                showsVerticalScrollIndicator={false}
                ref={flatlistref}
                // keyExtractor={message.id}
                renderItem={(element) => {
                    return (
                        <View style={styles.chat_container}>


                            {(element.item.senderId == currUser) ?

                                /* right message */
 
                                <View style={styles.right_chat_container}>

                                    <View style={styles.Right_message}>
                                        <View style={styles.inne_righ_message}>
                                            <Text>{soundmessage}</Text>
                                    {getRecordingdLine()}
                                            <Text style={{ color: "white" }} >

                                                {element.item.message}
                                            </Text>
                                        </View>
                                        <View style={styles.right_time}>
                                            <Text style={{ fontSize: 12, marginRight: 6, color: "white" }}>{convertTime(element.item.time)}</Text>
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

                    <View style={styles.plusicon}   >

                        {inputmenu ? <Entypo name="cross" size={24} color="white" onPress={ShowInputMenu} /> : <AntDesign name="plus" size={24} color="white" onPress={ShowInputMenu} />}


                    </View>

                    {/* <Button title="Play Sound" onPress={playSound} /> */}
                    <View>
                        <TextInput style={styles.send_massage_container}
                            placeholder='Message....'
                            value={inputvalue}
                            onChangeText={(value) => {
                                setInputvalue(value)
                            }}
                            onSubmitEditing={() => { newMsg() }}
                        />
                    </View>
                    <View style={styles.cam_emoji_section}>


                        {/* <View style={styles.open_camera} >
                            <Feather name="camera" size={24} color="black" />
                        </View> */}
                        <TouchableOpacity
                           onPress={()=>newMsg()}
                        style={styles.emoji}>
                            <Feather name="send" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[inputmenu ? styles.input_popup_show : styles.input_popup]}>
                    <View style={styles.popup_box}>
                        <Image style={{ width: "100%", height: "100%" }}
                            source={require("../../../../assets/camera.png")}
                        />
                    </View>
                    <TouchableOpacity style={styles.popup_box}>
                        <Image style={{ width: "100%", height: "100%" }}
                            source={require("../../../../assets/audio.png")}
                        />
                    </TouchableOpacity>
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

            <TouchableOpacity style={[ left === -115 ? styles.openforsidebar : styles.closeforsidebar]}onPress={barClose}>

            </TouchableOpacity>


            <View style={[styles.showbar, { left: left }]} >
            <ImageBackground source={require("../../../../assets/barimg2.png")} resizeMode="contain" style={{height:"100%", width:"100%", zIndex:-1}}> 
            <FinalSlider/>
            </ImageBackground>
            {/* <Inputslide /> */}
                <TouchableOpacity onPress={barOpen}
                    style={{ position: "absolute", top: 0, left: 110 , height:110 , width:30 , justifyContent:"center", alignItems:"center"  , }}>
                        {left === -183 ? <Ionicons name='chevron-forward' size={30} color={"black"} /> :<Ionicons name='chevron-back' size={30} color={"black"} /> }
                    
                </TouchableOpacity>
            </View>
         
                {/* <TouchableOpacity onPress={barOpen} */}
        </SafeAreaView>

    </>
    )
}

export default Rtl_chat

