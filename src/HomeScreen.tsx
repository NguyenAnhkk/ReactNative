import React, {useState} from 'react';
import {Input, Image} from '@rneui/themed';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Divider, Icon} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import {HashtagInput, TextInput} from 'react-native-element-textinput';
import {ScrollView} from 'react-native-gesture-handler';
import {color, fonts} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
type ItemProps = {title: string};
const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  
  const handleOnPress  = (name: string, tacgia: string) =>
    navigation.navigate(
      'DetailScreen' as never,
      {name: name, tacgia: tacgia} as never,
    );
  const [images, setImages] = useState([
    {
      id: '1',
      name: 'Truyện tranh Doreamon',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNW9z4M7oicKRFSuxxRI0NcQ6qMr5CDvCDzdESlqk2gZHStIAnIhAwwm3Nv3wgohTG30A&usqp=CAU',
      tacgia: ' Tác giả : Fujiko Fujio',
      click: 'Đọc truyện ngay',
    },
    {
      name: 'Truyện tranh Songoku',
      url: 'https://i.bbcosplay.com/1130/Trang-Phuc-Son-Goku-Em-Be-1130.jpg',
      tacgia: 'Tác giả : Toriyama Akira ',
      click: 'Đọc truyện ngay',
    },
    {
      name: 'Truyện tranh Conan',
      url: 'https://phunuvietnam.mediacdn.vn/179072216278405120/2022/11/4/edogawa-conan--166754179290680712885.jpg',
      tacgia: 'Tác giả : Aoyama Gosho',
      click: 'Đọc truyện ngay',
    },
    {
      name: 'Truyện tranh Shin ',
      url: 'https://webtrainghiem.com/wp-content/uploads/2021/01/truyen-tranh-shin.jpg',
      tacgia: 'Tác giả : Usui Yoshito',
      click: 'Đọc truyện ngay',
    },
  ]);
  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const [comic, setComic] = useState('');
 
  const [categories, setCategories] = useState([
    {
      name: 'Doreamon',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNW9z4M7oicKRFSuxxRI0NcQ6qMr5CDvCDzdESlqk2gZHStIAnIhAwwm3Nv3wgohTG30A&usqp=CAU',
      Tacgia: 'Anh',
    },
    {
      name: 'Songoku',
      url: 'https://i.bbcosplay.com/1130/Trang-Phuc-Son-Goku-Em-Be-1130.jpg',
    },
    {
      name: 'Conan',
      url: 'https://phunuvietnam.mediacdn.vn/179072216278405120/2022/11/4/edogawa-conan--166754179290680712885.jpg',
    },
    {
      name: 'NguKong',
      url: 'https://i.pinimg.com/736x/12/95/84/129584863fee6912e4034942781347b2.jpg',
    },
    {
      name: 'Murad',
      url: 'https://i.pinimg.com/564x/60/0f/22/600f22644b37686bb8bdf208bc0bf7e9.jpg',
    },
    {
      name: 'Elsu',
      url: 'https://i.ex-cdn.com/mgn.vn/files/content/2023/02/06/elsu-tran-thien-phi-ho-1606.jpg',
    },
    {
      name: 'Nakroth',
      url: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2022/11/hinh-nen-nakroth-thu-nguyen-ve-than-lien-quan-mobile.jpg',
    },
    {
      name: 'Florentino',
      url: 'https://i1.sndcdn.com/artworks-YIcVWrKi3czh33Ym-sc5Ydw-t500x500.jpg',
    },
    {
      name: 'Wiro',
      url: 'https://genk.mediacdn.vn/2018/7/28/lien-quan-mobile-garena-gay-soc-khi-tang-tuong-moi-wiro-sableng-toan-server-1-15327731003162112285620.jpg',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient colors={['#f5edf2', '#f0a5d3']} style={{flex: 1}}>

        <View style={styles.container}>
          <TextInput
            value={comic}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            placeholder="Tìm kiếm tên truyện"
            placeholderTextColor="gray"
            onChangeText={text => {
              setComic(text);
            }}
          />
        </View>
        <View style={{height: 85}}>
          <Divider />
          <FlatList
            horizontal={true} // định hướng chiều ngang
            data={categories} // dữ liệu - đầu vào
            showsHorizontalScrollIndicator={false} // ẩn/hiện thanh cuộn ngang
            keyExtractor={item => item.name} // kiểu id
            renderItem={({item}) => {
              // phụt dữ liệu
              return (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Chào thượng đế !',
                      `Muốn đọc truyện ${item.name} vui lòng nạp tiền !`,
                    );
                  }}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: 'cover',
                      borderRadius: 5,
                      margin: 10,
                    }}
                    source={{
                      uri: item.url,
                    }}
                  />
                  <Text style={{color: 'black', fontSize: 10}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            style={{flex: 1}}></FlatList>

          <Divider /*thanh kẻ*/ />
        </View>

        <View style={{flex: 1}}>
          <FlatList
            data={images}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <View style={{paddingTop: 30}}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Image
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 10,
                          resizeMode: 'cover',
                          margin: 10,
                          borderColor: 'thistle',
                          borderWidth: 1,
                        }}
                        source={{uri: item.url}}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 15,
                          paddingTop: 10,
                          fontWeight: '500',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{color: 'black', fontSize: 15, paddingTop: 10}}>
                        {item.tacgia}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleOnPress(item.name, item.tacgia)}>
                        <View style={{paddingTop: 15}}>
                          <View
                            style={{
                              backgroundColor: '#e83deb',
                              borderRadius: 10,
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: 15,
                                paddingTop: 5,
                                textAlign: 'center',
                                paddingBottom: 8,
                              }}>
                              {item.click}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  texttitle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
  },
  inputStyle: {fontSize: 16},
  labelStyle: {fontSize: 14},
  placeholderStyle: {fontSize: 16},
  textErrorStyle: {fontSize: 16},

  item: {
    backgroundColor: '#ccc',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
  },
});
export default HomeScreen;
