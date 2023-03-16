import { StyleSheet, Text, View, TouchableOpacity, Image as ImageReact } from 'react-native'
import Image from 'react-native-remote-svg';
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Modal } from 'react-native';
const Header = ({ navigation,data }) => {
    const [menubar, setMenubar] = useState("")
    const [ lightbar , setLightbar] = useState(false)
   const [modelopen , setModalopen] = useState(false)
    const toggleMenuBar = () => {
        setMenubar(!menubar)
    }
const highlightbar = ()=>{
setLightbar(!lightbar)
navigation.navigate("Chathome")
}

const highlightbar1 = ()=>{
    // setLightbar(!lightbar)
    navigation.navigate("Chat")
}
    return (
        <>
            <View style={styles.header}>
                <View style={styles.inner_header}>
                    <View>
                        <TouchableOpacity onPress={()=>setModalopen(true)}>
                            <Entypo name="menu" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.notification_container}>
                        <FontAwesome name="bell" size={24} color="black"
                            onPress={() => navigation.navigate("Notification")}
                        />
                        <View style={styles.notification_number}>
                            <Text style={{ fontSize: 10, color: "white" }}>3</Text>
                        </View>
                    </View>

                    <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modelopen}
                            onRequestClose={() => {
                            //   Alert.alert('Modal has been closed.');
                              setModalopen(!modelopen);
                            }}
                    >
                        <TouchableOpacity style={{flex:1 ,}}
                        onPress={()=> setModalopen(!modelopen)}
                        activeOpacity={8}
                        >
                    <View style={styles.showmwnu}>
                        <TouchableOpacity onPress={()=>setModalopen(false)}
                            style={styles.cross_circle} >
                            <Entypo name='circle-with-cross' size={30} />
                        </TouchableOpacity>
                        <View style={styles.profile_section}>
                            <View style={styles.img_name}>
                                <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, resizeMode: 'contain', }}
                                    source={{
                                        uri: "data:image/svg+xml;utf8,"+data.avatar
                                    }} />
                                
                                <Text style={styles.text}>
                                    Name: {data.data.fullName}
                                </Text>
                                <Text style={styles.text}>
                                    Screen Name: {data.data.screenName}
                                </Text> 
                            </View>
                            <View style={styles.intrest_section}>
                                <Text style={{ color: "white" }}>Interests: {(data.data.interests.map(item=>item.title)).join(',')}</Text>
                            </View>
                        </View>
                    </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    showmwnu: {
        backgroundColor: "#F5F5F5",
        position: "absolute",
        height: "100%",
        width: "80%",
        zIndex: 999,
        marginTop:20

    },
    hidemenu: {
        display: "none"
    },
    profile_section: {
        backgroundColor: "#227ee3",
        width: "100%",
        height: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems:"center",
        padding: 10

    },
    img_name: {
        // backgroundColor:"green"
    },
    intrest_section: {
        width: "50%",
        padding: 20,
        // backgroundColor:"red"
    },
    text: {
        fontWeight: "500",
        fontSize: 15,
        color: "white"
    },
    header: {
        backgroundColor: "white",
        // paddingTop: 50,

    },

    inner_header: {
        // backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        marginLeft: 5,
        position: "relative"
        // height: 30
    },
    notification_container: {
        position: "relative",
        // backgroundColor:"red"
    },
    notification_number: {
        position: "absolute",
        top: -3,
        right: -6,
        backgroundColor: "#227ee3", width: 17, height: 17,
        borderRadius: 17 / 2,
        display: "flex", alignItems: "center", justifyContent: "center",
    },
    cross_circle: {
        position: "absolute", top: -15, right: -15, zIndex: 9999, borderRadius: 51, backgroundColor: "white"
    },
    showligth:{
        borderBottomColor: "#227ee3", borderBottomWidth: 3, borderRadius: 2,
    },
    hidelight:{
        borderColor:'none'
    }

})