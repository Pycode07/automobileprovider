import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
  Pressable,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {colors} from '../assets/colors';
//import BillDetailes from '../Components/BillDetailes';

const OrderView = ({navigation, route}) => {
  const comma = Intl.NumberFormat('en-IN');
  const myCar = route.params.orderDetails;
  console.log(myCar.users?.first_name);
  // console.log(JSON.parse(myCar?.price_devil_details));
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPay, setTotalPay] = useState(0);
  // const get_total = () => {
  //   let x = 0;
  //   x = x + JSON.parse(myCar?.price_devil_details)?.price;
  //   if (myCar?.recommendation != null) {
  //     x =
  //       x +
  //       parseInt(myCar?.recommendation?.recommendated_price) -
  //       parseInt(myCar?.recommendation?.essencial_price);
  //   }
  //   if (myCar?.addons != null) {
  //     myCar?.addons.map(item => {
  //       x = x + item.current_price;
  //     });
  //   }
  //   if (myCar?.tow == 'yes') {
  //     x = x + myCar?.tow_price;
  //   }

  //   setTotalPay(x);
  // };

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {backgroundColor: colors.theme_yellow1},
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
              {typeof route?.params?.flag != 'undefined'
                ? 'ORDER HISTORY'
                : 'CURRENT ORDER STATUS'}
            </Text>
          </View>
        );
      },
    });
  }, []);

  useEffect(() => {
    //  get_total();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{flex: 1, margin: 15, marginTop: 5}}>
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: colors.theme_white,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 5,
            }}>
            <View style={{flex: 0, marginRight: 10}}>
              <Image
                source={{uri: myCar.car.image}}
                style={{
                  width: 60,
                  height: 40,
                  resizeMode: 'cover',
                }}
              />
              <View
                style={{
                  flex: 0,
                  padding: 0,
                  backgroundColor: 'orange',
                  paddingHorizontal: 6,
                  borderRadius: 7,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'FuturaMediumBT',
                    color: '#000',
                    marginHorizontal: 1,
                    textAlign: 'center',
                  }}>
                  {myCar?.car?.model}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 22,
                color: '#343a40',
                fontFamily: 'FuturaMediumBT',
              }}>
              {`Order ID: ML${myCar.id}`}
            </Text>
          </View>
          <View
            style={{
              flex: 0,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: colors.theme_yellow1,
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: colors.theme_white,
                fontFamily: 'FuturaMediumBT',
              }}>
              My Order
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.theme_white,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 8,
              elevation: 10,
              shadowColor: colors.theme_black5,
              marginBottom: 20,
            }}>
            <View
              style={{
                flex: 0,
                borderBottomWidth: 0.7,
                paddingBottom: 8,
                marginBottom: 8,
                borderBottomColor: colors.theme_black1,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: colors.theme_blue1,
                  fontFamily: 'FuturaBd',
                  letterSpacing: 1,
                }}>
                {myCar?.users[0]?.first_name}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.theme_black5,
                  fontFamily: 'FuturaBd',
                  marginTop: 5,
                }}>
                {myCar?.users[0]?.phone_number}
              </Text>
            </View>
            {/* <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaBoldBT',
                }}>
                Booking Date
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaBoldBT',
                }}>
                {moment(myCar?.order_date).format('Do MMM YYYY')}
              </Text>
            </View> */}
            {/* <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Order Date
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                {moment(myCar?.order_date).format('Do MMM YYYY')}
              </Text>
            </View> */}
            {/* <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Booking Time Slot
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                {myCar.time_slot}
              </Text>
            </View> */}
            {/* <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Paymet Method
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                  textTransform: 'capitalize',
                }}>
                {myCar.payment_type}
              </Text>
            </View> */}
            {/* <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Amount
              </Text>
              <View
                style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5,
                  }}>
                  <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center', padding: 2, borderWidth: 1, borderColor: colors.theme_yellow1, borderRadius: 15 }}>
                    <Entypo name="info" size={12} color={colors.theme_yellow1} />
                  </View>

                </TouchableOpacity>
                <FontAwesome
                  name="rupee"
                  color={colors.theme_black6}
                  size={14}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.theme_black6,
                    fontFamily: 'FuturaMediumBT',
                    marginLeft: 2,
                  }}>
                  {comma.format(myCar?.price)}
                </Text>
              </View>
            </View> */}
          </View>
          <View
            style={{
              backgroundColor: colors.theme_white,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 8,
              elevation: 10,
              shadowColor: colors.theme_black5,
            }}>
            <View
              style={{
                flex: 0,
                borderBottomWidth: 0.7,
                paddingBottom: 8,
                marginBottom: 8,
                borderBottomColor: colors.theme_black1,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: colors.theme_blue1,
                  fontFamily: 'FuturaBd',
                  letterSpacing: 1,
                }}>
                {`${myCar.car.brand_name} ${myCar.car.model}`}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.theme_black5,
                  fontFamily: 'FuturaBd',
                  marginTop: 5,
                }}>
                {myCar.car.car_no} ( {myCar?.car?.fuel_type} )
              </Text>
            </View>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaBoldBT',
                }}>
                Booking Date
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaBoldBT',
                }}>
                {moment(myCar?.order_date).format('Do MMM YYYY')}
              </Text>
            </View>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Order Date
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                {moment(myCar?.created_at).format('Do MMM YYYY')}
              </Text>
            </View>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Booking Time Slot
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                {myCar.time_slot}
              </Text>
            </View>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Paymet Method
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                  textTransform: 'capitalize',
                }}>
                {myCar.payment_type}
              </Text>
            </View>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Amount
              </Text>
              <View
                style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                {/* <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5,
                  }}>
                  <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center', padding: 2, borderWidth: 1, borderColor: colors.theme_yellow1, borderRadius: 15 }}>
                    <Entypo name="info" size={12} color={colors.theme_yellow1} />
                  </View>

                </TouchableOpacity> */}
                <FontAwesome
                  name="rupee"
                  color={colors.theme_black6}
                  size={14}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.theme_black6,
                    fontFamily: 'FuturaMediumBT',
                    marginLeft: 2,
                  }}>
                  {comma.format(myCar?.price)}
                </Text>
              </View>
            </View>
          </View>
          {/* <View style={{ flex: 0, marginTop: 20 }}>
            <Text
              style={{
                fontSize: 20,
                color: '#495057',
                fontFamily: 'FuturaMediumBT',
                marginBottom: 5,
              }}>
              Order Detailes
            </Text>
            <View
              style={{ width: '100%', height: 1, backgroundColor: '#d3d3d3' }}
            />
          </View> */}

          <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaBoldBT',
                }}>
                Pickup Option
              </Text>
            </View>
            <View style={{flex: 1}}>
              <BouncyCheckbox
                size={18}
                isChecked={myCar.pickup == 'yes'}
                text={myCar.pickup}
                disableBuiltInState
                fillColor={colors.theme_blue1}
                iconComponent={() => null}
                iconStyle={{borderColor: colors.theme_yellow1, borderWidth: 2}}
                textStyle={{
                  textDecorationLine: 'none',
                  textTransform: 'capitalize',
                }}
              />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaBoldBT',
                }}>
                Tow Services
              </Text>
            </View>
            <View style={{flex: 1}}>
              <BouncyCheckbox
                size={18}
                text={myCar.tow}
                isChecked={myCar.tow == 'yes'}
                fillColor={colors.theme_blue1}
                disableBuiltInState
                iconComponent={() => null}
                iconStyle={{borderColor: colors.theme_yellow1, borderWidth: 2}}
                textStyle={{
                  textDecorationLine: 'none',
                  textTransform: 'capitalize',
                }}
              />
            </View>
          </View>
          {myCar.pickup == 'yes' ? (
            <View style={{flex: 0, marginTop: 20}}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black5,
                  fontFamily: 'FuturaMediumBT',
                  marginLeft: 10,
                }}>
                Pick up Address
              </Text>
              <View
                style={{
                  flex: 0,
                  padding: 10,
                  //borderColor: '#d3d3d3',
                  //borderWidth: 0,
                  marginTop: 5,
                  borderRadius: 10,
                  backgroundColor: colors.theme_white,
                  elevation: 10,
                  shadowColor: colors.theme_black5,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.theme_black6,
                    fontFamily: 'FuturaMediumBT',
                  }}>
                  {myCar.location}
                </Text>
              </View>
            </View>
          ) : null}

          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaBoldBT',
                }}>
                Drop off Option
              </Text>
            </View>
            <View style={{flex: 1}}>
              <BouncyCheckbox
                size={18}
                isChecked={myCar.drop_v == 'yes'}
                text={myCar.drop_v}
                fillColor={colors.theme_blue1}
                disableBuiltInState
                iconComponent={() => null}
                iconStyle={{borderColor: colors.theme_yellow1, borderWidth: 2}}
                textStyle={{
                  textDecorationLine: 'none',
                  textTransform: 'capitalize',
                }}
              />
            </View>
          </View>
          {myCar && myCar.drop_v == 'yes' ? (
            <View style={{flex: 0, marginTop: 20}}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black5,
                  fontFamily: 'FuturaMediumBT',
                  marginLeft: 10,
                }}>
                Drop off Address
              </Text>
              <View
                style={{
                  flex: 0,
                  padding: 10,
                  //borderColor: '#d3d3d3',
                  //borderWidth: 0,
                  marginTop: 5,
                  borderRadius: 10,
                  backgroundColor: colors.theme_white,
                  elevation: 10,
                  shadowColor: colors.theme_black5,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: colors.theme_black6,
                    fontFamily: 'FuturaMediumBT',
                  }}>
                  {myCar.drop_location}
                </Text>
              </View>
            </View>
          ) : null}
          {/* 
          <View style={{flex: 0, marginTop: 20}}>
            <Text
              style={{
                fontSize: 14,
                color: colors.theme_black6,
                fontFamily: 'FuturaBoldBT',
              }}>
              You are served by
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: colors.theme_black6,
                fontFamily: 'FuturaBoldBT',
                marginTop: 5,
              }}>
              Service Buddy
            </Text>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
                marginLeft: 5,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                {myCar?.buddy?.name} {myCar?.buddy?.mobile}
              </Text>
            </View>
          </View> */}
          <View style={{flex: 0, marginVertical: 15}}>
            {/* <Text
              style={{
                fontSize: 14,
                color: colors.theme_black6,
                fontFamily: 'FuturaBoldBT',
              }}>
              Garage
            </Text> */}
            {/* {myCar.driver.length != 0 ? (
              <>
                <View
                  style={{
                    flex: 0,
                    //alignItems: 'center',
                    marginTop: 5,
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#6c757d',
                      fontFamily: 'FuturaMediumBT',
                    }}>
                    Name: {myCar?.driver[0]?.first_name}
                  </Text>
                </View>
                {/* <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#6c757d',
                      fontFamily: 'FuturaMediumBT',
                    }}>
                    Phone Number: {myCar?.driver[0]?.phone_number}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginTop: 5,
                    marginLeft: 5,
                    marginBottom: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#6c757d',
                      fontFamily: 'FuturaMediumBT',
                    }}>
                    Address: {myCar?.driver[0]?.address}
                  </Text>
                </View> 
              </>
            ) : null} */}
          </View>
        </View>
      </ScrollView>
      {typeof route?.params?.flag == 'undefined' ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('OrderTracking', {
              orderDetails: route?.params?.orderDetails,
              withDrawelHistory: route?.params?.withDrawelHistory,
            })
          }
          style={{
            flex: 0,
            paddingVertical: 10,
            backgroundColor: colors.theme_yellow1,
            justifyConten: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 16, color: '#fff', fontFamily: 'FuturaMediumBT'}}>
            Update Order Status
          </Text>
        </TouchableOpacity>
      ) : null}
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0a0a0a',
            opacity: 0.9,
          }}>
          <View
            style={{
              width: '92%',
              padding: 5,
              backgroundColor: colors.theme_white,
              borderRadius: 10,
              maxHeight: 550,
            }}>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{
                flex: 0,
                justifyContent: 'center',
                alignItems: 'flex-end',
                padding: 5,
              }}>
              <AntDesign name="closecircleo" color="#000" size={20} />
            </Pressable>
            <View
              style={{
                flex: 0,
                marginHorizontal: 15,
                borderBottomWidth: 1,
                borderBottomColor: colors.theme_yellow1,
                paddingBottom: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.theme_black6,
                  fontFamily: 'FuturaMediumBT',
                }}>
                Your Bill Details
              </Text>
            </View>
            <ScrollView style={{width: '100%', maxHeight: 550}}>
              <View style={{flex: 0, marginVertical: 5}}>
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    //borderBottomWidth: 0.5,
                    //borderBottomColor: '#363636',
                    paddingTop: 10,
                    marginHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontFamily: 'FuturaMediumBT',
                    }}>
                    {myCar?.package_name}
                  </Text>
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingRight: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#000',
                        fontFamily: 'FuturaMediumBT',
                        paddingLeft: 2,
                      }}>
                      <FontAwesome name="rupee" color="#000" size={16} /> {''}
                      {comma.format(
                        JSON.parse(myCar?.price_devil_details)?.price,
                      )}
                    </Text>
                  </View>
                </View>
                <View
                //key={index}
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  //borderBottomWidth: 0.5,
                  //borderBottomColor: '#363636',
                  paddingBottom: 10,
                  paddingTop: 5,
                  marginHorizontal: 15,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#008000',
                    fontFamily: 'FuturaMediumBT',
                  }}>
                    You Saved ₹{`${comma.format(JSON.parse(myCar?.price_devil_details)?.mrp-JSON.parse(myCar?.price_devil_details)?.price + (myCar?.coupon != null ?  myCar?.coupon?.promo_type == 5 ? Math.floor(myCar?.coupon?.discount) : Math.floor(myCar?.coupon?.discount * totalPay) / 100 : 0))}`} ({`${(100 - (comma.format(JSON.parse(myCar?.price_devil_details)?.price * 100 / JSON.parse(myCar?.price_devil_details)?.mrp ))).toFixed(0)}% Off ${myCar?.coupon != null ? `plus ₹${myCar?.coupon?.promo_type == 5 ? comma.format(Math.floor(myCar?.coupon?.discount)) : comma.format(Math.floor((myCar?.coupon?.discount * totalPay) / 100 ))}`  : ''})`}
                  {/* {props?.myCartData[0]?.package_name} 
                </Text>
              </View>
                {myCar?.recommendation != null ? (
                  <>
                    <View
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 5,
                        alignItems: 'center',
                        marginRight: 15,
                        marginLeft: 25,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.theme_yellow3,
                          fontFamily: 'FuturaMediumBT',
                        }}>
                        Upgrades
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                        alignItems: 'center',
                        marginRight: 15,
                        marginLeft: 25,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#000',
                          fontFamily: 'FuturaMediumBT',
                          textTransform: 'capitalize',
                        }}>
                        {myCar?.recommendation?.name}
                      </Text>
                      <View
                        style={{
                          flex: 0,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingRight: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#000',
                            fontFamily: 'FuturaMediumBT',
                            paddingLeft: 2,
                          }}>
                          <FontAwesome name="rupee" color="#000" size={16} />{' '}
                          {comma.format(
                            myCar?.recommendation?.recommendated_price -
                              myCar?.recommendation?.essencial_price,
                          )}
                        </Text>
                      </View>
                    </View>
                  </>
                ) : null}
                {myCar?.addons != null ? (
                  <>
                    <View
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 5,
                        alignItems: 'center',
                        marginRight: 15,
                        marginLeft: 25,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.theme_yellow3,
                          fontFamily: 'FuturaMediumBT',
                        }}>
                        Add-ons
                      </Text>
                    </View>
                    {myCar?.addons.map((item, index) => (
                      <View
                        key={index}
                        style={{
                          flex: 0,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingVertical: 10,
                          alignItems: 'center',
                          marginRight: 15,
                          marginLeft: 25,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#000',
                            fontFamily: 'FuturaMediumBT',
                          }}>
                          {item.name}
                        </Text>
                        <View
                          style={{
                            flex: 0,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingRight: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              color: '#000',
                              fontFamily: 'FuturaMediumBT',
                              paddingLeft: 2,
                            }}>
                            <FontAwesome name="rupee" color="#000" size={16} />{' '}
                            {comma.format(item.current_price)}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </>
                ) : null}

                {myCar.tow == 'yes' ? (
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      //borderBottomWidth: 0.5,
                      //borderBottomColor: '#363636',
                      paddingVertical: 10,
                      marginHorizontal: 15,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#000',
                        fontFamily: 'FuturaMediumBT',
                      }}>
                      Tow Service
                    </Text>
                    <View
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#000',
                          fontFamily: 'FuturaMediumBT',
                          paddingLeft: 2,
                        }}>
                        <FontAwesome name="rupee" color="#000" size={16} />{' '}
                        {comma.format(myCar?.tow_price)}
                      </Text>
                    </View>
                  </View>
                ) : null}
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    //borderBottomWidth: 0.5,
                    //borderBottomColor: '#363636',
                    paddingVertical: 10,
                    marginHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontFamily: 'FuturaMediumBT',
                    }}>
                    TOTAL
                  </Text>
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingRight: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#000',
                        fontFamily: 'FuturaMediumBT',
                        paddingLeft: 2,
                      }}>
                      <FontAwesome name="rupee" color="#000" size={16} />{' '}
                      {comma.format(totalPay)}
                    </Text>
                  </View>
                </View>
                {myCar?.coupon != null ? (
                  <>
                    <View
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                        alignItems: 'center',
                        marginHorizontal: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#008000',
                          fontFamily: 'FuturaMediumBT',
                        }}>
                        Discount Applied
                      </Text>
                      <View
                        style={{
                          flex: 0,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingRight: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#008000',
                            fontFamily: 'FuturaMediumBT',
                            paddingRight: 2,
                          }}>
                          (-)
                        </Text>

                        <Text
                          style={{
                            fontSize: 16,
                            color: '#008000',
                            fontFamily: 'FuturaMediumBT',
                            paddingLeft: 2,
                          }}>
                          <FontAwesome name="rupee" color="#008000" size={16} />{' '}
                          {myCar?.coupon?.promo_type == 5
                            ? comma.format(myCar?.coupon?.discount)
                            : comma.format(
                                Math.floor(
                                  (myCar?.coupon?.discount * totalPay) / 100,
                                ),
                              )}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 0,
                        alignItems: 'center',
                        marginHorizontal: 25,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.theme_yellow3,
                          fontFamily: 'FuturaMediumBT',
                        }}>
                        Coupon Code {myCar?.coupon?.promo_code}
                      </Text>
                    </View>
                  </>
                ) : null}
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    //borderBottomWidth: 0.5,
                    //borderBottomColor: '#363636',
                    paddingVertical: 10,
                    marginHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontFamily: 'FuturaMediumBT',
                    }}>
                    FINAL BILLING
                  </Text>
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingRight: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#000',
                        fontFamily: 'FuturaMediumBT',
                        paddingLeft: 2,
                      }}>
                      <FontAwesome name="rupee" color="#000" size={16} />{' '}
                      {myCar?.coupon != null
                        ? myCar?.coupon?.promo_type == 5
                          ? comma.format(totalPay - myCar?.coupon?.discount)
                          : comma.format(
                              Math.floor(
                                totalPay -
                                  (myCar?.coupon?.discount * totalPay) / 100,
                              ),
                            )
                        : comma.format(totalPay)}
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 12,
                alignItems: 'center',
                marginHorizontal: 15,
                backgroundColor: colors.theme_yellow1,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.theme_white,
                  fontFamily: 'FuturaBoldBT',
                }}>
                You Pay
              </Text>
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingRight: 6,
                }}>
                <FontAwesome
                  name="rupee"
                  color={colors.theme_white}
                  size={18}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.theme_white,
                    fontFamily: 'FuturaBoldBT',
                    paddingLeft: 2,
                    marginRight: 5,
                  }}>
                  {comma.format(myCar?.price)}
                </Text>
                {/* <Fontisto
                  name="caret-right"
                  size={16}
                  color={colors.theme_white}
                /> 
              </View>
            </View>
            <Text
              style={{
                fontSize: 12,
                color: colors.theme_black5,
                fontFamily: 'FuturaMediumBT',
                paddingLeft: 2,
                textAlign: 'right',
                marginVertical: 8,
                marginRight: 15,
              }}>
              Inclusive of GST
            </Text>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default OrderView;
