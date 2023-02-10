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
} from 'react-native';
import {ImagePath} from '../utils/ImagePath';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height, width} = Dimensions.get('screen');
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from 'react-native-confirmation-code-field';
import {colors} from '../assets/colors';
// import { api_url, register } from '../../Api/ApiKey';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios'

const OtpVerification = ({route, navigation}) => {
  // const otp = route.params.otp
  const CELL_COUNT = 4;

  const [mailotp, setmailotp] = useState('');

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
    <KeyboardAwareScrollView>
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
              style={{height: 200, width: 200}}
            />
          </View>
          <View style={styles.tital}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              Enter Your Email OTP
            </Text>
          </View>

          <View style={styles.phone}>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={mailotp}
              onChangeText={setmailotp}
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
          <View style={styles.tital}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              Enter Your Phone OTP
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

            <View style={styles.mailotp}></View>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={{
                height: height * 0.07,
                width: width * 0.9,
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: colors.theme_yellow1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('Login');
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
    </KeyboardAwareScrollView>
  );
};

export default OtpVerification;

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
    height: height * 0.25,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tital: {
    height: height * 0.05,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
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
  mailotp: {},

  btn: {
    height: height * 0.12,
    width: width * 0.9,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
    width: 40,
    height: 40,
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
