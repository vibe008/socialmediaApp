import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const items = [
  { key: 1, title: 'Item 1' },
  { key: 2, title: 'Item 2' },
  { key: 3, title: 'Item 3' },
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = item => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Modal
        visible={selectedItem !== null}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{selectedItem ? selectedItem.title : ''}</Text>
          <TouchableOpacity onPress={handleCloseModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {items.map(item => (
        <TouchableOpacity key={item.key} onPress={() => handleOpenModal(item)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default App;