import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Discover from './Discover'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Chat_Profile from './Chat_Profile';
import Header from '../Login/common/Header';
// import Rtl_chat from './chatting_container/Rtl_chat';
const Chat_landing = ({ navigation }) => {

    return (
        <>
            <View style={{ backgroundColor: "white", paddingTop: 50, flex: 1, }}>
                <Header navigation={navigation} />
                
                <Discover navigation={navigation} />
            </View>
        </>
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
    },

})