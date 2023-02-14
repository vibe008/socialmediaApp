import { FlatList, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons'

const Notification = () => {

    const notification = [
        {
            notificationId: 1,
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam magni cupiditate quaerat.",
            date: "2023-1-12",
            time: "12:8:48"
        },
        {
            notificationId: 2,
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            date: "2023-1-9",
            time: "10:35:2"
        },
        {
            notificationId: 3,
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur,",
            date: "2022-12-28",
            time: "9:40:10"
        },
        {
            notificationId: 4,
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum ",
            date: "2022-12-26",
            time: "12:8:48"
        },
        {
            notificationId: 5,
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur,",
            date: "2022-12-23",
            time: "9:40:10"
        },
        {
            notificationId: 6,
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur,adipisicing elit.Lorem ipsum dolor",
            date: "2022-12-20",
            time: "10:35:2"
        },
        {
            notificationId: 7,
            message: "Lorem ipsum dolor sit amet consectetur, ipsum dolor",
            date: "2022-12-15",
            time: "5:50:50"
        },
        {
            notificationId: 8,
            message: "Lorem ipsum dolor sit amet consectetur, ipsum dolor",
            date: "2022-12-15",
            time: "5:50:50"
        },
        {
            notificationId: 9,
            message: "Lorem ipsum dolor sit amet consectetur, ipsum dolor",
            date: "2022-12-15",
            time: "5:50:50"
        },
        {
            notificationId: 10,
            message: "Lorem ipsum dolor sit amet consectetur, ipsum dolor",
            date: "2022-12-15",
            time: "5:50:50"
        },

    ]

    const [listitem, setlistitem] = useState(notification)


    const deleteRow = (rowKey) => {
        const newData = [...listitem];
        // const newData = [...listitem,{ screenname : Math.random().toString(36).slice(2)}];
        const prevIndex = listitem.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setlistitem(newData);
    };

    return (
        <>
            <View style={styles.notification_Container} >
                <FlatList
                showsVerticalScrollIndicator={false}
                // style={{marginBottom:20, backgroundColor:"red",height:"90%"}}
                data={listitem}
                renderItem={(element)=>{
                    return(
                        <View style={styles.Notification_box}>
                        {/* icon */}
                        <View style={{ marginTop: 5 }}>
                            <FontAwesome name="bell" size={24} color="skyblue" />
                        </View>
    
                        <View style={styles.message_time}>
                            <View style={styles.Notification_message}>
                                <Text style={{ fontWeight: "500", fontSize: 13 }}>
                                    {element.item.message}
                                </Text>
                            </View>
                            <View style={{ marginTop: 7 }}>
                                <Text style={{ fontSize: 12, color: "skyblue" }}>
                                    {element.item.date}    {element.item.time}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ position:"absolute" , top:-4 , right:-2 }}
                        onPress={deleteRow}
                        >
                            <Feather name="delete" size={20} color="skyblue" />
                        </TouchableOpacity>
                    </View>
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
        marginBottom:5,
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
    }
})