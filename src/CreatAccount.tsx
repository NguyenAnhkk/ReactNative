import {useNavigation} from '@react-navigation/native';
import {Input} from '@rneui/base';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
} from 'react-native';
import * as React from 'react';
import {Icon} from 'react-native-elements';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
const CreatAccount: React.FC = () => {
  const [mood, setMood] = useState('');
  const [passwordvisible, setpasswordvisible] = useState(true);
  const [passwordvisible2, setpasswordvisible2] = useState(true);
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [passWord, setPassword] = useState('');
  const handleSignIn = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        userName,
        passWord,
      );
      console.log('Tao tai khoan thanh cong', userCredential.user);
    } catch (error) {
      console.error('Tao tai khoan that bai', error);
    }
  };
  return (
    <View style={{backgroundColor: '#e3decf', flex: 1}}>
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TouchableOpacity
              style={{width: 50, marginTop: 10}}
              onPress={() => {
                navigation.navigate('LoginScreen' as never);
              }}>
              <Icon
                name="angle-left"
                type="font-awesome"
                color={'#000'}
                size={35}
                style={{paddingLeft: 5}}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: '700',
                  color: 'black',
                }}>
                Đăng Ký
              </Text>
              <Text style={{textAlign: 'center', marginTop: 10}}>
                Tham gia vào cộng đồng có Nguyen Anh !
              </Text>
            </View>
            <View style={styles.styleCard}>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 5,
                  marginLeft: 20,
                  color: 'black',
                }}>
                Tên đầy đủ
              </Text>
              <View style={styles.setInput}>
                <Input
                  inputContainerStyle={{
                    borderColor: 'transparent',
                  }}
                  inputStyle={{fontSize: 15}}
                  style={{}}></Input>
              </View>
              <Text
                style={{
                  paddingTop: 15,
                  marginLeft: 20,
                  color: 'black',
                }}>
                Giới tính
              </Text>
              <View
                style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
                {['Nam', 'Nữ'].map(feeling => (
                  <View style={{flexDirection: 'row'}} key={feeling}>
                    <TouchableOpacity
                      style={styles.outter}
                      onPress={() => setMood(feeling)}>
                      {mood === feeling && <View style={styles.inner}></View>}
                    </TouchableOpacity>
                    <Text style={{marginLeft: 10, color: 'black'}}>
                      {feeling}
                    </Text>
                  </View>
                ))}
              </View>
              <View>
                <Text style={{color: 'black', marginLeft: 20, paddingTop: 15}}>
                  Địa chỉ email
                </Text>
                <View style={styles.setInputPhone}>
                  <Input
                    inputContainerStyle={{
                      borderWidth: 0,
                      borderColor: 'transparent',
                    }}
                    inputStyle={{fontSize: 15}}
                    keyboardType="email-address"
                    onChangeText={setUserName}></Input>
                </View>
              </View>
              <View>
                <Text style={{color: 'black', marginLeft: 20, paddingTop: 15}}>
                  Mật khẩu
                </Text>
                <View style={styles.setInputPhone}>
                  <Input
                    inputContainerStyle={{
                      borderWidth: 0,
                      borderColor: 'transparent',
                    }}
                    inputStyle={{fontSize: 15}}
                    keyboardType="default"
                    secureTextEntry={
                      passwordvisible
                    } /* secureTextEntry : giá trị nhập vào bị ẩn đi */
                    rightIcon={
                      <Icon
                        name={passwordvisible ? 'eye-off' : 'eye'}
                        type="material-community"
                        onPress={() => setpasswordvisible(!passwordvisible)}
                      />
                    }
                    onChangeText={setPassword}
                  />
                </View>
              </View>
              <View>
                <Text style={{color: 'black', marginLeft: 20, paddingTop: 15}}>
                  Nhập lại mật khẩu
                </Text>
                <View style={styles.setInputPhone}>
                  <Input
                    inputContainerStyle={{
                      borderWidth: 0,
                      borderColor: 'transparent',
                    }}
                    inputStyle={{fontSize: 15}}
                    keyboardType="default"
                    secureTextEntry={passwordvisible2}
                    rightIcon={
                      <Icon
                        name={passwordvisible2 ? 'eye-off' : 'eye'}
                        type="material-community"
                        onPress={() => setpasswordvisible2(!passwordvisible2)}
                      />
                    }></Input>
                </View>
              </View>
              <TouchableOpacity onPress={handleSignIn}>
                <View style={styles.creat}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      marginTop: 13,
                      fontSize: 17,
                      fontWeight: '500',
                    }}>
                    Đăng ký
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{flexDirection: 'row', paddingTop: 30, paddingLeft: 75}}>
              <Text style={{color: 'black'}}>Bạn đã có tài khoản ? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginScreen' as never);
                }}>
                <Text style={{color: 'black', fontWeight: '700'}}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  styleCard: {
    marginHorizontal: 35,
    backgroundColor: '#fff',
    height: 500,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43 /* độ mờ của bóng */,
    shadowRadius: 9.51 /* bán kính của bóng */,
    elevation: 15 /* độ cao */,
  },
  setInput: {
    backgroundColor: '#dce1e8',
    borderRadius: 10,
    height: 45,
    marginHorizontal: 15,
  },
  setInputPhone: {
    backgroundColor: '#dce1e8',
    borderRadius: 10,
    height: 45,
    marginHorizontal: 15,
    marginTop: 5,
    flexDirection: 'row',
  },
  outter: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 20,
  },
  inner: {
    width: 14,
    height: 14,
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 2,
  },
  creat: {
    backgroundColor: '#ff8400',
    borderRadius: 20,
    height: 50,
    marginHorizontal: 30,
    marginTop: 30,
  },
});
export default CreatAccount;
