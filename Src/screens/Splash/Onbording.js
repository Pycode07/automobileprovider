import React from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {colors} from '../../assets/colors';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';

const Onbording = props => (
  <View style={styles.container}>
    <SwiperFlatList
      paginationStyle={{
        width: width * 0.3,
        height: height * 0.16,
        // backgroundColor: 'cyan',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
      paginationStyleItemActive={{
        width: width * 0.09,
        height: height * 0.01,
        backgroundColor: colors.theme_yellow1,
      }}
      paginationStyleItem={{
        width: width * 0.02,
        height: height * 0.011,
        borderRadius: 20,
      }}
      autoplay
      autoplayDelay={5}
      autoplayLoop
      index={0}
      showPagination>
      <View style={styles.child}>
        <View
          style={{
            height: height * 0.07,
            width: width * 0.9,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => props.navigation.replace('Login')}>
            <Text style={{color: 'black', fontSize: height / 45}}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tital}>
          <Text style={{fontSize: height / 40, color: 'black'}}>
            Say Goodbye To Your Car
          </Text>
          <Text style={{fontSize: height / 40, color: 'black'}}>Troubles!</Text>
        </View>

        <View
          style={{
            height: height * 0.05,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 12, color: 'black'}}>
            100+ Services &Products
          </Text>
        </View>

        <View style={styles.IntroImg}>
          <Image
            source={ImagePath.INTRO1}
            resizeMode="contain"
            style={{height: 280, width: 300}}
          />
        </View>
      </View>
      <View style={styles.child}>
        <View
          style={{
            height: height * 0.07,
            width: width * 0.9,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => props.navigation.replace('Login')}>
            <Text style={{color: 'black', fontSize: height / 45}}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tital}>
          <Text style={{fontSize: height / 40, color: 'black'}}>
            Say Goodbye To Your Car
          </Text>
          <Text style={{fontSize: height / 40, color: 'black'}}>Troubles!</Text>
        </View>

        <View
          style={{
            height: height * 0.05,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 12, color: 'black'}}>
            100+ Services &Products
          </Text>
        </View>

        <View style={styles.IntroImg}>
          <Image
            source={ImagePath.INTRO2}
            resizeMode="contain"
            style={{height: 280, width: 300}}
          />
        </View>
      </View>
      <View style={styles.child}>
        <View
          style={{
            height: height * 0.07,
            width: width * 0.9,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => props.navigation.replace('Login')}>
            <Text style={{color: 'black', fontSize: height / 45}}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tital}>
          <Text style={{fontSize: height / 40, color: 'black'}}>
            Say Goodbye To Your Car
          </Text>
          <Text style={{fontSize: height / 40, color: 'black'}}>Troubles!</Text>
        </View>

        <View
          style={{
            height: height * 0.05,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 12, color: 'black'}}>
            100+ Services &Products
          </Text>
        </View>
        <View style={styles.IntroImg}>
          <Image
            source={ImagePath.INTRO3}
            resizeMode="contain"
            style={{height: 280, width: 300}}
          />
        </View>
      </View>
    </SwiperFlatList>

    <View style={styles.btn}>
      <TouchableOpacity onPress={() => props.navigation.replace('Login')}>
        <View style={styles.LoginV}>
          <Text style={{fontSize: height / 55, color: '#FFFFFF'}}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },
  child: {
    height: height * 0.65,
    width: width * 1,
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  IntroImg: {
    height: height * 0.4,
    width: width * 0.9,
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    alignSelf: 'center',
  },
  tital: {
    height: height * 0.08,
    width: width * 0.9,
    alignSelf: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: height * 0.2,
    width: width * 0.8,
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  LoginV: {
    height: height * 0.07,
    width: width * 0.15,
    alignSelf: 'center',
    // flexDirection: 'row',
    //borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 100,
    backgroundColor: colors.theme_yellow1,
  },
});

export default Onbording;
