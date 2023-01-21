import React from 'react';


// import Router from "./src/Components/router/Router";
// import Discover from './src/Components/chat/DiscoverOld';
// import Test from './src/Components/Login/authentication/Test';
// import Arrow from './src/Components/Login/common/Arrow';

import Profile from './src/Components/Login/authentication/Profile';
import Otp from './src/Components/Login/Otp';
import IntrestedAres from './src/Components/Login/authentication/IntrestedAres';
import Login from './src/Components/Login/Login';
import Chat_landing from './src/Components/chat/Chat_landing';
import Auth from './src/Components/Login/authentication/Auth';
import Rtl_chat from './src/Components/chat/chatting_container/Rtl_chat';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groupchat from './src/Components/chat/GroupChat/Groupchat';

const Stack = createNativeStackNavigator();
export default function App() {


  return (

   <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/> 
    <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }}/> 
    <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
    <Stack.Screen name="IntrestedAres" component={IntrestedAres} options={{ headerShown: false }}/>
    <Stack.Screen name="Chathome" component={Chat_landing} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    <Stack.Screen name="Rtlchat" component={Rtl_chat} options={{ headerShown: false }} />
    <Stack.Screen name="Groupchat" component={Groupchat} options={{ headerShown: false }} />
    
    </Stack.Navigator>
   </NavigationContainer>


  );
}

