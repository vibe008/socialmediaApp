import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    rtl_chat_container: {
        backgroundColor: "white",
        paddingTop: 50,
        height: '100%',
        width: "100%",
        flex: 1
    },
    new_User_profile: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        height: "10%",
        backgroundColor: "white",
        paddingLeft: 20,
        paddingRight: 20
    },
    user_images: {
        marginLeft: 10
    },
    Screeen_Name_container: {
        width: "40%",
        marginLeft: 30
    },
    user_percentage: {
        backgroundColor: "blue",
        height: 40,
        width: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40 / 2,
        marginLeft: 30
    },
    chat_container: {
        // backgroundColor: "red"
        flex: 1
    },

    right_chat_container: {
        width: "100%",
        // backgroundColor: "blue",
        marginTop: 10,
        marginBottom:15
    },
    Right_message: {
        backgroundColor: "orange",
        alignSelf: "flex-end",
        // width: "60%",
        maxWidth: "80%",
        // padding: 5,
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 5,
        marginRight: 5,
        paddingTop: 10,
        // paddingRight:20,
        paddingLeft: 20,
        paddingBottom: 5,
        shadowColor: "black",
shadowOffset: {
  width: 0,
  height: 6,
},
shadowOpacity:  0.20,
shadowRadius: 5.62,
elevation: 8
        
    },
    inne_righ_message: {
        // backgroundColor:"red",
        marginRight: 60
        // marginTop: 10,
        // marginLeft: 20,
        // marginRight: 10

    },
    right_time: {
        // backgroundColor:"yellow",
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-end",
        alignItems: "center",
        height: 20,
        marginRight: 5,
        // marginBottom: 5
    },
    left_chat_contaier: {
        width: "100%",
        // backgroundColor: "green",
        marginTop: 10,
        marginBottom:10
    },
    Left_message: {
        backgroundColor: "white",
        // alignSelf: "flex-end",
        // width: "60%",
        maxWidth: "80%",
        // padding: 5,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 10,
        marginLeft: 5,
        paddingTop: 10,
        // paddingRight:20,
        paddingLeft: 20,
        paddingBottom: 5,
        alignSelf:"flex-start",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8
    },
    inner_left_message:{
        marginRight: 40,
    },
    left_time:{
        alignSelf:"flex-end",
        display:"flex",
        alignItems:"flex-end",
        marginRight:10
    },

    input_main_container: {
        height: '10%',
        // backgroundColor: 'gray',
        position: "relative",
        display: "flex",
        alignItems: "center"
    },
    input_container: {
        display: "flex",
        backgroundColor: "white",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50,
        width: "98%",
        marginTop: 5
    },

    send_massage_container: {
        marginLeft: 10,
        width: 200,
    },
    plusicon: {
        backgroundColor: "orange",
        padding: 5,
        borderRadius: 50,
        marginLeft: 20
    },
    cam_emoji_section: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 60
    },
    itrest_bar: {
        // backgroundColor: "green",
        // position: "absolute",
        // top: "30%",
        // left: 80
    },
    view_bar: {
        position: "absolute",
        top: "40%"
    },
    input_popup:{
        backgroundColor:"white",
        // height:200,
        // width:200,
        position:"absolute",
        bottom:-75,
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row",
        
        
    },
    input_popup_show:{
        backgroundColor:"white",
        position:"absolute",
        bottom:75,
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row",
        zIndex:99,
        opacity:1
    },
    popup_box:{
        margin:10,
        height:50,
        width:50,
        // backgroundColor:"green"
    },
    group_container: {
        // backgroundColor: "black",
        flex: 1,
        color: "white",
        paddingTop: 60,
        height: "100%"
    },
    group_header: {
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    header_images: {
        marginLeft: 10,

    },
    group_Name_container: {
        marginLeft: 20,
        // backgroundColor:"red",
        width: '58%'
    },
    group_chat_container: {
        // backgroundColor: "red",
        height: "80%"
    },
    group_date: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        position:"absolute",
        top:10,
        width:"90%",
        marginHorizontal:20
    }
})