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
  StatusBar,
  Keyboard,
  Alert,
} from 'react-native';
import {COLOR} from '../utils/Colors';
import {ImagePath} from '../utils/ImagePath';
let {height, width} = Dimensions.get('screen');
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import * as UserAction from '../../Src/redux/actions/userActions';
import messaging from '@react-native-firebase/messaging';
import {colors} from '../assets/colors';
import {api_url, driver_login, fonts, set_fcm_driver} from '../config/Constant';
import {Loader} from '../components/Loader';

const Login = props => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [customeHeight, setCustomeHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCustomeHeight(0.3);
  }, []);

  const validate = () => {
    if (Email.length == 0) {
      Alert.alert('Alert!', 'Please enter your email address.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (Password.length == 0) {
      Alert.alert('Alert!', 'Please enter your password.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      const body = {
        email: Email,
        password: Password,
        fcm_token: 'dumjds',
      };
      const response = await axios.post(api_url + driver_login, body);
      if (response.data.message != 'Invalid email or password') {
        setIsLoading(false);
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
        setIsLoading(false);
        alert('Invalid email or password');
      }
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setCustomeHeight(0.2); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setCustomeHeight(0.3); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.theme_white}}>
      <StatusBar backgroundColor={colors.theme_yellow1} />
      <Loader isVisible={isLoading} />
      <View
        style={{
          flex: 0,
          height: height * 0.6,
          width: width * 0.8,
          backgroundColor: colors.theme_yellow1,
          position: 'absolute',
          top: (height * customeHeight) / 2,
          left: -width * 0.1,
          borderTopRightRadius: (height * 0.6) / 2,
          borderBottomRightRadius: (height * 0.6) / 2,
          zIndex: -1,
        }}
      />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            flex: 1,
            width: width * 0.8,
            alignSelf: 'center',
            paddingVertical: 15,
          }}>
          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../assets/Images/logo.png')}
              style={{
                width: width * 0.6,
                height: width * 0.3,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              flex: 0.7,
              justifyContent: 'center',
              alignItems: 'flex-start',
              // backgroundColor: 'green',
            }}>
            <Text
              style={{
                fontSize: 22,
                color: colors.theme_white,
                fontFamily: fonts.futura_bold,
              }}>
              Login
            </Text>
            <View
              style={{
                width: '15%',
                marginTop: 5,
                height: 4,
                backgroundColor: colors.theme_white,
              }}
            />
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{
                flex: 0,
                width: '100%',
                backgroundColor: colors.theme_white,
                borderWidth: 1,
                borderColor: colors.theme_yellow1,
                borderRadius: 5,
                marginTop: 15,
                elevation: 8,
                shadowColor: colors.theme_black5,
              }}>
              <TextInput
                value={Email}
                placeholder="Email id"
                placeholderTextColor={colors.theme_black5}
                keyboardType="email-address"
                onChangeText={txt => {
                  setEmail(txt);
                }}
                style={{
                  fontSize: 16,
                  fontFamily: fonts.futura_medium,
                  padding: 10,
                  marginVertical: 10,
                  color: colors.theme_black6,
                }}
              />
              <View
                style={{
                  flex: 0,
                  backgroundColor: colors.theme_black3,
                  height: 1,
                }}
              />
              <TextInput
                value={Password}
                placeholder="Password"
                placeholderTextColor={colors.theme_black5}
                keyboardType="visible-password"
                onChangeText={txt => {
                  setPassword(txt);
                }}
                style={{
                  fontSize: 16,
                  fontFamily: fonts.futura_medium,
                  padding: 10,
                  marginVertical: 10,
                  color: colors.theme_black6,
                }}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity
              onPress={() => onSubmit('')}
              style={{
                flex: 0,
                width: '50%',
                backgroundColor: colors.theme_white,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 5,
                borderColor: colors.theme_yellow1,
                borderWidth: 1,
                marginTop: 15,
                elevation: 8,
                shadowColor: colors.theme_black5,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.theme_yellow1,
                  fontFamily: fonts.futura_medium,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}
              style={{
                flex: 0,
                alignSelf: 'flex-end',
                paddingVertical: 10,
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.theme_yellow1,
                  fontFamily: fonts.futura_medium,
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.theme_black5,
                fontFamily: fonts.futura_medium,
              }}>
              New User ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('register')}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.theme_yellow1,
                  fontFamily: fonts.futura_medium,
                }}>
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
