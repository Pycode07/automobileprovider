import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
const {height, width} = Dimensions.get('window');

const MyGarage = () => {
  const [count, setCounter] = useState(0);
  const [Remen, setRemen] = useState(0);

  const DATA = [
    {
      key: 1,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',
      service: 'ServiceType :',
      type: 'AC Repair',
      loction: '400/G 2nd Floor,Near New Delhi',
    },
    {
      key: 2,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',
      service: 'ServiceType :',
      type: 'AC Repair',
      loction: '400/G 2nd Floor,Near New Delhi',
    },
    {
      key: 3,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',
      service: 'ServiceType :',
      type: 'AC Repair',
      loction: '400/G 2nd Floor,Near New Delhi',
    },
    {
      key: 4,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',
      service: 'ServiceType :',
      type: 'AC Repair',
      loction: '400/G 2nd Floor,Near New Delhi',
    },

    {
      key: 5,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',
      service: 'ServiceType :',
      type: 'AC Repair',
      loction: '400/G 2nd Floor,Near New Delhi',
    },

    {
      key: 6,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',
      service: 'ServiceType :',
      type: 'AC Repair',
      loction: '400/G 2nd Floor,Near New Delhi',
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={styles.imgData}>
        <Image
          source={item.IMG}
          style={{height: 140, width: 140}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.cmntxt}>
          <Text style={{fontSize: 13, color: 'black', fontWeight: '500'}}>
            {item.text}
          </Text>
        </View>
        <View
          style={{
            height: height * 0.03,
            width: width * 0.4,
            flexDirection: 'row',
            // borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10, color: COLOR.BACK_BORDER}}>
            {item.carno}
          </Text>
          <Text style={{fontSize: 10, color: COLOR.BACK_BORDER}}>
            {' '}
            {item.OilType}
          </Text>
        </View>

        <View
          style={{
            height: height * 0.03,
            width: width * 0.4,
            flexDirection: 'row',
            // borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 11, color: COLOR.BACK_BORDER, fontWeight: '500'}}>
            {item.service}
          </Text>
          <Text style={{fontSize: 10, color: COLOR.BACK_BORDER}}>
            {item.type}
          </Text>
        </View>
        <View
          style={{
            height: height * 0.03,
            width: width * 0.4,
            flexDirection: 'row',
            // borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10, color: COLOR.BACK_BORDER}}>
            {item.loction}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          height: height * 0.1,
          width: width * 1,
          //   borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.22,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={ImagePath.BlACK_BACK_ARROW}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.55,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: COLOR.BLACK, fontSize: 22}}>My Garage</Text>
        </View>
      </View>
      <View style={styles.capacitymain}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.capcity}>
            <Text style={{fontSize: 17, fontWeight: '500', color: COLOR.BLACK}}>
              Total Capacity
            </Text>
          </View>

          <View style={styles.capcity1}>
            <View style={styles.count}>
              <TouchableOpacity onPress={() => setCounter(count - 1)}>
                <Image
                  source={ImagePath.MINUS}
                  resizeMode="contain"
                  style={{height: 28, width: 28}}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.count}>
              <Text
                style={{fontSize: 21, fontWeight: 'bold', color: COLOR.BLACK}}>
                {count}
              </Text>
            </View>
            <View style={styles.count}>
              <TouchableOpacity onPress={() => setCounter(count + 1)}>
                <Image
                  source={ImagePath.PLUS}
                  resizeMode="contain"
                  style={{height: 28, width: 28}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.capacitymain}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.capcity}>
            <Text style={{fontSize: 17, fontWeight: '500', color: COLOR.BLACK}}>
              Remaining Capacity
            </Text>
          </View>

          <View style={styles.capcity1}>
            <View style={styles.count}>
              <TouchableOpacity onPress={() => setRemen(Remen - 1)}>
                <Image
                  source={ImagePath.MINUS}
                  resizeMode="contain"
                  style={{height: 28, width: 28}}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.count}>
              <Text
                style={{fontSize: 21, fontWeight: 'bold', color: COLOR.BLACK}}>
                {Remen}
              </Text>
            </View>
            <View style={styles.count}>
              <TouchableOpacity onPress={() => setRemen(Remen + 1)}>
                <Image
                  source={ImagePath.PLUS}
                  resizeMode="contain"
                  style={{height: 28, width: 28}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: height * 0.06,
          width: width * 0.9,
          alignSelf: 'center',
          justifyContent: 'center',
          // backgroundColor:'red'
        }}>
        <Text style={{fontSize: 21, fontWeight: 'bold', color: COLOR.BLACK}}>
          Cars
        </Text>

        <View
          style={{
            height: height * 0.005,
            width: width * 0.1,
            borderColor: 'black',
            marginTop: 5,
            borderRadius: 10,
            backgroundColor: 'black',
          }}></View>
      </View>

      <View style={styles.flatMain}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};
export default MyGarage;
const styles = StyleSheet.create({
  capacitymain: {
    height: height * 0.09,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  capcity: {
    height: height * 0.07,
    width: width * 0.43,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  capcity1: {
    height: height * 0.07,
    width: width * 0.45,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    height: height * 0.05,
    width: width * 0.12,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatMain: {
    height: height * 0.64,
    width: width * 0.95,
    alignSelf: 'center',
    // backgroundColor: 'skyblue',
    // borderWidth: 1,
    alignItems: 'center',
  },

  ///======= FlatList ====

  item: {
    height: height * 0.25,
    width: width * 0.43,
    alignSelf: 'center',
    // backgroundColor: 'skyblue',
    // borderWidth: 1,
    borderRadius: 8,

    alignItems: 'center',
    backgroundColor: 'rgb(245,245,245)',
    margin: 4,
  },
  imgData: {
    height: height * 0.12,
    width: width * 0.4,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: height * 0.08,
    width: width * 0.4,
    // backgroundColor: 'green',
  },
  cmntxt: {
    height: height * 0.03,
    width: width * 0.4,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 11,
  },
});
