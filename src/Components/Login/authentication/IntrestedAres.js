import { ScrollView, Text, TextInput, TouchableOpacity, View , style } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../common/Style'
import Br_lines from '../common/Br_lines'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MultiSelect from 'react-native-multiple-select';

import React, { useState , useRef } from 'react'

const IntrestedAres = () => {


  const multiSelect = useRef(null)

  const intrestItem = [{
    id: '92iijs7yta',
    name: 'Football'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
  }, {
    id: '16hbajsabsd',
    name: 'Calabar'
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos'
  }, {
    id: '667atsas',
    name: 'Maiduguri'
  }, {
    id: 'hsyasajs',
    name: 'Anambra'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
  }, {
    id: 'suudydjsjd',
    name: 'Abuja'
    }
];

const [selectedIntrestIte ,setSelectedIntrestIte] = useState([])

const onSelectedItemsChange =(item)=>{

  setSelectedIntrestIte((i)=>i = item)
  
}
const clearSelectedCategories =()=>{
  multiSelect.current._removeAllItems()
}

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };


  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]);


  const [areaOpen, setAreaOpen] = useState(false)
  const [itrestvalue, setItrestvalue] = useState(null);
  const [intrest, setIntrest] = useState([
    { label: 'football', value: 'football' },
    { label: 'cricket', value: 'cricket' },
    { label: 'music', value: 'music' },
    { label: 'coocking', value: 'coocking' },
  ]);
// const multiSelect = []
  return (
    <View style={[styles.outerconatiner  , {position:"absolute" , top:100 ,   width:"100%"} ] }>
      <View style={styles.innerconatiner}>

        <View>
          <Text style={{
            fontSize: 30,
            fontWeight: '400',
            color: 'black'
          }}>Tell us about you</Text>
          <Br_lines />
        </View>


        <View style={{ marginTop: 12, }}>
          <View style={{ zIndex: 999 }}>
            {/* <DropDownPicker
              placeholder='Enter Your  Intrest'
              style={styles.containerStyle}
              open={areaOpen}
              value={values}
              items={intrest}
              setOpen={setAreaOpen}
              setValues={setValues}
              setIntrest={setIntrest}
              // theme="DARK"
              multiple={true}
              mode="BADGE"
            /> */}



            {/* <DropDownPicker  
              placeholder='Enter Your  Intrest'
              
              // theme="DARK"
              multiple={true}
              mode="BADGE"
              badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
            /> */}




<MultiSelect
          
          hideTags
          items={intrestItem}
          uniqueKey="id"
          ref={multiSelect}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedIntrestIte}
          selectText="Enter you itrest"
          searchInputPlaceholderText="Search Intrest"
          onChangeInput={ (text)=> console.log(text)}
          // altFontFamily="ProximaNova-Light"
          // styleDropdownMenu= {{display:"none"}}
          // styleDropdownMenuSubsection={{display:"none"}}
          // styleListContainer={{display:"none"}}
          tagRemoveIconColor="blue"
          tagBorderColor="blue"
          tagTextColor="blue"
          onToggleList={(e)=>{console.log('toggle',e);return false}}
          hideDropdown={false}
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#000' , height:50 ,  }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
          onClearSelector={clearSelectedCategories}
          onPress={()=>console.log('onpress')}
          fixedHeight={false}
          flatListProps={{intrestItem}}
          // styleDropdownMenu={{padding:9}}
          styleItemsContainer={{height:150}}
          tagContainerStyle={{backgroundColor:'white' , height:35   }}
          styleIndicator={{color:"#000"}}
          // styleDropdownMenu={{height:50 , borderRadius:10 , backgroundColor:"red"}}
          styleInputGroup={{ paddingRight:10 , borderRadius:8}}
          // styleListContainer={{backgroundColor:"red"}}
          // styleMainWrapper={{ borderRadius:19}}
          // styleRowList={{backgroundColor:'gray'}}
          styleDropdownMenuSubsection={{ borderRadius:7 , height:50 , paddingLeft:10}}
          styleTextDropdown={{marginLeft:9}}
          // styleSelectorContainer={{marginLeft:9}}
          // styleItemContainer={{backgroundColor:"red"}}
          
          // searchInputStyle={{paddingRight:40}}
          // styleIndicator="red"
          

        />
        {multiSelect.current && selectedIntrestIte.length ? <ScrollView style={{minHeight:50 , maxHeight:100}}>

        <View>
          {multiSelect.current.getSelectedItemsExt(selectedIntrestIte)}
        </View>
        </ScrollView> :null}
          </View>

          <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <View style={{ width: "50%", marginTop: 10, zIndex: 99 }}>
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

            <TouchableOpacity onPress={showDatePicker}>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <Text>hi</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ marginTop: 12 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "skyblue", padding: 10
              , display: "flex", alignItems: "center",
              borderRadius: 3,
              color: "white ",
              zIndex: -1
            }}
          >
            <Text>CONTINUE</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default IntrestedAres

