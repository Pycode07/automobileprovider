import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ImagePath} from '../utils/ImagePath';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {height, width} = Dimensions.get('window');

const Register = props => {
  const [Phone, setPhone] = useState('');
  const [checkPhone, setCheckPhone] = useState(true);
  const [errorPhone, setErrorPhone] = useState(null);

  const [Email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(true);
  const [errorEmail, setErrorEmail] = useState(null);

  const [Password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

  const [confirmpassword, setConfirmpassword] = useState(null);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

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
  const _Phonevalidate = Phone => {
    var PhoneRegex = /^([0-9]){10,14}$/;
    if (Phone === '') {
      setErrorPhone('*Please enter Phone Number.');
    } else if (!PhoneRegex.test(Phone)) {
      setErrorPhone('*Please enter valid Phone Number.');
    } else {
      setErrorPhone(null);
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

  const _confirmpassword = pass => {
    if (Password != pass) {
      setErrorConfirmPassword("*Password Don't Match");
      setCheckConfirmPassword(false);
    } else {
      setCheckConfirmPassword(true);
      setErrorConfirmPassword(null);
    }
  };

  const validate = () => {
    let flag = true;
    if (Phone === '') {
      setErrorPhone('*Please enter Phone Number.');

      flag = false;
    }
    if (Email === '') {
      setErrorEmail('*Please enter email.');
      flag = false;
    }

    if (Password === '') {
      setErrorPassword('*Please enter password.');
      flag = false;
    }

    if (confirmpassword === '') {
      setErrorC('*Please enter password.');
      flag = false;
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      // onVerifySignUp();
      props.navigation.navigate('OtpVerification');
    } else {
      alert('Something went wrong');
      // setModalVisible(!modalVisible);
    }
  };

  // ************** Register Api call Here ****************
  let Register = {
    mobileNumber: 'Phone',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'confirmpassword',
  };
  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            height: height * 0.4,
            width: width * 1,
            backgroundColor: 'navy',
          }}></View>
        <View
          style={{
            height: height * 0.6,
            width: width * 1,
            backgroundColor: '#FFFFFF',
          }}></View>
        <View
          style={{
            height: height * 0.6,
            width: width * 0.8,
            alignSelf: 'center',
            position: 'absolute',
            // backgroundColor: 'red',
            borderRadius: 8,
            backgroundColor: '#fff',
            // left: 25,
            // right: 25,
            top: 130,
            // borderRadius: 20,
            zIndex: 99,
            // paddingTop: 20,
            // paddingHorizontal: 20,
          }}>
          <View>
            <View
              style={{
                height: height * 0.03,
                width: width * 0.15,
                // alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginLeft: 20,
                backgroundColor: '#fff',
                bottom: -6,
                zIndex: 2,
              }}>
              <Text style={{fontSize: 11, color: '#898b8c'}}>Phone</Text>
            </View>
            <View style={styles.commontextV}>
              <TextInput
                placeholder="9560116872"
                placeholderTextColor="#02024A"
                maxLength={10}
                returnKeyType="done"
                keyboardType="number-pad"
                onChangeText={txt => {
                  setPhone(txt), _Phonevalidate(txt);
                }}
                style={{
                  width: '90%',
                  borderWidth: 1,
                  borderColor: '#02024A',
                  borderRadius: 5,
                  paddingVertical: 6,
                  fontSize: 11,
                  paddingHorizontal: 14,
                }}
              />
              {errorPhone != null ? (
                <View
                  style={{
                    height: height * 0.03,
                    width: width * 0.73,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      marginTop: 4,
                      top: -height / 230,
                    }}>
                    {errorPhone}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          <View>
            <View
              style={{
                height: height * 0.03,
                width: width * 0.15,
                // alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginLeft: 20,
                backgroundColor: '#fff',
                bottom: -6,
                zIndex: 2,
              }}>
              <Text style={{fontSize: 11, color: '#898b8c'}}>Email</Text>
            </View>
            <View style={styles.commontextV}>
              <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor="#02024A"
                style={{
                  width: '90%',
                  borderWidth: 1,
                  borderColor: '#02024A',
                  borderRadius: 5,
                  paddingVertical: 6,
                  fontSize: 11,
                  paddingHorizontal: 14,
                }}
                keyboardType="email-address"
                maxLength={256}
                autoCapitalize="none"
                onChangeText={txt => {
                  setEmail(txt), _emailvalidate(txt);
                }}
              />

              {errorEmail != null ? (
                <View
                  style={{
                    height: height * 0.03,
                    width: width * 0.73,
                    justifyContent: 'center',
                    // backgroundColor: "blue",
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      marginTop: 4,
                      // top: -height / 230,
                    }}>
                    {errorEmail}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          <View>
            <View
              style={{
                height: height * 0.03,
                width: width * 0.18,
                // alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginLeft: 20,
                backgroundColor: '#fff',
                bottom: -6,
                zIndex: 2,
              }}>
              <Text style={{fontSize: 11, color: '#898b8c'}}>Password</Text>
            </View>
            <View style={styles.commontextV}>
              <TextInput
                placeholder="password"
                placeholderTextColor="#02024A"
                onChangeText={txt => {
                  setPassword(txt), _passwordvalidate(txt);
                }}
                style={{
                  width: '90%',
                  borderWidth: 1,
                  borderColor: '#02024A',
                  borderRadius: 5,
                  paddingVertical: 6,
                  fontSize: 11,
                  paddingHorizontal: 14,
                }}
                secureTextEntry={true}
              />

              {errorPassword != null ? (
                <View
                  style={{
                    height: height * 0.03,
                    width: width * 0.73,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      marginTop: 5,
                    }}>
                    {errorPassword}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          <View>
            <View
              style={{
                height: height * 0.03,
                width: width * 0.3,
                // alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
                marginLeft: 20,
                backgroundColor: '#fff',
                bottom: -6,
                zIndex: 2,
              }}>
              <Text style={{fontSize: 11, color: '#898b8c'}}>
                Confirm Password
              </Text>
            </View>
            <View style={styles.commontextV}>
              <TextInput
                placeholder=" confirm password"
                placeholderTextColor="#02024A"
                onChangeText={txt => {
                  setConfirmpassword(txt), _confirmpassword(txt);
                }}
                style={{
                  width: '90%',
                  borderWidth: 1,
                  borderColor: '#02024A',
                  borderRadius: 5,
                  paddingVertical: 6,
                  fontSize: 11,
                  paddingHorizontal: 14,
                }}
                secureTextEntry={true}
              />

              {errorConfirmPassword != null ? (
                <View
                  style={{
                    height: height * 0.03,
                    width: width * 0.73,
                    justifyContent: 'center',
                    // backgroundColor: "blue",
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      marginTop: 5,
                    }}>
                    {errorConfirmPassword}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              marginVertical: 35,
            }}>
            <Text style={{fontSize: 20, color: '#02024A', fontWeight: '600'}}>
              SignUp
            </Text>
            <TouchableOpacity
              // onPress={() => onSubmit()}
              onPress={() => props.navigation.navigate('OtpVerification')}>
              <Image source={ImagePath.NEXT_BTN} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  commontextV: {
    height: height * 0.09,
    width: width * 0.8,
    // justifyContent:'center'
    // borderWidth: 1,
    alignItems: 'center',
  },
});
