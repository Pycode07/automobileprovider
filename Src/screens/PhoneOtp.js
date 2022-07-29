import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Vibration,
  KeyboardAwareScrollView,
} from 'react-native';
import {ImagePath} from '../utils/ImagePath';
const {height, width} = Dimensions.get('screen');
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from 'react-native-confirmation-code-field';
// import { api_url, register } from '../../Api/ApiKey';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios'

const PhoneOtp = ({route, navigation}) => {
  // const otp = route.params.otp
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  // const [correctOtp, setCorrectOtp] = useState(false)
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [handleOtpInput, setHandleOtpInput] = useState(undefined);
  //   const handleVerifyOtpButton = async () => {
  //     if (value.toString() === otp.toString()) {
  //       try {
  //         await axios({
  //           method: 'POST',
  //           url: api_url + register,
  //           data: {
  //             first_name: '',
  //             phone_number: route.params.phoneNumber,
  //             email: '',
  //             fcm_token: await AsyncStorage.getItem('fcm_token')
  //           }
  //         })
  //           .then((response) => {
  //             console.log(AsyncStorage.getItem('fcm_token'))
  //             console.log(response)
  //             navigation.navigate('Home2')
  //           })
  //       }
  //       catch (e) {
  //         console.log(e)
  //       }
  //     }
  //     else {
  //       setCorrectOtp(true)
  //       Vibration.vibrate()
  //     }
  //     // if(otpData.otp !== )ṁ
  //   }
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={{flex: 1}}
        source={ImagePath.LOGIN_BACKGROUND}
        resizeMode="stretch">
        <View style={styles.backArrow}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={ImagePath.BACK_BUTTON}
              resizeMode="contain"
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Image
            source={ImagePath.LOGIN_PHONE}
            resizeMode="contain"
            style={{height: 250, width: 300}}
          />
        </View>
        <View style={styles.tital}>
          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
            Enter Your OTP
          </Text>
          <Text style={{fontSize: 14, color: 'black'}}>
            Please Enter verfication code
          </Text>
          <Text style={{fontSize: 14, color: 'black'}}>
            we send to your phone nnumber
          </Text>
        </View>
        <View
          style={{
            height: height * 0.12,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'flex-end',
            // borderWidth: 1,
            // backgroundColor:"green"
          }}>
          {
            //   correctOtp ? <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
            //     <Text style={{ fontSize: 12, color: 'red' }}>Enter correct Otp!</Text>
            //   </View> : null
          }
          <View style={styles.phone}>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              TextColor="red"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={{
              height: height * 0.07,
              width: width * 0.9,
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: 'navy',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              /*handleVerifyOtpButton()*/
            }}>
            <Text style={{color: 'white', fontSize: 14}}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomtxt}>
          <Text style={{color: 'black'}}>Don't have recive tha otp</Text>
          <TouchableOpacity>
            <Text style={{color: 'goldenrod'}}>Resend Otp</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PhoneOtp;

const styles = StyleSheet.create({
  mainContainer: {
    height: height * 1,
    width: width * 1,
    // backgroundColor: 'skyblue',
  },
  backArrow: {
    height: height * 0.07,
    width: width * 0.9,
    // backgroundColor:'red',
    // borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    height: height * 0.32,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
  },
  tital: {
    height: height * 0.09,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phone: {
    height: height * 0.09,
    width: width * 0.9,
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labelContainer: {
    // alignSelf: 'flex-start',
    // elevation: 1,
    // shadowColor: "white",
    // paddingHorizontal: 3,
    // backgroundColor:'red',
    position: 'absolute',
    top: -1,
    height: height * 0.03,
    width: width * 0.3,
    alignItems: 'center',
    backgroundColor: 'white',
    marginStart: 12,
    zIndex: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    // zIndex: 0,
    height: height * 0.07,
    width: width * 0.9,
    // backgroundColor:'red',
  },
  // placeholdertxt:{
  //   height:height*0.06,
  //   width:width*0.7,
  //   alignSelf:'center'
  // }
  btn: {
    height: height * 0.12,
    width: width * 0.9,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  TxtInput: {
    height: height * 0.07,
    width: width * 0.14,
    backgroundColor: 'rgb(245,245,245)',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomtxt: {
    height: height * 0.1,
    width: width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 10},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 5,
    marginHorizontal: 4,
  },
  focusCell: {
    borderColor: '#000',
  },
});
