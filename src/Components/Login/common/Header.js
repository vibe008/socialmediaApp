import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Header = ({ navigation }) => {
    const [menubar, setMenubar] = useState("")
    const [ lightbar , setLightbar] = useState(false)

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
                        <TouchableOpacity onPress={toggleMenuBar}>
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
                    <View style={[menubar ? styles.showmwnu : styles.hidemenu]}>
                        <TouchableOpacity onPress={toggleMenuBar}
                            style={styles.cross_circle} >
                            <Entypo name='circle-with-cross' size={30} />
                        </TouchableOpacity>
                        <View style={styles.profile_section}>
                            <View style={styles.img_name}>
                                <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, resizeMode: 'contain', }}
                                    source={{
                                        uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    }} />
                                <Text style={styles.text}>
                                    Rahul singh
                                </Text>
                                <Text style={styles.text}>
                                    xxyyzz
                                </Text> 
                            </View>
                            <View style={styles.intrest_section}>
                                <Text style={{ color: "white" }}>music, sports, Films , Games </Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%", marginLeft: "auto", marginRight: "auto", zIndex: -1 }}>

                    <TouchableOpacity style={[lightbar ?  styles.showligth : styles.hidelight  ]} 
                     onPress={highlightbar}  >
                        <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Discover</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.hidelight}
                        onPress={highlightbar1}
                        >
                         
                        <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Chat</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Circle') }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Circle</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    showmwnu: {
        backgroundColor: "gray",
        position: "absolute",
        height: 700,
        width: "80%",
        zIndex: 999

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
        padding: 10,
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