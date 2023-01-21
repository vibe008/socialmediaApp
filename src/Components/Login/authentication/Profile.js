import { Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from '../common/Style'
import Arrow from '../common/Arrow'
import Br_lines from '../common/Br_lines'
const Profile = ({navigation}) => {
  return (
    <View style={styles.outerconatiner}>
      <View style={styles.innerconatiner}>
        <View>
          <Arrow heading="Profile Pic ?"  navigation={navigation}/>
          <Br_lines />
        </View>

        <View style={{ width: "80%", marginHorizontal: 15, display: "flex", marginTop:40 }}>

          <View style={{display:"flex" , alignItems:"center"}}>
            <Image style={{ height: 100, width: 100, borderRadius: 100 / 2, resizeMode: 'contain' }}
              source={{
                uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }}
            />
          </View>

          <View>
            <TouchableOpacity style={{ backgroundColor: "#237fe4", padding: 10, width: "100%" , textAlignments:"center",marginTop:10 }}>
              <Text style={{color:"white"}}>
                TAKE A PHOTO
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding: 10, width: "100%" , textAlignments:"center",marginTop:10 }}>
              <Text>
                CHOOSE FROM GALLERY
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10, width: "100%" , textAlignments:"center" ,marginTop:10}}>
              <Text style={{color:'#237fe4'}}>
                SKIP
              </Text>
            </TouchableOpacity>
          </View>

        </View>


      </View>
    </View>
  )
}

export default Profile
