import {
  Image, Text, View, FlatList, SafeAreaView, TextInput, Button, TouchableOpacity, NativeModules,
  LayoutAnimation, Modal, ImageBackground
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
import moment from 'moment/moment';
import { AntDesign , Feather,Entypo ,Ionicons} from '@expo/vector-icons';
import styles from '../../styles/Rtl_style'
import FinalSlider from './FinalSlider';
import { message } from '../../Data/Data';


const Rtl_chat = ({ navigation }) => {
  const [left, setLeft] = useState(-183)
  const [inputvalue, setInputvalue] = useState("")
  const [inputmenu, setInputmenu] = useState(false)
  const [renderMsg, setRenderMsg] = useState(message)
  const flatlistref = useRef()

  const barOpen = () => {
    LayoutAnimation.spring();
    if (left === -183) {
      setLeft(-67)
    }
    else {
      setLeft(-183)
    }
    setModalVisible(true)
  }
  const barClose = () => {
    LayoutAnimation.spring();
    setLeft(-183)
    setModalVisible(false)
  }

  const currUser = 'shbsd33bjj44'
  const friendUser = 'shbsd33bjj45'
  const convertTime = (date) => {
    let time = moment(date).format('LT')
    return time
  }

  const newMsg = () => {
    setRenderMsg((curData) => {
      return [...curData, { id: Math.random().toString(36).slice(2), senderId: currUser, receiverId: friendUser, message: inputvalue, date: new Date(), time: new Date(), }]
    })
    setInputvalue('')
  }
  useEffect(() => {
    // console.log(renderMsg)
    const timeout = setTimeout(() => {
      flatlistref.current.scrollToEnd({ animated: true })
    }, 100)

  }, [renderMsg])

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
        </View>
        <View>
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
            <TouchableOpacity
              onPress={() => newMsg()}
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
          {/* <TouchableOpacity style={styles.popup_box}
                    onPress={recording ? stopRecording : startRecording}
                  >
                      <Image style={{ width: "100%", height: "100%" }}
                          source={require("../../../../assets/audio.png")}
                      />
                  </TouchableOpacity> */}
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

      <TouchableOpacity style={[left === -67 ? styles.openforsidebar : styles.closeforsidebar]} onPress={barClose}>

      </TouchableOpacity>


      <View style={[styles.showbar, { left: left }]} >
        <ImageBackground source={require("../../../../assets/slidbgedit2.png")} resizeMode="cover" style={{ height: "100%", width: "100%", zIndex: -1 }}>
          <FinalSlider />
        </ImageBackground>
        {/* <Inputslide /> */}
        <TouchableOpacity onPress={barOpen}
          style={{ position: "absolute", top: 0, left: 110, height: 110, width: 30, justifyContent: "center", alignItems: "center", }}>
          {left === -183 ? <Ionicons name='chevron-forward' size={30} color={"black"} /> : <Ionicons name='chevron-back' size={30} color={"black"} />}

        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={barOpen} */}
    </SafeAreaView>

  </>
  )
}

export default Rtl_chat

