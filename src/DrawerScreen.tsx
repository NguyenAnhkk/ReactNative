import React from 'react';
import {Input, Image} from '@rneui/themed';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from './HomeScreen';

import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

import SupportScreen from './SupportScreen';
import {useNavigation} from '@react-navigation/native';

import CameraScreen from './CameraScreen';
import VideoScreen from './VideoScreen';
import QRCodeScreen from './QRCodeScreen';
// import 'react-native-gesture-handler';
const DrawerScreen: React.FC = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#c52bd6',
        drawerActiveTintColor: '#fff',

        drawerInactiveTintColor: '#000',
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
          fontFamily: 'Roboto-Medium',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home" type="material" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon
              name="account-circle"
              type="material-community"
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="settings" type="material" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={SupportScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="face-agent" type="material-community" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon
              name="camera"
              type="material-community"
              color={color}
            />
          ),
        }}
      />
       <Drawer.Screen
        name="Video"
        component={VideoScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon
              name="video"
              type="material-community"
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon
              name="qrcode-scan"
              type="material-community"
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerScreen;
