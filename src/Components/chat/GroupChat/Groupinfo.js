import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import img from '../../../../assets/circleimg1.jpg'


const Groupinfo = ({ navigation }) => {

    const groupinfo = [
        {
            name: "Abhi",
            id: "1",
            img: require('../../../../assets/groupprofile1.jpg'),
        },
        {
            name: "Alex",
            id: "2",
            img: require('../../../../assets/groupprofile2.jpg'),
        },
        {
            name: "Rayn",
            id: "3",
            img: require("../../../../assets/groupprofile3.jpg"),
        },
        {
            name: "Messi",
            id: "4",
            img: require('../../../../assets/groupprofile1.jpg'),
        },
        {
            name: "Ronaldo",
            id: "5",
            img: require('../../../../assets/groupprofile4.jpg')
        },
        {
            name: "Molu",
            id: "6",
            img: require('../../../../assets/groupprofile5.jpg'),
        },
        {
            name: "Abhi",
            id: "7",
            img: require('../../../../assets/groupprofile1.jpg'),
        },
        {
            name: "Abhi",
            id: "8",
            img: require('../../../../assets/groupprofile6.jpg'),
        },
        {
            name: "Abhi",
            id: "9",
            img: require('../../../../assets/groupprofile7.jpg')
        },
    ]
    const [modalVisible, setModalVisible] = useState(false);
    const [procedevoting, setProcedevoting] = useState(false)
    const [deleteid, setDeletid] = useState(null)
    const [openforchat , setOPenforchat] =  useState(false)
    const [ value  ,setValue] = useState(null)
    return (
        <View style={{ paddingTop: 50, backgroundColor: "white" }}>
            <View style={{ display: "flex", flexDirection: "row", height: 60, alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <AntDesign name="arrowleft" size={30} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 20 }}>Football Club</Text>
                </View>
            </View>

            <View style={{ height: 150, width: "97%", marginHorizontal: 6, borderRadius: 10 }}>
                <Image style={{ height: "100%", width: "100%", resizeMode: "cover", borderRadius: 10 }}
                    source={img}
                />
            </View>

            <View style={{ width: "97%", marginHorizontal: 6, height: "100%" }}>
                <View >
                    <View style={{ marginLeft:10  , marginTop:10 , display:"flex", flexDirection:"row",}}>
                        <Text>Total Member :</Text>
                        <Text>10</Text>
                    </View>
                    <FlatList
                        data={groupinfo}
                        // keyExtractor={id}
                        style={{ height: "45%", width: "99%", marginHorizontal: 4, backgroundColor: "white" , borderBottomColor:"black",borderBottomWidth:1}}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <View style={{ display: "flex", flexDirection: "row", marginTop: 10, marginBottom: 10, }}>

                                        <TouchableOpacity
                                                    onPress={(opnid)=>{
                                                        if(groupinfo.filter(item => item.id === opnid)){
                                                            setValue(item.id)
                                                        }
                                                        setOPenforchat(true)
                                                        }}
                                        >
                                            <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, resizeMode: 'contain', }}
                                                source={item.img}
                                            />
                                        </TouchableOpacity>


                                        {/* modal for open direct chat */}
                                        <Modal
                                                    animationType="fade"
                                                    closeOnClick={true}
                                                    transparent={true}
                                                    visible={value === item.id? openforchat :""}
                                                >
                                                    <TouchableOpacity activeOpacity={8} onPress={() => { setOPenforchat(!openforchat) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }}>
            
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
                                                                    <Text style={{ color: "white", padding: 5, fontSize: 20, fontWeight: "bold" }}>
                                                                        {value === item.id?  item.name : "noo"}
                                                                        
                                                                    </Text>
                                                                    <Text style={{ color: "white", padding: 5 }}>20/2/2023</Text>
                                                                </View>
                                                                <View style={{ position: "absolute", top: "70%", display: "flex", flexDirection: "row", width: "100%", }}>
                                                                                <View style={{ width: 120, height: 120, alignItems: "center", justifyContent: "center", borderRadius: 120 / 2, borderWidth: 5, borderColor: "white", marginLeft:60 }}>
                                                                        <Image style={{ height: 110, width: 110, borderRadius: 110 / 2, resizeMode: 'contain', }}
                                                                            source={value === item.id ? item.img :""}
            
                                                                        />
                                                                    </View>
                                                                    <View style={{ alignItems:"center" ,  marginLeft:40 }}>
                                                                        <View style={{ marginTop: 30, backgroundColor: "#227ee3", width: 40, height: 40, borderRadius: 40 / 2, alignItems: "center", justifyContent: "center",  borderWidth: 2, borderColor: "white" }}>
                                                                            <TouchableOpacity activeOpacity={8} onPress={() => {
                                                                                navigation.navigate("Rtlchat")
                                                                                setOPenforchat(false)
                                                                            }}>
                                                                                <MaterialCommunityIcons name='android-messages' size={28} style={{ color: "white" }} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                        <Text style={{ fontSize: 12, fontWeight: "700" }}>Go to chat</Text>
                                                                    </View>
            
                                                                </View>
            
            
                                                            </View>
            
                                                            <View style={{ marginTop: 100, maxHeight: 200, paddingLeft: 20 }}>
                                                                {/* <View>
                                                                    <Text>football , cricket , handball , gardning</Text>
                                                                </View> */}
            
            
                                                            </View>
                                                        </View>
            
                                                    </TouchableOpacity>
                                                </Modal>
                                        
                                        {/* modal for close direct chat */}

                                        <View style={{ backgroundColor: "white", display: "flex", flexDirection: "row", marginLeft: 20, width: "77%", justifyContent: "space-between", alignItems: "center" }}>
                                            <View>
                                                <Text>{item.name}</Text>
                                            </View>
                                            <TouchableOpacity  
                                             disabled={procedevoting === true}
                                                onPress={(itemid) => {
                                                    if (groupinfo.filter(item => item.id === itemid)) {
                                                        setDeletid(item.id)
                                                    }
                                                    setModalVisible(true)
                                                }}
                                            >
                                                <Text style={{ color: "red" , fontSize:15}}>Remove</Text>
                                            </TouchableOpacity>
                                        </View>


                                        <Modal
                                            animationType="fade"
                                            closeOnClick={true}
                                            transparent={true}
                                            visible={deleteid === item.id ? modalVisible : ""}
                                        >
                                            <TouchableOpacity onPress={() => {
                                                setModalVisible(!modalVisible)
                                                setProcedevoting(false)
                                            }} style={{ flex: 1, alignItems: "center", justifyContent: "center", }} activeOpacity={8}>
                                                <View style={{
                                                    backgroundColor: "white", height: 100, padding: 10, shadowColor: "#000",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 2,
                                                    },
                                                    shadowOpacity: 0.25,
                                                    shadowRadius: 3.84,

                                                    elevation: 5,
                                                    borderRadius: 10,
                                                    width: "90%",
                                                    justifyContent: "space-between",
                                                    display: "flex"
                                                }}>
                                                    <View>
                                                        <Text style={[procedevoting ? styles.changetext : styles.normaltext]}>{procedevoting ? "ThankYou !! " : `${deleteid === item.id ? `Do you Want to Remove ${item.name} by voting?` : 'ok'}`}</Text>
                                                    </View>
                                                    <View style={[procedevoting ? styles.showtext : styles.hidetext]}>
                                                        <Text>Voting is started and result will be shown in next week</Text>
                                                    </View>
                                                    <View style={[procedevoting ? styles.hide : styles.show]}>
                                                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                                                            <Text style={{ padding: 10 }}>No</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => setProcedevoting(true)}>
                                                            <Text style={{ padding: 10 }}>Yes</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </Modal>


                                    </View>
                                </>

                            )
                        }}
                    />

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "99%", marginHorizontal: 4, marginTop: 10 }}>

                        <TouchableOpacity style={styles.touchableforself}>
                            <Ionicons name='exit-outline' size={20} color={"red"} />
                            <Text style={{ color: "red" , fontSize:17 , fontWeight:"500"}}>Exit circle</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchableforadd}>
                            <AntDesign name='plus' size={18} color={"green"} />
                            <Text style={{ color: "green" }}>Add New</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Groupinfo

const styles = StyleSheet.create({
    touchableforself: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor:"blue",
        alignItems: "center",
        width: "35%",
        padding: 5,
        justifyContent: "space-between"
    },
    touchableforadd: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor:"green",
        alignItems: "center",
        alignSelf: "flex-end",
        // marginTop: 10,
        width: "30%",
        padding: 5,
        justifyContent: "space-between"
    },
    changetext: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "500"
    },
    normaltext: {
        fontSize: 15
    },
    show: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
        alignSelf: "flex-end",
        //  marginTop: 30
    },
    hide: {
        display: "none"
    },
    showtext: {

    },
    hidetext: {
        display: "none"
    }
})