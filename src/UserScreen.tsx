import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import {Input, Image} from '@rneui/themed';
import {Icon} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
const UserScreen: React.FC = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let tempData: any = [];
    const email = await AsyncStorage.getItem('EMAIL');
    firestore()
      .collection('users')
      .where('email', '!=', email)
      .get()
      .then(res => {
        if (res.docs.length > 0) {
          res.docs.map(item => {
            tempData.push(item.data());
          });
        }
        setUsers(tempData);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đoạn Chat</Text>
      </View>
      <FlatList
        data={users}
        renderItem={({item}) => {
          return(
            <View style ={styles.userItem}>
            </View>

          )
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor :'white'
  },
  userItem: {
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    height: 60,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  texttitle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
  },
  inputStyle: {fontSize: 16},
  labelStyle: {fontSize: 14},
  placeholderStyle: {fontSize: 16},
  textErrorStyle: {fontSize: 16},

  item: {
    backgroundColor: '#ccc',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    color :'purple',
    fontSize : 20,
    fontWeight :'600'
  },
  name: {
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
  },
  header: {
    width : '100%',
    height : 60,
    backgroundColor :'while',
    elevation : 5,
    justifyContent :'center',
    alignItems :'center'
  },
});
export default UserScreen;
