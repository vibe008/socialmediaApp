import React from 'react';
import { StyleSheet,  View } from 'react-native'

// import Router from "./src/Components/router/Router";
// import Discover from './src/Components/chat/DiscoverOld';
// import Arrow from './src/Components/Login/common/Arrow';
import Questions from './src/Components/Login/authentication/Questions';
import Profile from './src/Components/Login/authentication/Profile';
import Otp from './src/Components/Login/Otp';
import IntrestedAres from './src/Components/Login/authentication/IntrestedAres';
import Test from './src/Components/Login/authentication/Test';
import Login from './src/Components/Login/Login';
import Chat_landing from './src/Components/chat/Chat_landing';
import Auth from './src/Components/Login/authentication/Auth';
import Rtl_chat from './src/Components/chat/chatting_container/Rtl_chat';
import Notification from './src/Components/Notification/Notification';
import Chat from "./src/Components/chat/chatting_container/Chat"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groupchat from './src/Components/chat/GroupChat/Groupchat';
import Discover from './src/Components/chat/Discover';
import Circle from './src/Components/chat/GroupChat/Circle';
import Header from './src/Components/Login/common/Header';
import Slider from './src/Components/chat/chatting_container/Slider';
import Seekbar from './src/Components/chat/chatting_container/Seekbar';
import IntrestBar from './src/Components/chat/chatting_container/IntrestBar';
import Slide from './src/Components/chat/chatting_container/Slide'
// import Utils from './src/Components/chat/chatting_container/Utils'
import Inputslide from './src/Components/chat/chatting_container/Inputslide';
import Demo from './src/Components/chat/chatting_container/Demo';
import FinalSlider from './src/Components/chat/chatting_container/FinalSlider';
const Stack = createNativeStackNavigator();
export default function App() {


  return (


    // <Discover/>
    // <Header/>
    <>
   <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/> 
    <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }}/> 
    <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
    <Stack.Screen name="IntrestedAres" component={IntrestedAres} options={{ headerShown: false }}/>
    <Stack.Screen name="Test" component={Test} options={{ headerShown: false }}/>
    <Stack.Screen name="Questions" component={Questions} options={{ headerShown: false }}/>
    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    <Stack.Screen name="Chathome" component={Chat_landing} options={{ headerShown: false }} />
    <Stack.Screen name="Rtlchat" component={Rtl_chat} options={{ headerShown: false }} />
    <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
    <Stack.Screen name="Groupchat" component={Groupchat} options={{ headerShown: false }} />
    <Stack.Screen name="Circle" component={Circle} options={{ headerShown: false }} />
    <Stack.Screen name="Notification" component={Notification}  /> 
    </Stack.Navigator>
   </NavigationContainer>
{/* <Utils/> */}
   {/* <FinalSlider/> */}
{/* <Demo/> */}

 {/* <View style={{marginTop:90,position: "absolute", top: 100, left: 10  , backgroundColor:"green"}}>

 </View> */}
 {/* <IntrestBar/> */}
 {/* <Slide/> */}
{/* <View  style={styles.container}>
  <View style={styles.content}>
<Seekbar/>

  </View>
</View> */}
{/* <Inputslide/> */}
</>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"gree"
  },
  content:{
    flex:1
  }
})