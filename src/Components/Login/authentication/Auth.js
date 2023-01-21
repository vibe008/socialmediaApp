import {   TextInput, TouchableOpacity, View , Text } from 'react-native'
import React,{useState} from 'react'
import styles from '../common/Style'
import Arrow from '../common/Arrow'
import Br_lines from '../common/Br_lines'
const Auth = ({navigation}) => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userNumber, setUserNumber] = useState('')

const Navigatetointrest  = ()=>{
  if(userNumber === "23"){
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
        style={{padding:6 , borderBottomWidth:1}}
        placeholder='Full Name'
        value={userName}
        onChangeText={(nameval)=>setUserName(nameval)
        
        }
        />
                <TextInput
                style={{padding:6 , borderBottomWidth:1 , borderBottomColor:"gray"}}
        placeholder='Email'
        value={userEmail}
        onChangeText={(emailval)=>setUserEmail(emailval)}
        />
                <TextInput
                style={{padding:6 , borderBottomWidth:1}}
        placeholder='Phone'
        value={userNumber}
        onChangeText={(numberval)=>setUserNumber(numberval)}
        />
        </View>

        <TouchableOpacity 
        style={{backgroundColor:"#237fe4" , padding:10 , alignItems:"center" , marginTop:30 , borderRadius:3}}
      // onPress={navigation.navigate("IntrestedAres")}
      onPress={Navigatetointrest}
      >
          <Text>CONTINUE</Text>
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