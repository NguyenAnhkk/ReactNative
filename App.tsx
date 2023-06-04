/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import DrawerScreen from './src/DrawerScreen';
import 'react-native-gesture-handler';
import DetailScreen from './src/DetailScreen';
import CreatAccount from './src/CreatAccount';
import ForGotPassword from './src/ForGotPassword';
import EnterOTP from './src/EnterOTP';
import ChangePassword from './src/ChangePassword';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Awesome app',
            headerShown: false,
          }}
        />
      <Stack.Screen
          name="CreatAccount"
          component={CreatAccount}
          options={{
            title: 'Awesome app',
            headerShown: false,
          }}
        />
        <Stack.Screen
        name ="ForGotPassword"
        component={ForGotPassword}
        options={{
          title: 'Awesome app',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name ="EnterOTP"
        component={EnterOTP}
        options={{
          title: 'Awesome app',
          headerShown: false,
        }}
        />
        <Stack.Screen
        name ="ChangePassword"
        component={ChangePassword}
        options={{
          title: 'Awesome app',
          headerShown: false,
        }}
        />
        <Stack.Screen
          name="DrawerScreen"
          component={DrawerScreen}
          options={{
            title: 'Awesome app',
            headerShown: false,
          }}
        />
         <Stack.Screen 
        name ="DetailScreen"
        component={DetailScreen}
        options={{
          title: 'Awesome app',
          headerShown: false,
        }}
        />
         <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Awesome app',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;


// Update nội dung ngày 04/06/1997