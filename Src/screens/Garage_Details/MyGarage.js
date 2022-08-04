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
  Modal,
} from 'react-native';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const {height, width} = Dimensions.get('window');

const MyGarage = props => {
  const [count, setCount] = useState(0);
  const [remain, setRemain] = useState(0);
  useEffect(() => {}, [count, remain]);

  const [modalVisible, setModalVisible] = useState(false);
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

    {
      key: 7,
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
    <TouchableOpacity
      onPress={() => props.navigation.navigate('OrderTracking')}>
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
              style={{
                fontSize: 11,
                color: COLOR.BACK_BORDER,
                fontWeight: '500',
              }}>
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
    </TouchableOpacity>
  );

  const DATA2 = [
    {
      key: 1,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',
      service: 'ServiceType :',
      type: 'AC Repair',
      loction: '400/G 2nd Floor,Near New Delhi',
      BTN: 'Accept',
      BTN2: 'Reject',
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
      BTN: 'Accept',
      BTN2: 'Reject',
    },
  ];

  const DATA3 = [
    {
      key: 1,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',

      loction: '400/G 2nd Floor,Near New Delhi',
    },

    {
      key: 2,
      IMG: require('../../assets/Splash/intro2.png'),
      text: 'Maruti Vitara Brezza',
      carno: 'UP 15 CD 1433',
      OilType: ':Petrol',

      loction: '400/G 2nd Floor,Near New Delhi',
    },
  ];

  const renderCarRquest = ({item}) => {
    return (
      <View style={styles.item2}>
        <View style={styles.newRew}>
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
              style={{
                fontSize: 11,
                color: COLOR.BACK_BORDER,
                fontWeight: '500',
              }}>
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

          <View
            style={{
              height: height * 0.032,
              width: width * 0.4,
              flexDirection: 'row',
              // borderWidth: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: '#FFFFFF', fontSize: height / 65}}>
                {item.BTN2}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{color: '#FFFFFF', fontSize: height / 65}}>
                {item.BTN}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderSOS = ({item}) => {
    return (
      <View style={styles.item2}>
        <View style={styles.newRew}>
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
            <Text style={{fontSize: 10, color: COLOR.BACK_BORDER}}>
              {item.loction}
            </Text>
          </View>
        </View>
      </View>
    );
  };

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
              {/** <TouchableOpacity
                onPress={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}>
                <Image
                  source={ImagePath.MINUS}
                  resizeMode="contain"
                  style={{height: 28, width: 28}}
                />
              </TouchableOpacity>
               */}
            </View>

            <View style={styles.count}>
              <Text
                style={{fontSize: 21, fontWeight: 'bold', color: COLOR.BLACK}}>
                {/**{count} */}6
              </Text>
            </View>
            <View style={styles.count}>
              {/* <TouchableOpacity
                onPress={() => {
                  setCount(count + 1);
                }}>
                <Image
                  source={ImagePath.PLUS}
                  resizeMode="contain"
                  style={{height: 28, width: 28}}
                />
              </TouchableOpacity>

            */}
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
              <TouchableOpacity
                onPress={() => {
                  if (remain > 0) {
                    setRemain(remain - 1);
                  }
                }}>
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
                {remain}
              </Text>
            </View>
            <View style={styles.count}>
              <TouchableOpacity
                onPress={() => {
                  if (remain <= 5) {
                    setRemain(remain + 1);
                  }
                }}>
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
          height: height * 0.07,
          width: width * 0.68,
          alignSelf: 'center',
          justifyContent: 'space-between',
          // backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: COLOR.BLACK,
            // textDecorationLine: 'underline',
          }}>
          Cars
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: COLOR.BLACK,
          }}>
          New Requrest
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: COLOR.BLACK,
          }}>
          SOS
        </Text>
      </View>

      <View>
        <SwiperFlatList
          paginationStyle={{
            width: width * 0.73,
            height: height * 0.03,
            // backgroundColor: 'cyan',
            // alignSelf: 'center',
            justifyContent: 'center',
            // alignItems:'center'
            bottom: 464,
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}
          paginationStyleItemActive={{
            width: width * 0.1,
            height: height * 0.007,
            // backgroundColor: 'rgb(0,126,247)',
            backgroundColor: 'blue',
          }}
          paginationStyleItem={{
            width: width * 0.1,
            height: height * 0.007,
            // borderRadius: 20,
          }}
          // autoplay
          // autoplayDelay={5}
          // autoplayLoop
          index={0}
          showPagination>
          <View style={styles.child}>
            <View style={styles.flatMain}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
              />
            </View>
          </View>
          <View style={styles.child}>
            <View style={styles.IntroImg}>
              <FlatList
                data={DATA2}
                renderItem={renderCarRquest}
                keyExtractor={item => item.id}
                numColumns={2}
              />
            </View>
          </View>
          <View style={styles.child}>
            <View style={styles.IntroImg}>
              <FlatList
                data={DATA3}
                renderItem={renderSOS}
                keyExtractor={item => item.id}
                numColumns={2}
              />
            </View>
          </View>
        </SwiperFlatList>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
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
    width: width * 0.13,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatMain: {
    height: height * 0.52,
    width: width * 0.95,
    alignSelf: 'center',
    // backgroundColor: 'skyblue',
    // borderWidth: 1,
    alignItems: 'center',
  },
  // swiper falt list

  child: {
    height: height * 0.67,
    width: width * 1,
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
    // alignItems: 'center',
  },

  // Flat list

  flatMain: {
    height: height * 0.67,
    width: width * 0.95,
    alignSelf: 'center',
    // backgroundColor: 'skyblue',
    // borderWidth: 1,
    alignItems: 'center',
  },
  item: {
    height: height * 0.27,
    width: width * 0.43,
    alignSelf: 'center',
    // backgroundColor: 'skyblue',
    borderRadius: 8,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(245,245,245)',
    margin: 4,
    elevation: 2,
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
    // width: width * 0.4,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  IntroImg: {
    height: height * 0.67,
    width: width * 0.9,
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },

  // ============ new request ====
  newRew: {
    height: height * 0.14,
    width: width * 0.4,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item2: {
    height: height * 0.3,
    width: width * 0.43,
    alignSelf: 'center',
    // backgroundColor: 'skyblue',
    borderRadius: 8,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(245,245,245)',
    margin: 4,
    elevation: 2,
    // marginVertical: 30,
  },
  btn: {
    height: height * 0.022,
    width: width * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',

    borderRadius: 10,
  },
  btn2: {
    height: height * 0.022,
    width: width * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },

  // ============== Modal ========
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    height: height * 0.25,
    width: width * 0.8,
    alignSelf: 'center',

    backgroundColor: 'white',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
  },

  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
