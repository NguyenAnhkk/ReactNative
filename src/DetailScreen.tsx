import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';
import {Conan, Doremon, Songoku, Shin} from './library/Chap';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import * as React from 'react';
const DetailScreen: React.FC = (navigate: any) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const listShin = Shin();
  const listSongoku = Songoku();
  const listDoremon = Doremon();
  const listConan = Conan();
  const [obj, setObj] = useState(navigate.route.params);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>
            {obj.name}
          </Text>
          <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>
            {obj.tacgia}
          </Text>

          {obj.name === 'Truyện tranh Shin '
            ? listShin.map((item, index) => (
                <View key={item.id} style={{padding: 8, alignItems: 'center'}}>
                  <Image
                    source={item.link}
                    style={{width: 350, height: 540.3, resizeMode: 'cover'}}
                  />
                </View>
              ))
            : obj.name === 'Truyện tranh Conan'
            ? listConan.map((item, index) => (
                <View key={item.id} style={{padding: 8, alignItems: 'center'}}>
                  <Image
                    source={item.link}
                    style={{width: 350, height: 540.3, resizeMode: 'cover'}}
                  />
                </View>
              ))
            : obj.name === 'Truyện tranh Doreamon'
            ? listDoremon.map((item, index) => (
                <View key={item.id} style={{padding: 8, alignItems: 'center'}}>
                  <Image
                    source={item.link}
                    style={{width: 344, height: 540.3, resizeMode: 'cover'}}
                  />
                </View>
              ))
            : listSongoku.map((item, index) => (
                <View key={item.id} style={{padding: 8, alignItems: 'center'}}>
                  <Image
                    source={item.link}
                    style={{width: 344, height: 540.3, resizeMode: 'cover'}}
                  />
                </View>
              ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailScreen;
