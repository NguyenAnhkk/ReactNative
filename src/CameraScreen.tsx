import {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import RNFS from 'react-native-fs';
import {Button, Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import { RNCamera } from 'react-native-camera';
const CameraScreen: React.FC = () => {
  const devices = useCameraDevices();
  const cameraRef: any = useRef(Camera);
  const [loading, setLoading]: any = useState(null);
  const [imageData, setImageData] = useState('');
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);
  const [camView, setCamView] = useState('back');
  const device = camView === 'back' ? devices.back : devices.front;
  const [flashToggle, setFlashToggle]: any = useState(false);
  const [torch, setTorch] = useState('off');
  const [selectImage, setSelectImage] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const cameraPermission: any = useCallback(async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
    if (newCameraPermission == 'denied') {
      await Linking.openSettings();
    }
    setLoading(devices);
  }, [devices]);
  useEffect(() => {
    cameraPermission();
  }, [cameraPermission, devices]);

  // Lưu URL hình ảnh vào AsyncStorage
  const saveImageUrlToLocal = async (imageUrl: string) => {
    try {
      await AsyncStorage.setItem('image_url', imageUrl);
      console.log('URL hình ảnh đã được lưu.');
    } catch (error) {
      console.error('Lỗi khi lưu URL hình ảnh:', error);
    }
  };
  const imageUrl = 'file://' + imageData;
  
  const takePicture = async () => {
    setLoading(true);
    try {
      if (cameraRef != null) {
        const photo = await cameraRef.current.takePhoto({
          qualityPrioritization: 'quality',
          flash: `${torch}`,
          enableAutoRedEyeReduction: true,
        });
        setImageData(photo.path);
        setTakePhotoClicked(false);
        console.log(photo.path);
      }
    } catch (error) {
      console.log(error, 'lỗi');
    }
  };
  if (device == null) {
    return <ActivityIndicator style={{flex: 1}} size={50} color={'red'} />;
  }

  const imagePicker = async () => {
    const options: any = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      setSelectImage(response.assets[0].uri);
      console.log(response.assets[0].uri);
    });
  };

  // Truy cập URL hình ảnh từ AsyncStorage
  const getImageUrlFromLocal = async () => {
    try {
      const imageUrl = await AsyncStorage.getItem('image_url');
      if (imageUrl !== null) {
        console.log('URL hình ảnh từ local:', imageUrl);
        // Ở đây bạn có thể sử dụng URL để hiển thị hình ảnh
      } else {
        console.log('Không có URL hình ảnh được lưu.');
      }
    } catch (error) {
      console.error('Lỗi khi truy cập URL hình ảnh:', error);
    }
  };

  return (
    <View style={styles.container}>
      {takePhotoClicked ? (
        <View style={{flex: 1}}>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 50,
              alignSelf: 'center',
            }}
            onPress={() => {
              takePicture();
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 50,
              alignSelf: 'flex-end',
              paddingRight: 50,
            }}
            onPress={() => {
              camView === 'back' ? setCamView('front') : setCamView('back');
            }}>
            <Icon name={'sync'} type="material" color={'white'} size={40} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 50,
              alignSelf: 'flex-start',
              paddingLeft: 50,
            }}
            onPress={() => {
              setFlashToggle(!flashToggle);
              torch === 'off' ? setTorch('on') : setTorch('off');
            }}>
            <Icon
              name={flashToggle ? 'flash-on' : 'flash-off'}
              type="material"
              color={'white'}
              size={40}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {imageData !== '' && (
            <Image
              source={{uri: 'file://' + imageData}}
              style={{width: '70%', height: 400}}
            />
          )}
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              borderWidth: 1,
              alignSelf: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#6bbbd1',
            }}
            onPress={() => {
              setTakePhotoClicked(true);
            }}>
            <Text style={{fontSize: 20}}>Chụp ảnh</Text>
          </TouchableOpacity>
          <>
            <TouchableOpacity
              onPress={() => {
                imagePicker();
              }}
              style={{
                width: '90%',
                height: 50,
                borderWidth: 1,
                alignSelf: 'center',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#6bbbd1',
              }}>
              <Text style={{fontSize: 20}}>Chọn ảnh</Text>
            </TouchableOpacity>
            {selectImage !== '' && (
              <Image
                source={{uri: selectImage}}
                style={{width: '100%', height: 400}}
              />
            )}
          </>
          <TouchableOpacity
            onPress={() => {
              saveImageUrlToLocal(imageUrl);
            }}
            style={{
              width: '90%',
              height: 50,
              borderWidth: 1,
              alignSelf: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#6bbbd1',
            }}>
            <Text style={{fontSize: 20}}>Luu anh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              getImageUrlFromLocal();
            }}
            style={{
              width: '90%',
              height: 50,
              borderWidth: 1,
              alignSelf: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#6bbbd1',
            }}>
            <Text style={{fontSize: 20}}>Lay anh</Text>
          </TouchableOpacity>
          <View>
            <Text>Danh sách các URL hình ảnh:</Text>
            {/* <FlatList
              data={imageUrls}
              renderItem={renderItem}
              keyExtractor={(item, index) => item}
            /> */}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CameraScreen;
