import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const DiscoverIneer = ({ navigation }) => {


    const shownmessage = [
        {
            screenname: "xxrwf",
            peopleintrest: "Football, Movies, Travelling,",
            lastonline: "5min",
            messagecount: "1",
            key: '1',
            img: require('../../../assets/groupprofile1.jpg'),
        },

        {
            screenname: "xdddwr",
            peopleintrest: "Travelling , Cooking .",
            lastonline: "7min",
            messagecount: "3",
            key: '2',
            img: require('../../../assets/groupprofile2.jpg'),
        },
        {
            screenname: "dcesed",
            peopleintrest: "Music , Reading",
            lastonline: "3min",
            messagecount: "5",
            key: '3',
            img: require("../../../assets/groupprofile3.jpg"),
        },
        {
            screenname: "deskird",
            peopleintrest: "Games",
            lastonline: "9min",
            messagecount: "1",
            key: '4',
            img: require('../../../assets/groupprofile1.jpg'),
        },
        {
            screenname: "ehstrud",
            peopleintrest: "Reading , Games",
            lastonline: "1min",
            messagecount: "4",
            key: '5',
            img: require('../../../assets/groupprofile4.jpg'),
        },
        {
            screenname: "rdtsr",
            peopleintrest: "Football , Movies",
            lastonline: "6min",
            messagecount: "6",
            key: '6',
            img: require('../../../assets/groupprofile5.jpg'),
        },
        {
            screenname: "rhdtfy",
            peopleintrest: "Football",
            lastonline: "6min",
            messagecount: "6",
            key: '7',
            img: require('../../../assets/groupprofile3.jpg'),
        },
        {
            screenname: "rhftrh",
            peopleintrest: "Movies",
            lastonline: "6min",
            messagecount: "6",
            key: '8',
            img: require('../../../assets/groupprofile4.jpg'),
        },
        {
            screenname: "tkrdnv",
            peopleintrest: "Reading",
            lastonline: "6min",
            messagecount: "6",
            key: '9',
            img: require('../../../assets/groupprofile2.jpg'),
        },
        {
            screenname: "nfjdrt",
            peopleintrest: "Reading",
            lastonline: "6min",
            messagecount: "6",
            key: '10',
            img: require('../../../assets/groupprofile1.jpg'),
        },
    ]

    const [listitem, setlistitem] = useState(shownmessage)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData,setModelData] = useState()


    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listitem];
        // const newData = [...listitem,{ screenname : Math.random().toString(36).slice(2)}];
        const prevIndex = listitem.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setlistitem(newData);
    };

    // const showItem = ({item})=>{
    // cosnt 
    // }
    const renderedItem = (data, rowMap) => (
        <View >


            <View style={styles.discover_People_container}>
                <View >

                    <Modal
                        animationType="fade"
                        closeOnClick={true}
                        transparent={true}
                        visible={modalVisible}
                    >
                    {/* {console.log(data)} */}
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
                                        <Text style={{ color: "white", padding: 5, fontSize: 20, fontWeight: "bold" }}> {modalData}</Text>
                                        <Text style={{ color: "white", padding: 5 }}>20/2/2023</Text>
                                    </View>
                                    <View style={{ position: "absolute", top: "70%", display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>

                                        <View >
                                            <View style={{ marginTop: 30, backgroundColor: "#227ee3", width: 40, height: 40, borderRadius: 40 / 2, alignItems: "center", justifyContent: "center", marginLeft: 28, borderWidth: 2, borderColor: "white" }}>
                                                <TouchableOpacity activeOpacity={8} onPress={() => {
                                                    deleteRow(rowMap, data.item.key)
                                                    alert("deleting user")
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
                                                <TouchableOpacity activeOpacity={8} onPress={()=>{
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

                                <View style={{ marginTop: 80, }}>
                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                        <Octicons name='dot-fill' size={20} color="#227ee3" />
                                        <Text style={{ fontSize: 16, fontWeight: "700" }}>FootBall</Text>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                        <Octicons name='dot-fill' size={20} color="#227ee3" />
                                        <Text style={{ fontSize: 16, fontWeight: "700" }}>FootBall</Text>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                        <Octicons name='dot-fill' size={20} color="#227ee3" />
                                        <Text style={{ fontSize: 16, fontWeight: "700" }}>FootBall</Text>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                        <Octicons name='dot-fill' size={20} color="#227ee3" />
                                        <Text style={{ fontSize: 16, fontWeight: "700" }}>FootBall</Text>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                        <Octicons name='dot-fill' size={20} color="#227ee3" />
                                        <Text style={{ fontSize: 16, fontWeight: "700" }}>FootBall</Text>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "white", width: "40%", justifyContent: "space-around", alignItems: "center", margin: 10 }}>
                                        <Octicons name='dot-fill' size={20} color="#227ee3" />
                                        <Text style={{ fontSize: 16, fontWeight: "700" }}>FootBall</Text>
                                    </View>

                                </View>
                            </View>

                        </TouchableOpacity>
                    </Modal>
                    <TouchableOpacity style={styles.discovere_people_image}
                        onPress={() => {setModelData(data.item.screenname);setModalVisible(true); }}
                    >
                        <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, resizeMode: 'contain', }}
                            source={{
                                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                            }}

                        />
                    </TouchableOpacity>
                </View>
                <TouchableHighlight onPress={() => navigation.navigate('Rtlchat')}
                    style={styles.rowFront}
                    underlayColor={'#fff'}
                >
                    <View style={styles.discover_name_intrest}>
                        <View style={styles.screenName}>
                            <Text style={{ fontWeight: "500", fontSize: 15, }}>
                                {data.item.screenname}
                            </Text>
                        </View>
                        <View style={styles.people_intrest}>
                            <Text>
                                {data.item.peopleintrest}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>


        </View>
    )


    const renderHiddenItem = (data, rowMap) => (
        
        <View style={styles.rowBack}>
            
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <View>
                    <Feather name='check' size={24} color="white" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => {
                    deleteRow(rowMap, data.item.key)
                    // alert("are you sure! you want to delet this user")
                    alert("deleting user")
                }}
            >
                <View >
                    <MaterialIcons name="delete" size={25} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <SwipeListView
                data={listitem}
                renderItem={renderedItem}
                renderHiddenItem={renderHiddenItem}
                style={styles.SwipeListView}
                rightOpenValue={-150}
                previewRowKey={'100'}
                previewOpenValue={-10}
                previewOpenDelay={2000}
                showsVerticalScrollIndicator={false}
            // onRowDidOpen={onRowDidOpen}
            />
        </View>
    )
}

export default DiscoverIneer

const styles = StyleSheet.create({

    container: {
        // backgroundColor: 'resd',
        // flex: 1,
        marginTop: 20
    },

    rowFront: {
        justifyContent: 'center',
        width: "80%",
        marginLeft: 20,
        borderLeftColor: "gray",
        borderLeftWidth: 1,
        paddingLeft: 10

    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginRight: 10,
        position: "relative",


    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        width: 30,
        height: 30,
        borderRadius: 30 / 2,



    },
    backRightBtnLeft: {
        backgroundColor: '#227ee3',
        right: 50
    },
    backRightBtnRight: {
        backgroundColor: '#227ee3',
        right: 0,

    },
    discover_People_container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: "#BDBDBD",
        borderBottomWidth: 1,
        position: "relative",
        marginBottom: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 3,
    },

    discovere_people_image: {
        marginLeft: 15,
    },
    discover_name_intrest: {
        width: "70%",
    },

})