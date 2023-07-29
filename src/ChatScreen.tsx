import React, { useEffect, useState ,useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input, Image } from '@rneui/themed';
import { Icon } from '@rneui/base';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { create } from 'react-test-renderer';
const ChatScreen: React.FC = () => {
  const navigation = useNavigation()
  const [messagesList, setMessagesList] = useState([] as any[]);
  const route : any = useRoute();
  useEffect(() => {
    const subscriber : any = firestore()
    .collection('chats')
    .doc(route.params.id + route.params.data.userId)
    .collection('messages')
    .orderBy('createdAt','desc');
    subscriber.onSnapshot(querysnapShot =>{
      const allMessages = querysnapShot.docs.map(item =>{
        return {...item.data ,createdAt : new Date()}
      });
      setMessagesList(allMessages)
    })
    return () => subscriber();
  }, []);

  const onSend = useCallback ( async(messages : any = []) => {
    console.log(messages);
    const msg : any = messages[0];
    const myMsg = {...msg, 
      sendBy: route.params.id, 
      sendTo: route.params.data.userId,
      createdAt : Date.parse(msg.createdAt)};
    setMessagesList(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc('' + route.params.id + route.params.data.userId)
      .collection('messages')
      .add(myMsg);
      firestore()
      .collection('chats')
      .doc('' + route.params.data.userId  + route.params.id)
      .collection('messages')
      .add(myMsg);  
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat' as never)}>
          <Icon name="arrow-left" type="material-community" size={30} />
        </TouchableOpacity>
      </View>
      <GiftedChat
        messages={messagesList}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{right: {backgroundColor: '#4382e8'}}}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  headerText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default ChatScreen;
