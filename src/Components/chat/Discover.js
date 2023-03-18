import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'

import { SwipeListView } from 'react-native-swipe-list-view';
import DiscoverIneer from './DiscoverIneer';
import getInterests from '../../Service/interest';


const Discover = ({ navigation, data }) => {
    const [selectedInterest, setSelectedInterest] = useState('All')
    const [interests, setInterest] = useState()
    const [intrestTouch ,  setIntrestTouch] =  useState(false)
    useEffect(() => {
        (async () => {
            const resp = await getInterests()
            console.log('discover interests:', resp.message)
            setInterest([{ _id: 'All', title: 'All' }, ...resp.message])
        })()
    }, [])
    const handleInterest = (item) => {
        console.log(item._id)
        setSelectedInterest(item._id)
        setIntrestTouch(!intrestTouch)
    }


    return (
        <SafeAreaView style={styles.Discover_container}>
            <View style={styles.active_link}>
                <View style={styles.active_link_inner}>
                    <TouchableOpacity onPress={() => navigation.navigate("Chathome")}
                        style={{ borderBottomColor: "#227ee3", borderBottomWidth: 3, borderRadius: 2, }}>
                        <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Discover</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Chat")}>
                        <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Circle")}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Circle</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.scroll_container} >

                <View style={styles.vertical_container}>
                    {interests && <FlatList
                        style={styles.flatlist_container}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={interests}
                        renderItem={({ item }) => {
                            return (

                                <TouchableOpacity style={[selectedInterest === item._id ?   styles.touchList_content : styles.list_content]} onPress={() => { handleInterest(item) }}>
                                    <Text style={styles.intrest_text}>{item.title} </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />}


                </View>

            </View>


            
            <DiscoverIneer navigation={navigation} userdata={data} selectedInterest={selectedInterest} />






        </SafeAreaView>



    )
}

export default Discover

const styles = StyleSheet.create({
    Discover_container: {
        // marginTop: 10,
        flex: 1,
        // position: "relative",
        backgroundColor: "white",
        zIndex: -1,
    },

    scroll_container: {
        // backgroundColor: "green",
        position: "relative",
        marginTop: 20,
        // flex:1,
        backgroundColor: "white"

    },
    selected: {
        backgroundColor: 'yellow'
    },

    vertical_container: {
        // flex:1,
        marginLeft: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
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
        marginLeft: 20,
        borderRadius: 30,
        // flex:1,
        // borderTopLeftRadius: 20,
        // borderBottomLeftRadius: 20,
        // position:"relative"

    },

    list_content: {
        // backgroundColor:"green",
        backgroundColor: "white",
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        // padding:5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    touchList_content:{

    
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    // padding:5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    // shadowColor: "#000",

     },
    intrest_text: {
    // marginLeft:10,
},
    container: {
    backgroundColor: 'white',
    flex: 1,
},
    backTextWhite: {
    color: '#FFF',
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
    active_link: {
    // backgroundColor:"red",
    width: "96%",
    marginHorizontal: 6
}
})