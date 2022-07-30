import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
const {height, width} = Dimensions.get('window');
const ForgotPassword = props => {
  const [Phone, setPhone] = useState('');
  const [checkPhone, setCheckPhone] = useState(true);
  const [errorPhone, setErrorPhone] = useState(null);

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

  const validate = () => {
    let flag = true;
    if (Phone === '') {
      setErrorPhone('*Please enter Phone Number.');
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
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 0, height: 250, backgroundColor: '#02024A'}}></View>
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
            <Text style={{fontSize: 11, color: '#898b8c'}}>Phone</Text>
          </View>
          <TextInput
            placeholder="Enter Registered Number."
            placeholderTextColor="#02024A"
            maxLength={10}
            returnKeyType="done"
            keyboardType="number-pad"
            onChangeText={txt => {
              setPhone(txt), _Phonevalidate(txt);
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
          />

          {errorPhone != null ? (
            <View
              style={{
                height: height * 0.03,
                width: width * 0.9,
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
        <View
          style={{
            flex: 0,
            // flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            marginVertical: 35,
          }}>
          <TouchableOpacity
            onPress={() => onSubmit('')}
            style={{
              height: height * 0.06,
              width: width * 0.7,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: 'navy',
              marginTop: 10,
              alignItems: 'center',
              //   borderRadius: 11,
            }}>
            <View>
              <Text style={{fontSize: 14, color: '#FFFFFF'}}>Get OTP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
