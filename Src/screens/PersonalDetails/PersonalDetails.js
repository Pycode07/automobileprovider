import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/Buttons/CustomButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';

const {height, width} = Dimensions.get('window');

const PersonalDetails = props => {
  // ==========  single select state =============
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const [marid, setMarid] = useState(false);
  const [unmerid, setUnmerid] = useState(false);

  const [onwe, setOwned] = useState(false);
  const [rented, setRented] = useState(false);
  // ==========  single select state End =============

  // ==========  Validaiton start here ========== =============

  const [FirstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState(null);

  const [surName, setsurName] = useState('');
  const [errorsurName, setErrorsurName] = useState(null);

  const [fatherName, setFatherName] = useState('');
  const [errorfatherName, setErrorFatherName] = useState(null);

  const [date, setdate] = useState('');
  const [errordate, setErrordate] = useState('');

  const [Phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(null);

  const [Adhar, setAdhar] = useState('');
  const [errorAdhar, setErrorAdhar] = useState(null);

  const [Pan, setPan] = useState('');
  const [errorPan, setErrorPan] = useState(null);

  const [area, setArea] = useState('');
  const [errorArea, setErrorArea] = useState(null);

  const [city, setCity] = useState('');
  const [errorCity, setErrorCity] = useState(null);

  const [pin, setPin] = useState('');
  const [errorPin, setErrorPin] = useState(null);

  const _validateFirstName = fname => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (fname == '' || fname == undefined || fname == null) {
      setErrorFirstName('*Please enter first name.');
    } else if (!fnameRegex.test(fname)) {
      setErrorFirstName('*Please enter valid first name.');
    } else {
      setErrorFirstName(null);
    }
  };
  const _validatesurName = lname => {
    var lnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (lname == '' || lname == undefined || lname == null) {
      setErrorsurName('*Please enter Surname.');
    } else if (!lnameRegex.test(lname)) {
      setErrorsurName('*Please enter valid surname.');
    } else {
      setErrorsurName(null);
    }
  };

  const _validateFatherName = fatname => {
    var fathernameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (fatname == '' || fatname == undefined || fatname == null) {
      setErrorFatherName('*Please enter father name.');
    } else if (!fathernameRegex.test(fatname)) {
      setErrorFatherName('*Please enter valid father name.');
    } else {
      setErrorFatherName(null);
    }
  };

  const _Datevalidate = date => {
    var DateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (date === '') {
      setErrordate('*Please enter correct Dob.');
    } else if (!DateRegex.test(date)) {
      setErrordate('*Please enter valid Dob.');
    } else {
      setErrordate(null);
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

  const _Panvalidate = Pan => {
    var PanRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (Pan === '') {
      setErrorPan('*Please enter Pan card number.');
    } else if (!PanRegex.test(Pan)) {
      setErrorPan('*Please enter valid Pan card Number.');
    } else {
      setErrorPan(null);
    }
  };

  const _Adharvalidate = adhar => {
    var AdharRegex = /^\d{4}\d{4}\d{4}$$/;
    var PassportRegex = /^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$/;
    var VoterRegex = /^([a-zA-Z]){3}([0-9]){7}?$/;
    var DLRegex =
      /^(([A-Z]{2}[0-9]{2})|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;

    if (adhar === '') {
      setErrorAdhar('*Please enter Anyone.');
    } else if (
      !(
        AdharRegex.test(adhar) |
        PassportRegex.test(adhar) |
        VoterRegex.test(adhar) |
        DLRegex.test(adhar)
      )
    ) {
      setErrorAdhar('*Please enter correct Details.');
    } else {
      setErrorAdhar(null);
    }
  };

  const _Areavalidate = area => {
    var areaRegex =
      /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    if (area === '') {
      setErrorArea('*Enter area name.');
    } else if (!areaRegex.test(area)) {
      setErrorArea('*this feild is require.');
    } else {
      setErrorArea(null);
    }
  };

  const _Cityvalidate = pin => {
    var cityRegex =
      /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    if (pin === '') {
      setErrorCity('*this feild is require.');
    } else if (!cityRegex.test(pin)) {
      setErrorCity('* this feild is require.');
    } else {
      setErrorCity(null);
    }
  };

  const _Pinvalidate = pin => {
    var pinRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    if (pin === '') {
      setErrorPin('*Enter area Pincode.');
    } else if (!pinRegex.test(pin)) {
      setErrorPin('*Enter valid Pincode.');
    } else {
      setErrorPin(null);
    }
  };

  const validate = () => {
    let flag = true;
    if (FirstName === '') {
      setErrorFirstName('*Please enter First Name.');
      flag = false;
    }

    if (surName === '') {
      setErrorsurName('*Please enter Surname Name');
      flag = false;
    }

    if (fatherName === '') {
      setErrorFatherName('*Please enter Father Name');
      flag = false;
    }

    if (Phone === '') {
      setErrorPhone('*Please enter Phone Number.');
      flag = false;
    }

    if (date === '') {
      setErrordate('*Please enter DOB.');
      flag = false;
    }

    if (Pan === '') {
      setErrordate('*Please enter Pan No.');
      flag = false;
    }

    if (Adhar === '') {
      setErrorAdhar('*Please enter Any one Details.');
      flag = false;
    }

    if (area === '') {
      setErrorPin('*Enter area.');
      flag = false;
    }

    if (city === '') {
      setErrorPin('*Enter city.');
      flag = false;
    }

    if (pin === '') {
      setErrorPin('*Enter pincode.');
      flag = false;
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      // onVerifySignUp();
      props.navigation.navigate('GrageDetails');
    } else {
      alert('Please Enter All Require Details');
    }
  };

  // ==========  Validaiton End  here ========== =============

  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={styles.header}>
          <View style={styles.backbtn}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image source={ImagePath.BlACK_BACK_ARROW} resizeMode="center" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: height * 0.04,
              width: width * 0.66,
              alignSelf: 'center',
              // borderWidth: 1,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLOR.BACK_BORDER,
                fontSize: 20,
                fontWeight: '900',
              }}>
              Personal Details
            </Text>
          </View>
        </View>
        <View style={styles.upper}>
          <View style={styles.Address}>
            <View style={styles.tital}>
              <Text style={styles.txxt}>First Name</Text>
            </View>
            <View style={styles.commTextinput}>
              <TextInput
                placeholder="Enter your first name"
                color={COLOR.TXT_INPT_COLOR}
                placeholderTextColor="#C5C5C5"
                keyboardType="default"
                maxLength={30}
                autoCorrect={false}
                onChangeText={txt => {
                  setFirstName(txt), _validateFirstName(txt);
                }}
              />
            </View>

            {errorFirstName != null ? (
              <View
                style={{
                  height: height * 0.02,
                  // width: width * 1,
                  width: width / 1.3,
                  // backgroundColor: "blue",
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    marginLeft: 9,
                  }}>
                  {errorFirstName}
                </Text>
              </View>
            ) : null}
          </View>

          <View style={styles.Address}>
            <View style={styles.tital}>
              <Text style={styles.txxt}>Last Name</Text>
            </View>
            <View style={styles.commTextinput}>
              <TextInput
                placeholder="Enter your Last name"
                color={COLOR.TXT_INPT_COLOR}
                placeholderTextColor="#C5C5C5"
                keyboardType="default"
                maxLength={30}
                onChangeText={txt => {
                  setsurName(txt), _validatesurName(txt);
                }}
                autoCorrect={false}
              />
            </View>

            {errorsurName != null ? (
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
                    marginLeft: 10,
                  }}>
                  {errorsurName}
                </Text>
              </View>
            ) : null}
          </View>

          <View style={styles.Address}>
            <View style={styles.tital}>
              <Text style={styles.txxt}>Father's Name</Text>
            </View>
            <View style={styles.commTextinput}>
              <TextInput
                placeholder="Father's Name"
                color={COLOR.TXT_INPT_COLOR}
                placeholderTextColor={COLOR.GREY}
                keyboardType="default"
                maxLength={30}
                autoCorrect={false}
                onChangeText={txt => {
                  setFatherName(txt), _validateFatherName(txt);
                }}
              />
            </View>

            {errorfatherName != null ? (
              <View
                style={{
                  height: height * 0.02,
                  // width: width * 1,
                  width: width / 1.3,
                  // backgroundColor: "blue",
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    marginLeft: 9,
                  }}>
                  {errorfatherName}
                </Text>
              </View>
            ) : null}
          </View>

          <View style={styles.Address}>
            <View style={styles.tital}>
              <Text style={styles.txxt}>Date of Birth</Text>
            </View>
            <View style={styles.commTextinput}>
              <TextInput
                placeholder="DD/MM/YY"
                color={COLOR.TXT_INPT_COLOR}
                placeholderTextColor={COLOR.GREY}
                returnKeyType="done"
                keyboardType="default"
                onChangeText={txt => {
                  setdate(txt), _Datevalidate(txt);
                }}
              />
            </View>

            {errordate != null ? (
              <View
                style={{
                  height: height * 0.02,
                  width: width / 1.3,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    marginLeft: 10,
                  }}>
                  {errordate}
                </Text>
              </View>
            ) : null}
          </View>

          <View style={styles.Area}>
            <View style={styles.WebsideMAIN}>
              <View style={styles.ownName}>
                <Text
                  style={{
                    color: COLOR.BACK_BORDER,
                    fontWeight: '600',
                    fontSize: height / 44,
                  }}>
                  Age
                </Text>
              </View>
              <View style={styles.webside}>
                <TextInput
                  placeholder="Age"
                  color={COLOR.TXT_INPT_COLOR}
                  placeholderTextColor={COLOR.GREY}
                />
              </View>
            </View>
            <View style={styles.WebsideMAIN}>
              <View style={styles.ownName}>
                <Text
                  style={{
                    color: COLOR.BACK_BORDER,
                    fontWeight: '600',
                    fontSize: height / 44,
                  }}>
                  Gender
                </Text>
              </View>
              <View style={styles.genderV}>
                <BouncyCheckbox
                  isChecked={male}
                  disableBuiltInState
                  size={20}
                  fillColor="#02024A"
                  unfillColor="#FFFFFF"
                  text="M"
                  onPress={() => {
                    setMale(true), setFemale(false);
                  }}
                  iconStyle={{
                    borderColor: 'rgb(245,245,245)',
                    borderRadius: 4,
                    borderColor: 'gray',
                  }}
                  textStyle={{color: 'black', textDecorationLine: 'none'}}
                />

                <BouncyCheckbox
                  isChecked={female}
                  disableBuiltInState
                  size={20}
                  fillColor="#02024A"
                  unfillColor="#FFFFFF"
                  text="F"
                  iconStyle={{
                    borderColor: 'rgb(245,245,245)',
                    borderRadius: 4,
                    borderColor: 'gray',
                  }}
                  textStyle={{
                    color: 'black',
                    textDecorationLine: 'none',
                    fontSize: height / 50,
                  }}
                  onPress={() => {
                    setMale(false), setFemale(true);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.PPAddress}>
            <View style={styles.tital}>
              <Text
                style={{
                  fontSize: height / 45,
                  color: COLOR.HEADER_BORDER_COLOR,
                }}>
                {' '}
                Relationship status
              </Text>
            </View>
            <View style={styles.permantAddress}>
              <View style={styles.bouncChek}>
                <BouncyCheckbox
                  isChecked={unmerid}
                  disableBuiltInState
                  size={20}
                  fillColor="#02024A"
                  unfillColor="#FFFFFF"
                  text="Single"
                  iconStyle={{
                    borderColor: 'rgb(245,245,245)',
                    borderRadius: 4,
                    borderColor: 'gray',
                  }}
                  onPress={() => {
                    setUnmerid(true), setMarid(false);
                  }}
                  textStyle={{
                    color: 'black',
                    textDecorationLine: 'none',
                    fontSize: height / 50,
                  }}
                />
              </View>

              <View style={styles.bouncChek}>
                <BouncyCheckbox
                  isChecked={marid}
                  disableBuiltInState
                  size={20}
                  fillColor="#02024A"
                  unfillColor="#FFFFFF"
                  text="Married"
                  onPress={() => {
                    setUnmerid(false), setMarid(true);
                  }}
                  iconStyle={{
                    borderColor: 'rgb(245,245,245)',
                    borderRadius: 4,
                    borderColor: 'gray',
                  }}
                  textStyle={{
                    color: 'black',
                    textDecorationLine: 'none',
                    fontSize: height / 50,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.Address}>
            <View style={styles.tital}>
              <Text style={styles.txxt}> Primary Contact No</Text>
            </View>
            <View style={styles.commTextinput}>
              <TextInput
                placeholder="Primary Contact No"
                color={COLOR.TXT_INPT_COLOR}
                maxLength={10}
                placeholderTextColor="#9796A8"
                returnKeyType="done"
                keyboardType="number-pad"
                onChangeText={txt => {
                  setPhone(txt), _Phonevalidate(txt);
                }}
              />
            </View>

            {errorPhone != null ? (
              <View
                style={{
                  height: height * 0.02,
                  width: width / 1.3,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    marginLeft: 10,
                  }}>
                  {errorPhone}
                </Text>
              </View>
            ) : null}
          </View>

          <View style={styles.Address}>
            <View style={styles.tital}>
              <Text style={styles.txxt}> Secondary Contact No</Text>
            </View>
            <View style={styles.commTextinput}>
              <TextInput
                placeholder="Secondary Contact No"
                color={COLOR.TXT_INPT_COLOR}
                placeholderTextColor={COLOR.GREY}
                maxLength={14}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.Address}>
            <View style={styles.tital}>
              <Text style={styles.txxt}> PAN </Text>
            </View>
            <View style={styles.commTextinput}>
              <TextInput
                placeholder="Enter your pan number"
                color={COLOR.TXT_INPT_COLOR}
                placeholderTextColor={COLOR.GREY}
                maxLength={56}
                keyboardType="default"
                returnKeyType="done"
                onChangeText={txt => {
                  setPan(txt), _Panvalidate(txt);
                }}
              />
            </View>

            {errorPan != null ? (
              <View
                style={{
                  height: height * 0.02,
                  width: width / 1.3,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    marginLeft: 10,
                  }}>
                  {errorPan}
                </Text>
              </View>
            ) : null}
          </View>

          <View style={styles.Address}>
            <View style={styles.tital}>
              <Text
                style={{
                  fontSize: height / 52,
                  color: COLOR.HEADER_BORDER_COLOR,
                }}>
                Adhar Card /Passport/Voter ID/Driving/Licence:{' '}
              </Text>
            </View>
            <View style={styles.commTextinput}>
              <TextInput
                placeholder="Adhar Card /Passport/Voter ID/Driving/Licence"
                color={COLOR.TXT_INPT_COLOR}
                placeholderTextColor={COLOR.GREY}
                maxLength={56}
                keyboardType="default"
                returnKeyType="done"
                onChangeText={txt => {
                  setAdhar(txt), _Adharvalidate(txt);
                }}
              />
            </View>

            {errorAdhar != null ? (
              <View
                style={{
                  height: height * 0.02,
                  width: width / 1.3,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                    marginLeft: 10,
                  }}>
                  {errorAdhar}
                </Text>
              </View>
            ) : null}
          </View>

          <View style={styles.PPAddress}>
            <View style={styles.tital}>
              <Text
                style={{
                  fontSize: height / 45,
                  color: COLOR.HEADER_BORDER_COLOR,
                }}>
                {' '}
                Permanent Address
              </Text>
            </View>
            <View style={styles.permantAddress}>
              <View style={styles.bouncChek}>
                <BouncyCheckbox
                  isChecked={onwe}
                  disableBuiltInState
                  size={20}
                  fillColor="#02024A"
                  unfillColor="#FFFFFF"
                  text="Owned"
                  iconStyle={{
                    borderColor: 'rgb(245,245,245)',
                    borderRadius: 4,
                    borderColor: 'gray',
                  }}
                  onPress={() => {
                    setOwned(true), setRented(false);
                  }}
                  textStyle={{
                    color: 'black',
                    textDecorationLine: 'none',
                    fontSize: height / 50,
                  }}
                />
              </View>

              <View style={styles.bouncChek}>
                <BouncyCheckbox
                  isChecked={rented}
                  disableBuiltInState
                  size={20}
                  fillColor="#02024A"
                  unfillColor="#FFFFFF"
                  text="Rented"
                  iconStyle={{
                    borderColor: 'rgb(245,245,245)',
                    borderRadius: 4,
                    borderColor: 'gray',
                  }}
                  onPress={() => {
                    setOwned(false), setRented(true);
                  }}
                  textStyle={{
                    color: 'black',
                    textDecorationLine: 'none',
                    fontSize: height / 50,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.Area}>
            <View style={styles.city}>
              <View style={styles.areaPin}>
                <Text
                  style={{
                    color: COLOR.BACK_BORDER,
                    fontWeight: '600',
                    fontSize: 16,
                  }}>
                  Area
                </Text>
              </View>

              <View style={styles.textInpt}>
                <TextInput
                  placeholder="Enter Area"
                  color={COLOR.TXT_INPT_COLOR}
                  placeholderTextColor={COLOR.GREY}
                  onChangeText={txt => {
                    setArea(txt), _Areavalidate(txt);
                  }}
                />
              </View>
              {errorArea != null ? (
                <View
                  style={{
                    height: height * 0.017,
                    // width: width * 1,
                    width: width * 0.32,
                    // backgroundColor: "blue",
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      // marginLeft: 17,
                    }}>
                    {errorArea}
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={styles.city}>
              <View style={styles.areaPin}>
                <Text
                  style={{
                    color: COLOR.BACK_BORDER,
                    fontWeight: '600',
                    fontSize: 16,
                  }}>
                  City
                </Text>
              </View>

              <View style={styles.textInpt}>
                <TextInput
                  placeholder="City"
                  color={COLOR.TXT_INPT_COLOR}
                  placeholderTextColor={COLOR.GREY}
                  onChangeText={txt => {
                    setCity(txt), _Cityvalidate(txt);
                  }}
                />
              </View>

              {errorCity != null ? (
                <View
                  style={{
                    height: height * 0.017,
                    // width: width * 1,
                    width: width * 0.32,
                    // backgroundColor: "blue",
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      // marginLeft: 17,
                    }}>
                    {errorCity}
                  </Text>
                </View>
              ) : null}
            </View>
            <View style={styles.city}>
              <View style={styles.areaPin}>
                <Text
                  style={{
                    color: COLOR.BACK_BORDER,
                    fontWeight: '600',
                    fontSize: 16,
                  }}>
                  Pin code
                </Text>
              </View>

              <View style={styles.textInpt}>
                <TextInput
                  placeholder="Pincode"
                  color={COLOR.TXT_INPT_COLOR}
                  placeholderTextColor={COLOR.GREY}
                  maxLength={6}
                  onChangeText={txt => {
                    setPin(txt), _Pinvalidate(txt);
                  }}
                />
              </View>

              {errorPin != null ? (
                <View
                  style={{
                    height: height * 0.017,
                    // width: width * 1,
                    width: width * 0.32,
                    // backgroundColor: "blue",
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 10,
                      // marginLeft: 17,
                    }}>
                    {errorPin}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>

          <View
            style={{
              height: height * 0.2,
              width: width * 0.9,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <CustomButton
              title="Next"
              // ButtonPress={() => onSubmit()}
              ButtonPress={() => props.navigation.navigate('GrageDetails')}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    width: width * 0.9,
    // backgroundColor: 'navy',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backbtn: {
    height: height * 0.1,
    width: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  // upper: {
  //   height: height * 1,
  //   width: width * 0.9,
  //   // borderWidth: 1,
  //   alignSelf: 'center',
  // },
  Address: {
    height: height * 0.14,
    width: width * 0.9,
    alignSelf: 'center',
    // borderWidth: 1,
    // backgroundColor:'red'
  },

  PPAddress: {
    height: height * 0.1,
    width: width * 0.9,
    alignSelf: 'center',
    // borderWidth: 1,
    // backgroundColor:'red'
    // justifyContent:'center'
  },

  commTextinput: {
    height: height * 0.07,
    width: width * 0.9,
    borderRadius: 8,
    shadowColor: '#000',
    borderWidth: 1,
    padding: 2,
  },

  tital: {
    height: height * 0.04,
    width: width * 0.9,
    // borderWidth: 1
  },
  txxt: {
    color: COLOR.BACK_BORDER,
    fontSize: height / 45,
    fontWeight: '600',
  },
  //========ownera name=====

  WebsideMAIN: {
    height: height * 0.14,
    width: width * 0.4,
    // borderWidth: 1,
  },
  webside: {
    height: height * 0.06,
    width: width * 0.3,
    borderRadius: 8,
    borderWidth: 1,

    justifyContent: 'center',
    // alignItems: 'center',
    padding: 2,
    borderColor: COLOR.BACK_BORDER,
  },
  ownName: {
    height: height * 0.04,
    width: width * 0.38,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  Area: {
    height: height * 0.14,
    width: width * 0.9,
    alignSelf: 'center',
    // borderWidth: 1,
    flexDirection: 'row',
  },
  // ====== gender
  genderV: {
    height: height * 0.06,
    width: width * 0.43,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gragecheck: {
    height: height * 0.05,
    width: width * 0.3,
    borderWidth: 1,
    flexDirection: 'row',
  },
  permantAddress: {
    height: height * 0.05,
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  bouncChek: {
    height: height * 0.04,
    width: width * 0.34,
    // backgroundColor: 'red',
    // borderWidth: 1,
  },

  // =========================== AREA ===========================
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

    justifyContent: 'center',
    alignItems: 'center',
  },
  areaPin: {
    height: height * 0.04,
    width: width * 0.29,
    // borderWidth: 1,
  },
});
