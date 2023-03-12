import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image , Modal } from 'react-native'
import React,{useState} from 'react'
import Header from '../../Login/common/Header'
import { MaterialIcons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Circle = ({ navigation }) => {

    const shownmessage = [
        {
            circlename: "Football Club",
            message: "Lorem ipsum dolor..",
            username: "roy",
            messagecount: "1",
            key: '1',
            img: require('../../../../assets/circleimg1.jpg'),
        },

        {
            circlename: "Riders",
            message: "Lorem elit..",
            username: "Rayn",
            messagecount: "3",
            key: '2',
            img: require('../../../../assets/circleimg2.jpg'),
        },
        {
            circlename: "Travellers",
            message: "consectetur adipisicing..",
            username: "Mike",
            messagecount: "5",
            key: '3',
            img: require("../../../../assets/circleimg3.jpg"),
        },
        {
            circlename: "xxyyyzz",
            message: "adipisicing elit..",
            username: "Vibe",
            messagecount: "1",
            key: '4',
            img: require('../../../../assets/circleimg4.jpg'),
        },
        {
            circlename: "Gaming(pc)",
            message: "elit..",
            username: "Abdul",
            messagecount: "4",
            key: '5',
            img: require('../../../../assets/circleimg5.jpg'),
        },
        {
            circlename: "Call Of Duty",
            message: "consectetur..",
            username: "Juile",
            messagecount: "6",
            key: '6',
            img: require('../../../../assets/circleimg6.jpg'),
        },
        {
            circlename: "Vloging",
            message: "adipisicing elit..",
            username: "Vibe",
            messagecount: "6",
            key: '7',
            img: require('../../../../assets/circleimg7.jpg'),
        },
        {
            circlename: "Gaming(pc)",
            message: "elit..",
            username: "Vibe",
            messagecount: "6",
            key: '8',
            img: require('../../../../assets/circleimg8.jpg'),
        },
        {
            circlename: "Vloging",
            message: "adipisicing elit..",
            username: "Vibe",
            messagecount: "6",
            key: '9',
            img: require('../../../../assets/circleimg9.jpg'),
        },
        {
            circlename: "Vloging",
            message: "dipisicing elit..",
            username: "Vibe",
            messagecount: "6",
            key: '10',
            img: require('../../../../assets/circleimg10.jpg'),
        },
        // {
        //     circlename: "arpit",
        //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        //     username: "6min",
        //     messagecount: "6",
        //     key: '11',
        //     img: require('../../../../assets/groupprofile5.jpg'),
        // },
        // {
        //     circlename: "arpit",
        //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        //     username: "6min",
        //     messagecount: "6",
        //     key: '12',
        //     img: require('../../../../assets/groupprofile5.jpg'),
        // },
        // {
        //     circlename: "arpit",
        //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        //     username: "6min",
        //     messagecount: "6",
        //     key: '13',
        //     img: require('../../../../assets/groupprofile5.jpg'),
        // },
        // {
        //     circlename: "arpit",
        //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        //     username: "6min",
        //     messagecount: "6",
        //     key: '14',
        //     img: require('../../../../assets/groupprofile5.jpg'),
        // },
        // {
        //     circlename: "arpit",
        //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        //     username: "6min",
        //     messagecount: "6",
        //     key: '15',
        //     img: require('../../../../assets/groupprofile5.jpg'),
        // },
    ]
    const [modalVisible, setModalVisible] = useState(false);
const [value , setValue] = useState(null)
    return (
        <View style={styles.chat_outer_container}>
            <Header navigation={navigation} />
            <View style={styles.chat_inner_container}>
                <View style={styles.active_link}>
                    <View style={styles.active_link_inner}>

                        <TouchableOpacity onPress={() => navigation.navigate("Chathome")}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Discover</Text>
                        </TouchableOpacity >

                        <TouchableOpacity onPress={() => navigation.navigate("Chat")} >
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Chat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Circle")}
                            style={{ borderBottomColor: "#227ee3", borderBottomWidth: 3, borderRadius: 2 }}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Circle</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <FlatList
                    style={{ backgroundColor: "" }}
                    data={shownmessage}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <>
                                <View style={{ flex: 1 }}>
                                    <View style={{  display: "flex", flexDirection: "row" ,borderBottomWidth:1 ,  borderColor:"#BDBDBD" , paddingBottom:10 , paddingTop:10, paddingRight:10 , paddingLeft:0}}>
                                        <TouchableOpacity onPress={(e)=>{setModalVisible(true)
                                            if(shownmessage.filter((item)=> item.key === e)){
                                                setValue(item.key)
                                            }
                                        }}>
                                            <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
                                                source={item.img}
                                            />
                                            <Modal
                                                    animationType="fade"
                                                    closeOnClick={true}
                                                    transparent={true}
                                                    visible={value === item.key? modalVisible :""}
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
                                                                    {/* <Text style={{ color: "white", padding: 5, fontSize: 20, fontWeight: "bold" }}>{pairkey === item.item.key ? "" : item.item.username}</Text> */}
                                                                    <Text style={{ color: "white", padding: 5, fontSize: 20, fontWeight: "bold" }}>
                                                                        {value === item.key?  item.circlename : "noo"}
                                                                        
                                                                    </Text>
                                                                    <Text style={{ color: "white", padding: 5 }}>20/2/2023</Text>
                                                                </View>
                                                                <View style={{ position: "absolute", top: "70%", display: "flex", flexDirection: "row", width: "100%", }}>
            
                                                                    {/* <View >
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
                                                                    </View> */}
                                                                    <View style={{ width: 120, height: 120, alignItems: "center", justifyContent: "center", borderRadius: 120 / 2, borderWidth: 5, borderColor: "white", marginLeft:60 }}>
                                                                        <Image style={{ height: 110, width: 110, borderRadius: 110 / 2, resizeMode: 'contain', }}
                                                                            source={value === item.key ? item.img :""}
            
                                                                        />
                                                                    </View>
                                                                    <View style={{ alignItems:"center" ,  marginLeft:40 }}>
                                                                        <View style={{ marginTop: 30, backgroundColor: "#227ee3", width: 40, height: 40, borderRadius: 40 / 2, alignItems: "center", justifyContent: "center",  borderWidth: 2, borderColor: "white" }}>
                                                                            <TouchableOpacity activeOpacity={8} onPress={() => {
                                                                                navigation.navigate("Rtlchat")
                                                                                setModalVisible(false)
                                                                            }}>
                                                                                <MaterialCommunityIcons name='android-messages' size={28} style={{ color: "white" }} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                        <Text style={{ fontSize: 12, fontWeight: "700" }}>Go to chat</Text>
                                                                    </View>
            
                                                                </View>
            
            
                                                            </View>
            
                                                            <View style={{ marginTop: 100, maxHeight: 200, height: 100, paddingLeft: 20 }}>
                                                                <View>
                                                                    <Text>football , cricket , handball , gardning</Text>
                                                                </View>
            
            
                                                            </View>
                                                        </View>
            
                                                    </TouchableOpacity>
                                                </Modal>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width:"83%" ,  marginLeft:15}}
                                        onPress={()=> navigation.navigate("Groupchat")}
                                        >
                                        <View style={{display: "flex", flexDirection: "row" , }}>
                                          <View style={{ width:"88%" }}>
                                            <View>
                                                <Text style={{fontSize:15 , fontWeight:"500",}}>{item.circlename}</Text>
                                            </View>
                                            <View style={{ display: "flex", flexDirection: "row" , marginTop:10 , marginBottom:5 , alignItems:"center"}}>
                                             <View style={{ maxWidth:"40%" ,}}>
                                                <Text style={{ fontSize:15}}>{item.username} :</Text>
                                             </View>
                                             <View style={{ backgroundColor:"white" , marginLeft:5}}>
                                                <Text style={{fontSize:13}}>{item.message}</Text>
                                             </View>
                                            </View>
                                          </View>
                                          <View style={{backgroundColor:"orange" , width:20 , height:20 , borderRadius:20/2,  alignSelf:"center"}}>
                                            <Text style={{textAlign:"center"}}>{item.messagecount}</Text>
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
    )
}

export default Circle

const styles = StyleSheet.create({

    chat_outer_container: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: 50,
    },
    chat_inner_container: {
        // backgroundColor: "green",
        flex: 1,
        width: "96%",
        marginHorizontal: 6,
        // marginTop:10,
        zIndex: -1
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
        borderBottomColor: "#E0E0E0",
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 7,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.23,
        // shadowRadius: 2.62,

        // elevation: 3,
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