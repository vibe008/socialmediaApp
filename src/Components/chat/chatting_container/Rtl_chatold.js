import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Rtl_chat = () => {

    const message = [
        {
            message:"hii , how are you"
        },
        {
            message:"good"
        },
        {
            message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquid mollitia!"
        },
        {
            message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquid "
        },
        {
            message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum "
        },
        {
            message:"Lorem ipsum dolor sit amet consectetur  "
        },
    ]
    return (
        <View style={styles.Chat_container}>
            <View style={styles.ProgressBar}>
                <Text> bar</Text>
            </View>
            <ScrollView>

                <View style={styles.Inner_chat_container}>
                    <View style={styles.Left_message}>
                        <Text>hii , how are you  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquid mollitia!</Text>
                    </View>
                    <View style={styles.Right_message}>
                        <Text>badiya bhai tum btao</Text>
                    </View>
                </View>

                <View style={styles.Inner_chat_container}>
                    <View style={styles.Left_message}>
                        <Text>hii , how are you </Text>
                    </View>
                    <View style={styles.Right_message}>
                        <Text>badiya bhai tum btao</Text>
                    </View>
                </View>
                <View style={styles.Inner_chat_container}>
                    <View style={styles.Left_message}>
                        <Text>hii , how are you </Text>
                    </View>
                    <View style={styles.Right_message}>
                        <Text>badiya bhai tum btao</Text>
                    </View>
                </View>
                <View style={styles.Inner_chat_container}>
                    <View style={styles.Left_message}>
                        <Text>hii , how are you </Text>
                    </View>
                    <View style={styles.Right_message}>
                        <Text>badiya bhai tum btao</Text>
                    </View>
                </View>

            </ScrollView>


            <View style={styles.input_container}>

                <View style={styles.plusicon} >
                    <AntDesign name="plus" size={24} color="black" />
                </View>
                <View>
                    <TextInput style={styles.send_massage_container}
                        placeholder='Message....'
                    />
                </View>
                <View style={styles.cam_emoji_section}>

                
                <View style={styles.open_camera} >
                    <Feather name="camera" size={24} color="black" />
                </View>
                <View style={styles.emoji}>
                    <Entypo name="emoji-happy" size={24} color="black" />
                </View>
                </View>
            </View>




        </View>
    )
}

export default Rtl_chat

const styles = StyleSheet.create({
    Chat_container: {
        // backgroundColor: "red",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        height: "100%"
    },
    ProgressBar: {
        backgroundColor: "green",
        //   flex:1
    }
    , Inner_chat_container: {
        // marginHorizontal: 30,
        display: "flex",
        // backgroundColor:"gray",
        width: "100%",
        // height:"100%"
        // flexDirection:"row"
    },
    Left_message: {
        backgroundColor: "white",
        width: "70%",
        // height:30,
        display: "flex",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 10,
        padding: 20,
        marginTop: 20,
        marginLeft: 4,
        shadowColor: "#000", backgroundColor: "white"
        ,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23,

        // alignSelf:"flex-start"
    },

    Right_message: {
        backgroundColor: "orange",
        width: "60%",
        marginTop: 20,
        //   height:30,
        display: "flex",
        alignSelf: "flex-end",
        marginRight: 5,
        alignItems: "flex-end",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 5,
        //   padding:20
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 10,
        // marginBottom:30,
        shadowColor: "orange",
        // backgroundColor:"white"

        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23,

    },

    input_container: {
        display: "flex",
        position: 'absolute',
        bottom: 0,
        backgroundColor: "pink",
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-evenly",
        borderRadius:50,
        width:"100%"
    },
    send_massage_container:{
        // backgroundColor:"red",
        marginLeft:10,
        width:200,
    },
    plusicon:{
        backgroundColor:"orange",
        padding:5,
        borderRadius:50,
        marginLeft:20
    },
    cam_emoji_section:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:60
    }
})