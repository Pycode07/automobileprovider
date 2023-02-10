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
  ToastAndroid,
  StatusBar,
} from 'react-native';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import axios from 'axios';
import {connect} from 'react-redux';
import {colors} from '../../assets/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  api_url,
  fonts,
  get_capacity,
  provider_packages,
  provider_running_services,
  provider_services_action,
  provider_sos,
  update_occupied_capacity,
} from '../../config/Constant';
import TopTab from '../../Navigation/TopTab';
import {Loader} from '../../components/Loader';
const {height, width} = Dimensions.get('window');

const MyGarage = props => {
  const [remain, setRemain] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [totalCapacity, setTotalCapacity] = useState(0);
  const [occupiedCapacity, setOccupiedCapacity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [newRequest, setNewRequest] = React.useState(null);
  const [currentServices, setCurrentServices] = React.useState(null);
  const [sos, setSos] = React.useState(null);
  useEffect(() => {
    props.navigation.setOptions({
      headerStyle: {backgroundColor: colors.theme_white},
      headerTitleStyle: {color: colors.theme_white},
      headerTintColor: '#F7931E',
      headerLeft: () => {
        return (
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <AntDesign
                name="leftcircleo"
                size={25}
                color={colors.theme_yellow1}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: colors.theme_yellow1,
                fontSize: 20,
                fontFamily: 'FuturaMediumBT',
                marginLeft: 10,
              }}>
              My Garage
            </Text>
          </View>
        );
      },
    });
  }, []);

  const renderCarRquest = ({item}) => {
    return (
      <View>
        {item?.is_cancel != '1' ? (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('orderView', {
                orderDetails: item,
                withDrawelHistory: withDrawelHistory,
                flag: 1,
              })
            }
            style={styles.item2}>
            <View style={styles.newRew}>
              <Image
                source={{uri: item.car.image}}
                style={{height: 140, width: 140}}
                resizeMode="contain"
              />
            </View>
            <View style={styles.content}>
              <View style={styles.cmntxt}>
                <Text style={{fontSize: 13, color: 'black', fontWeight: '500'}}>
                  {item.car.model}
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
                  {item.car.car_no}
                </Text>
                <Text style={{fontSize: 10, color: COLOR.BACK_BORDER}}>
                  {' '}
                  {item.fuel_type}
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
                  {item?.users[0]?.first_name}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: COLOR.BACK_BORDER,
                    marginLeft: 5,
                  }}>
                  ({item?.users[0]?.phone_number})
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
                  {item.time_slot}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: COLOR.BACK_BORDER,
                    marginLeft: 5,
                  }}>
                  {item.order_date}
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
                <TouchableOpacity
                  onPress={() => accpetReject(2)}
                  style={styles.btn}>
                  <Text style={{color: '#FFFFFF', fontSize: height / 65}}>
                    Reject
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn2}
                  // onPress={() => setModalVisible(!modalVisible)}
                  onPress={() => accpetReject(1)}>
                  <Text style={{color: '#FFFFFF', fontSize: height / 65}}>
                    Accept
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  const renderSOS = ({item}) => {
    const accpetReject = async status => {
      try {
        const body = {
          id: item.id,
          status: status,
        };
        const response = await axios.post(
          api_url + provider_services_action,
          body,
        );
        console.log('response', response.data);
      } catch (error) {
        console.log('accpetReject', error.message);
      }
    };
    return (
      <View style={styles.item2}>
        <View style={styles.newRew}>
          <Image
            source={{uri: item.car.image}}
            style={{height: 140, width: 140}}
            resizeMode="contain"
          />
        </View>

        <View style={styles.content}>
          <View style={styles.cmntxt}>
            <Text style={{fontSize: 13, color: 'black', fontWeight: '500'}}>
              {item.car.model}
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
              {item.car.car_no}
            </Text>
            <Text style={{fontSize: 10, color: COLOR.BACK_BORDER}}>
              {' '}
              {item.fuel_type}
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
              {item.time_slot}
            </Text>
            <Text
              style={{fontSize: 10, color: COLOR.BACK_BORDER, marginLeft: 5}}>
              {item.order_date}
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
            <TouchableOpacity
              onPress={() => accpetReject(2)}
              style={styles.btn}>
              <Text style={{color: '#FFFFFF', fontSize: height / 65}}>
                Reject
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              // onPress={() => setModalVisible(!modalVisible)}
              onPress={() => accpetReject(1)}>
              <Text style={{color: '#FFFFFF', fontSize: height / 65}}>
                Accept
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    get_garage_capacity();
  }, [props.totalCapacityRedux]);

  const updata_capacity = async val => {
    await axios({
      method: 'post',
      url: api_url + update_occupied_capacity,
      data: {
        driver_id: props?.userData?.id,
        capacity: val,
        key: 0,
      },
    })
      .then(res => {
        console.log(res.data);
        if (res.data.msg == 'updated success') {
          get_garage_capacity();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const get_garage_capacity = async () => {
    await axios({
      method: 'post',
      url: api_url + get_capacity,
      data: {
        driver_id: props?.userData.id,
      },
    })
      .then(res => {
        setTotalCapacity(res.data.response[0]?.total_capacity);
        setOccupiedCapacity(res.data.response[0]?.occupied_capacity);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.theme_white,
        paddingVertical: 10,
      }}>
      <StatusBar backgroundColor={colors.theme_yellow1} />
      <Loader isVisible={isLoading} />
      <View
        style={{
          flex: 0,
          width: '90%',
          alignSelf: 'center',
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: colors.theme_black4,
          backgroundColor: colors.theme_yellow2,
          shadowColor: colors.theme_black2,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: colors.theme_black7,
            fontFamily: fonts.futura_medium,
          }}>
          {`Total Capacity: ${totalCapacity && totalCapacity}`}
        </Text>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: colors.theme_black7,
              fontFamily: fonts.futura_medium,
            }}>
            Occupied Capacity:
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: width * 0.09,
                height: width * 0.09,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: (width * 0.09) / 2,
                backgroundColor: colors.theme_yellow1,
              }}>
              <Text style={{fontSize: 22, color: colors.theme_white}}>-</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: colors.theme_black7,
                fontFamily: fonts.futura_medium,
              }}>
              {occupiedCapacity}
            </Text>
            <TouchableOpacity
              style={{
                width: width * 0.09,
                height: width * 0.09,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: (width * 0.09) / 2,
                backgroundColor: colors.theme_yellow1,
              }}>
              <Text style={{fontSize: 22, color: colors.theme_white}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TopTab />

      {/* <View style={styles.capacitymain}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.capcity}>
            <Text style={{fontSize: 17, fontWeight: '500', color: COLOR.BLACK}}>
              Occupied Capacity
            </Text>
          </View>

          <View style={styles.capcity1}>
            <View style={styles.count}>
              <TouchableOpacity
                onPress={async () => {
                  const response = await axios.post(
                    api_url + update_occupied_capacity,
                    {
                      driver_id: props?.userData?.id,
                      capacity: occupiedCapacity - 1,
                      key: 0,
                    },
                  );
                  if (response.data.msg == 'updated success') {
                    getKycDetails();
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
                {occupiedCapacity}
              </Text>
            </View>
            <View style={styles.count}>
              <TouchableOpacity
                onPress={async () => {
                  if (occupiedCapacity == totalCapacity) {
                    ToastAndroid.show(
                      "Occupied Capacity can't be greater then Total Capacity",
                      ToastAndroid.SHORT,
                      ToastAndroid.BOTTOM,
                    );
                  } else {
                    const response = await axios.post(
                      api_url + update_occupied_capacity,
                      {
                        driver_id: props?.userData?.id,
                        capacity: occupiedCapacity + 1,
                        key: 1,
                      },
                    );
                    if (response.data.msg == 'updated success') {
                      getKycDetails();
                    }
                  }
                  // if (remain <= 5) {
                  //   setRemain(remain + 1);
                  // }
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
      </View> */}

      {/* <View
        style={{
          flex: 0,
          // height: height * 0.07,
          width: width * 0.8,
          alignSelf: 'center',
          justifyContent: 'space-between',
          // backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 15,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: COLOR.BLACK,
            // textDecorationLine: 'underline',
          }}>
          Cars ({currentServices && currentServices.length})
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: COLOR.BLACK,
          }}>
          New Request ({newRequest && newRequest.length})
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: COLOR.BLACK,
          }}>
          SOS ({sos && sos.length})
        </Text>
      </View>

      <View>
        <SwiperFlatList
          paginationStyle={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: -20,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 40,
            marginBottom: 10,
          }}
          paginationStyleItemActive={{
            width: width * 0.1,
            height: 5,
            // height: height * 0.007,
            // backgroundColor: 'rgb(0,126,247)',
            backgroundColor: colors.theme_yellow1,
          }}
          paginationStyleItem={{
            width: width * 0.1,
            height: 5,
            // height: height * 0.007,
            // borderRadius: 20,
          }}
          // autoplay
          // autoplayDelay={5}
          // autoplayLoop
          index={0}
          showPagination>
          <View style={styles.child}>
            <View style={styles.IntroImg}>
              {currentServices && currentServices.length > 0 ? (
                <FlatList
                  data={currentServices}
                  renderItem={renderItem}
                  keyExtractor={item => JSON.stringify(item)}
                  numColumns={2}
                />
              ) : (
                <View>
                  <Text style={{marginTop: 50}}>No Current Services</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.child}>
            <View style={styles.IntroImg}>
              {newRequest && newRequest.length > 0 ? (
                <FlatList
                  data={newRequest}
                  renderItem={renderCarRquest}
                  keyExtractor={item => item.id}
                  numColumns={2}
                />
              ) : (
                <View>
                  <Text style={{marginTop: 50}}>No Current Services</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.child}>
            <View style={styles.IntroImg}>
              {sos && sos.length > 0 ? (
                <FlatList
                  data={sos}
                  renderItem={renderSOS}
                  keyExtractor={item => item.id}
                  numColumns={2}
                />
              ) : (
                <View>
                  <Text style={{marginTop: 50}}>No Current Services</Text>
                </View>
              )}
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
      </View> */}
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData,
  totalCapacityRedux: state.user.totalCapacity,
});
const mapDispatchToProps = dispatch => ({dispatch});
export default connect(mapStateToProps, mapDispatchToProps)(MyGarage);

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
    flex: 0,
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
    paddingBottom: 100,
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
    height: height * 0.33,
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
