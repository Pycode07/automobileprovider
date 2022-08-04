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
} from 'react-native';
import {COLOR} from '../utils/Colors';
import {ImagePath} from '../utils/ImagePath';
const {height, width} = Dimensions.get('window');
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = props => {
  const [Email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(true);
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
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
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

  const onSubmit = () => {
    if (validate()) {
      //onVerifySignUp();
      props.navigation.navigate('Home');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 0, height: 250, backgroundColor: '#02024A'}}></View>
        <View style={{flex: 0, height: 500, backgroundColor: 'white'}}></View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#fff',
            position: 'absolute',
            left: 25,
            right: 25,
            top: 120,
            borderRadius: 20,
            zIndex: 99,
            paddingTop: 60,
            paddingHorizontal: 20,
          }}>
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
              <Text style={{fontSize: 11, color: '#898b8c'}}>Email</Text>
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
                fontSize: 11,
                paddingHorizontal: 15,
              }}
              keyboardType="email-address"
            />

            {errorEmail != null ? (
              <View
                style={{
                  height: height * 0.019,
                  // width: width * 1,
                  width: width / 1.3,
                  // backgroundColor: "blue",
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    marginLeft: 17,
                    // top: -height / 230,
                  }}>
                  {errorEmail}
                </Text>
              </View>
            ) : null}
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
              <Text style={{fontSize: 11, color: '#898b8c'}}>Password</Text>
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
                borderRadius: 5,
                paddingVertical: 6,
                fontSize: 11,
                paddingHorizontal: 15,
              }}
              secureTextEntry={true}
            />

            {errorPassword != null ? (
              <View
                style={{
                  height: height * 0.033,
                  width: width * 0.9,
                  justifyContent: 'center',
                  // marginTop: -verticalScale(6),
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 9,
                    marginTop: 4,
                    top: -height / 240,
                  }}>
                  {errorPassword}
                </Text>
              </View>
            ) : null}
          </View>

          <TouchableOpacity
            onPress={() => onSubmit('')}
            style={{
              height: height * 0.056,
              width: width * 0.73,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: 'navy',
              marginTop: 10,
              alignItems: 'center',
              // borderRadius: 11,
            }}>
            <View>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>Submit</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.forgotpasw}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text style={{fontSize: 14, color: 'red'}}>Forgot Password</Text>
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
            <Text style={{fontSize: 12, color: COLOR.POST_TXT}}>
              New user ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('PersonalDetails')}>
              <Text style={{fontSize: 12, color: 'green'}}> Register Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
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
