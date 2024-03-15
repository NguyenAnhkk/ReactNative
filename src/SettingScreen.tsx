import { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
const SettingScreen: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const styles = isDarkMode ? darkStyles : lightStyles;
  return (
   <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  toggleButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'black',
  },
});
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  toggleButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
  },
});
export default SettingScreen