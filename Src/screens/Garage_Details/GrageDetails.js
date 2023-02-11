import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Modal,
  ToastAndroid,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import CustomButton from '../../components/Buttons/CustomButton';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
const {height, width} = Dimensions.get('window');
import * as UserAction from '../../redux/actions/userActions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

import DocumentPicker, {types} from 'react-native-document-picker';
import {colors} from '../../assets/colors';
import {
  api_url,
  driver_add_garage,
  fonts,
  garage_document,
} from '../../config/Constant';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {Loader} from '../../components/Loader';
const GrageDetails = props => {
  const [form, setForm] = useState({
    owned: false,
    rented: true,
  });

  const [addres, setAddress] = useState('');
  const [pin, setPin] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [entityType, setEntityType] = useState(1);
  const [website, setWebsite] = useState('null');
  const [imagedData, setImagedData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerLeft: () => {
        return <Header title="Add Garage" navigation={props.navigation} />;
      },
    });
  }, []);

  const validate = () => {
    if (addres.length == 0) {
      Alert.alert('Alert!', 'Please enter your address', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (area.length == 0) {
      Alert.alert('Alert!', 'Please enter your state', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (city == 0) {
      Alert.alert('Alert!', 'Please enter your city', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (pin.length == 0) {
      Alert.alert('Alert!', 'Please enter your pincode number.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (FirstName.length == 0) {
      Alert.alert('Alert!', 'Please enter your owner name', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
      return false;
    } else if (imagedData.length == 0) {
      Alert.alert('Alert!', 'Please attach your documents.', [
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

  const imagePicker = () => {
    DocumentPicker.pick({
      type: types.pdf,
    }).then(response => {
      setImagedData(response);
    });
  };

  const onSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      try {
        await axios({
          method: 'post',
          url: api_url + driver_add_garage,
          data: {
            full_address: addres,
            area: area,
            city: city,
            pincode: pin,
            email: 'none@gmail.com', //Email,
            website: website,
            garage: form.owned == true ? 1 : 2,
            garage_owner_name: FirstName,
            type_of_entity: entityType,
            driver_id: props?.userData?.id,
          },
        })
          .then(async res => {
            console.log(res.data);
            setIsLoading(false);
            if (res.data.status == 1) {
              await RNFetchBlob.fetch(
                'POST',
                api_url + garage_document,
                {
                  'Content-Type': 'multipart/form-data',
                },
                [
                  {
                    name: 'garage_document',
                    filename: `garage_document${res.data.result.id}.pdf`,
                    type: 'application/pdf',
                    data: decodeURIComponent(imagedData[0].uri),
                  },
                  {
                    name: 'id',
                    data: res.data.result.id.toString(),
                  },
                ],
              )
                .then(async resp => {
                  setIsLoading(false);
                  props.dispatch(
                    UserAction.setGrageData(JSON.parse(resp.data).result),
                  );
                  ToastAndroid.show(
                    'Profile is under verification',
                    ToastAndroid.SHORT,
                  );
                  props.navigation.replace('Login');
                  // alert('Successfully updated');
                })
                .catch(err => {
                  setIsLoading(false);
                  console.log(err);
                });
            }
          })
          .catch(err => {
            setIsLoading(false);
            console.log(err);
          });
      } catch (error) {
        setIsLoading(false);
        console.log('asdasd', error.message);
      }
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
                Garage Address
              </Text>
              <TextInput
                value={addres}
                placeholder="Enter your garage address"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setAddress(txt);
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
                State
              </Text>
              <TextInput
                value={area}
                placeholder="Enter your state name"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setArea(txt);
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
                City
              </Text>
              <TextInput
                value={city}
                placeholder="Enter your city name"
                placeholderTextColor={colors.theme_black5}
                onChangeText={txt => {
                  setCity(txt);
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
                Pincode
              </Text>
              <TextInput
                value={pin}
                placeholder="Enter your pincode number"
                placeholderTextColor={colors.theme_black5}
                keyboardType="number-pad"
                onChangeText={txt => {
                  setPin(txt);
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
                  isChecked={form.owned}
                  disableBuiltInState
                  size={16}
                  fillColor={colors.theme_yellow1}
                  unfillColor="#FFFFFF"
                  text="Owned"
                  onPress={() => {
                    setForm({owned: true, rented: false});
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
                  isChecked={form.rented}
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
                    setForm({rented: true, owned: false});
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
                Owner's Name
              </Text>
              <TextInput
                value={FirstName}
                placeholder="Enter your owner's name"
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
                Attach Garage Ownership/Rent Agreement
              </Text>
              <TouchableOpacity
                onPress={imagePicker}
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
                  {imagedData != '' ? imagedData[0].name : 'Attach file'}
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
                Type of Entity
              </Text>
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  paddingVertical: 15,
                  paddingHorizontal: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.theme_yellow1,
                }}>
                <TouchableOpacity
                  onPress={() => setEntityType(1)}
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 3,
                    backgroundColor:
                      entityType == 1
                        ? colors.green_color1
                        : colors.theme_yellow1,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.theme_white,
                      fontFamily: fonts.futura_medium,
                    }}>
                    Properitor Firm
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEntityType(2)}
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 3,
                    backgroundColor:
                      entityType == 2
                        ? colors.green_color1
                        : colors.theme_yellow1,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.theme_white,
                      fontFamily: fonts.futura_medium,
                    }}>
                    Partnership Firm
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEntityType(3)}
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 3,
                    backgroundColor:
                      entityType == 3
                        ? colors.green_color1
                        : colors.theme_yellow1,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.theme_white,
                      fontFamily: fonts.futura_medium,
                    }}>
                    LLP
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEntityType(4)}
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 3,
                    backgroundColor:
                      entityType == 4
                        ? colors.green_color1
                        : colors.theme_yellow1,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.theme_white,
                      fontFamily: fonts.futura_medium,
                    }}>
                    OPC
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEntityType(5)}
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 3,
                    backgroundColor:
                      entityType == 5
                        ? colors.green_color1
                        : colors.theme_yellow1,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.theme_white,
                      fontFamily: fonts.futura_medium,
                    }}>
                    Company
                  </Text>
                </TouchableOpacity>
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
                ADD GARAGE
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData,
});

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(GrageDetails);

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    width: width * 1,
    // borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme_yellow1,
  },
  backbtn: {
    height: height * 0.05,
    width: width * 0.2,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titaltxxt: {
    height: height * 0.05,
    width: width * 0.6,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Address: {
    height: height * 0.13,
    width: width * 0.9,
    alignSelf: 'center',
    // borderWidth: 1
  },
  // render Area styling
  Area: {
    height: height * 0.15,
    width: width * 0.9,
    alignSelf: 'center',
    // borderWidth: 1,
    flexDirection: 'row',
  },
  city: {
    height: height * 0.14,
    width: width * 0.3,
    // borderWidth: 1,
  },
  textInpt: {
    height: height * 0.07,
    width: width * 0.28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.BACK_BORDER,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaPin: {
    height: height * 0.05,
    width: width * 0.29,
    // borderWidth: 1,
  },
  //=============== Email styling ========
  commTextinput: {
    height: height * 0.07,
    width: width * 0.9,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.BACK_BORDER,
  },
  EmailV: {
    height: height * 0.26,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
  },

  //=========Grage styling =====

  GrageV: {
    height: height * 0.1,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
  },
  gragecheck: {
    height: height * 0.05,
    width: width * 0.3,
    // borderWidth: 1,
    flexDirection: 'row',
  },
  //========ownera name=====
  OwnernameV: {
    height: height * 0.1,
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  WebsideMAIN: {
    height: height * 0.14,
    width: width * 0.45,
    // borderWidth: 1,
  },
  webside: {
    height: height * 0.075,
    width: width * 0.43,
    borderRadius: 8,
    borderWidth: 1,

    justifyContent: 'center',
    // alignItems: 'center',
  },
  ownName: {
    height: height * 0.05,
    width: width * 0.44,
    // borderWidth: 1,
    justifyContent: 'center',
  },

  // ========== entity ==========

  Entity: {
    height: height * 0.45,
    width: width * 0.9,
    alignSelf: 'center',
    // borderWidth: 1,
  },
  KmP: {
    // height: height * 0.4,
    // width: width * 0.6,
    // borderWidth: 1,
  },

  Enitycheck: {
    height: height * 0.045,
    width: width * 0.44,
    // borderWidth: 1,
    // flexDirection: 'row',
  },
  cheekk: {
    height: height * 0.045,
    width: width * 0.45,
    backgroundColor: 'rgb(225,225,225)',
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 8,
  },
  Nxtbtn: {
    height: height * 0.2,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
  },

  //============ Modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: height * 0.4,
    width: width * 0.7,
  },

  cheekkModal: {
    height: height * 0.045,
    width: width * 0.45,
    // backgroundColor: 'rgb(225,225,225)',
    // justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 8,
  },
  nofPar: {
    height: height * 0.074,
    width: width * 0.6,
    // borderWidth: 1,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  nofParname: {
    height: height * 0.075,
    width: width * 0.7,
    // borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
