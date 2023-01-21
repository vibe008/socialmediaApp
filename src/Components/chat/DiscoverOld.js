import { StyleSheet, Text, View , Image, ScrollView, Button , TouchableOpacity, FlatList } from 'react-native'
import React from 'react'


const Discover = ({ navigation }) => {

  const intrestText = [
    {
      text : "All"
    },
    {
      text : "Personal"
    },
    {
      text : "Design"
    },
    {
      text : "Work"
    },
    {
      text : "Football"
    },
    {
      text : "Bascketball"
    },
  ]
  return (<>

    {/* <View style={{ marginTop: 20,  borderTopLeftRadius:50 , borderBottomLeftRadius:50 , padding:10 , shadowColor: "#000", backgroundColor:"white"
    ,
shadowOffset: {
	width: 0,
	height: 11,
},
shadowOpacity: 0.57,
shadowRadius: 15.19,

elevation: 23, }}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly",  }}>
        <Text >All</Text>
        <Text style={styles.intrest_text}>Personal</Text>
        <Text>Design</Text>
        <Text>Work</Text>
      </View>

      <View>

      </View>
    </View> */}
{/* <View style={styles.intrest_text_container}>

</View> */}
<FlatList

data={intrestText}
horizontal
// numColumns={3}
renderItem = {(element)=>{
  return (
    <Text style={{marginLeft:20}}>{element.item.text}</Text>
  )
}}
/>


<View style={{flex:1}}>
  <ScrollView>
<TouchableOpacity

  onPress={() => navigation.navigate('Rtlchat')}
>
<View style={{ display: "flex", flexDirection: "row",  alignItems:"center", padding:5 ,}}>

<View style={{ flex: 1 , position:"relative" }}>
  <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
    source={{
      uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }} />
    <View style={{backgroundColor:"green" , position:"absolute", top:45 , height:10 ,  width:10 , right:9 , borderRadius:10/2}}></View>
</View>

  {/* chat */}
<View style={{  flex: 3 ,  marginLeft:10 }}>
  <View style={{ }}>
    <Text style={{fontSize:15 ,  fontWeight:"500"}}>lorem lorem</Text>
  </View>
  <View  style={{marginTop:2 }}>
  <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus.</Text>
  </View>
 
</View>

  {/* time */}
<View style={{ }}>
  <View>
  <Text>5 min</Text>
  </View>
  <View style={{width:22 ,  height:22 ,  backgroundColor:"orange" , display:"flex" , alignItems:"center" ,    borderRadius:22/2 , marginTop:5}}>
  <Text style={{ color:"white" , padding:1 , }}>9</Text>
  </View>
</View>

</View>

</TouchableOpacity>

    <View style={{ display: "flex", flexDirection: "row",  alignItems:"center", padding:5 ,}}>

<View style={{ flex: 1 , position:"relative" }}>
  <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
    source={{
      uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }} />
    <View style={{backgroundColor:"green" , position:"absolute", top:45 , height:10 ,  width:10 , right:9 , borderRadius:10/2}}></View>
</View>

  {/* chat */}
<View style={{  flex: 3 ,  marginLeft:10 }}>
  <View style={{ }}>
    <Text style={{fontSize:15 ,  fontWeight:"500"}}>lorem lorem</Text>
  </View>
  <View  style={{marginTop:2 }}>
  <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus.</Text>
  </View>
 
</View>

  {/* time */}
<View style={{ }}>
  <View>
  <Text>5 min</Text>
  </View>
  <View style={{width:22 ,  height:22 ,  backgroundColor:"orange" , display:"flex" , alignItems:"center" ,    borderRadius:22/2 , marginTop:5}}>
  <Text style={{ color:"white" , padding:1 , }}>9</Text>
  </View>
</View>

</View>

<View style={{ display: "flex", flexDirection: "row",  alignItems:"center", padding:5 ,}}>

<View style={{ flex: 1 , position:"relative" }}>
  <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
    source={{
      uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }} />
    <View style={{backgroundColor:"green" , position:"absolute", top:45 , height:10 ,  width:10 , right:9 , borderRadius:10/2}}></View>
</View>

  {/* chat */}
<View style={{  flex: 3 ,  marginLeft:10 }}>
  <View style={{ }}>
    <Text style={{fontSize:15 ,  fontWeight:"500"}}>lorem lorem</Text>
  </View>
  <View  style={{marginTop:2 }}>
  <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus.</Text>
  </View>
 
</View>

  {/* time */}
<View style={{ }}>
  <View>
  <Text>5 min</Text>
  </View>
  <View style={{width:22 ,  height:22 ,  backgroundColor:"orange" , display:"flex" , alignItems:"center" ,    borderRadius:22/2 , marginTop:5}}>
  <Text style={{ color:"white" , padding:1 , }}>9</Text>
  </View>
</View>

</View>

<View style={{ display: "flex", flexDirection: "row",  alignItems:"center", padding:5 ,}}>

<View style={{ flex: 1 , position:"relative" }}>
  <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
    source={{
      uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }} />
    <View style={{backgroundColor:"green" , position:"absolute", top:45 , height:10 ,  width:10 , right:9 , borderRadius:10/2}}></View>
</View>

  {/* chat */}
<View style={{  flex: 3 ,  marginLeft:10 }}>
  <View style={{ }}>
    <Text style={{fontSize:15 ,  fontWeight:"500"}}>lorem lorem</Text>
  </View>
  <View  style={{marginTop:2 }}>
  <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus.</Text>
  </View>
 
</View>

  {/* time */}
<View style={{ }}>
  <View>
  <Text>5 min</Text>
  </View>
  <View style={{width:22 ,  height:22 ,  backgroundColor:"orange" , display:"flex" , alignItems:"center" ,    borderRadius:22/2 , marginTop:5}}>
  <Text style={{ color:"white" , padding:1 , }}>9</Text>
  </View>
</View>

</View>

<View style={{ display: "flex", flexDirection: "row",  alignItems:"center", padding:5 ,}}>

<View style={{ flex: 1 , position:"relative" }}>
  <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
    source={{
      uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }} />
    <View style={{backgroundColor:"green" , position:"absolute", top:45 , height:10 ,  width:10 , right:9 , borderRadius:10/2}}></View>
</View>

  {/* chat */}
<View style={{  flex: 3 ,  marginLeft:10 }}>
  <View style={{ }}>
    <Text style={{fontSize:15 ,  fontWeight:"500"}}>lorem lorem</Text>
  </View>
  <View  style={{marginTop:2 }}>
  <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus.</Text>
  </View>
 
</View>

  {/* time */}
<View style={{ }}>
  <View>
  <Text>5 min</Text>
  </View>
  <View style={{width:22 ,  height:22 ,  backgroundColor:"orange" , display:"flex" , alignItems:"center" ,    borderRadius:22/2 , marginTop:5}}>
  <Text style={{ color:"white" , padding:1 , }}>9</Text>
  </View>
</View>

</View>

<View style={{ display: "flex", flexDirection: "row",  alignItems:"center", padding:5 ,}}>

<View style={{ flex: 1 , position:"relative" }}>
  <Image style={{ height: 60, width: 60, borderRadius: 60 / 2, resizeMode: 'contain' }}
    source={{
      uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }} />
    <View style={{backgroundColor:"green" , position:"absolute", top:45 , height:10 ,  width:10 , right:9 , borderRadius:10/2}}></View>
</View>

  {/* chat */}
<View style={{  flex: 3 ,  marginLeft:10 }}>
  <View style={{ }}>
    <Text style={{fontSize:15 ,  fontWeight:"500"}}>lorem lorem</Text>
  </View>
  <View  style={{marginTop:2 }}>
  <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus.</Text>
  </View>
 
</View>

  {/* time */}
<View style={{ }}>
  <View>
  <Text>5 min</Text>
  </View>
  <View style={{width:22 ,  height:22 ,  backgroundColor:"gray" , display:"flex" , alignItems:"center" ,    borderRadius:22/2 , marginTop:5}}>
  <Text style={{ color:"white" , padding:1 , }}>23</Text>
  </View>
</View>

</View>
  </ScrollView>
</View>


  </>
  )
}

export default Discover

const styles = StyleSheet.create({
  intrest_text:{
backgroundColor:"white",
paddingHorizontal:10,
paddingVertical:2,
borderRadius:50,


shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
  }
})