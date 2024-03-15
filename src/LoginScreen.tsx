import {useCallback, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import LottieView from 'lottie-react-native';
import {Input, Image} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Field, Formik} from 'formik';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
} from 'firebase/auth';
import * as React from 'react';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {firebase} from '@react-native-firebase/firestore';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  requestUserPermission,
  NotificationListner,
} from './untils/pushnotification_helper';
GoogleSignin.configure({
  webClientId:
    '49615532709-fc66fbc1v7ba1107816h6be26nuoleea.apps.googleusercontent.com',
});
const handleGoogleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
    // Đăng nhập vào Firebase
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log(statusCodes.SIGN_IN_CANCELLED);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log(statusCodes.IN_PROGRESS);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
    } else {
      // some other error happened
      console.log(error);
    }
  }
};
const LoginScreen: React.FC = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListner();
  }, []);
  const [passwordvisible, setpasswordvisible] = useState(true);
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  let textError: String = '';
  const LoginWithEmailAndPassword = async (userName, passWord) => {
    firebase;
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        userName,
        passWord,
      );
      const user = userCredential.user;
      console.log('Đăng nhập thành công:', user);
      navigation.navigate('DrawerScreen' as never);
    } catch (error) {
      console.log('Đăng nhập thất bại:', error);
      Toast.show({
        type: 'error',
        text1: 'Đăng nhập thất bại .',
        text2: 'Tài khoản hoặc mật khẩu không chính xác !',
      });
    }
  };
  const navigation = useNavigation();
  const checkSubmit = () => {
    if (passWord == null || passWord.trim() == '') {
      textError = 'Vui lòng nhập mật khẩu';
      return false;
    } else {
      return true;
    }
  };
  const handleOnPress = useCallback(async () => {

    if (checkSubmit()) {
      LoginWithEmailAndPassword(userName, passWord);
    } else {
      Toast.show({
        type: 'success',
        text1: textError + '',
        text2: 'Cảm ơn !',
      });
    }
  }, [userName, passWord]);

  const onFacebookButtonPress = async () => {
    try {
      // Yêu cầu quyền truy cập từ người dùng
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      // Kiểm tra nếu người dùng hủy đăng nhập
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      // Lấy thông tin access token
      const data = await AccessToken.getCurrentAccessToken();
      // Kiểm tra nếu không lấy được access token
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      // Tạo credential từ access token
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      // Đăng nhập vào Firebase sử dụng credential

      const userCredential = await auth().signInWithCredential(
        facebookCredential,
      );
      navigation.navigate('DrawerScreen' as never);
      // In thông tin người dùng đã đăng nhập thành công
      console.log('Logged in with Facebook!', userCredential.user);
    } catch (error) {
      console.error(error);
    }
  };
  const [showAnimation, setShowAnimation] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Formik
        initialValues={{Account: '', Password: '', email: ''}}
        validateOnMount={true}
        onSubmit={values => {
          console.log(values);
        }}
        // validationSchema={SignupSchema}
      >
        {({errors, touched}) => (
          <>
            <View style={styles.container}>
              <LinearGradient colors={['#f0a5d3', '#f5edf2']} style={{flex: 1}}>
                  <View style={styles.animation}>
                    <LottieView
                      style={{flex: 1}}
                      source={require('./assets/Animation - 1708940600395.json')}
                      autoPlay
                      loop
                    />
                  </View>
                <Text style={styles.hitext}>ĐĂNG NHẬP</Text>
                <Toast />
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
                      onChangeText={setUserName}
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
                        size: 20,
                      }}
                      rightIcon={
                        <Icon
                          name={passwordvisible ? 'eye-slash' : 'eye'}
                          size={20}
                          color={'#fff'}
                          onPress={() => setpasswordvisible(!passwordvisible)}
                        />
                      }
                      containerStyle={{
                        borderRadius: 20,
                        borderWidth: 0,
                        backgroundColor: '#20c7ae',
                        height: 50,
                      }}
                      onChangeText={setPassWord}
                      // value={passWord}
                      // onChangeText={handleChange('Password')}
                      // onBlur={handleBlur('Password')}
                      value={passWord}
                      inputStyle={{color: '#fff', fontSize: 14}}
                      keyboardType="default"
                      secureTextEntry={passwordvisible}></Input>
                    {errors.Password && touched.Password && (
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'red',
                          fontWeight: 'bold',
                          marginTop: 5,
                        }}>
                        {errors.Password}
                      </Text>
                    )}
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.buttonLongin}
                  onPress={handleOnPress}>
                  <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <View style={styles.action}>
                  <TouchableOpacity
                    style={styles.bottomPassWord}
                    onPress={() => {
                      navigation.navigate('ForGotPassword' as never);
                    }}>
                    <Text
                      style={[
                        styles.passWordText,
                        {color: '#3d60fc', fontSize: 13, fontWeight: 'bold'},
                      ]}>
                      QUÊN MẬT KHẨU
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttomOutLogin}
                    onPress={() =>
                      navigation.navigate('CreatAccount' as never)
                    }>
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
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity
                        style={styles.SignFb}
                        onPress={onFacebookButtonPress}>
                        <View style={{flexDirection: 'row'}}>
                          <Icon name={'facebook'} size={25} color={'#247bed'} />
                          <Text
                            style={{
                              fontSize: 17,
                              paddingHorizontal: 20,

                              color: '#247bed',
                            }}>
                            Sign in with Facebook
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                      <GoogleSigninButton
                        style={{
                          width: 250,
                          height: 50,
                        }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={handleGoogleSignIn}
                      />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </>
        )}
      </Formik>
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
    height: 45,
    width: 250,
    backgroundColor: '#abeaff',
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingHorizontal: 20,
    top: 10,
  },
  animation:{
    height : 70,
    aspectRatio :1,
  }
});
export default LoginScreen;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
