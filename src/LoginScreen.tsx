import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Input, Image} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Field, Formik} from 'formik';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreatAccount from './CreatAccount';

const LoginScreen: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [passwordvisible , setpasswordvisible] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const UserName = await AsyncStorage.getItem('UserName');
      // const Password = await AsyncStorage.getItem('Password');
      console.log(UserName /*, Password*/);
      if (UserName /*&& Password*/) {
        setUserName(UserName);
        // setPassWord(Password);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();
  const SignupSchema = Yup.object().shape({
    Account: Yup.string()
      .min(5, 'Kí tự quá ngắn !')
      .max(20, 'Kí tự qua dài !')
      .required('Vui lòng nhập tài khoản !'),
    Password: Yup.string()
      .min(5, 'Kí tự quá ngắn !')
      .max(16, 'Kí tự qua dài !')
      .required('Vui lòng nhập mật khẩu !'),
    email: Yup.string()
      .email('Email không hợp lệ !')
      .required('Vui lòng thử lại !'),
  });
  const handleOnPress = useCallback(async () => {
    await AsyncStorage.setItem('UserName', userName);
    // await AsyncStorage.setItem('Password', passWord);
    navigation.navigate('DrawerScreen' as never,{name : 'Anh'} as never);
  }, [userName /*, passWord*/]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Formik
        initialValues={{Account: '', Password: '',email :''}}
        validateOnMount ={true}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={SignupSchema}>
        {({errors, touched, values,handleChange,handleBlur,handleSubmit}) => (
          <>
            <View style={styles.container}>
              <LinearGradient colors={['#f0a5d3', '#f5edf2']} style={{flex: 1}}>
                <Text style={styles.imgText}>
                  <Image
                    borderRadius={50}
                    style={{width: 50, height: 50}}
                    source={require('../src/assets/wall.jpg')}
                  />
                </Text>
                <Text style={styles.hitext}>ĐĂNG NHẬP</Text>
                <Text style={styles.hellotext}></Text>
                <View style={styles.formLogin}>
                  <View style={{marginHorizontal: 50}}>
                    <Input
                      inputContainerStyle={{
                        borderWidth: 0,
                        borderColor: 'transparent',
                      }}
                      maxLength={32}
                      placeholderTextColor={'#fff'}
                      placeholder="Nhập tài khoản"
                      leftIcon={{
                        type: 'material-community',
                        name: 'account-arrow-right',
                        size: 25,
                        color: '#fff',
                      }}
                      containerStyle={{
                        borderRadius: 20,
                        backgroundColor: '#20c7ae',
                        height: 50,
                      }}
                      onChangeText={text => setUserName(text)}
                      value={userName}
                      inputStyle={{color: '#fff', fontSize: 14}}
                      keyboardType="default"
                    />
                  </View>
                </View>
                <View style={styles.form}>
                  <View style={{marginHorizontal: 50}}>
                    <Input
                      inputContainerStyle={{
                        borderWidth: 0,
                        borderColor: 'transparent',
                      }}
                      maxLength={20}
                      placeholderTextColor={'#fff'}
                      placeholder="Nhập mật khẩu"
                      leftIcon={{
                        type: 'font-awesome',
                        name: 'lock',
                        color: '#fff',
                        size : 20
                      }}
                      rightIcon={
                        <Icon name ={passwordvisible ? 'eye-slash' : 'eye'} size={20} color={'#fff'}
                        onPress={() =>setpasswordvisible(!passwordvisible)}/>
                      }
                      containerStyle={{
                        borderRadius: 20,
                        borderWidth: 0,
                        backgroundColor: '#20c7ae',
                        height: 50,
                      }}
                      // onChangeText={text => setPassWord(text)}
                      // value={passWord}
                      onChangeText={handleChange('Password')}
                      onBlur={handleBlur('Password')}
                      value={values.Password}
                      inputStyle={{color: '#fff', fontSize: 14}}
                      keyboardType="default"
                      secureTextEntry={passwordvisible}
                    ></Input>
                  {(errors.Password && touched.Password)&&<Text style={{fontSize : 14 , color : 'red',fontWeight :'bold',marginTop : 5}}>{errors.Password}</Text>}
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.buttonLongin}
                  onPress={handleOnPress}>
                  <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <View style={styles.action}>
                  <TouchableOpacity style={styles.bottomPassWord}
                  onPress={() =>{navigation.navigate('ForGotPassword' as never)}}>
                    <Text
                      style={[
                        styles.passWordText,
                        {color: '#3d60fc', fontSize: 13, fontWeight: 'bold'},
                      ]}>
                      QUÊN MẬT KHẨU
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttomOutLogin}
                  onPress={() =>navigation.navigate('CreatAccount' as never )}
                  >
                    <Text
                      style={[
                        styles.outLogin,
                        {color: '#3d60fc', fontSize: 13, fontWeight: 'bold'},
                      ]}>
                      TẠO TÀI KHOẢN
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  <View>
                    <TouchableOpacity style={styles.SignFb}>
                      <View style={{flexDirection: 'row'}}>
                        <Icon name={'facebook'} size={30} color={'#247bed'} />
                        <Text
                          style={{
                            fontSize: 17,
                            paddingHorizontal: 20,
                            paddingTop: 5,
                            color: '#247bed',
                          }}>
                          Sign in with Facebook
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.SignGg}>
                      <View style={{flexDirection: 'row'}}>
                        <Icon name={'google'} size={30} color={'#e6358d'} />
                        <Text
                          style={{
                            fontSize: 17,
                            paddingHorizontal: 20,
                            paddingTop: 5,
                            color: '#e6358d',
                          }}>
                          Sign in with Google
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </>
        )}
      </Formik>
      <>
        <Text style={{backgroundColor: 'black'}}>Login</Text>
      </>
    </SafeAreaView>
  );
};
const TEXT = {
  color: '#fff',
  textAlign: 'center',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  containts: {},

  hitext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  hellotext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  textUser: {
    ...TEXT,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 100,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  formLogin: {
    paddingVertical: 30,
  },
  form: {},
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputPassword: {
    backgroundColor: '#fff',
    height: 50,
    marginTop: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  buttonLongin: {
    backgroundColor: '#3d60fc',
    height: 50,
    marginTop: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 20,
  },
  bottomSg: {
    alignItems: 'center',

    height: 100,
    justifyContent: 'center',
    marginHorizontal: 50,
    paddingBottom: 20,
  },
  SignFb: {
    height: 50,
    backgroundColor: '#abeaff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 20,
  },
  SignGg: {
    height: 50,
    backgroundColor: '#f5abc9',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 20,
  },
  signup: {
    marginTop: 10,
    marginHorizontal: 0,
  },
  buttonLoginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
  passWordText: {
    marginTop: 15,
    fontSize: 15,
    marginHorizontal: 20,
    borderRadius: 30,
  },
  bottomPassWord: {
    height: 50,
    borderRadius: 50,
  },
  outLogin: {
    marginTop: 15,
    fontSize: 15,
    marginHorizontal: 20,
    borderRadius: 30,
  },
  buttomOutLogin: {
    height: 50,
    borderRadius: 50,
  },
  tinyLogo: {
    width: 20,
    height: 250,
    paddingTop: 50,
  },
  imgText: {
    paddingHorizontal: 10,
    top: 10,
  },
  imgName: {},
  linearGradient: {},
  buttonText: {},
});
export default LoginScreen;
