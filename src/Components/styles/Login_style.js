import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainheading: {
        fontSize: 30,
        fontWeight: '500',
        color: 'black'
    },
    signintext:{
        marginTop:20,
        fontSize:15,
        fontWeight:"500"
    },

    inputcontainer: {
        display: 'flex',
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        padding: 10,
        marginTop: 10,
        // backgroundColor:"red",
        alignItems: "center",
    
    },
    checkboxContainer: {
        //   backgroundColor:'green',
        display: 'flex',
        flexDirection: "row",
        marginTop: 20
    },
    
    images: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    
    },
    verifybutton: {
        backgroundColor: "#227ee3",
        padding: 10,
        width: 100,
        display: "flex",
        alignItems: "center",
        borderRadius: 3,
        marginTop: 12
    },
})