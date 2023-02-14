import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import React,{useState} from 'react'

import  {SwipeListView}  from 'react-native-swipe-list-view';
import DiscoverIneer from './DiscoverIneer';


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


    return (
        <SafeAreaView style={styles.Discover_container}>

            <View style={styles.scroll_container} >
                <View style={styles.vertical_container}>
                    <FlatList
                        style={styles.flatlist_container}
                        horizontal
                        data={intrestText}
                        renderItem={(element) => {
                            return (
                                <View style={styles.list_content} >
                                    <Text style={styles.intrest_text}>{element.item.text} </Text>
                                </View>
                            )
                        }}
                    />

                </View>

            </View>

          <DiscoverIneer navigation={navigation}/>






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
        zIndex:-1
    },

    scroll_container: {
        // backgroundColor: "green",
        position: "relative",
        marginTop: 20,
        // flex:1,
        backgroundColor: "white"

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
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
})