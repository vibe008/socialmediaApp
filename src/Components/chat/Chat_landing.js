import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Discover from './Discover'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Chat_Profile from './Chat_Profile';
// import Rtl_chat from './chatting_container/Rtl_chat';
const Chat_landing = ({ navigation }) => {
    return (

        <View style={{ width: '98%', marginLeft: "auto", flex: 1, marginRight: "auto", paddingTop: 50, backgroundColor:"white" }}>

            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: '98%', marginLeft: "auto",}}>
                <View>
                    <Entypo name="menu" size={32} color="black" />
                </View>
                <View style={{ position: "relative" }}>
                    <FontAwesome name="bell" size={30} color="black" 
                    onPress={()=> navigation.navigate("Notification")}
                    />
                    <View style={{ position: "absolute", backgroundColor: "blue", width: 17, height: 17, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 17 / 2, top: 0, right: 0 }}>
                        <Text style={{ fontSize: 10, color: "white" }}>3</Text>
                    </View>
                </View>
            </View>


            {/* profile section  */}
            <Chat_Profile />
            {/* profile section end */}


            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 30  , width:"90%" , marginLeft:"auto" , marginRight:"auto" , }}>

                <TouchableOpacity style={{ padding: 10, backgroundColor: "skyblue", borderRadius:3 , borderWidth:1 , borderColor:"skyblue" }}   >
                    <Text style={{color:"white" , fontWeight:"500"}}>Discover</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, backgroundColor: "white", borderRadius:3 , borderWidth:1 , borderColor:"skyblue"}}>
                    <Text style={{color:"skyblue" , fontWeight:"500"}}>chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, backgroundColor: "white", borderRadius:3 ,borderWidth:1 , borderColor:"skyblue" }}
                onPress={()=>{navigation.navigate('Groupchat')}}
                >
                    <Text style={{color:"skyblue" , fontWeight:"500"}}>circle</Text>
                </TouchableOpacity>
            </View>

            <Discover navigation={navigation}/>
  {/* <Rtl_chat/> */}
        </View>

    )
}

export default Chat_landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"red"
    },
    inercontainer: {
        width: "80%",
        height: "100%",
        backgroundColor: "white",
        marginHorizontal: 40,
        marginVertical: 40
    },
    containerflex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profilecontainer: {
        // backgroundColor:"gray",
        height: 90,
    },
    profile: {
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: "row"
    },
    images: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    hrline: {
        height: 50,
        width: 3,
        backgroundColor: "red"
    }
})