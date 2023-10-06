import React, {useState} from 'react';
import {Alert, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Clipboard from '@react-native-clipboard/clipboard';
const QRCodeScreen: React.FC = () => {
  const [data, setData] = useState('Nội dung QR');
  const copyToClipboard = () => {
    Clipboard.setString(data);
    Alert.alert('Nội dung đã được sao chép vào clipboard');
  };
  return (
    <QRCodeScanner
      onRead={({data}) => setData(data)}
      reactivate={true}
      reactivateTimeout={1000}
      showMarker={true}
      topContent={
        <TouchableOpacity  onPress={copyToClipboard}>
          <Text
            style={{
              color: 'black',
              padding: 20,
              fontSize: 20,
              backgroundColor: 'grey',
              margin: 10,
            }}>
            {data}
          </Text>
        </TouchableOpacity>
      }
      bottomContent={
        <View><Text>QRCode Scanner</Text></View>
      }
    />
  );
};
const styles = StyleSheet.create({});
export default QRCodeScreen;
