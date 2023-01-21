import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerconatiner: {
        // backgroundColor:"red",
        flex:1,
        display:"flex",
        alignItems:"center",
        
    },

    innerconatiner: {
    // backgroundColor:"gray",
    width:"80%",
     textAlign:"start",
    marginTop:90,
    height:"70%",
    display:"flex",
    justifyContent:"center"

    },

    mainheading: {
        fontSize: 30,
        fontWeight: '500',
        color: 'black'
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
  display:'flex',
  flexDirection:"row",
  marginTop:20
    },
    
    images:{
        width:20,
        height:20,
        resizeMode: 'contain'

    },
    button: {
        backgroundColor:"#237fe4",
        padding:10,
        width:100,
        display:"flex",
        alignItems:"center",
        borderRadius:3,
        marginTop:12
    },
    containerStyle:{
        borderColor:"white",
        // backgroundColor:"white"
    }
})