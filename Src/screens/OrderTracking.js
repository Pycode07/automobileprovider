import axios from 'axios';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {COLOR} from '../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {ImagePath} from '../utils/ImagePath';
import AwesomeAlert from 'react-native-awesome-alerts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import {connect} from 'react-redux';
import {Loader} from '../components/Loader';
import {colors} from '../assets/colors';
import {api_url, change_package_status, order_status} from '../config/Constant';
const {height, width} = Dimensions.get('window');

const customStyle = {
  stepIndicatorSize: 30,
  stepStrokeWidth: 3,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#02024A',
  stepStrokeFinishedColor: colors.theme_blue1,
  stepStrokeUnFinishedColor: colors.theme_blue1,
  separatorFinishedColor: colors.theme_yellow1,
  separatorUnFinishedColor: colors.theme_white,
  stepIndicatorFinishedColor: colors.theme_blue1,
  stepIndicatorUnFinishedColor: colors.theme_white,
  stepIndicatorCurrentColor: colors.theme_blue1,
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#02024A',
  labelAlign: 'flex-start',
};
const labels = [
  'Request Accepted',
  'Car Picked',
  'Estimation finalize',
  'Work in progress',
  'Work Completed',
  'Car Ready for Pickup / Drop',
  'Car Inspected',
  'Car Dropped / Car Picked-Up',
  'Payment Completed',
];
const OrderTracking = props => {
  const myCar = props.route.params.orderDetails;
  console.log(myCar?.id);
  const comma = Intl.NumberFormat('en-IN');
  const [isLoading, setIsLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [status, setStatus] = React.useState(0);

  useEffect(() => {
    get_status();
    get_order_status();
  }, []);

  const get_status = async () => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + order_status,
      data: {
        order_id: myCar?.id,
      },
    })
      .then(res => {
        setIsLoading(false);
        // setStatus(res.data.order_status - 1)
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const updateStatus = async () => {
    setAlertVisible(false);
    setIsLoading(true);
    console.log({
      driver_id: props.userData?.id,
      id: props.route.params.orderDetails.id,
      status: status + 3,
    });
    await axios
      .post(api_url + change_package_status, {
        driver_id: props.userData?.id,
        id: props.route.params.orderDetails.id,
        status: status + 3,
      })
      .then(response => {
        setIsLoading(false);
        if (response.data.status) {
          order_status_update();
          get_status();
          // props.route.params.withDrawelHistory();
          // setStatus(status + 1);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const order_status_update = () => {
    database()
      .ref(`orders/${props.route.params.orderDetails.id}`)
      .update({status: status + 3})
      .then(res => {
        console.log('updated');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const get_order_status = () => {
    console.log(props?.route?.params?.orderDetails?.id);
    database()
      .ref(`orders/${props.route.params.orderDetails.id}`)
      .on('value', snapshot => {
        setStatus(snapshot?.val()?.status - 2);
        console.log(snapshot?.val());
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.theme_white}}>
      <Loader isVisible={isLoading} />
      <View
        style={{
          // height: height * 0.08,
          width: width * 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.theme_yellow1,
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
              source={ImagePath.BACK_ARROW}
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
          <Text style={{color: COLOR.WHITE, fontSize: 22}}>ORDER TRACKING</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.header}>
          <View
            style={{
              flex: 0,
              width: '90%',
              backgroundColor: colors.theme_white,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 8,
              elevation: 10,
              marginVertical: 15,
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
                {myCar.car.model}
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
          {/* <View style={styles.tital}>
          <Text style={{fontSize: 24}}> Your Progress </Text>
          <Text style={{fontSize: 13}}>
            {' '}
            {moment(props.route.params.orderDetails.created_at).format(
              'ddd, DD MMM',
            )}{' '}
          </Text>
          <Text style={{fontSize: 13}}>
            {' '}
            Booking Date {props.route.params.orderDetails.order_date}{' '}
          </Text>
          <Text style={{fontSize: 13}}>
            {' '}
            Car {props.route.params.orderDetails.car.model}{' '}
          </Text>
          <Text style={{fontSize: 13}}>
            {' '}
            FuelType {props.route.params.orderDetails.car.type}{' '}
          </Text>
          <Text style={{fontSize: 13}}>
            {' '}
            Order ID {props.route.params.orderDetails.id}{' '}
          </Text>
        </View>
        <View style={styles.tital}>
          <View style={styles.titalimg}>
            <Image
              source={{uri: props.route.params.orderDetails.car.image}}
              resizeMode="contain"
              style={{height: 100, width: 100}}
            />
          </View>
          <View style={styles.amt}>
            <Text> Amt : ₹{props.route.params.orderDetails.price}</Text>
          </View>
        </View> */}
        </View>
        <View style={styles.container}>
          <View style={styles.stepIndicator}>
            <StepIndicator
              customStyles={customStyle}
              stepCount={labels.length}
              direction="vertical"
              currentPosition={status}
              labels={labels}
              renderStepIndicator={value => {
                if (value.stepStatus != 'unfinished') {
                  return (
                    <Entypo name="check" color={colors.theme_white} size={18} />
                  );
                } else {
                  return null;
                }
              }}
              renderLabel={value => {
                return (
                  <View style={{flex: 0, width: '90%'}}>
                    <Text style={{fontSize: 16, fontFamily: 'FuturaMediumBT'}}>
                      {value.label}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        {status == 8 ? null : (
          <View
            style={{
              height: height * 0.13,
              width: width * 0.9,
              alignSelf: 'center',
              // borderWidth: 1,
            }}>
            <TouchableOpacity
              onPress={() => {
                setAlertVisible(true);
              }}
              style={{
                height: height * 0.06,
                width: width * 0.9,
                alignSelf: 'center',
                // borderWidth: 1,
                borderRadius: 10,
                backgroundColor: colors.theme_yellow1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: height / 40,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Update Status
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <AwesomeAlert
        show={alertVisible}
        showProgress={false}
        title={'Wait!'}
        message={`Do you want to change status ${labels[status]} to ${
          labels[status + 1]
        }`}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No"
        confirmText={'Yes'}
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          setAlertVisible(false);
        }}
        onConfirmPressed={updateStatus}
        contentContainerStyle={{
          width: '100%',
          padding: 5,
        }}
        contentStyle={{
          // backgroundColor: 'green',
          flex: 0,
          jusitfyContent: 'flex-start',
          alignItems: 'flex-start',
          //#ffe0c2 backgroundColor: '#ffe0c2',
          padding: 0,
        }}
        titleStyle={{
          backgroundColor: colors.theme_yellow1,
          paddingHorizontal: 5,
          marginBottom: 10,
          width: '100%',
          color: '#343a40',
          fontSize: 18,
          fontFamily: 'FuturaMediumBT',
        }}
        messageStyle={{
          fontSize: 14,
          marginBottom: 15,
          paddingHorizontal: 10,
          color: '#6c757d',
          fontSize: 14,
          fontFamily: 'FuturaMediumBT',
        }}
        confirmButtonTextStyle={{
          paddingHorizontal: 10,
        }}
        confirmButtonStyle={{
          backgroundColor: colors.theme_black4,
        }}
        cancelButtonStyle={{
          backgroundColor: colors.theme_yellow1,
        }}
        cancelButtonTextStyle={{
          paddingHorizontal: 10,
        }}
        actionContainerStyle={{
          flex: 0,
          flexDirection: 'row-reverse',
        }}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData,
  totalCapacityRedux: state.user.totalCapacity,
});

export default connect(mapStateToProps, null)(OrderTracking);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 20,
    height: 600,
    paddingHorizontal: 20,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },

  // ========header

  header: {
    flex: 0,
    //height: height * 0.27,
    width: width,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tital: {
    flex: 0,
    //width: '60%'
  },
  titalimg: {
    height: height * 0.1,
    width: width * 0.42,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  amt: {
    height: height * 0.028,
    width: width * 0.42,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
