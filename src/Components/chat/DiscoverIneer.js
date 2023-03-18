import { StyleSheet, Text, View, TouchableOpacity, Image as ReactImage, TouchableHighlight, Modal, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Image from 'react-native-remote-svg';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {getDiscovers,getFiltersDiscovers} from '../../Service/discover';
import multiavatar from '@multiavatar/multiavatar'
import Placeholder from './Placeholder';

const DiscoverIneer = ({ navigation,userdata,selectedInterest }) => {
    const [connections,setConnections] = useState()
    const [isLoading,setIsLoading] = useState(true)
    // const [defConn, setDefConn] = useState('All')
    useEffect(()=>{
        setIsLoading(true)
        console.log('in DiscoverIneer useEffect',selectedInterest)
        handleDiscover()
    },[selectedInterest])
    const handleDiscover=async()=>{
        
        if(selectedInterest === 'All'){
            const resp = await getDiscovers(userdata.data._id)
            setConnections(resp.message)
            
        }else{
            const resp = await getFiltersDiscovers(userdata.data._id+'/'+selectedInterest)
            setConnections(resp.message)
            console.log(connections.length)
        }
        setIsLoading(false)
    }
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModelData] = useState(null)

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        console.log("rowkey", rowKey)
        closeRow(rowMap, rowKey);
        const newData = [...connections];
        const prevIndex = connections.findIndex(item => item._id === rowKey);
        newData.splice(prevIndex, 1);
        setConnections(newData);
    };

    const openmodel = () => {

        setModalVisible(true)
        // console.log("ju",id)
    }

    const deletmodal = () => {

    }
    const renderedItem = (data) => (
        <View >


            <View style={styles.discover_People_container}>
                <View  >


                    <TouchableOpacity style={styles.discovere_people_image}
                        // key={data.item._id}

                        onPress={() => { setModelData(data.item._id); setModalVisible(true); }}
                    >
                        <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, resizeMode: 'contain', }}
                            source={{
                                uri: "data:image/svg+xml;utf8,"+multiavatar(data.item.avatarId)
                            }}

                        />
                        <Modal
                            // animationType="fade"
                            closeOnClick={true}
                            transparent={true}
                            visible={modalData === data.item._id ? modalVisible : ""}
                        >
                            <TouchableOpacity activeOpacity={8} onPress={() => { setModalVisible(!modalVisible) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }}>


                                <View style={{
                                    backgroundColor: "white", borderRadius: 10, shadowColor: "#000", shadowOffset: {
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
                                                {modalData === data.item._id ? data.item.screenName : ""}</Text>
                                            <Text style={{ color: "white", padding: 5 }}>{new Date(data.item.createdDateTime).toLocaleDateString()}</Text>
                                        </View>
                                        <View style={{ position: "absolute", top: "70%", display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                            <View >
                                                <View style={{ marginTop: 30, backgroundColor: "#227ee3", width: 40, height: 40, borderRadius: 40 / 2, alignItems: "center", justifyContent: "center", marginLeft: 28, borderWidth: 2, borderColor: "white" }}>
                                                    <TouchableOpacity activeOpacity={8} 
                                                    // onPress={() => {
                                                    //     deleteRow(rowKey, data.item._id)
                                                    //     console.log("deleting user", rowKey)
                                                    // }}
                                                    >
                                                        <MaterialIcons name='delete-forever' size={30} style={{ color: "white" }} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ marginLeft: 20, justifyContent: "center", alignItems: "center" }}>
                                                    <Text style={{ fontSize: 10, fontWeight: "700" }}>Delete User</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: 120, height: 120, alignItems: "center", justifyContent: "center", borderRadius: 120 / 2, borderWidth: 5, borderColor: "white", }}>
                                                <Image style={{ height: 110, width: 110, borderRadius: 110 / 2, resizeMode: 'contain', }}
                                                    source={{ uri: "data:image/svg+xml;utf8,"+multiavatar(data.item.avatarId)
                                                    // "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" 
                                                    }} />
                                            </View>
                                            <View>
                                                <View style={{ marginTop: 30, backgroundColor: "#227ee3", width: 40, height: 40, borderRadius: 40 / 2, alignItems: "center", justifyContent: "center", marginRight: 30, borderWidth: 2, borderColor: "white" }}>
                                                    <TouchableOpacity activeOpacity={8} onPress={() => {
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


                                    <View style={{ marginTop: 100, maxHeight: 200, height: 100, paddingLeft: 20 }}>
                                        <View>
                                            <Text>{modalData === data.item._id ? data.item.peopleintrest : ""}</Text>
                                        </View>


                                    </View>
                                </View>

                            </TouchableOpacity>
                        </Modal>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight onPress={() => navigation.navigate('Rtlchat')}
                    style={styles.rowFront}
                    underlayColor={'#fff'}
                >
                    <View style={styles.discover_name_intrest}>
                        <View style={styles.screenName}>
                            <Text style={{ fontWeight: "500", fontSize: 15, }}>
                                {data.item.screenName}
                            </Text>
                        </View>
                        <View style={styles.people_intrest}>
                            <Text>
                                {(data.item.interests.map(item=>item.title)).join(', ')}
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
                onPress={() => closeRow(rowMap, data.item._id)}
            >
                <View>
                    <Feather name='check' size={24} color="white" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => {
                    deleteRow(rowMap, data.item._id)
                    // alert("are you sure! you want to delet this user")
                    console.log("deleting user back", data.item._id)
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
            {isLoading && <Placeholder/>}
            {connections !== 'Not Found!' &&
            <SwipeListView
                data={connections}
                renderItem={renderedItem}
                renderHiddenItem={renderHiddenItem}
                style={styles.SwipeListView}
                rightOpenValue={-150}
                previewRowKey={'100'}
                previewOpenValue={-10}
                previewOpenDelay={2000}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item._id}
            // onRowDidOpen={onRowDidOpen}
            />
            }
           
            
        </View>
    )
}

export default DiscoverIneer

const styles = StyleSheet.create({

    container: {
        // backgroundColor: 'red',
        flex: 1,
        marginTop: 20
    },

    rowFront: {
        justifyContent: 'center',
        width: "80%",
        marginLeft: 10,
        // borderLeftColor: "gray",
        // borderLeftWidth: 1,
        paddingLeft: 10,


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
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: "#E0E0E0",
        borderBottomWidth: 0.8,
        position: "relative",
        // marginBottom: 7,


    },

    discovere_people_image: {
        marginLeft: 15,
    },
    discover_name_intrest: {
        width: "70%",
    },

})