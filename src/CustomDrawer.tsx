import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import Drawer from 'react-native-drawer';
import {Image} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const CustomDrawer: React.FC = (props: any) => {
  const BASE_URI = 'https://source.unsplash.com/random?sig=';
  const navigation = useNavigation()
  return (
    <View style ={{flex : 1}}>
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{backgroundColor: '#574E91'}}>
      <LinearGradient colors={['#32a88b', '#327ba8']} style={{flex: 1}}>
        <ImageBackground
          source={require('../src/assets/Altos-Odyssey.jpeg')}
          style={{padding: 90}}>

          </ImageBackground>
        <View style={{flexDirection: 'row'}} />
      </LinearGradient>
      <View style={{paddingTop: 10, backgroundColor: '#fff'}}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
    <View style ={{padding : 15,borderTopWidth : 1 ,borderBottomColor : '#ccc'}}>
      <TouchableOpacity onPress={() =>{}} style ={{paddingVertical : 10}}>
        <View style ={{flexDirection : 'row', alignItems : 'center'}}>
          <Icon name = 'share' type='material' size={22}/>
        <Text style ={{fontSize : 14,marginLeft : 5,fontFamily : 'Roboto-Nedium',color :'black' , paddingLeft : 15}}>Share to friend</Text>
        </View>
      </TouchableOpacity>
      <View style ={{paddingVertical : 10}}>
        <View style ={{flexDirection : 'row', alignItems : 'center' , paddingBottom : 10}}>
          <Icon name = 'card-account-mail' type='material-community' size={22}/>
        <Text style ={{fontSize : 15,marginLeft : 5,fontFamily : 'Roboto-Nedium' , color :'black' , paddingLeft : 15}}>nguyenanhcry@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('LoginScreen' as never)}
      style ={{flexDirection :'row'}}>
        <Icon name = 'logout' type = 'material' color={'black'} size={25}/>
        <Text style={{padding : 3 , paddingLeft : 15, color  :'black'}}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});

export default CustomDrawer;
