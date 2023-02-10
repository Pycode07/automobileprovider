import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {COLOR} from '../utils/Colors';
import {ImagePath} from '../utils/ImagePath';
const {height, width} = Dimensions.get('screen');
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import * as UserAction from '../../Src/redux/actions/userActions';
import messaging from '@react-native-firebase/messaging';
import {colors} from '../assets/colors';
import {api_url, driver_login, fonts, set_fcm_driver} from '../config/Constant';

const Login = props => {
  const [Email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [Password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(true);
  const [errorPassword, setErrorPassword] = useState(null);
  const [isvisilePassword, setvisiblePassword] = useState(false);

  const _emailvalidate = mail => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //  /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if (mail === '') {
      setErrorEmail('*Please enter email.');
    } else if (!emailRegex.test(mail)) {
      setErrorEmail('*Please enter valid email.');
    } else {
      setErrorEmail(null);
    }
  };

  const _passwordvalidate = pass => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,100}$/;
    if (pass === '') {
      setErrorPassword('*Please enter password.');
    } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
      setErrorPassword(
        '*Please enter a special character and length must be 8 digit.',
      );
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('*Please enter valid password.');
    } else {
      setErrorPassword(null);
    }
  };

  const validate = () => {
    let flag = true;
    if (Email === '') {
      setErrorEmail('*Please enter email.');
      flag = false;
    }
    if (Password === '') {
      setErrorPassword('*Please enter password.');
      flag = false;
    }
    return flag;
  };

  const onSubmit = async () => {
    if (validate()) {
      const body = {
        email: Email,
        password: Password,
        fcm_token: 'dumjds',
      };
      const response = await axios.post(api_url + driver_login, body);
      console.log(response.data);
      if (response.data.message != 'Invalid email or password') {
        props.dispatch(UserAction.setUserData(response.data.result));
        await AsyncStorage.setItem('email', Email.toString());
        console.log(response.data);
        let permission = await messaging().hasPermission();
        if (permission == 1) {
          let fcmToken = await messaging().getToken();
          console.log(fcmToken);
          const response1 = await axios.post(api_url + set_fcm_driver, {
            driver_id: response.data.result.id,
            fcm: fcmToken,
          });
          console.log(response1.data);
        }
        props.navigation.navigate('Home');
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.theme_yellow1}}>
      <ScrollView
        contentContainerStyle={{
          flex: 0.9,
          width: width * 0.9,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.theme_yellow1,
        }}>
        <View
          style={{
            flex: 0,
            backgroundColor: '#fff',
            borderRadius: 20,
            paddingTop: 50,
            paddingHorizontal: 20,
            elevation: 10,
            shadowColor: colors.theme_black5,
          }}>
          <View style={{marginBottom: 15}}>
            <Text
              style={{
                color: colors.theme_yellow1,
                fontSize: 20,
                marginBottom: 10,
                fontFamily: fonts.futura_bold,
              }}>
              Login
            </Text>
            <View
              style={{
                alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginLeft: 10,
                backgroundColor: '#fff',
                bottom: -6,
                zIndex: 2,
              }}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#898b8c',
                  fontFamily: fonts.futura_medium,
                }}>
                Email
              </Text>
            </View>
            <TextInput
              placeholder="example@gmail.com"
              placeholderTextColor="black"
              maxLength={256}
              autoCapitalize="none"
              onChangeText={txt => {
                setEmail(txt), _emailvalidate(txt);
              }}
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: '#02024A',
                borderRadius: 5,
                paddingVertical: 6,
                fontFamily: fonts.futura_medium,
                fontSize: 11,
                paddingHorizontal: 15,
              }}
              keyboardType="email-address"
            />
          </View>
          <View style={{marginBottom: 15}}>
            <View
              style={{
                alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginLeft: 10,
                backgroundColor: '#fff',
                bottom: -6,
                zIndex: 2,
              }}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#898b8c',
                  fontFamily: fonts.futura_medium,
                }}>
                Password
              </Text>
            </View>

            <TextInput
              placeholder="password"
              placeholderTextColor="black"
              onChangeText={txt => {
                setPassword(txt), _passwordvalidate(txt);
              }}
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: '#02024A',
                fontFamily: fonts.futura_medium,
                borderRadius: 5,
                paddingVertical: 6,
                fontSize: 11,
                paddingHorizontal: 15,
              }}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            onPress={() => onSubmit('')}
            style={{
              height: height * 0.056,
              width: width * 0.73,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: colors.theme_yellow1,
              marginTop: 10,
              alignItems: 'center',
              // borderRadius: 11,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: '#FFFFFF',
                  fontFamily: fonts.futura_medium,
                }}>
                Submit
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.forgotpasw}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'red',
                  fontFamily: fonts.futura_medium,
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: height * 0.04,
              width: width * 0.67,
              alignSelf: 'center',
              justifyContent: 'flex-end',
              marginTop: 10,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: COLOR.POST_TXT,
                fontFamily: fonts.futura_medium,
              }}>
              New user ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('register')}>
              <Text
                style={{
                  fontSize: 12,
                  color: 'green',
                  fontFamily: fonts.futura_medium,
                }}>
                {' '}
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  forgotpasw: {
    height: height * 0.05,
    width: width * 0.71,
    alignSelf: 'center',
    // borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
