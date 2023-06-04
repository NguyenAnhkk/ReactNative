import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/base';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Vibration,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import {SvgXml} from 'react-native-svg';
import {ValidationError} from 'yup';
import ChangePasswordSVG from './assets/ChangePasswordSVG';
import {ScrollView} from 'react-native-gesture-handler';
const ChangePassword: React.FC = () => {
  const navigation = useNavigation();
  const [passwordvisible, setpasswordvisible] = useState(true);
  const [passwordvisible2, setpasswordvisible2] = useState(true);
  return (
    <View style={{backgroundColor: '#e3decf', flex: 1}}>
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('EnterOTP' as never)}>
              <Icon
                name="angle-left"
                type="font-awesome"
                color={'#000'}
                size={35}
                style={{paddingLeft: 5}}
              />
            </TouchableOpacity>
            <View style={{paddingHorizontal: 30}}>
              <ChangePasswordSVG />
            </View>
            <View style={{paddingTop: 20, alignItems: 'center'}}>
              <View style={styles.newPassword}>
                <Icon
                  name={'lock-outline'}
                  type={'material-community'}
                  style={{paddingTop: 10}}
                />
                <Input
                  inputStyle={{fontSize: 15}}
                  keyboardType="default"
                  placeholder="Nhập mật khẩu mới"
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
                />
              </View>
            </View>
            <View style={{paddingTop: 20, alignItems: 'center'}}>
              <View style={styles.newPassword}>
                <Icon
                  name={'lock-outline'}
                  type={'material-community'}
                  style={{paddingTop: 10}}
                />
                <Input
                  inputStyle={{fontSize: 15}}
                  keyboardType="default"
                  placeholder="Nhập lại mật khẩu"
                  secureTextEntry={passwordvisible2}
                  rightIcon={
                    <Icon
                      name={passwordvisible2 ? 'eye-off' : 'eye'}
                      type="material-community"
                      onPress={() => setpasswordvisible(!passwordvisible2)}
                    />
                  }
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 90,
                backgroundColor: '#6c63ff',
                width: 300,
                height: 50,
                borderRadius: 30,
                marginHorizontal :30
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen' as never)}>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingTop: 15,
                    fontWeight: '700',
                    color: '#fff',
                  }}>
                  Gửi ngay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  newPassword: {
    width: 300,
    height: 50,
    flexDirection: 'row',
  },
});
export default ChangePassword;
