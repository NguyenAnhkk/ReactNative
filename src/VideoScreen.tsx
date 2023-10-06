import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';

import {Icon} from 'react-native-elements';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Video from 'react-native-video';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const VideoScreen: React.FC = () => {
  const devices = useCameraDevices();
  const [camView, setCamView] = useState('back');
  const device = camView === 'back' ? devices.back : devices.front;
  let cameraRef: any = useRef();
  const [hasCammeraPermission, setHasCameraPermission]: any = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission]: any = useState();
  const [hasMediaLibraryPermission , setHasMediaLibraryPermission] : any = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo]: any = useState();
  useEffect(() => {
    async () => {
      const cameraPermission: any = await Camera.requestCameraPermission();
      const microphonePermission: any =
        await Camera.requestMicrophonePermission();
      setHasCameraPermission(cameraPermission.status === 'granted');
      setHasMicrophonePermission(microphonePermission.status === 'granted');
    };
  }, []);
  // if (
  //   hasCammeraPermission === undefined ||
  //   hasMicrophonePermission === undefined
  // ) {
  //   return <Text>Requestion permission...</Text>;
  // } else if (!hasCammeraPermission) {
  //   return <Text>Permission for camera not granted.</Text>;
  // }
  let recordVideo = async () => {
    setIsRecording(true);
    let option = {
      quality: '1080',
      maxDuration: 60,
      mute: false,
    };
    cameraRef.current.recordAsync(option).then(recordVideo => {
      setVideo(recordVideo);
      setIsRecording(false);
    });
  };
  let stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };
  // if (video) {
  //   let shareVideo = async () => {
  //     shareAsync(video.uri).then(() => {
  //       setVideo(undefined);
  //     });
  //   };
  //   let saveVideo = () =>{
  //     Medialibrary.saveToLibraryAsync(video.uri).then(() =>{
  //       setVideo(undefined);
  //     });
  //   };
  // }
  if (device == null) {
    return <ActivityIndicator style={{flex: 1}} size={50} color={'red'} />;
  }
  return (
    // <SafeAreaView style = {styles.container}>
    //   <Video
    //   style = {styles.video}
    //   source = {{uri:video.uri}}
    //   useNativeControls
    //   resizeMode = 'contain'
    //   isLooping
    //   />
    //   <Button title='share' onPress ={shareVideo}/>
    //   {hasMe}
    // </SafeAreaView>
    <Camera
      style={styles.container}
      ref={cameraRef}
      device={device}
      isActive={true}>
      <View style={styles.buttonContainer}>
        <Button
          title={isRecording ? 'Stop Recording' : 'Record Video'}
          onPress={isRecording ? stopRecording : recordVideo}></Button>
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {flex: 1, alignSelf: 'stretch'},
  buttonContainer: {backgroundColor: '#fff', alignSelf: 'flex-end'},
});

export default VideoScreen;
