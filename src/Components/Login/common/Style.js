import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerconatiner: {
        // backgroundColor:"red",
        flex: 1,
        display: "flex",
        alignItems: "center",
        position: "relative"
    },

    innerconatiner: {
        // backgroundColor:"gray",
        width: "80%",
        // textAlign: "start",
        // // marginTop: 90,

        // display: "flex",
        // justifyContent: "center",
        height: "70%",
        position: "absolute",
        top: 150

    },


    containerStyle: {
        borderColor: "white",
        // backgroundColor:"red"
    },
    showdate: {
        display: "flex"
    },
    hidedate: {
        display: "none"
    },
    hideDeletpic: {
        display: "none"
    },
    showDeletpic: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor:"red",
        justifyContent: "space-between"

    },
    imagepreviewcontainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:200,
        backgroundColor:'#f0cced',
        marginVertical:8,
        borderRadius:8,
        },
        previewText:{
        color:'#592454',
        },
        imageStyle:{
        width:'100%',
        height:'100%',
        }

})
