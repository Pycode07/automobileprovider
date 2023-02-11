import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../assets/colors';
import Header from '../components/Header';
import {fonts} from '../config/Constant';
import {useState} from 'react';
const {width, height} = Dimensions.get('screen');

const spareData = [
  {id: 1, img: require('../assets/Images/tyre.png')},
  {id: 2, img: require('../assets/Images/tyre.png')},
  {id: 3, img: require('../assets/Images/tyre.png')},
  {id: 4, img: require('../assets/Images/tyre.png')},
  {id: 5, img: require('../assets/Images/tyre.png')},
  {id: 6, img: require('../assets/Images/tyre.png')},
  {id: 7, img: require('../assets/Images/tyre.png')},
];

const bodyData = [
  {id: 1, img: require('../assets/Images/tyre.png'), name: 'Hood bonnet'},
  {id: 2, img: require('../assets/Images/tyre.png'), name: 'Head light'},
  {id: 3, img: require('../assets/Images/tyre.png'), name: 'Fog lamp'},
  {id: 4, img: require('../assets/Images/tyre.png'), name: 'Hood Bonnet'},
  {id: 5, img: require('../assets/Images/tyre.png'), name: 'Head light'},
  {id: 6, img: require('../assets/Images/tyre.png'), name: 'Fog lamp'},
];

const SpareParts = props => {
  const [search, setSearch] = useState('');
  props.navigation.setOptions({
    title: '',
    headerStyle: {backgroundColor: colors.theme_white},
    headerLeft: () => {
      return <Header title="My Cars" navigation={props.navigation} />;
    },
  });
  return (
    <View style={{flex: 1, backgroundColor: colors.theme_black0}}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <ScrollView>
        <View style={{flex: 1, paddingVertical: 15}}>
          <View
            style={{
              flex: 0,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.theme_white,
              paddingVertical: 15,
              borderRadius: 5,
              elevation: 8,
              shadowColor: colors.theme_black5,
            }}>
            <Image
              source={require('../assets/Images/car.png')}
              style={{
                width: width * 0.5,
                height: width * 0.3,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: colors.theme_black6,
                fontFamily: fonts.futura_bold,
              }}>
              Nexon
            </Text>
          </View>
          <TextInput
            value={search}
            placeholder="Search here"
            placeholderTextColor={colors.theme_black5}
            onChangeText={text => {
              setSearch(text);
            }}
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: colors.theme_white,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: colors.theme_black4,
              marginTop: 20,
              paddingHorizontal: 15,
              fontFamily: fonts.futura_medium,
              color: colors.theme_black5,
            }}
          />
          <View
            style={{
              flex: 0,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: colors.theme_white,
              paddingVertical: 15,
              borderRadius: 5,
              elevation: 8,
              shadowColor: colors.theme_black5,
              marginTop: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginBottom: 15,
                fontSize: 16,
                color: colors.theme_black6,
                fontFamily: fonts.futura_bold,
              }}>
              Tyre
            </Text>
            <ScrollView
              horizontal
              nestedScrollEnabled
              contentContainerStyle={{
                flex: 0,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {spareData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    flex: 0,
                    padding: 5,
                    borderWidth: 1,
                    borderColor: colors.theme_yellow1,
                    marginLeft: 10,
                    marginRight: index == spareData.length - 1 ? 10 : 0,
                    borderRadius: 5,
                  }}>
                  <View
                    style={{
                      flex: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: colors.theme_yellow2,
                    }}>
                    <Image
                      source={item.img}
                      style={{
                        width: width * 0.15,
                        height: width * 0.15,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              flex: 0,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: colors.theme_white,
              paddingVertical: 15,
              borderRadius: 5,
              elevation: 8,
              shadowColor: colors.theme_black5,
              marginTop: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                marginBottom: 15,
                fontSize: 16,
                color: colors.theme_black6,
                fontFamily: fonts.futura_bold,
              }}>
              Body Parts
            </Text>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              {bodyData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    flex: 0,
                    width: width * 0.25,
                    height: width * 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,
                    borderWidth: 1,
                    borderColor: colors.theme_yellow1,
                    marginLeft: 10,
                    borderRadius: 5,
                    marginBottom: 15,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: width * 0.15,
                      height: width * 0.15,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      textAlign: 'center',
                      color: colors.theme_black5,
                      fontFamily: fonts.futura_medium,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={{
              flex: 0,
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
              paddingVertical: 10,
              backgroundColor: colors.theme_yellow1,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.theme_white,
                fontFamily: fonts.futura_medium,
              }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SpareParts;
