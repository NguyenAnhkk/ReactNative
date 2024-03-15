import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import LottieView from 'lottie-react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
const SupportScreen: React.FC = () => {
  // get api coin bằng 
//   let [isLoading , setIsLoading] = useState(false);
//   let [error , setError] = useState(null);
//   let [response , setResponse] : any = useState(null);
//   useEffect(() =>{
//     fetch("http://api.coindesk.com/v1/bpi/currentprice.json")
//   .then(res => res.json())
//   .then(
//     (result) =>{
//     setIsLoading(false);
//     setResponse(result);
//   },
//   (error) =>{
//     setIsLoading(false);
//     setError(error);
//   }
//   )
// },[])
  // const getContent = () => {
  //   if(isLoading){
  //     return <View style ={styles.animation}>
  //        <LottieView
  //           style={styles.animation}
  //           source={require('./assets/Animation - 1708940600395.json')}
  //           autoPlay
  //           loop
  //         />
  //     </View>
  //   }
  //   if(error){
  //     return <Text>{error}</Text>
  //   }
  //   console.log(response);
   
  // };
  // if (response) {
  //     return (
  //       <View>
  //         <Text>Euro: {response["bpi"]["EUR"]["rate"]}</Text>
  //         <Text>GBP: {response["bpi"]["GBP"]["rate"]}</Text>
  //         <Text>USD: {response["bpi"]["USD"]["rate"]}</Text>
  //       </View>
  //     );
  //   }

    useEffect(() => {
    // Dữ liệu JSON để truyền vào body của request
    const data = {
      TenDangNhap: "laminh",
      MatKhau: "123456",
      device: "",
      idpush: "dppZuSvRfEh6rX-QK6kCj4:APA91bHvlCJIQC5x5JwzbcKZzwhEwLb4fek2_2qE2i1uOd5gDflu5R2Rd4HzQJqkJpgXhmYHyHI11nRkWHBqXkoiXQnmetyWT4SN_m4vOt5SdV6IKJ3-gbT5HOHLS5H00j77v04VmLxu",
      os: 2,
      accuracy: 7,
      osversion: "15.7.3",
      dongmay: "iPhone",
      doimay: "iOS",
      imei: "CCC181E4-627E-4221-A284-E9F7E76B3554",
      devicename: "iphonelachong",
      ver: "2.1.8"
    };

    // Gọi API bằng phương thức POST và truyền dữ liệu JSON
    axios.post('https://baominhappapi.ksmart.vn/login/login/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Có lỗi xảy ra:', error);
      });
  }, []); // useEffect sẽ được gọi một lần khi component được tạo
  return (
    <View>
      <Text>Anh</Text>
     {/* {getContent()} */}
     

    </View>
  );
};
 const styles = StyleSheet.create({
  animation :{
    height : 50,
    aspectRatio :1,
  },
  content :{
    flex : 1 ,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent :'center',
  }
 })
export default SupportScreen;
