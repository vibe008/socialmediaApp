import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Discover = ({ navigation }) => {
    const intrestText = [
        {
            text: "All"
        },
        {
            text: "Personal"
        },
        {
            text: "Design"
        },
        {
            text: "Work"
        },
        {
            text: "Football"
        },
        {
            text: "Bascketball"
        },
    ]

    const shownmessage = [
        {
            username: "abhi",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est harum sequi.",
            lastonline: "5min",
            messagecount: "1",
            key: '1'
        },

        {
            username: "suraj",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est harum sequi.",
            lastonline: "7min",
            messagecount: "3",
            key: '2'
        },
        {
            username: "priyanka",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est harum sequi.",
            lastonline: "3min",
            messagecount: "5",
            key: '3'
        },
        {
            username: "aakansha",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est harum sequi.",
            lastonline: "9min",
            messagecount: "1",
            key: '4'
        },
        {
            username: "sunny",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est harum sequi.",
            lastonline: "1min",
            messagecount: "4",
            key: '5'
        },
        {
            username: "arpit",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est harum sequi.",
            lastonline: "6min",
            messagecount: "6",
            key: '6'
        },
    ]

    return (
        <SafeAreaView style={styles.Discover_container}>

            <View style={styles.scroll_container} >
                <View style={styles.vertical_container}>
                    <FlatList
                    style={styles.flatlist_container}
                   horizontal
                   data={intrestText}
                   renderItem={(element) =>{
                    return(
                        <View style={styles.list_content} > 
                        <Text style={styles.intrest_text}>{element.item.text} </Text>
                        </View>
                    )
                   }}
                   />

                </View>

            </View>




            <View style={{marginTop:20 , backgroundColor:"white" , marginBottom:20 , flex:1}}>
                <FlatList
                    data={shownmessage}
                    renderItem={(element) => {
                        return (
                            <TouchableOpacity

                                onPress={() => navigation.navigate('Rtlchat')}
                            >
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 5, }}>

                                    <View style={{ flex: 1, position: "relative" }}>
                                        <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
                                            source={{
                                                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            }} />
                                        <View style={{ backgroundColor: "green", position: "absolute", top: 45, height: 10, width: 10, right: 9, borderRadius: 10 / 2 }}></View>
                                    </View>

                                    {/* chat */}
                                    <View style={{ flex: 3, marginLeft: 10 }}>
                                        <View style={{}}>
                                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{element.item.username}</Text>
                                        </View>
                                        <View style={{ marginTop: 2 }}>
                                            <Text >{element.item.message}</Text>
                                        </View>

                                    </View>

                                    {/* time */}
                                    <View style={{}}>
                                        <View>
                                            <Text>{element.item.lastonline}</Text>
                                        </View>
                                        <View style={{ width: 22, height: 22, backgroundColor: "orange", display: "flex", alignItems: "center", borderRadius: 22 / 2, marginTop: 5 }}>
                                            <Text style={{ color: "white", padding: 1, }}>{element.item.messagecount}</Text>
                                        </View>
                                    </View>

                                </View>

                            </TouchableOpacity>
                        )
                    }}
                />

            </View>

        </SafeAreaView>
    )
}

export default Discover

const styles = StyleSheet.create({
    Discover_container: {
        marginTop: 20,
        flex: 1,
        position: "relative",
        backgroundColor:"white"
    },

    scroll_container: {
        // backgroundColor: "green",
        position:"relative",
        marginTop:20,
        // flex:1,
        backgroundColor:"white"
        
    },


    vertical_container: {
        // flex:1,
marginLeft:10,
backgroundColor:"white",
borderTopLeftRadius:30,
borderBottomLeftRadius:30,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,

    },
    flatlist_container: {
        backgroundColor: "white",
        marginLeft:20,
        borderRadius:30,
        // flex:1,
        // borderTopLeftRadius: 20,
        // borderBottomLeftRadius: 20,
        // position:"relative"

    },

    list_content: {
        // backgroundColor:"green",
        backgroundColor: "white",
        margin:10,
        paddingTop:5,
        paddingBottom:5,
        paddingRight:10,
        paddingLeft: 10,
        // padding:5,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },

    intrest_text: {
// marginLeft:10,
    }
})