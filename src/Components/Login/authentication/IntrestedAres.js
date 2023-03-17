import { ScrollView, Text, TextInput, TouchableOpacity, View, style, Alert } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../common/Style'
import Br_lines from '../common/Br_lines'
import MultiSelect from 'react-native-multiple-select';
import { EvilIcons } from '@expo/vector-icons';
import DatePicker from 'react-native-modern-datepicker';
import getInterest from '../../../Service/interest';
import React, { useState, useRef , useEffect} from 'react'
import apiUrl from '../../../Service/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IntrestedAres = ({navigation}) => {


  const multiSelect = useRef(null)

  const intrestItem = [];

  const [selectedIntrestIte, setSelectedIntrestIte] = useState([])
  const [intrestitem , setIntrestitem] = useState(intrestItem)

  const onSelectedItemsChange = (item) => {

    setSelectedIntrestIte(item)

  }
  const clearSelectedCategories = () => {
    multiSelect.current._removeAllItems()
  }
const getData = async()=>{
  const resp = await getInterest()
  console.log(resp)
  // setIntrestitem([...resp.message])
}
useEffect(() => {
  fetch(apiUrl+'interest/list').then(resp=>resp.json()).then(data=>{console.log(data)
    setIntrestitem([...data.message])
  })
}, [])

  // date function picker

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };



  const continueHandler=async()=>{
    let JSONdata = await AsyncStorage.getItem('userData')
    let data = JSON.parse(JSONdata)
    let interests = []
      for(let si of selectedIntrestIte){
        for(let i of intrestitem){
          if(si === i._id){
            interests.push(i)
          }
      }
    }
    // console.log(interests)
    if(interests.length && selectedDate && value){
      let newData = {...data,dob:selectedDate,gender:value,interests}
      await AsyncStorage.setItem('userData',JSON.stringify(newData))
      console.log(newData)
      navigation.navigate("Test")
    }else{
      Alert.alert('Please select options!')
    }
    
  }

  const [selectedDate, setSelectedDate] = useState('Date Of Birth');

  const onSelectDate = (morderdate) => {
    setSelectedDate(morderdate)
    console.log("morden", morderdate);
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'Other' }
  ]);



  // const multiSelect = []
  return (
    <View style={styles.outerconatiner}>
      <View style={styles.innerconatiner}>

        <View>
          <Text style={{
            fontSize: 30,
            fontWeight: '400',
            color: 'black'
          }}>Tell us about you</Text>
          <Br_lines />
        </View>


{/* main div */}
        <View style={{ marginTop:20 , }}>

          <View style={{}}>
            {/* multiselect */}

            <MultiSelect
              hideTags
              items={intrestitem}
              uniqueKey="_id"
              ref={multiSelect}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedIntrestIte}
              selectText="Enter you interest"
              searchInputPlaceholderText="Search Intrest"
              
              onToggleList={(e) => { console.log('toggle', e); return false }}
              hideDropdown={false}
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="title"
              searchInputStyle={{ color: '#000', height: 50, }}
              onClearSelector={clearSelectedCategories}
              onPress={() => console.log('onpress')}
              fixedHeight={false}
              flatListProps={{ intrestItem }}
              styleItemsContainer={{ height: 150  ,}}
              tagContainerStyle={{ backgroundColor: 'skyblue', height: 35 }}
              styleInputGroup={{ paddingRight: 10, borderRadius: 8 }}
              styleDropdownMenuSubsection={{ borderRadius: 7, height: 50, paddingLeft: 10 ,}}
              styleTextDropdown={{ marginLeft: 9 }}
              // button
              submitButtonColor="skyblue"
              submitButtonText="Submit"
              // tag
              tagRemoveIconColor="white"
              tagBorderColor="skyblue"
              tagTextColor="white"
            />

          </View>

          <View style={{display:"flex", flexDirection:"row", }} >
            {/* flex gender datepicker */}
            <TouchableOpacity
            onPress={showDatePicker}
            style={{width:"50%"}}>
              {/* gender */}
              <DropDownPicker
                placeholder='Gender'
                style={styles.containerStyle}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </TouchableOpacity>

              {/* date picker */}
            <View style={{backgroundColor:"white"  , display:"flex" , alignItems:"center", justifyContent:'space-evenly' , flexDirection:"row" , marginLeft:20 , borderRadius:6 , width:"42%"}}>
            <TouchableOpacity onPress={showDatePicker}
            style={{marginLeft:10}}
            >
            <Text>{selectedDate}</Text>
            </TouchableOpacity>

            <View>
              {isDatePickerVisible ?   <EvilIcons name="chevron-up" size={32}/>: <EvilIcons name="chevron-down" size={32}/>}
            
            </View>

            </View>
            {/* dateoicker end */}

          </View>
          {/* gender flex */}

        </View>
        {/* main div */}

        <DatePicker
                options={{
                  backgroundColor: 'white',
                  textHeaderColor: 'skyblue',
                  textDefaultColor: 'skyblue',
                  selectedTextColor: 'skyblue',
                  mainColor: '#F4722B',
                  textSecondaryColor: 'skycolor',
                  borderColor: 'skyblue',
                  position: "absolute",
                  top: 40
                }}
                style={[isDatePickerVisible ?   styles.showdate: styles.hidedate ]}
                mode="calendar"
                onSelectedChange={onSelectDate}
              /> 


        {/* buttotn */}
        <View style={{ marginTop: 12 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#227ee3", padding: 10
              , display: "flex", alignItems: "center",
              borderRadius: 3,
              color: "white ",
              zIndex: -1
            }}
            onPress={continueHandler}
          >
            <Text style={{color:"white" , fontSize:20 , fontWeight:"bold"}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
        {/* button end */}
      {multiSelect.current && selectedIntrestIte.length ?
              <ScrollView style={{  marginTop:0 , zIndex:-1}} >
                <View style={{}}>
                  {multiSelect.current.getSelectedItemsExt(selectedIntrestIte)}
                </View>
              </ScrollView> : null}

      </View>
    </View>
  )
}

export default IntrestedAres

