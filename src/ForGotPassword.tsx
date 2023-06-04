import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchEventType} from 'react-native-gesture-handler/lib/typescript/TouchEventType';
import {KeyboardState} from 'react-native-reanimated';
import {SvgXml} from 'react-native-svg';
import ForgotPasswordSVG from './assets/ForgotPasswordSVG';
const ForGotPassword: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#e3decf', flex: 1}}>
      <KeyboardAvoidingView /* input đẩy lên khi bàn phím che */>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen' as never)}
              >
              <Icon
                name="angle-left"
                type="font-awesome"
                color={'#000'}
                size={35}
                style={{paddingLeft: 5}}
              />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <ForgotPasswordSVG />
              <Text style ={{fontSize : 30, color :'black',fontWeight :'500',paddingBottom :20}}>Quên mật khẩu ?</Text>
              <Text style={{color: 'black', fontSize: 16, width: 300}}>
                 Vui lòng nhập địa chỉ liên kết với tài khoản
                để xác thực !
              </Text>
              <View style={{paddingTop: 20}}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: 300,
                    borderRadius: 10,
                    height: 50,
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="at"
                    type="material-community"
                    style={{padding: 10}}
                  />
                  <Input
                    inputContainerStyle={{
                      borderColor: 'transparent',
                    }}
                    inputStyle={{fontSize: 15}}
                    keyboardType="email-address"
                    placeholder="Email ID"></Input>
                </View>
              </View>
              <View
                style={{
                  marginTop: 50,
                  backgroundColor: '#6c63ff',
                  width: 300,
                  height: 50,
                  borderRadius: 30,
                  marginBottom: 30,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EnterOTP' as never)}>
                  <Text
                    style={{
                      textAlign: 'center',
                      paddingTop: 15,
                      fontWeight: '700',
                      color: '#fff',
                      
                    }}>
                    Lấy mã
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
export default ForGotPassword;
