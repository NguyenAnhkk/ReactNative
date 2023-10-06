import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from './ThemeContext';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View  style={{flex: 1}}>
        <View style={styles.UserInforSection}>
          <View
            style={
              {flexDirection: 'row'} /* Mặc định thì thẻ View nằm dọc , chỉnh để nằm ngang */
            }>
            <View style={{marginLeft: 20, paddingTop: 20}}>
              <Text style={styles.title}>Nguyen Anh</Text>
            </View>
          </View>
        </View>
        <View style={styles.Address}>
          <Icon name={'map-marker'} type="material-community" size={20} />
          <View>
            <Text style={{color: '#000', paddingLeft: 20, fontSize: 15}}>
              Tien Lang , Hai Phong , Viet Nam
            </Text>
          </View>
        </View>
        <View style ={styles.Phone}>
          <Icon name ={'phone'} type='material-community' size={20}/>
          <View>
            <Text style={{color: '#000', paddingLeft: 20, fontSize: 15}}>
              +84 337221906
            </Text>
          </View>
        </View>
        <View style ={styles.Gmail}>
        <Icon name ={'gmail'} type='material-community' size={20}/>
          <View>
            <Text style={{color: '#000', paddingLeft: 20, fontSize: 15}}>
              nguyenanhcry@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  UserInforSection: {
    paddingHorizontal: 30,
    marginTop: 35,
  },
  Avatar: {
    resizeMode: 'cover',
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  caption: {
    fontStyle: 'italic',
  },
  Address: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 20,
  },
  Phone:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 20,
  },
  Gmail:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 20,
  }
});

export default ProfileScreen;
