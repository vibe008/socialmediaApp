import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Login/common/Header'
import { MaterialIcons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(1);
    const openmodel = (e) => {

        setModalVisible(true)
    }

    return (<>
        <View style={styles.chat_outer_container}>
            <Header navigation={navigation} />
            <View style={styles.chat_inner_container}>
                <View style={styles.active_link}>
                    <View style={styles.active_link_inner}>
                        <TouchableOpacity onPress={() => navigation.navigate("Chathome")}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Discover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderBottomColor: "#227ee3", borderBottomWidth: 3, borderRadius: 2, }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Circle")}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Circle</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    style={{}}
                    showsVerticalScrollIndicator={false}
                    data={shownmessage}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <View style={{ flex: 1, }}>
                                    <Modal
                                        animationType="fade"
                                        closeOnClick={true}
                                        transparent={true}
                                        visible={modalVisible}
                                    >
                                        <TouchableOpacity activeOpacity={8} onPress={() => { setModalVisible(!modalVisible) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }}>

                                            <View style={{
                                                backgroundColor: "white", borderRadius: 10, shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 1,
                                                },
                                                shadowOpacity: 0.18,
                                                shadowRadius: 1.00,

                                                elevation: 1,
                                            }}>

                                                <View style={{ backgroundColor: "#227ee3", height: 150, width: 300, borderRadius: 10, position: "relative" }}>
                                                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                                                        {/* <Text style={{ color: "white", padding: 5, fontSize: 20, fontWeight: "bold" }}>{pairkey === element.item.key ? "" : element.item.username}</Text> */}
                                                        <Text style={{ color: "white", padding: 5, fontSize: 20, fontWeight: "bold" }}>
                                                            {selectedItemId === item.key  ? item.username : "noo" }
                                                        </Text>
                                                        <Text style={{ color: "white", padding: 5 }}>20/2/2023</Text>
                                                    </View>
                                                    <View style={{ position: "absolute", top: "70%", display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>

                                                        <View >
                                                            <View style={{ marginTop: 30, backgroundColor: "#227ee3", width: 40, height: 40, borderRadius: 40 / 2, alignItems: "center", justifyContent: "center", marginLeft: 28, borderWidth: 2, borderColor: "white" }}>
                                                                <TouchableOpacity activeOpacity={8} 
                                                                    onPress={() => {
                                                                        deleteRow(rowKey, data.item.key)
                                                                        console.log("deleting user", rowKey)
                                                                    }}>
                                                                    <MaterialIcons name='delete-forever' size={30} style={{ color: "white" }} />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <View style={{ marginLeft: 20, justifyContent: "center", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 10, fontWeight: "700" }}>Delete User</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ width: 120, height: 120, alignItems: "center", justifyContent: "center", borderRadius: 120 / 2, borderWidth: 5, borderColor: "white", }}>
                                                            <Image style={{ height: 110, width: 110, borderRadius: 110 / 2, resizeMode: 'contain', }}
                                                                source={{
                                                                    uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                                                }}

                                                            />
                                                        </View>
                                                        <View>
                                                            <View style={{ marginTop: 30, backgroundColor: "#227ee3", width: 40, height: 40, borderRadius: 40 / 2, alignItems: "center", justifyContent: "center", marginRight: 30, borderWidth: 2, borderColor: "white" }}>
                                                                <TouchableOpacity activeOpacity={8} onPress={() => {
                                                                    navigation.navigate("Rtlchat")
                                                                    setModalVisible(false)
                                                                }}>
                                                                    <MaterialCommunityIcons name='android-messages' size={28} style={{ color: "white" }} />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Text style={{ fontSize: 10, fontWeight: "700" }}>Message</Text>
                                                        </View>

                                                    </View>


                                                </View>

                                                <View style={{ marginTop: 80, maxHeight: 200 }}>
                                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                                        <Octicons name='dot-fill' size={16} color="#227ee3" />
                                                        <Text style={{ fontSize: 16, fontWeight: "300" }}>FootBall</Text>
                                                    </View>
                                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                                        <Octicons name='dot-fill' size={16} color="#227ee3" />
                                                        <Text style={{ fontSize: 16, fontWeight: "300" }}>FootBall</Text>
                                                    </View>
                                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                                        <Octicons name='dot-fill' size={16} color="#227ee3" />
                                                        <Text style={{ fontSize: 16, fontWeight: "300" }}>FootBall</Text>
                                                    </View>
                                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                                        <Octicons name='dot-fill' size={16} color="#227ee3" />
                                                        <Text style={{ fontSize: 16, fontWeight: "300" }}>FootBall</Text>
                                                    </View>
                                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                                        <Octicons name='dot-fill' size={16} color="#227ee3" />
                                                        <Text style={{ fontSize: 16, fontWeight: "300" }}>FootBall</Text>
                                                    </View>


                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                    </Modal>
                                    <View style={{
                                        width: "100%", display: "flex", flexDirection: "row", marginBottom: 5, marginTop: 5, borderBottomWidth: 1, borderColor: "gray", paddingBottom: 5, shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,

                                        elevation: 5, backgroundColor: "white", paddingTop: 5
                                     }}>
                                        <TouchableOpacity activeOpacity={3} 
                                         onPress={() => {setSelectedItemId(item.key)
                                            if(selectedItemId === item.key){
                                                console.log("ik")
                                                setModalVisible(true)
                                            }else{
                                                
                                            }
                                         }}>
                                            <View>
                                                <View style={styles.userprofile_status}>
                                                    <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
                                                        source={item.img}
                                                    />
                                                    <View style={styles.status_dot}>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>


                                        <TouchableOpacity onPress={() => navigation.navigate("Rtlchat")} activeOpacity={2} >
                                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                                                <View style={{ width: "67%", marginLeft: 15, }}>
                                                    <Text>{item.username}</Text>
                                                    <Text>{item.message}</Text>
                                                </View>
                                                <View>

                                                    <View style={styles.latsActive}>
                                                        <View>
                                                            <Text>{item.lastonline}</Text>
                                                        </View>
                                                        <View style={styles.active_circle}>
                                                            <Text>{item.messagecount}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </>
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
        zIndex: -1,
        marginTop: 20
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
        backgroundColor: "white",
        // marginTop: 10,
        // opacity: 0.9,
        borderBottomColor: "#BDBDBD",
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 3,
        paddingTop: 10
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
        backgroundColor: "white",
        height: 60,

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
        // width: "68%",
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