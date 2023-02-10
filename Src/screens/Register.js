import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from '../assets/colors';
import {api_url, driver_register_new, fonts} from '../config/Constant';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import * as UserAction from '../redux/actions/userActions';
import {useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import {Loader} from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';

const Register = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerLeft: () => {
        return <Header title="Register" navigation={props.navigation} />;
      },
    });
  }, []);
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);
  const [marid, setMarid] = useState(false);
  const [unmerid, setUnmerid] = useState(true);
  const [onwe, setOwned] = useState(true);
  const [rented, setRented] = useState(false);
  const [birthDateVisibality, setBirthDateVisibality] = React.useState(false);
  const [birthDate, setBirthDate] = React.useState('Select Birth Date');
  const [currentBirthDate, setCurrentBirthDate] = React.useState(new Date());
  const [FirstName, setFirstName] = useState('');
  const [surName, setsurName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [date, setdate] = useState('');
  const [errordate, setErrordate] = useState('');
  const [Phone, setPhone] = useState('');
  const [Adhar, setAdhar] = useState('');
  const [Pan, setPan] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [secandryMobileNumber, setSecandryMobileNumber] = useState('');
  const [age, setAge] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);

  const email_validation = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };
  const validate = () => {
    if (FirstName.length == 0) {
      Alert.alert('Alert!', 'Please enter your first name.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (surName.length == 0) {
      Alert.alert('Alert!', 'Please enter your last name.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (fatherName.length == 0) {
      Alert.alert('Alert!', 'Please enter your father name.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (Phone.length == 0) {
      Alert.alert('Alert!', 'Please enter your phone number.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (Phone.length < 10 && Phone.length > 10) {
      Alert.alert('Alert!', 'Please enter correct phone number.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (secandryMobileNumber.length == 0) {
      Alert.alert('Alert!', 'Please enter your Aleternate number.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (
      secandryMobileNumber.length < 10 &&
      secandryMobileNumber.length > 10
    ) {
      Alert.alert('Alert!', 'Please enter correct aletrnate number.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (email.length == 0) {
      Alert.alert('Alert!', 'Please enter your email address.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (email_validation()) {
      Alert.alert('Alert!', 'Please enter correct email address.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (password.length == 0) {
      Alert.alert('Alert!', 'Please enter your password.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (passwordAgain.length == 0) {
      Alert.alert('Alert!', 'Please enter your password again.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (passwordAgain != password) {
      Alert.alert('Alert!', 'Your password does not match.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (Pan.length == 0) {
      Alert.alert('Alert!', 'Please enter your pan number.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (Adhar.length == 0) {
      Alert.alert('Alert!', 'Please enter your aadhar number.', [
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
      await axios({
        method: 'post',
        url: api_url + driver_register_new,
        data: {
          first_name: FirstName,
          last_name: surName,
          father_name: fatherName,
          date_of_birth: moment(birthDate).format('YYYY-MM-DD'),
          age: age,
          gender: male == true ? 1 : 2,
          relationship_status: marid == true ? 2 : 1,
          phone_number: Phone,
          fcm_token: 'sdnhfjkdsf',
          phone_number2: secandryMobileNumber,
          pancard_num: Pan,
          id_proof: Adhar,
          address_type: onwe == true ? 1 : 2,
          city: 'none', //city,
          area: 'none', //area,
          pincode: 'none', //pin,
          email: email,
          password: password,
        },
      })
        .then(async res => {
          setIsLoading(false);
          await AsyncStorage.setItem('email', email.toString());
          props.dispatch(UserAction.setUserData(res.data.result));
          props.navigation.navigate('GrageDetails');
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    }
  };

  function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  }

  const setTravelingDateFromPicker = (d, date) => {
    if (d.type === 'set') {
      setBirthDateVisibality(false);
      setBirthDate(date);
      setCurrentBirthDate(date);
      calculateAge(date);
    } else {
      setBirthDateVisibality(false);
    }
  };
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[colors.theme_white, colors.theme_yellow2]}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <Loader isVisible={isLoading} />
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, width: '90%', alignSelf: 'center'}}>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                First Name
              </Text>
              <TextInput
                value={FirstName}
                placeholder="Enter your first name"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setFirstName(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Last Name
              </Text>
              <TextInput
                value={surName}
                placeholder="Enter your last name"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setsurName(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Father's Name
              </Text>
              <TextInput
                value={fatherName}
                placeholder="Enter your father name"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setFatherName(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Phone Number
              </Text>
              <TextInput
                value={Phone}
                placeholder="Enter your phone number"
                keyboardType="number-pad"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setPhone(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Aletrnate Phone Number
              </Text>
              <TextInput
                value={secandryMobileNumber}
                placeholder="Enter your another phone number"
                keyboardType="number-pad"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setSecandryMobileNumber(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Email
              </Text>
              <TextInput
                placeholder="Enter your email id"
                keyboardType="email-address"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setEmail(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Password
              </Text>
              <TextInput
                value={password}
                placeholder="Password"
                placeholderTextColor={colors.theme_black5}
                secureTextEntry
                onChangeText={txt => {
                  setPassword(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Confirm Password
              </Text>
              <TextInput
                value={passwordAgain}
                placeholder="Enter your password again"
                keyboardType="visible-password"
                placeholderTextColor={colors.theme_black5}
                onChangeText={text => {
                  setPasswordAgain(text);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Pan Card
              </Text>
              <TextInput
                value={Pan}
                placeholder="Enter your pancard id number"
                autoCapitalize="characters"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setPan(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Aadhar Card
              </Text>
              <TextInput
                value={Adhar}
                placeholder="Enter your aadhar card number"
                placeholderTextColor={colors.theme_black5}
                keyboardType="number-pad"
                onChangeText={txt => {
                  setAdhar(txt);
                }}
                style={{
                  borderBottomWidth: 1,
                  fontSize: 14,
                  color: colors.theme_black7,
                  fontFamily: fonts.futura_medium,
                  borderBottomColor: colors.theme_yellow1,
                }}
              />
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Date of Birth
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setBirthDateVisibality(!birthDateVisibality);
                }}
                activeOpacity={0.8}
                style={{
                  flex: 0,
                  paddingVertical: 15,
                  paddingHorizontal: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.theme_yellow1,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: fonts.futura_medium,
                    color: colors.theme_black5,
                  }}>
                  {birthDate != 'Select Birth Date'
                    ? moment(birthDate).format('Do MMMM YYYY')
                    : birthDate}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Gender
              </Text>
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  paddingVertical: 15,
                  paddingHorizontal: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.theme_yellow1,
                }}>
                <BouncyCheckbox
                  isChecked={male}
                  disableBuiltInState
                  size={16}
                  fillColor={colors.theme_yellow1}
                  unfillColor="#FFFFFF"
                  text="Male"
                  onPress={() => {
                    setMale(true), setFemale(false);
                  }}
                  iconStyle={{
                    borderColor: colors.theme_yellow1,
                    borderRadius: 2,
                  }}
                  textStyle={{
                    fontSize: 14,
                    color: colors.theme_black5,
                    fontFamily: fonts.futura_medium,
                    textDecorationLine: 'none',
                  }}
                />

                <BouncyCheckbox
                  isChecked={female}
                  disableBuiltInState
                  size={16}
                  fillColor={colors.theme_yellow1}
                  unfillColor="#FFFFFF"
                  text="Female"
                  iconStyle={{
                    borderColor: colors.theme_yellow1,
                    borderRadius: 2,
                    margninRight: -10,
                  }}
                  textStyle={{
                    fontSize: 14,
                    color: colors.theme_black5,
                    fontFamily: fonts.futura_medium,
                    textDecorationLine: 'none',
                  }}
                  onPress={() => {
                    setMale(false), setFemale(true);
                  }}
                  style={{marginLeft: 15}}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Relationship Status
              </Text>
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  paddingVertical: 15,
                  paddingHorizontal: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.theme_yellow1,
                }}>
                <BouncyCheckbox
                  isChecked={unmerid}
                  disableBuiltInState
                  size={16}
                  fillColor={colors.theme_yellow1}
                  unfillColor="#FFFFFF"
                  text="Single"
                  onPress={() => {
                    setUnmerid(true), setMarid(false);
                  }}
                  iconStyle={{
                    borderColor: colors.theme_yellow1,
                    borderRadius: 2,
                  }}
                  textStyle={{
                    fontSize: 14,
                    color: colors.theme_black5,
                    fontFamily: fonts.futura_medium,
                    textDecorationLine: 'none',
                  }}
                />

                <BouncyCheckbox
                  isChecked={marid}
                  disableBuiltInState
                  size={16}
                  fillColor={colors.theme_yellow1}
                  unfillColor="#FFFFFF"
                  text="Married"
                  iconStyle={{
                    borderColor: colors.theme_yellow1,
                    borderRadius: 2,
                    margninRight: -10,
                  }}
                  textStyle={{
                    fontSize: 14,
                    color: colors.theme_black5,
                    fontFamily: fonts.futura_medium,
                    textDecorationLine: 'none',
                  }}
                  onPress={() => {
                    setUnmerid(false), setMarid(true);
                  }}
                  style={{marginLeft: 15}}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0,
                backgroundColor: colors.theme_white,
                elevation: 8,
                padding: 10,
                marginBottom: 15,
                shadowColor: colors.theme_black4,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontFamily: fonts.futura_bold,
                }}>
                Permanent Address
              </Text>
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  paddingVertical: 15,
                  paddingHorizontal: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.theme_yellow1,
                }}>
                <BouncyCheckbox
                  isChecked={onwe}
                  disableBuiltInState
                  size={16}
                  fillColor={colors.theme_yellow1}
                  unfillColor="#FFFFFF"
                  text="Owned"
                  onPress={() => {
                    setOwned(true), setRented(false);
                  }}
                  iconStyle={{
                    borderColor: colors.theme_yellow1,
                    borderRadius: 2,
                  }}
                  textStyle={{
                    fontSize: 14,
                    color: colors.theme_black5,
                    fontFamily: fonts.futura_medium,
                    textDecorationLine: 'none',
                  }}
                />

                <BouncyCheckbox
                  isChecked={rented}
                  disableBuiltInState
                  size={16}
                  fillColor={colors.theme_yellow1}
                  unfillColor="#FFFFFF"
                  text="Rented"
                  iconStyle={{
                    borderColor: colors.theme_yellow1,
                    borderRadius: 2,
                    margninRight: -10,
                  }}
                  textStyle={{
                    fontSize: 14,
                    color: colors.theme_black5,
                    fontFamily: fonts.futura_medium,
                    textDecorationLine: 'none',
                  }}
                  onPress={() => {
                    setOwned(false), setRented(true);
                  }}
                  style={{marginLeft: 15}}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                onSubmit();
              }}
              style={{
                flex: 0,
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 5,
                marginBottom: 25,
                marginTop: 10,
                alignSelf: 'center',
                backgroundColor: colors.theme_yellow1,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_white,
                  fontFamily: fonts.futura_bold,
                }}>
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {Platform.OS == 'android' ? (
          birthDateVisibality ? (
            <DateTimePicker
              value={currentBirthDate}
              maximumDate={new Date()}
              display={'calendar'}
              mode="date"
              onChange={setTravelingDateFromPicker}
            />
          ) : null
        ) : null}
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(null, mapDispatchToProps)(Register);
