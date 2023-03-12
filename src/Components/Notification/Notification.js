import { FlatList, StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from "@expo/vector-icons"
const Notification = ({ navigation }) => {

    const notification = [
        {
            notificationId: "1",
            notificationtype: "recommendation for circle",
            message: "This circle is created automatically by the system",
            date: "2023-1-12",
            time: "12:8:48",
            bellname: "bell-circle-outline"
        },
        {
            notificationId: "2",
            notificationtype: "Vote to remove member from Rider Circle",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam magni cupiditate quaerat.",
            date: "2023-1-12",
            time: "12:8:48",
            bellname: "bell-remove"
        },
        {
            notificationId: "3",
            notificationtype: "new member in Rider Circle",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            date: "2023-1-9",
            time: "10:35:2",
            bellname: "bell-plus"
        },
        {
            notificationId: "4",
            notificationtype: "Alert!",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur,",
            date: "2022-12-28",
            time: "9:40:10",
            bellname: "bell-alert"
        },
        {
            notificationId: "5",
            notificationtype: "recommendation for circle",
            message: "This circle is created automatically by the system",
            date: "2022-12-26",
            time: "12:8:48",
            bellname: "bell-circle-outline"
        },
        {
            notificationId: "6",
            notificationtype: "Alert!",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur,",
            date: "2022-12-23",
            time: "9:40:10",
            bellname: "bell-alert"
        },
        {
            notificationId: "7",
            notificationtype: "new member in  Football Club",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur,adipisicing elit.Lorem ipsum dolor",
            date: "2022-12-20",
            time: "10:35:2",
            bellname: "bell-plus"
        },
        {
            notificationId: "8",
            notificationtype: "Alert!",
            message: "Lorem ipsum dolor sit amet consectetur, ipsum dolor",
            date: "2022-12-15",
            time: "5:50:50",
            bellname: "bell-alert"
        },
        {
            notificationId: "9",
            notificationtype: "Vote to remove member from xxyyzz Circle",
            message: "Lorem ipsum dolor sit amet consectetur, ipsum dolor",
            date: "2022-12-15",
            time: "5:50:50",
            bellname: "bell-remove"
        },
        {
            notificationId: "10",
            notificationtype: " new member in Rider Circle",
            message: "Lorem ipsum dolor sit amet consectetur, ipsum dolor",
            date: "2022-12-15",
            time: "5:50:50",
            bellname: "bell-plus"
        },
        {
            notificationId: "11",
            notificationtype: "Alert!",
            message: "Lorem ipsum dolor sit amet consectetur, ipsum dolor",
            date: "2022-12-15",
            time: "5:50:50",
            bellname: "bell-alert"
        },

    ]
    const [modalVisible, setModalVisible] = useState(false);
    const [listitem, setlistitem] = useState(notification)
    const [renderid, setRenderid] = useState(null)
    const [value, seValue] = useState("")
    const [notificationType, setNotificationType] = useState('')

    const [itemkeyvalue, setItemkeyvalue] = useState(false)

    const deleteRow = (itemid) => {
        const updateList = listitem.filter(item => item.notificationId !== itemid)
        setRenderid(itemid)
        console.log(itemid)
        setlistitem(updateList)
    }
    return (
        <>
            <View style={styles.notification_Container} >
                {/* <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={8}>
                    <View style={styles.groupmsg}>
                        <View >
                            <FontAwesome name="bell" size={24} color="skyblue" />
                        </View>
                        <View style={{ marginLeft: 10, width: "90%" }}>
                            <View style={{display:"flex" , }}>
                                <Text style={{ fontSize: 15, fontWeight: "700", }}>recommendation for circle</Text>
                                <Text>(tap to create circle)</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize:12 }}>This circle is created automatically by the system  </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity> */}


                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.notificationId.toString()}
                    // style={{marginBottom:20, backgroundColor:"red",height:"90%"}}
                    data={listitem}
                    renderItem={({ item }) => {
                        return (
                            <>

                                <TouchableOpacity
                                    onPress={(itemid) => {
                                        {
                                            if (listitem.filter(item => item.notificationtype && item.notificationId === itemid)) {
                                                console.log(item.bellname)
                                                console.log(itemkeyvalue)
                                                setItemkeyvalue(item.notificationId)
                                                setNotificationType(item.notificationtype)
                                                console.log("type", notificationType)
                                                setModalVisible(true)
                                            }

                                        }
                                    }}
                                    style={styles.Notification_box}>

                                    {/* icon */}
                                    <View style={{ marginTop: 5 }}>
                                        <MaterialCommunityIcons name={item.bellname} size={30} color="skyblue" />
                                    </View>

                                    <View style={styles.message_time}>
                                        <View style={styles.Notification_message}>
                                            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                                                {item.notificationtype}
                                            </Text>
                                            <Text style={{ fontSize: 13 }}>
                                                {item.message}
                                            </Text>
                                        </View>
                                        <View style={{ marginTop: 7 }}>
                                            <Text style={{ fontSize: 12, color: "skyblue" }}>
                                                {itemkeyvalue === item.notificationId && notificationType === 'Alert!' ? "ok" : item.date}    {item.time}
                                            </Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{ position: "absolute", top: -4, right: -2 }}
                                        onPress={() => deleteRow(item.notificationId)}>
                                        <Feather name="delete" size={20} color="skyblue" />
                                    </TouchableOpacity>
                                </TouchableOpacity>

                                <Modal
                                    animationType="fade"
                                    closeOnClick={true}
                                    transparent={true}
                                    visible={itemkeyvalue === item.notificationId && notificationType === 'recommendation for circle' ? modalVisible : ''}
                                >
                                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", position: "relative", }}
                                        onPress={() => { setModalVisible(!modalVisible) }}
                                        activeOpacity={8}
                                    >
                                        <View style={{
                                            backgroundColor: "white", shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,

                                            elevation: 5,
                                            width: 300,
                                            height: 100,
                                            borderRadius: 5
                                        }}>
                                            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 25 }}>
                                                <TextInput
                                                    style={{ width: "100%", textAlign: "center", color: 'black' }}
                                                    value={value}
                                                    placeholder="enter to create circle"
                                                    onChangeText={(value) => {
                                                        seValue(value)
                                                    }}
                                                />
                                            </View>

                                            <View style={{ alignItems: "flex-end", marginRight: 10, position: "absolute", bottom: -15, right: 0, }} >
                                                <TouchableOpacity onPress={() => {
                                                    if(value === ""){
                                                    console.log("jii")
                                                   
                                                    }
                                                    else{
                                                        navigation.navigate("Groupchat")

                                                    }
                                                    setModalVisible(false)
                                                }}
                                                    style={{ padding: 10, backgroundColor: "#227ee3", borderRadius: 5 }}
                                                    activeOpacity={8}
                                                >
                                                    <Text style={{ fontSize: 12, fontWeight: "500", color: 'white' }}>OK</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Modal>


                                {/* second modal */}
                                <Modal
                                    animationType="fade"
                                    closeOnClick={true}
                                    transparent={true}
                                    visible={itemkeyvalue === item.notificationId && notificationType === 'Alert!' ? modalVisible : ''}
                                >
                                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", position: "relative", }}
                                        onPress={() => { setModalVisible(!modalVisible) }}
                                        activeOpacity={8}
                                    >
                                        <View style={{
                                            backgroundColor: "white", shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,

                                            elevation: 5,
                                            width: 300,
                                            height: 100,
                                            borderRadius: 5
                                        }}>
                                            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 25 }}>
                                                <TextInput
                                                    style={{ width: "100%", textAlign: "center", color: 'black' }}
                                                    value={value}
                                                    placeholder="enter to create circle"
                                                    onChangeText={(value) => {
                                                        seValue(value)
                                                    }}
                                                />
                                            </View>

                                            <View style={{ alignItems: "flex-end", marginRight: 10, position: "absolute", bottom: -15, right: 0, }} >
                                                <TouchableOpacity onPress={() => {
                                                    navigation.navigate("Groupchat")
                                                    setModalVisible(false)
                                                }}
                                                    style={{ padding: 10, backgroundColor: "#227ee3", borderRadius: 5 }}
                                                    activeOpacity={8}
                                                >
                                                    <Text style={{ fontSize: 12, fontWeight: "500", color: 'white' }}>Ok</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Modal>
                            </>
                        )
                    }}
                />



            </View>
        </>
    )
}

export default Notification

const styles = StyleSheet.create({
    notification_Container: {
        backgroundColor: 'white',
        // width:"92%",
        flex: 1,
        //    marginLeft:15,
        marginTop: 5,


    },
    Notification_box: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        padding: 10,
        // alignItems:"center",
        width: "96%",
        marginLeft: 7,
        marginTop: 5,
        marginBottom: 5,
        // marginRight:10,
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 12,

    },
    message_time: {
        // backgroundColor:'red',
        width: "85%",
        marginLeft: 10
    },
    groupmsg: {
        backgroundColor: "white",
        // height: 90,
        width: "100%",
        padding: 10,
        // alignItems:"center",
        width: "96%",
        marginLeft: 7,
        display: "flex",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 12,
        borderRadius: 3
    }
})