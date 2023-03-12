import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Image, TouchableOpacity , Text} from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import Sound from 'react-native-sound';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // function to add a new message to the chat
  const addMessage = (newMessage, messageType) => {
    setChatMessages(prevMessages => [
      ...prevMessages,
      {
        id: Math.random().toString(),
        message: newMessage,
        messageType: messageType,
      }
    ]);
  };

  // function to handle sending a message
  const sendMessageHandler = () => {
    if (message.trim() !== '') {
      addMessage(message, 'text');
      setMessage('');
    }
  };

  // function to handle sending an audio message
  const sendAudioHandler = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      const sound = new Sound(result.uri, null, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        }
      });
      addMessage(sound, 'audio');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the audio selection');
      } else {
        console.log('error selecting audio', err);
      }
    }
  };

  // function to handle sending a picture message
  const sendPictureHandler = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      addMessage(result.uri, 'picture');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('user cancelled the picture selection');
      } else {
        console.log('error selecting picture', err);
      }
    }
  };

  // function to render each chat message
  const renderMessage = ({ item }) => {
    switch (item.messageType) {
      case 'text':
        return (
          <View style={styles.messageContainer}>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
          </View>
        );
      case 'audio':
        return (
          <View style={styles.messageContainer}>
            <TouchableOpacity onPress={() => item.message.play()}>
              <Text style={styles.audioText}>Play Audio</Text>
            </TouchableOpacity>
          </View>
        );
      case 'picture':
        return (
          <View style={styles.messageContainer}>
            <Image style={styles.picture} source={{ uri: item.message }} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatMessages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Button title="Send" onPress={sendMessageHandler} />
        <Button title="Audio" onPress={sendAudioHandler} />
        <Button title="Picture" onPress={sendPictureHandler} />
      </View>
    </View>
  );
};
export default ChatScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
    marginRight: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  messageBubble: {
    backgroundColor: '#EEE',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  picture: {
    width: 200,
    height: 200,
  },
  audioText: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },

})
