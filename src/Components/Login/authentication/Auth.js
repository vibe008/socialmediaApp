import {   TextInput, TouchableOpacity, View , Text } from 'react-native'
import React,{useState , useEffect} from 'react'
import styles from '../common/Style'
import Arrow from '../common/Arrow'
import Br_lines from '../common/Br_lines'
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3000")


const Auth = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userNumber, setUserNumber] = useState('')

   const username = userName
   AsyncStorage.setItem('username' , username)
   

  const retrievePhoneNumber = async () => {
    try {
        const phoneNumber = await AsyncStorage.getItem('phonenumber');
      
        return phoneNumber;
        // console.log( "nunm",phoneNumber);
        // setUserNumber(phoneNumber)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    const getPhoneNumber = async () => {
        const userNumber = await retrievePhoneNumber();
        setUserNumber(userNumber);
        console.log(userNumber)
    }
    getPhoneNumber();
}, []);
//   AsyncStorage.getItem('phonenum', (err, result) => {
//     let phonenum = JSON.parse(result);
//     // setUserNumber(result)
//     console.log(phonenum);
// });

const Navigatetointrest  = ()=>{
  if(userName !== "" && userName !== ""){
    socket.emit("createuser", userName);
  }
  if(userEmail == ""  || userName == ""){
    
    console.log("enter number")
  }
  else{
    navigation.navigate("IntrestedAres")
  }
}
  return (
    <View style={styles.outerconatiner}>
      <View style={styles.innerconatiner}>
        <View>
        <Arrow heading="We havent talked about you" navigation={navigation}/>
        <Br_lines/>
        </View>
        <View style={{marginTop:12}}>
        <TextInput
        style={{padding:6 , borderBottomWidth:1 , borderBottomColor:"gray"}}
        placeholder='Full Name'
        value={userName}
        onChangeText={(userName)=>setUserName(userName)}
        />
                <TextInput
                style={{padding:6 , borderBottomWidth:1 , borderBottomColor:"gray"}}
        placeholder='Email'
        value={userEmail}
        onChangeText={(emailval)=>setUserEmail(emailval)}
        />
                {/* <TextInput
                style={{padding:6 , borderBottomWidth:1}}
        placeholder='Phone'
        value={userNumber}
        onChangeText={(numberval)=>setUserNumber(numberval)}
        /> */}
        <View style={{padding:6 , borderBottomWidth:1 , borderBottomColor:"gray"}}>
        <Text style={{fontSize:18, letterSpacing:3}}>{userNumber}</Text> 
        </View>
        </View>

        <TouchableOpacity 
        style={{backgroundColor:"#237fe4" , padding:10 , alignItems:"center" , marginTop:30 , borderRadius:3}}
      // onPress={navigation.navigate("IntrestedAres")}
      onPress={Navigatetointrest}
      >
          <Text style={{color:"white" , fontSize:20 , fontWeight:"bold"}}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Auth

// const styles = StyleSheet.create({

// deatilscontainer:{
// marginTop:20
// },
// })