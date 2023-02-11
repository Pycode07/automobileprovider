import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {COLOR} from '../../utils/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import axios from 'axios';
import * as UserAction from '../../redux/actions/userActions';
import {colors} from '../../assets/colors';
import {
  api_url,
  driver_get_kyc,
  driver_update_kyc,
  fonts,
} from '../../config/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {height, width} = Dimensions.get('window');

const Kyc = props => {
  const [count, setCount] = useState(0);
  const [remain, setRemain] = useState(0);
  const [bankName, setBankName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [addarNumber, setAddarNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');

  useEffect(() => {
    props.navigation.setOptions({
      headerStyle: {backgroundColor: colors.theme_white},
      headerTitleStyle: {color: colors.theme_white},
      headerTintColor: '#F7931E',
      headerLeft: () => {
        return (
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <AntDesign
                name="leftcircleo"
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
              KYC
            </Text>
          </View>
        );
      },
    });
  }, []);

  const updateKYC = async () => {
    if (
      bankName != '' &&
      bankAccountNumber != '' &&
      ifscCode != '' &&
      addarNumber != '' &&
      panNumber != ''
    ) {
      try {
        const body = {
          driver_id: props?.userData.id,
          bank_name: bankName,
          bank_account_number: bankAccountNumber,
          ifsc_code: ifscCode,
          aadhar_number: addarNumber,
          pan_number: panNumber,
          total_capacity: count,
        };
        const response = await axios.post(api_url + driver_update_kyc, body);
        console.log('response', response.data);
        ToastAndroid.show(
          'Update successfully!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        props.dispatch(UserAction.setTotalCapacity(count));
      } catch (error) {
        console.log('accpetReject', error.message);
      }
    } else {
      Alert.alert('Alert!', 'Please fill all fields');
    }
  };

  const getKycDetails = async () => {
    const response = await axios.post(api_url + driver_get_kyc, {
      driver_id: props?.userData.id,
    });
    if (response.data.message == 'Success') {
      setAddarNumber(response.data.result.aadhar_number);
      setBankName(response.data.result.bank_name);
      setBankAccountNumber(response.data.result.bank_account_number);
      setIfscCode(response.data.result.ifsc_code);
      setPanNumber(response.data.result.pan_number);
      setCount(response.data.result.total_capacity);
    }
    console.log(response.data);
  };

  useEffect(() => {
    getKycDetails();
  }, []);

  return (
    <KeyboardAvoidingView>
      <ScrollView
        style={{flex: 0, backgroundColor: colors.theme_black0}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 0, marginHorizontal: 25, marginBottom: 25}}>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>Bank Details</Text>
          </View>
          <TextInput
            placeholder="Bank Name"
            style={styles.inputStyle}
            placeholderTextColor="black"
            onChangeText={t => setBankName(t)}>
            {bankName}
          </TextInput>
          <TextInput
            placeholder="Bank Account Number"
            style={styles.inputStyle}
            placeholderTextColor="black"
            onChangeText={t => setBankAccountNumber(t)}>
            {bankAccountNumber}
          </TextInput>
          <TextInput
            placeholder="IFSC Code"
            style={styles.inputStyle}
            placeholderTextColor="black"
            onChangeText={t => setIfscCode(t)}>
            {ifscCode}
          </TextInput>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>KYC Update</Text>
          </View>
          <TextInput
            placeholder="Aadhar Number"
            style={styles.inputStyle}
            onChangeText={t => setAddarNumber(t)}>
            {addarNumber}
          </TextInput>
          <View style={styles.kycDoc}>
            <Image
              source={ImagePath.ADHAR}
              style={{
                width: width * 0.4,
                height: width * 0.25,
                borderRadius: 10,
                borderColor: '#02024A',
                borderWidth: 1,
              }}
              resizeMode="cover"
            />
            <Image
              source={ImagePath.ADHAR_BACK}
              style={{
                width: width * 0.4,
                height: width * 0.25,
                borderRadius: 10,
                borderColor: '#02024A',
                borderWidth: 1,
              }}
              resizeMode="cover"
            />
          </View>
          <TextInput
            placeholder="PAN Number"
            style={styles.inputStyle}
            onChangeText={t => setPanNumber(t)}>
            {panNumber}
          </TextInput>
          <View style={styles.kycDoc}>
            <Image
              source={ImagePath.PAN}
              style={{
                width: width * 0.4,
                height: width * 0.25,
                borderRadius: 10,
                borderColor: '#02024A',
                borderWidth: 1,
              }}
              resizeMode="cover"
            />
            <Image
              source={ImagePath.PAN_BACK}
              style={{
                width: width * 0.4,
                height: width * 0.25,
                borderRadius: 10,
                borderColor: '#02024A',
                borderWidth: 1,
              }}
              resizeMode="cover"
            />
          </View>

          {/* <View
            style={{
              height: height * 0.13,
              width: width * 0.9,
              alignSelf: 'center',
              // borderWidth: 1,
            }}>
            <View style={styles.capacitymain}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.capcity}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '500',
                      color: COLOR.BLACK,
                    }}>
                    Total Capacity
                  </Text>
                </View>

                <View style={styles.capcity1}>
                  <View style={styles.count}>
                    <TouchableOpacity
                      onPress={() => {
                        if (count > 0) {
                          setCount(count - 1);
                        }
                      }}>
                      <Image
                        source={ImagePath.MINUS}
                        resizeMode="contain"
                        style={{height: 28, width: 28}}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.count}>
                    <Text
                      style={{
                        fontSize: 21,
                        fontWeight: 'bold',
                        color: COLOR.BLACK,
                      }}>
                      {count}
                    </Text>
                  </View>
                  <View style={styles.count}>
                    <TouchableOpacity
                      onPress={() => {
                        setCount(count + 1);
                      }}>
                      <Image
                        source={ImagePath.PLUS}
                        resizeMode="contain"
                        style={{height: 28, width: 28}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View> */}
          <View
            style={{
              height: height * 0.13,
              width: width * 0.9,
              alignSelf: 'center',
              // borderWidth: 1,
            }}>
            <TouchableOpacity
              onPress={updateKYC}
              style={{
                width: width * 0.9,
                paddingVertical: 10,
                alignSelf: 'center',
                borderRadius: 5,
                backgroundColor: colors.theme_yellow1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fonts.futura_bold,
                  color: colors.theme_white,
                }}>
                UPDATE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const mapStateToProps = state => ({
  userData: state.user.userData,
});
const mapDispatchToProps = dispatch => ({dispatch});
export default connect(mapStateToProps, mapDispatchToProps)(Kyc);

const styles = StyleSheet.create({
  headingView: {
    marginVertical: 15,
  },
  headingText: {
    color: '#000',
    fontSize: 16,
    fontFamily: fonts.futura_bold,
  },
  inputStyle: {
    fontSize: 13,
    color: '#454545',
    borderWidth: 1,
    borderColor: colors.theme_black5,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: colors.theme_black5,
    marginBottom: 20,
    paddingLeft: 15,
    paddingVertical: 12,
    fontFamily: fonts.futura_medium,
  },
  kycDoc: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 15,
  },
  capacitymain: {
    height: height * 0.09,
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  capcity: {
    height: height * 0.07,
    width: width * 0.43,
    justifyContent: 'center',
  },
  capcity1: {
    height: height * 0.07,
    width: width * 0.45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    height: height * 0.05,
    width: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
