import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState, myRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import {connectAdvanced} from 'react-redux';
import {connect} from 'react-redux';
import moment from 'moment';
import {colors} from '../assets/colors';
import {useRef} from 'react';
import {api_url, provider_order_history} from '../config/Constant';
const {width, height} = Dimensions.get('screen');

const OrderHistory = ({navigation, route, userLocation, userData}) => {
  console.log(userData?.id);
  const comma = Intl.NumberFormat('en-IN');
  const [orderHistory, setOrderHistory] = useState([]);
  const [masterDataSource, setMasterDataSource] = React.useState([]);
  const [orderData, setOrderData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState({
    visible: false,
    byOrder: true,
    byCar: false,
    byDate: false,
    byCarNumber: false,
    byPackage: false,
  });
  const [isFocused, setIsFocused] = useState(false);
  const [searchDate, setSearchDate] = useState(new Date());
  const [dateVisibility, setDateVisibality] = useState(false);
  const myRef = useRef();
  useEffect(() => {
    get_order_history();
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => {
        return (
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign
                name="arrowleft"
                size={25}
                color={colors.theme_white}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: colors.theme_white,
                fontSize: 20,
                fontFamily: 'FuturaMediumBT',
                marginLeft: 10,
              }}>
              ORDER HISTORY
            </Text>
          </View>
        );
      },
      // headerRight: () => (
      //   <TouchableOpacity
      //     onPress={() => {
      //       navigation.navigate('help');
      //     }}>
      //     <Text
      //       style={{ fontSize: 16, color: '#fff', fontFamily: 'FuturaMediumBT' }}>
      //       Help
      //     </Text>
      //   </TouchableOpacity>
      // ),
    });
  }, []);

  const get_order_history = async () => {
    await axios({
      method: 'post',
      url: api_url + provider_order_history,
      data: {
        provider_id: userData?.id,
      },
    }).then(res => {
      console.log(res.data.res);
      setOrderHistory(res.data.res);
      setOrderData(res.data.res);
      setMasterDataSource(res.data.res);
    });
  };

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.order_id
          ? item.order_id.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setOrderHistory(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setOrderHistory(masterDataSource);
      setSearch(text);
    }
  };
  const searchFilterFunction1 = text => {
    console.log(text);

    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = `${item.car.brand_name}${item.car.model}`
          ? `${item.car.brand_name}${item.car.model}`.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setOrderHistory(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setOrderHistory(masterDataSource);
      setSearch(text);
    }
  };

  const searchFilterFunction2 = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = moment(item.order_date).format('MMMM YYYY')
          ? moment(item.order_date).format('MMMM YYYY').toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setOrderHistory(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setOrderHistory(masterDataSource);
      setSearch(text);
    }
  };

  const searchFilterFunction3 = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.car.car_no
          ? item.car.car_no.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setOrderHistory(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setOrderHistory(masterDataSource);
      setSearch(text);
    }
  };

  const searchFilterFunction4 = text => {
    console.log('hii');
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.package_name
          ? item.package_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setOrderHistory(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setOrderHistory(masterDataSource);
      setSearch(text);
    }
  };
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Invoice will be available for downloading upon completion of the order.',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View
          style={{
            flex: 0,
            // marginHorizontal: 10,
            backgroundColor: '#fff',
          }}>
          {orderData && orderData.length != 0 ? (
            <View
              style={{
                flex: 0,
                marginBottom:
                  orderHistory && orderHistory.length == 0 ? height * 0.6 : 0,
              }}>
              <View
                style={{
                  flex: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  //height: 200,
                  //backgroundColor: '#ffe0c2',
                  marginBottom: 5,
                }}>
                <View
                  style={{
                    flex: 0,
                    width: '80%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'center',
                    // borderWidth: 1,
                    paddingHorizontal: 15,
                    borderRadius: 5,
                    // borderColor: '#f79d65',
                    backgroundColor: '#fff',
                    marginBottom: 13,
                    marginTop: 12,
                    elevation: 8,
                    shadowColor: colors.theme_black5,
                  }}>
                  <TextInput
                    ref={myRef}
                    placeholder="Search Your Order"
                    onFocus={() => {
                      setIsFocused(true);
                    }}
                    onBlur={() => {
                      setIsFocused(false);
                    }}
                    onChangeText={text => {
                      if (searchBy.byOrder) {
                        searchFilterFunction(text);
                      } else if (searchBy.byCar) {
                        searchFilterFunction1(text);
                      } else if (searchBy.byDate) {
                        searchFilterFunction2(text);
                      } else if (searchBy.byCarNumber) {
                        searchFilterFunction3(text);
                      } else {
                        searchFilterFunction4(text);
                      }
                    }}
                    style={{
                      width: '80%',
                      color: '#6c757d',
                      fontSize: 16,
                      fontFamily: 'FuturaMediumBT',
                      paddingVertical: 6,
                    }}>
                    {search}
                  </TextInput>

                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        myRef.current.focus();
                      }}
                      style={{marginRight: 10}}>
                      <FontAwesome name="search" color="#8d92c2" size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setSearchBy(prev => ({
                          ...prev,
                          visible: !searchBy.visible,
                        }));
                      }}
                      style={{paddingHorizontal: 5}}>
                      <FontAwesome name="filter" color="#8d92c2" size={18} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {searchBy.visible && (
                <View
                  style={{
                    flex: 0,
                    right: '10%',
                    width: '40%',
                    backgroundColor: colors.theme_white,
                    padding: 5,
                    position: 'absolute',
                    zIndex: 99,
                    top: 60,
                    elevation: 16,
                    shadowColor: colors.theme_black7,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setSearchBy({
                        visible: false,
                        byOrder: false,
                        byCar: false,
                        byDate: true,
                        byCarNumber: false,
                        byPackage: false,
                      });
                      setDateVisibality(true);
                    }}
                    style={{
                      flex: 0,
                      width: '100%',
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: colors.theme_yellow1,
                      marginRight: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.theme_white,
                        fontFamily: 'FuturaMediumBT',
                      }}>
                      Date
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSearchBy({
                        visible: false,
                        byOrder: false,
                        byCar: false,
                        byDate: false,
                        byCarNumber: true,
                        byPackage: false,
                      });
                      myRef.current.focus();
                    }}
                    style={{
                      flex: 0,
                      width: '100%',
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: colors.theme_yellow1,
                      marginRight: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.theme_white,
                        fontFamily: 'FuturaMediumBT',
                      }}>
                      Car Number
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSearchBy({
                        visible: false,
                        byOrder: false,
                        byCar: true,
                        byDate: false,
                        byCarNumber: false,
                        byPackage: false,
                      });
                      myRef.current.focus();
                    }}
                    style={{
                      flex: 0,
                      width: '100%',
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: colors.theme_yellow1,
                      marginRight: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.theme_white,
                        fontFamily: 'FuturaMediumBT',
                      }}>
                      Car Name
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSearchBy({
                        visible: false,
                        byOrder: false,
                        byCar: false,
                        byDate: false,
                        byCarNumber: false,
                        byPackage: true,
                      });
                      myRef.current.focus();
                    }}
                    style={{
                      flex: 0,
                      width: '100%',
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: colors.theme_yellow1,
                      marginRight: 10,
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.theme_white,
                        fontFamily: 'FuturaMediumBT',
                      }}>
                      Service Name
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSearchBy({
                        visible: false,
                        byOrder: true,
                        byCar: false,
                        byDate: false,
                        byCarNumber: false,
                        byPackage: false,
                      });
                      myRef.current.focus();
                    }}
                    style={{
                      flex: 0,
                      width: '100%',
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: colors.theme_yellow1,
                      marginRight: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.theme_white,
                        fontFamily: 'FuturaMediumBT',
                      }}>
                      Order ID
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              {Platform.OS == 'android' ? (
                dateVisibility ? (
                  <DateTimePicker
                    value={searchDate}
                    // minimumDate={
                    //   new Date(
                    //     new Date().getFullYear(),
                    //     new Date().getMonth(),
                    //     new Date().getDate(),
                    //   )
                    // }
                    maximumDate={new Date()}
                    display={'spinner'}
                    onChange={(d, date) => {
                      if (d.type === 'set') {
                        setDateVisibality(false);
                        setSearchDate(date);
                        searchFilterFunction2(moment(date).format('MMMM YYYY'));
                      } else {
                        setDateVisibality(false);
                      }
                    }}
                  />
                ) : null
              ) : null}
            </View>
          ) : null}
          <View style={{height: 20}} />
          {orderData.length == 0 ? (
            <View
              style={{
                flex: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/Images/no-order.png')}
                style={{
                  width: width * 0.9,
                  height: height * 0.6,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  color: '#a3a3a3',
                  fontSize: 16,
                  fontFamily: 'FuturaMediumBT',
                }}>
                You have not any order
              </Text>
            </View>
          ) : (
            orderHistory.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate('orderView', {
                  //   orderDetails: item,
                  //   //withDrawelHistory: withDrawelHistory,
                  //   flag: 1
                  // })
                }}
                key={index}
                style={{
                  flex: 0,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  elevation: 3,
                  marginBottom: 20,
                  marginHorizontal: 15,
                }}>
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                  key={index}>
                  {/* <View
                    style={{
                      backgroundColor:
                        item.is_cancel != 0
                          ? 'red'
                          : item.invoice == null
                            ? '#ffc857'
                            : '#1F9000',
                      paddingVertical: 2,
                      paddingHorizontal: 5,
                      borderTopRightRadius: 5,
                      borderBottomLeftRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 11,
                        fontFamily: 'FuturaMediumBT',
                      }}>
                      {item.is_cancel != 0
                        ? 'Cancelled'
                        : item.invoice == null
                          ? 'UPCOMING'
                          : 'COMPLETED'}
                    </Text>
                  </View> */}
                </View>
                <View
                  style={{flex: 0, paddingHorizontal: 15, paddingBottom: 10}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.theme_yellow1,
                      fontFamily: 'FuturaMediumBT',
                    }}>
                    ORDER ID: {item.order_id}
                  </Text>
                </View>
                <View
                  style={{flex: 0, paddingHorizontal: 15, paddingBottom: 10}}
                  key={index + 1}>
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: item.car.image}}
                      style={{width: 60, height: 60, borderRadius: 5}}
                      resizeMode="contain"
                    />
                    <View style={{marginLeft: 5}}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#343a40',
                          fontFamily: 'FuturaMediumBT',
                        }}>
                        {item.car.brand_name + ' ' + item.car.model}
                      </Text>
                      <View
                        style={{
                          flex: 0,
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            fontFamily: 'FuturaMediumBT',
                            paddingTop: 2,
                          }}>
                          {item.car.car_no}
                        </Text>
                        <Text
                          style={{
                            fontSize: 9,
                            fontFamily: 'FuturaMediumBT',
                            paddingTop: 2,
                            paddingLeft: 5,
                          }}>
                          {item.car.fuel_type}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0,
                      marginTop: 10,
                      marginBottom: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 0}}>
                      <View
                        style={{
                          flex: 0,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <FontAwesome name="rupee" color="#000" size={20} />
                        <Text
                          style={{
                            fontSize: 18,
                            color: '#000',
                            marginLeft: 3,
                            fontFamily: 'FuturaBoldBT',
                          }}>
                          {comma.format(item?.price)}
                        </Text>
                      </View>
                      <View style={{paddingTop: 5}}>
                        {/* <Text
                          style={{
                            fontSize: 12,
                            color: '#000',
                            fontFamily: 'FuturaBoldBT',
                          }}>
                          {item.category}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#000',
                            fontFamily: 'FuturaMediumBT',
                          }}>
                          {item.sub_category}
                        </Text> */}
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#000',
                            fontFamily: 'FuturaBoldBT',
                          }}>
                          {item.package_name}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 0}}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#343a40',
                          fontFamily: 'FuturaBoldBT',
                        }}>
                        {'Payment Method'}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#6c757d',
                          fontFamily: 'FuturaMediumBT',
                          marginTop: 5,
                          textTransform: 'capitalize',
                        }}>
                        {item.payment_type}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0,
                      padding: 10,
                      borderWidth: 1,
                      borderColor: '#ced4da',
                      borderRadius: 5,
                    }}>
                    <View
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text style={{fontSize: 11, color: '#adb5bd'}}>
                          SLOT SELECTED
                        </Text>
                        <View
                          style={{
                            flex: 0,
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Ionicons
                            name="time-outline"
                            size={18}
                            color="#000"
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#000',
                              marginLeft: 5,
                              fontFamily: 'FuturaMediumBT',
                            }}>
                            {item.time_slot}
                          </Text>
                        </View>
                      </View>
                      {/* <View
                        style={{
                          flex: 0,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}>
                        <Text style={{ fontSize: 11, color: '#adb5bd' }}>
                          YOUR MECHANIC
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#000',
                            fontFamily: 'FuturaMediumBT',
                          }}>
                          {item.driver.length != 0 ? item?.driver[0]?.first_name : 'Not Assigned'}
                        </Text>
                      </View> */}
                    </View>
                    <View
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
                      }}>
                      <Ionicons name="calendar-sharp" size={18} color="#000" />
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 12,
                          marginLeft: 5,
                          fontFamily: 'FuturaMediumBT',
                        }}>
                        {moment(item.order_date).format('Do MMM YYYY')}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      marginBottom: 15,
                    }}>
                    {/* <Pressable
                      onPress={() => {
                        navigation.navigate('orderView', {
                          carDetailes: item,
                          flag: 1,
                        });
                      }}
                      style={{
                        flex: 0,
                        width: '35%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 10,
                        borderWidth: 2,
                        borderColor: '#030140',
                        borderRadius: 5,
                        marginTop: 25,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#030140',
                          fontFamily: 'FuturaBoldBT',
                        }}>
                        View
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (item.invoice == null) {
                          showToastWithGravity();
                        } else {
                          Linking.openURL(item.invoice);
                        }
                      }}
                      style={{
                        flex: 0,
                        width: '35%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 10,
                        borderWidth: 2,
                        borderColor:
                          item.invoice == null ? '#fbdadf' : '#030140',
                        borderRadius: 5,
                        marginTop: 25,
                        backgroundColor:
                          item.invoice == null ? '#fbdadf' : '#fff',
                      }}>
                      <AntDesign
                        name="download"
                        color={item.invoice == null ? '#f4f5f6' : '#030140'}
                        size={16}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          color: item.invoice == null ? '#f4f5f6' : '#030140',
                          fontFamily: 'FuturaBoldBT',
                          marginLeft: 5,
                        }}>
                        Invoice
                      </Text>
                    </Pressable> */}
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps, null)(OrderHistory);
