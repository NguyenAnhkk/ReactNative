import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import EnterOTPSVG from './assets/EnterOTPSVG';
import {ScrollView} from 'react-native-gesture-handler';
const EnterOTP: React.FC = () => {
  const navigation = useNavigation();
  const firstInput = useRef<TextInput>(null);
  const secondInput = useRef<TextInput>(null);
  const thirdInput = useRef<TextInput>(null);
  const fourthInput = useRef<TextInput>(null);
  return (
    <View style={{backgroundColor: '#e3decf', flex: 1}}>
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForGotPassword' as never)}>
            <Icon
              name="angle-left"
              type="font-awesome"
              color={'#000'}
              size={35}
              style={{paddingLeft: 5}}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <EnterOTPSVG />
          </View>
          <View style={styles.contrainer}>
            <View style={styles.optBox}>
              <TextInput
                style={styles.styleText}
                keyboardType="number-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={text => {
                  text && secondInput?.current?.focus();
                }}
              />
            </View>
            <View style={styles.optBox}>
              <TextInput
                style={styles.styleText}
                keyboardType="number-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={text => {
                  text
                    ? thirdInput?.current?.focus()
                    : firstInput?.current?.focus();
                }}
              />
            </View>
            <View style={styles.optBox}>
              <TextInput
                style={styles.styleText}
                keyboardType="number-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={text => {
                  text
                    ? fourthInput?.current?.focus()
                    : secondInput?.current?.focus();
                }}
              />
            </View>
            <View style={styles.optBox}>
              <TextInput
                style={styles.styleText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={text => {
                  text
                    ? fourthInput?.current?.focus()
                    : thirdInput?.current?.focus();
                }}
              />
            </View>
          </View>
          <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              textDecorationLine: 'underline', /*gạch chân đoạn văn bản */
            }}>
            Gửi lại OTP
          </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 50,
              backgroundColor: '#6c63ff',
              width: 300,
              height: 50,
              borderRadius: 30,
              marginBottom: 30,
              margin: 30,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePassword' as never)}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 15,
                  fontWeight: '700',
                  color: '#fff',
                }}>
                Gửi mã
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  contrainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  optBox: {
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 0.5,
  },
  styleText: {
    fontSize: 15,
    color: '#000',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
export default EnterOTP;
