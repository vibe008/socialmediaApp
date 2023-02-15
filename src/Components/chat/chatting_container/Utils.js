import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View , StyleSheet , Modal} from 'react-native';



const App = () => {
 const myArray = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "orange" },
 ]
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemPress = (item) => {
    setSelectedItem(item);
  };
  const ModalComponent = () => {
    return (
      <Modal visible={!!selectedItem} onRequestClose={() => setSelectedItem(null)}>
        <Text>{selectedItem?.key} ui</Text>
      </Modal>
    );
  };
  return (
    <View style={{marginTop:90 , marginLeft:90}}>
  <View>
    <FlatList
      data={myArray}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
    <ModalComponent />
  </View>
    </View>
  );
};

export default App;