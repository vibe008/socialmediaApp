import { ScrollView, Text, TextInput, TouchableOpacity, View, style } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../common/Style'
import Br_lines from '../common/Br_lines'
// import MultiSelect from 'react-native-multiple-select';
import { EvilIcons } from '@expo/vector-icons';
import DatePicker from 'react-native-modern-datepicker';
import React, { useState, useRef } from 'react'

const IntrestedAres = ({navigation}) => {


  const multiSelect = useRef(null)

  const intrestItem = [{
    id: '92iijs7yta',
    name: 'Football'
  }, {                         
    id: 'a0s0a8ssbsd',
    name: 'Movies'                            
  }, {
    id: '16hbajsabsd',
    name: 'Travelling'
  }, {
    id: 'nahs75a5sg',
    name: 'Cooking'
  }, {
    id: '667atsas',
    name: 'Music'
  }, {
    id: 'hsyasajs',
    name: 'Reading'
  }, {
    id: 'djsjudksjd',
    name: 'Games'
  }, {
    id: 'sdhyaysdj',
    name: 'Gardning'
  }, 
  ];

  const [selectedIntrestIte, setSelectedIntrestIte] = useState([])

  const onSelectedItemsChange = (item) => {

    setSelectedIntrestIte(item)

  }
  const clearSelectedCategories = () => {
    multiSelect.current._removeAllItems()
  }


  // date function picker

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };





  const [selectedDate, setSelectedDate] = useState('Date Of Birth');

  const onSelectDate = (morderdate) => {
    setSelectedDate(morderdate)
    console.log("morden", morderdate);
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
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

            {/* <MultiSelect
              hideTags
              items={intrestItem}
              uniqueKey="id"
              ref={multiSelect}
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedIntrestIte}
              selectText="Enter you itrest"
              searchInputPlaceholderText="Search Intrest"
              
              onToggleList={(e) => { console.log('toggle', e); return false }}
              hideDropdown={false}
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
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
            /> */}

          </View>

          <View style={{display:"flex", flexDirection:"row", }} >
            {/* flex gender datepicker */}
            <View style={{width:"50%"}}>
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
            </View>

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
            onPress={()=> navigation.navigate("Test")}
          >
            <Text style={{color:"white" , fontSize:20 , fontWeight:"bold"}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
        {/* button end */}
      {multiSelect.current && selectedIntrestIte.length ?
              <ScrollView style={{  marginTop:0}} >
                <View style={{}}>
                  {multiSelect.current.getSelectedItemsExt(selectedIntrestIte)}
                </View>
              </ScrollView> : null}

      </View>
    </View>
  )
}

export default IntrestedAres

