import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../common/Style'
import Arrow from '../common/Arrow'
import Br_lines from '../common/Br_lines'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import saveUserData from '../../../Service/user'
import * as Device from 'expo-device';
const Profile = ({ navigation }) => {

  const [imagepath, setImagepath] = useState('')

  const showImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.All,
    })

    console.log("result", result)

    if (!result.canceled) {
      setImagepath(result.assets[0].uri)
      console.log("path", result.assets[0].uri);
    }
  }

    const goToChatHandler = async()=>{
      const deviceId = Device.osInternalBuildId;
      const deviceToken = await Device.getUptimeAsync()
      const deviceType = Device.osName
      console.log('deviceType',deviceType)
      // console.log("deviceId",deviceId)
      console.log("tocken",deviceToken)
      const jsondata = await AsyncStorage.getItem('userData')
      const data = JSON.parse(jsondata)
      const newdata = {...data,profileImgUrl:imagepath,deviceId,deviceToken,deviceType}
      const resp = await saveUserData(newdata)
      console.log(resp)
      await AsyncStorage.setItem('userDataResp',JSON.stringify(resp))
      navigation.navigate("Chathome")
    }

  // camera
  const openCamera = async () => {
    // const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    // if (permissionResult.granted === false) {
    //   alert("You've refused to allow this appp to access your camera!");
    //   return;
    // }

    const camresult = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(camresult);

    if (!camresult.canceled) {
      setImagepath(camresult.assets[0].uri);
      console.log(camresult.assets[0].uri);
    }
  }


  // delet pic
  const DeletProfile = () => {
    setImagepath("")
  }

  return (
    <View style={styles.outerconatiner}>
      <View style={styles.innerconatiner}>
        <View>
          <Arrow heading="Profile Pic ?" navigation={navigation} />
          <Br_lines />
        </View>

        <View style={{ width: "80%", marginHorizontal: 15, display: "flex", marginTop: 30 }}>

          <View style={{ display: "flex", alignItems: "center" }}>
            {imagepath ? <Image source={{ uri: imagepath }}
              style={{ height: 100, width: 100, borderRadius: 100 / 2, resizeMode: 'contain' }}
            /> :
              <Image
                style={{ height: 100, width: 100, borderRadius: 100 / 2, resizeMode: 'contain' }}
                source={{
                  uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                }}
              />
            }
          </View>

          <View>
            <TouchableOpacity style={{ backgroundColor: "#237fe4", padding: 10, width: "100%", marginTop: 10 }}
              onPress={openCamera}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                TAKE A PHOTO
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10, width: "100%", textAlignments: "center", marginTop: 10 }}
              onPress={showImagePicker}
            >
              <Text style={{ textAlign: "center" }}>
                CHOOSE FROM GALLERY
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 10, width: "100%", textAlignments: "center", marginTop: 10 }}
              onPress={goToChatHandler}>
              <Text style={{ color: '#237fe4', textAlign: "center" }}>
                SKIP
              </Text>
            </TouchableOpacity>
            {/* show and hide icon after image picked */}
            <View style={[imagepath ? styles.showDeletpic : styles.hideDeletpic]}>
              <TouchableOpacity
                onPress={DeletProfile}
              >
                <Text>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={goToChatHandler}
              >
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
            {/* show and hide icon after image picked */}
          </View>

        </View>



      </View>
    </View>
  )
}

export default Profile
