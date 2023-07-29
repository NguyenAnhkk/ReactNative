import React from 'react';
import {Input, Image} from '@rneui/themed';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import {color} from '@rneui/base';
import SupportScreen from './SupportScreen';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatScreen from './ChatScreen';
import UserScreen from './UserScreen';
// import 'react-native-gesture-handler';
const DrawerScreen: React.FC = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation()
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
        }
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
        name="Chat"
        component={UserScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="message-processing-outline" type="material-community" color={color} />
          ),
        }}
      />
       
    </Drawer.Navigator>
  );
};
export default DrawerScreen;
