import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../common/Style'
import Arrow from '../common/Arrow'
import * as DocumentPicker from 'expo-document-picker';
import Br_lines from '../common/Br_lines'
import * as ImagePicker from 'expo-image-picker';
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import saveUserData from '../../../Service/user'
import * as Device from 'expo-device';
const Profile = ({ navigation }) => {

  const [imagepath, setImagepath] = useState('')

  const [cameraPermissionInformation, requestPermission]=useCameraPermissions();
  const [pickedImage, setPickedImage]=useState()

  async function verifyPermission() {
    console.log(cameraPermissionInformation.status,  PermissionStatus.DENIED)
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permission!',
        'You need to grant camera access to use this app'
      );
      return false
    }
    return true;
  }
  async function camerapressHandler() {
    const hasPermission = await verifyPermission()
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      // aspect: [16, 9],
      quality: 0.5
    });
    setImagepath(image.assets[0].uri)
    // console.log(image.assets[0].uri)
  }
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({

    });

    if (result.type === 'success') {
      console.log(result.uri)
      setImagepath(result.uri)
      // setSelectedDocument(result);
    }
  };

  const showImagePicker = async () => {
    // const hasPermission = await verifyPermission()
    try{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.All,
        base64: true, quality: 1
      })
  
      console.log("result", result)
  
      if (!result.canceled) {
        setImagepath(result.assets[0].base64)
        // console.log("path", result.assets[0]);
      }
    }
    catch(err){
      console.log(err)
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
      const newdata = {...data,profileImgUrl:imagepath?'data:image/jpeg;base64,'+imagepath:'',deviceId,deviceToken,deviceType}
      const resp = await saveUserData(newdata)
      console.log(resp)
      await AsyncStorage.setItem('userDataResp',JSON.stringify(resp))
      navigation.navigate("Chathome")
    }

  // camera



  // delet pic
  const DeletProfile = () => {
    setImagepath("")
  }

  return (
    <View style={styles.outerconatiner}>
      <View style={styles.innerconatiner}>
        <View>
          <Arrow heading="Profile Photo ?" navigation={navigation} />
          <Br_lines />
        </View>

        <View style={{ width: "80%", marginHorizontal: 15, display: "flex", marginTop: 30 }}>

          <View style={{ display: "flex", alignItems: "center" }}>
            {imagepath ? <Image source={{ uri: 'data:image/jpeg;base64,'+imagepath }}
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
              onPress={camerapressHandler}
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