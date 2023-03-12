import { StyleSheet, Text, View, Image, FlatList , TextInput ,TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons';
import styles from '../../styles/Rtl_style'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Groupchat = ({ navigation }) => {
    const flatlistref = useRef()

    const currentUSer = "a1b1c1"
    const OtherCircleUser = "a2b2c2"

    const [inputmenu, setInputmenu] = useState(false)
  const ShowInputMenu = ()=>{
    setInputmenu(!inputmenu)
    console.log("toggle")
  }
    const message = [
        {
            id: 1,
            message: "hii , how are you",
            img: require('../../../../assets/groupprofile1.jpg'),
            senderID: "a1b1c1",
            receverID: "a2b2c2"
        },
        {
            id: 2,
            message: "good",
            img: require('../../../../assets/groupprofile2.jpg'),
            senderID: "a1b1c2",
            receverID: "a1b1c1"
        },

        {
            id: 3,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquid mollitia!",
            img: require("../../../../assets/groupprofile3.jpg"),
            senderID: "a2b2c2",
            receverID: "a1b1c1"
        },
        {
            id: 8,
            message: "ok!",
            img: require('../../../../assets/groupprofile1.jpg'),
            senderID: "a1b1c1",
            receverID: "a2b2c2"
        },
        {
            id: 4,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            img: require('../../../../assets/groupprofile4.jpg'),
            senderID: "a2b2c2",
            receverID: "a1b1c1"
        },
        
        {
            id: 5,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquid ",
            img: require('../../../../assets/groupprofile5.jpg'),
            senderID: "a2b2c2",
            receverID: "a1b1c1"
        },
        {
            id: 9,
            message: "nice",
            img: require('../../../../assets/groupprofile1.jpg'),
            senderID: "a1b1c1",
            receverID: "a2b2c2"
        },
        {
            id: 6,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ",
            img: require('../../../../assets/groupprofile6.jpg'),
            senderID: "a1b1c2",
            receverID: "a1b1c1"
        },
        {
            id: 7,
            message: "Lorem ipsum dolor sit amet consectetur  ",
            img: require('../../../../assets/groupprofile7.jpg'),
            senderID: "a2b2c2",
            receverID: "a1b1c1"
        },



    ]

    // const [rendermsg, setRendermsg] = useState(message)




    return (
        <View style={styles.group_container}>

            {/* header */}
            <View style={styles.group_header}>

                <View>
                    <AntDesign name="arrowleft" size={32} onPress={() => navigation.goBack()} color={"#227ee3"} />
                </View>
                <View style={styles.group_Name_container}>
                    <Text style={{ fontSize: 15, fontWeight: "500", color: "black" }}>Group name</Text>
                </View>
                <TouchableOpacity onPress={()=> {navigation.navigate("Groupinfo")}}>
                <Feather name='info' size={25}/>
                </TouchableOpacity>
            </View>
            {/* header end */}


            {/* group chat */}
            <View style={styles.group_chat_container}>
                <FlatList 
                    data={message}
                    ref={flatlistref}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (



                            <View style={{ marginTop: 20 }}>
                                {item.senderID === currentUSer ?                            
                                         /* // right message current user show here */
                                    <View style={{  width: "100%", marginTop: 20 }}>
                                        <View style={{ maxWidth: "70%", alignSelf: "flex-end", marginRight: 10, marginBottom:10 ,  }}>
                                            <View style={{  padding: 20, borderTopRightRadius: 10, borderBottomRightRadius: 6, borderBottomLeftRadius: 10, position: "relative" , backgroundColor:'#227ee3'}}>
                                                <View>
                                                    <Text style={{color:"white"}}>{item.message}</Text>
                                                </View>
                                                <View style={{ position: "absolute", top: -30, left: -20, height: 50, width: 50, borderRadius: 50 / 2 }}>
                                                    <Image style={{ height: "100%", width: "100%", borderRadius: 50 / 2 }}
                                                        source={item.img}
                                                        key={index}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ alignSelf: "flex-end" }}>
                                                <Text>3.40 pm</Text>
                                            </View>
                                        </View>

                                    </View> 
                                    :
                                    /* // left message othercircle user show here */
                                <View style={{  width: "100%", marginTop: 20 }}>
                                <View style={{ maxWidth: "70%", alignSelf: "flex-start", marginLeft: 10, marginBottom:10 ,  }}>
                                    <View style={{ padding: 20, borderTopRightRadius: 10, borderBottomRightRadius: 6, borderBottomLeftRadius: 10, position: "relative" , backgroundColor:"white" }}>
                                        <View>
                                            <Text>{item.message}</Text>
                                        </View>
                                        <View style={{ position: "absolute", top: -30, right: -18, height: 50, width: 50, borderRadius: 50 / 2 }}>
                                            <Image style={{ height: "100%", width: "100%", borderRadius: 50 / 2 }}
                                                source={item.img}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ alignSelf: "flex-end" }}>
                                        <Text>3.40 pm</Text>
                                    </View>
                                </View>

                            </View>
                                    }

                            </View>
                        )
                    }}
                />

            </View>
            {/* group chat end */}


            <View style={styles.input_main_container}>
                <View style={styles.input_container}>

                    <View style={styles.plusicon} >
                        {inputmenu ?  <Entypo name="cross" size={24} color="white" />: <AntDesign name="plus" size={24} color="white"   onPress={ShowInputMenu}/> }
                        
                        
                    </View>
                    <View>
                        <TextInput style={styles.send_massage_container}
                            placeholder='Message....'
                            // value={inputvalue}
                            // onChangeText={(value)=>{
                            //     setInputvalue(value)
                            // }}
                            // onSubmitEditing={()=>{newMsg()}}
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

          <View style={[inputmenu? styles.input_popup_show : styles.input_popup ]}>
            <View style={styles.popup_box}>
                <Image style={{width:"100%" , height:"100%"}}
              source={require("../../../../assets/camera.png")}
                />
            </View>
            <View style={styles.popup_box}>
                <Image style={{width:"100%" , height:"100%"}}
              source={require("../../../../assets/audio.png")}
                />
            </View>
            <View style={styles.popup_box}>
                <Image style={{width:"100%" , height:"100%"}}
              source={require("../../../../assets/gallery.png")}
                />
            </View>
            <View style={styles.popup_box}>
                <Image style={{width:"100%" , height:"100%"}}
              source={require("../../../../assets/document.png")}
                />
            </View>
          </View>
            </View>
        </View>
    )
}

export default Groupchat

// const styles = StyleSheet.create({

// })