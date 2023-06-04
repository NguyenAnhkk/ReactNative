import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input, Image} from '@rneui/themed';
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#f5edf2', '#f0a5d3']} style={{flex: 1}}>
        <View style={styles.UserInforSection}>
          <View
            style={
              {flexDirection: 'row'} /* Mặc định thì thẻ View nằm dọc , chỉnh để nằm ngang */
            }>
            <Image
              style={styles.Avatar}
              source={require('../src/assets/Profile.jpg')}
            />
            <View style={{marginLeft: 20, paddingTop: 20}}>
              <Text style={styles.title}>Nguyễn Ngọc Anh</Text>
              <Text style={styles.caption}> Code mobile</Text>
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
      </LinearGradient>
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
