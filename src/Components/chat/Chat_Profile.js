import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const Chat_Profile = () => {
    return (
        <View style={styles.profile_container}>
            <View style={styles.user_profile}>
                <Image style={{ height: 50, width: 50, borderRadius: 50 / 2, resizeMode: 'contain', }}
                    source={{
                        uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }} />
                    <Text>rahul singh</Text>
            </View>

            <View style={styles.vertical_line}></View>

            <View style={styles.user_deatil_container}>
                <Text style={{fontSize:12 ,  fontWeight:"500"}}>music, sports, Films , Games  </Text>
                <Text style={{fontSize:12 ,  fontWeight:"500"}}>Your screen Name : xxyyzz</Text>     
            </View>

            {/* <View style={styles.user_percentage}>
                <Text style={{fontSize:12}}>25%</Text>
            </View> */}
        </View>
    )
}

export default Chat_Profile

const styles = StyleSheet.create({
    profile_container: {
        display: "flex",
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:"center",
        // padding:10,
        marginTop:20

    },
    user_profile:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    vertical_line:{
        width:2,
        height:50,
        backgroundColor:"blue",
        marginHorizontal:10
    },
    user_deatil_container:{
    //  backgroundColor:"green",
    //  width:180,
     maxWidth:200
    },
    user_percentage:{
        backgroundColor:"blue",
        height:40,
        width:40,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    borderRadius:40/2
    }
    
})