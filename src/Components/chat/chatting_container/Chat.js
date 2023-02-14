import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../Login/common/Header'


const Chat = ({ navigation }) => {

    const shownmessage = [
        {
            username: "abhi",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "5min",
            messagecount: "1",
            key: '1',
            img: require('../../../../assets/groupprofile1.jpg'),
        },

        {
            username: "erdwkt",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "7min",
            messagecount: "3",
            key: '2',
            img: require('../../../../assets/user.png'),
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "3min",
            messagecount: "5",
            key: '3',
            img: require("../../../../assets/groupprofile3.jpg"),
        },
        {
            username: "vibhu",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "9min",
            messagecount: "1",
            key: '4',
            img: require('../../../../assets/groupprofile9.jpg'),
        },
        {
            username: "aakansha",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "1min",
            messagecount: "4",
            key: '5',
            img: require('../../../../assets/groupprofile4.jpg'),
        },
        {
            username: "priyanka",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '6',
            img: require('../../../../assets/groupprofile5.jpg'),
        },
        {
            username: "etset",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '7',
            img: require('../../../../assets/user.png'),
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '8',
            img: require('../../../../assets/groupprofile5.jpg'),
        },
        {
            username: "hdrets",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '9',
            img: require('../../../../assets/user.png'),
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '10',
            img: require('../../../../assets/groupprofile5.jpg'),
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '11',
            img: require('../../../../assets/groupprofile5.jpg'),
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '12',
            img: require('../../../../assets/groupprofile5.jpg'),
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '13',
            img: require('../../../../assets/groupprofile5.jpg'),
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '14',
            img: require('../../../../assets/groupprofile5.jpg'),
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
            lastonline: "6min",
            messagecount: "6",
            key: '15',
            img: require('../../../../assets/groupprofile5.jpg'),
        },
    ]



    return (<>
        <View style={styles.chat_outer_container}>
             <Header navigation={navigation}/>
            <View style={styles.chat_inner_container}>

             
                {/* <View style={styles.active_link}>
                    <View style={styles.active_link_inner}>
                        <TouchableOpacity onPress={() => navigation.navigate("Chathome")}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Discover</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderBottomColor: "#227ee3", borderBottomWidth: 3, borderRadius: 2 ,}}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Circle")}
                          >
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Circle</Text>
                        </TouchableOpacity>
                    </View>

                </View> */}

                <FlatList
                    style={{ backgroundColor: "" }}
                    showsVerticalScrollIndicator={false}
                    data={shownmessage}
                    renderItem={(element) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Rtlchat")}
                                style={styles.chat_profile_touchable}
                            >
                                <View style={styles.chatProfile_box}>

                                    <View style={styles.userprofile_status}>

                                        <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
                                            source={element.item.img}
                                        />
                                        {/* <View style={styles.status_dot}>

                                        </View> */}
                                    </View>

                                    <View style={styles.chat_message_box}>
                                        <View>
                                            <Text>{element.item.username}</Text>
                                        </View>
                                        <View>
                                            <Text>
                                                {element.item.message}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.latsActive}>
                                        <View>
                                            <Text>{element.item.lastonline}</Text>
                                        </View>
                                        <View style={styles.active_circle}>
                                            <Text>{element.item.messagecount}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
        </View>
        </>
    )
}

export default Chat

const styles = StyleSheet.create({
    chat_outer_container: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: 50,
       
    },
    chat_inner_container: {
        // backgroundColor: "green",
        // flex: 1,
        width: "96%",
        marginHorizontal: 6,
        zIndex:-1,
        marginTop:20
    },
    active_link: {
        // backgroundColor:"red",

    },

    active_link_inner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        // width:"100%"
        // backgroundColor:"green"
    },
    chat_profile_touchable: {
        backgroundColor:"white",
        // marginTop: 10,
        // opacity: 0.9,
        borderBottomColor:"#BDBDBD",
        borderBottomWidth:1,
        paddingBottom:10,
        marginBottom: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 3,
        paddingTop:10
    },
    chatProfile_box: {
        // backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
        // marginTop: 20,
        // backgroundColor: "white",
        // shadowColor: "black",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.30,
        // shadowRadius: 4.65,

        elevation: 8,
        // paddingTop: 10,
        // paddingBottom: 10
    },
    userprofile_status: {
        position: "relative",
        // backgroundColor:"red",
        height: 60
    },
    status_dot: {
        height: 10,
        width: 10,
        backgroundColor: "green",
        borderRadius: 10 / 2,
        position: "absolute",
        right: 2,
        bottom: 5,
        borderColor: "white",
        borderWidth: 1
    },
    chat_message_box: {
        // backgroundColor: "white",
        width: "68%",
        // marginHorizontal: 10
        marginLeft: 15
    },
    latsActive: {
        // backgroundColor: "green",
        display: "flex",
        // alignItems: "center"
        justifyContent: "space-evenly",
        marginLeft: 4
    },
    active_circle: {
        backgroundColor: "orange",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // padding:10,
        borderRadius: 50,
        height: 25,
        width: 25
    }
})