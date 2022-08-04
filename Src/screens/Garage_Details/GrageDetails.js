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
} from 'react-native';
import CustomButton from '../../components/Buttons/CustomButton';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height, width} = Dimensions.get('window');

const GrageDetails = props => {
  const [value, setValue] = useState([]);
  const [form, setForm] = useState({
    owned: false,
    rented: false,
  });

  //============================  validation start here========================

  const [Email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [addres, setAddress] = useState('');
  const [errorAddress, setErrorAddress] = useState(null);

  const [pin, setPin] = useState('');
  const [errorPin, setErrorPin] = useState(null);

  const [FirstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState(null);

  const [area, setArea] = useState('');
  const [errorArea, setErrorArea] = useState(null);

  const [city, setCity] = useState('');
  const [errorCity, setErrorCity] = useState(null);

  const _Addvalidate = add => {
    var addRegex = /^[a-zA-Z0-9\s\,\''\-]*$/;
    //  /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if (add === '') {
      setErrorAddress('*Please enter address.');
    } else if (!addRegex.test(add)) {
      setErrorAddress('*Please enter valid address.');
    } else {
      setErrorAddress(null);
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

  const _validateFirstName = fname => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (fname == '' || fname == undefined || fname == null) {
      setErrorFirstName('*Please enter full name.');
    } else if (!fnameRegex.test(fname)) {
      setErrorFirstName('*Please enter valid full name.');
    } else {
      setErrorFirstName(null);
    }
  };

  const validate = () => {
    let flag = true;

    if (addres === '') {
      setErrorAddress('*Please enter address.');
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

    if (Email === '') {
      setErrorEmail('*Please enter email.');
      flag = false;
    }
    if (FirstName === '') {
      setErrorEmail('*Please enter name.');
      flag = false;
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      // onVerifySignUp();
      props.navigation.navigate('BaseInformation');
    } else {
      alert('Something went wrong');
    }
  };

  //  ================states for type of entity check Modal==========
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  //  ================================= states for  No of KMP ==========================================================

  const renderOwnerName = () => {
    return (
      <View style={styles.Area}>
        <View style={styles.WebsideMAIN}>
          <View style={styles.ownName}>
            <Text
              style={{
                color: COLOR.BACK_BORDER,
                fontWeight: '600',
                fontSize: 14,
              }}>
              Owner's name
            </Text>
          </View>
          <View style={styles.webside}>
            <TextInput
              placeholder="Enter name"
              color={COLOR.TXT_INPT_COLOR}
              placeholderTextColor={COLOR.GREY}
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
                width: width * 0.4,
                // width: width / 1.3,
                // backgroundColor: "blue",
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 10,
                  // marginLeft: 17,
                }}>
                {errorFirstName}
              </Text>
            </View>
          ) : null}
        </View>
        <View style={styles.WebsideMAIN}>
          <View style={styles.ownName}>
            <Text
              style={{
                color: COLOR.BACK_BORDER,
                fontWeight: '600',
                fontSize: 12,
              }}>
              {' '}
              Attach Garage Ownership{'\n'}/Rent Agreement
            </Text>
          </View>

          <View style={styles.webside}>
            <TouchableOpacity
              style={{
                height: height * 0.033,
                width: width * 0.25,
                // borderWidth: 1,
                marginHorizontal: 10,
                borderRadius: 14,
                backgroundColor: 'rgb(225,225,225)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: COLOR.BACK_BORDER, fontSize: 10}}>
                {' '}
                Attach file
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderEntityType = () => {
    return (
      <View style={styles.Entity}>
        <View style={styles.ownName}>
          <Text
            style={{
              color: COLOR.BACK_BORDER,
              fontWeight: '700',
              fontSize: 16,
            }}>
            Type of Entity
          </Text>
        </View>
        <TouchableOpacity
          style={styles.cheekk}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={{color: 'black', fontSize: height / 55}}>
            Properitor Firm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cheekk}
          onPress={() => setModalVisible1(!modalVisible1)}>
          <Text style={{color: 'black', fontSize: height / 55}}>
            Partnership Firm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cheekk}
          onPress={() => setModalVisible2(!modalVisible2)}>
          <Text style={{color: 'black', fontSize: height / 55}}>LLP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cheekk}
          onPress={() => setModalVisible3(!modalVisible3)}>
          <Text style={{color: 'black', fontSize: height / 55}}>OPC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cheekk}
          onPress={() => setModalVisible4(!modalVisible4)}>
          <Text style={{color: 'black', fontSize: height / 55}}>Company</Text>
        </TouchableOpacity>
        {/**========================================= Properitor FirmModal==================================================================== */}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.nofPar}>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.4,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 14}}>
                      Total No. of Partner
                    </Text>
                  </View>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <TextInput
                      placeholder="0"
                      placeholderTextColor={'red'}
                      keyboardType="numeric"
                      value={value}
                      onChangeText={text => {
                        if (text >= 3) {
                          text = 3;
                        }
                        let arr = [];
                        for (let i = 0; i < text; i++) {
                          arr.push(i);
                        }
                        setValue(arr);
                      }}
                      style={{
                        height: height * 0.05,
                        width: width * 0.1,
                        // borderWidth: 1,
                        justifyContent: 'center',
                        textAlign: 'center',
                        // alignItems: 'center',
                        borderRadius: 10,
                        paddingVertical: 5,
                        borderColor: 'rgb(225,225,225)',
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Image
                      source={ImagePath.CLOSE}
                      resizeMode="contain"
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                </View>
                {value.map(i => (
                  <View style={styles.nofParname} key={i}>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.3,
                        borderWidth: 1,
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder=" Enter Name"
                        keyboardType="default"
                      />
                    </View>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.33,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder="Contect NO"
                        keyboardType="default"
                        maxLength={12}
                      />
                    </View>
                  </View>
                ))}

                <TouchableOpacity
                  style={{
                    height: height * 0.05,
                    width: width * 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    backgroundColor: 'rgb(225,225,225)',
                    marginTop: 20,
                    borderRadius: 20,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{fontSize: 16, color: 'black'}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        {/**========================================= Partnership FirmModal==================================================================== */}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible1(!modalVisible1);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.nofPar}>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.4,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 14}}>
                      Total No. of Partner
                    </Text>
                  </View>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <TextInput
                      placeholder="0"
                      placeholderTextColor={'red'}
                      keyboardType="numeric"
                      value={value}
                      onChangeText={text => {
                        if (text >= 3) {
                          text = 3;
                        }
                        let arr = [];
                        for (let i = 0; i < text; i++) {
                          arr.push(i);
                        }
                        setValue(arr);
                      }}
                      style={{
                        height: height * 0.05,
                        width: width * 0.1,
                        // borderWidth: 1,
                        justifyContent: 'center',
                        textAlign: 'center',
                        // alignItems: 'center',
                        borderRadius: 10,
                        paddingVertical: 5,
                        borderColor: 'rgb(225,225,225)',
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => setModalVisible1(!modalVisible1)}
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Image
                      source={ImagePath.CLOSE}
                      resizeMode="contain"
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                </View>
                {value.map(i => (
                  <View style={styles.nofParname} key={i}>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.3,
                        borderWidth: 1,
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder=" Enter Name"
                        keyboardType="default"
                      />
                    </View>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.33,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder="Contect NO"
                        keyboardType="default"
                        maxLength={12}
                      />
                    </View>
                  </View>
                ))}

                <TouchableOpacity
                  style={{
                    height: height * 0.05,
                    width: width * 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    backgroundColor: 'rgb(225,225,225)',
                    marginTop: 20,
                    borderRadius: 20,
                  }}
                  onPress={() => setModalVisible1(!modalVisible1)}>
                  <Text style={{fontSize: 16, color: 'black'}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        {/**========================================= LLP FirmModal==================================================================== */}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible2(!modalVisible2);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.nofPar}>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.4,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 14}}>
                      Total No. of Partner
                    </Text>
                  </View>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <TextInput
                      placeholder="0"
                      placeholderTextColor={'red'}
                      keyboardType="numeric"
                      value={value}
                      onChangeText={text => {
                        if (text >= 3) {
                          text = 3;
                        }
                        let arr = [];
                        for (let i = 0; i < text; i++) {
                          arr.push(i);
                        }
                        setValue(arr);
                      }}
                      style={{
                        height: height * 0.05,
                        width: width * 0.1,
                        // borderWidth: 1,
                        justifyContent: 'center',
                        textAlign: 'center',
                        // alignItems: 'center',
                        borderRadius: 10,
                        paddingVertical: 5,
                        borderColor: 'rgb(225,225,225)',
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => setModalVisible2(!modalVisible2)}
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Image
                      source={ImagePath.CLOSE}
                      resizeMode="contain"
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                </View>
                {value.map(i => (
                  <View style={styles.nofParname} key={i}>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.3,
                        borderWidth: 1,
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder=" Enter Name"
                        keyboardType="default"
                      />
                    </View>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.33,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder="Contect NO"
                        keyboardType="default"
                        maxLength={12}
                      />
                    </View>
                  </View>
                ))}

                <TouchableOpacity
                  style={{
                    height: height * 0.05,
                    width: width * 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    backgroundColor: 'rgb(225,225,225)',
                    marginTop: 20,
                    borderRadius: 20,
                  }}
                  onPress={() => setModalVisible2(!modalVisible2)}>
                  <Text style={{fontSize: 16, color: 'black'}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/**========================================= OPC FirmModal==================================================================== */}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible3}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible3(!modalVisible3);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.nofPar}>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.4,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 14}}>
                      Total No. of Partner
                    </Text>
                  </View>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <TextInput
                      placeholder="0"
                      placeholderTextColor={'red'}
                      keyboardType="numeric"
                      value={value}
                      onChangeText={text => {
                        if (text >= 3) {
                          text = 3;
                        }
                        let arr = [];
                        for (let i = 0; i < text; i++) {
                          arr.push(i);
                        }
                        setValue(arr);
                      }}
                      style={{
                        height: height * 0.05,
                        width: width * 0.1,
                        // borderWidth: 1,
                        justifyContent: 'center',
                        textAlign: 'center',
                        // alignItems: 'center',
                        borderRadius: 10,
                        paddingVertical: 5,
                        borderColor: 'rgb(225,225,225)',
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => setModalVisible3(!modalVisible3)}
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Image
                      source={ImagePath.CLOSE}
                      resizeMode="contain"
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                </View>
                {value.map(i => (
                  <View style={styles.nofParname} key={i}>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.3,
                        borderWidth: 1,
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder=" Enter Name"
                        keyboardType="default"
                      />
                    </View>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.33,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder="Contect NO"
                        keyboardType="default"
                        maxLength={12}
                      />
                    </View>
                  </View>
                ))}

                <TouchableOpacity
                  style={{
                    height: height * 0.05,
                    width: width * 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    backgroundColor: 'rgb(225,225,225)',
                    marginTop: 20,
                    borderRadius: 20,
                  }}
                  onPress={() => setModalVisible3(!modalVisible3)}>
                  <Text style={{fontSize: 16, color: 'black'}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/**========================================= COMPANY FirmModal==================================================================== */}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible4}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible4(!modalVisible4);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.nofPar}>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.4,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'black', fontSize: 14}}>
                      Total No. of Partner
                    </Text>
                  </View>
                  <View
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <TextInput
                      placeholder="0"
                      placeholderTextColor={'red'}
                      keyboardType="numeric"
                      value={value}
                      onChangeText={text => {
                        if (text >= 3) {
                          text = 3;
                        }
                        let arr = [];
                        for (let i = 0; i < text; i++) {
                          arr.push(i);
                        }
                        setValue(arr);
                      }}
                      style={{
                        height: height * 0.05,
                        width: width * 0.1,
                        // borderWidth: 1,
                        justifyContent: 'center',
                        textAlign: 'center',
                        // alignItems: 'center',
                        borderRadius: 10,
                        paddingVertical: 5,
                        borderColor: 'rgb(225,225,225)',
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => setModalVisible4(!modalVisible4)}
                    style={{
                      height: height * 0.05,
                      width: width * 0.11,
                      // borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <Image
                      source={ImagePath.CLOSE}
                      resizeMode="contain"
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                </View>
                {value.map(i => (
                  <View style={styles.nofParname} key={i}>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.3,
                        borderWidth: 1,
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder=" Enter Name"
                        keyboardType="default"
                      />
                    </View>
                    <View
                      style={{
                        height: height * 0.06,
                        width: width * 0.33,
                        justifyContent: 'center',
                        // alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'rgb(225,225,225)',
                      }}>
                      <TextInput
                        placeholder="Contect NO"
                        keyboardType="default"
                        maxLength={12}
                      />
                    </View>
                  </View>
                ))}

                <TouchableOpacity
                  style={{
                    height: height * 0.05,
                    width: width * 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // borderWidth: 1,
                    backgroundColor: 'rgb(225,225,225)',
                    marginTop: 20,
                    borderRadius: 20,
                  }}
                  onPress={() => setModalVisible4(!modalVisible4)}>
                  <Text style={{fontSize: 16, color: 'black'}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  };
  // =============++ Main Function ++==========
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.backbtn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={ImagePath.BlACK_BACK_ARROW}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titaltxxt}>
          <Text style={{color: COLOR.BLACK, fontSize: 21, fontWeight: '700'}}>
            Garage Details
          </Text>
        </View>
      </View>
      <View style={styles.Address}>
        <View
          style={{
            height: height * 0.12,
            width: width * 0.9,
            // borderWidth: 1
          }}>
          <View
            style={{
              height: height * 0.04,
              width: width * 0.9,
              // borderWidth: 1
            }}>
            <Text
              style={{
                color: COLOR.BACK_BORDER,
                fontSize: 16,
                fontWeight: '600',
              }}>
              Full Address
            </Text>
          </View>
          <View style={styles.commTextinput}>
            <TextInput
              placeholder="Full address"
              color={COLOR.TXT_INPT_COLOR}
              placeholderTextColor={COLOR.GREY}
              autoCorrect={false}
              maxLength={256}
              autoCapitalize="none"
              onChangeText={txt => {
                setAddress(txt), _Addvalidate(txt);
              }}
            />
          </View>

          {errorAddress != null ? (
            <View
              style={{
                height: height * 0.015,
                // width: width * 1,
                width: width * 0.9,
                // backgroundColor: "blue",
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 10,
                  marginLeft: 17,
                }}>
                {errorAddress}
              </Text>
            </View>
          ) : null}
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
              keyboardType={'phone-pad'}
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

      <View style={styles.EmailV}>
        <View
          style={{
            height: height * 0.13,
            width: width * 0.9,
            // borderWidth: 1
          }}>
          <View
            style={{
              height: height * 0.04,
              width: width * 0.9, // borderWidth: 1
            }}>
            <Text
              style={{
                color: COLOR.BACK_BORDER,
                fontSize: 16,
                fontWeight: '600',
              }}>
              Email id
            </Text>
          </View>
          <View style={styles.commTextinput}>
            <TextInput
              placeholder="Full address"
              color={COLOR.TXT_INPT_COLOR}
              placeholderTextColor={COLOR.GREY}
              maxLength={256}
              autoCapitalize="none"
              onChangeText={txt => {
                setEmail(txt), _emailvalidate(txt);
              }}
            />
          </View>

          {errorEmail != null ? (
            <View
              style={{
                height: height * 0.015,
                // width: width * 1,
                width: width * 0.9,
                // backgroundColor: "blue",
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 10,
                  marginLeft: 17,
                }}>
                {errorEmail}
              </Text>
            </View>
          ) : null}
        </View>

        <View
          style={{
            height: height * 0.12,
            width: width * 0.9, // borderWidth: 1
          }}>
          <View
            style={{
              height: height * 0.04,
              width: width * 0.9,
              // borderWidth: 1
            }}>
            <Text
              style={{
                color: COLOR.BACK_BORDER,
                fontSize: 16,
                fontWeight: '600',
              }}>
              Website(if any)
            </Text>
          </View>
          <View style={styles.commTextinput}>
            <TextInput
              placeholder="Full address"
              color={COLOR.TXT_INPT_COLOR}
              placeholderTextColor={COLOR.GREY}
            />
          </View>
        </View>
      </View>
      <View style={styles.GrageV}>
        <View
          style={{
            height: height * 0.04,
            width: width * 0.9,
            alignSelf: 'center',
            // borderWidth: 1,
          }}>
          <Text
            style={{
              color: COLOR.BACK_BORDER,
              fontSize: 16,
              fontWeight: '900',
            }}>
            Garage
          </Text>
        </View>

        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            flexDirection: 'row',
          }}>
          <View style={styles.gragecheck}>
            <BouncyCheckbox
              isChecked={form.owned}
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
                setForm({owned: true, rented: false});
              }}
              textStyle={{
                color: 'black',
                textDecorationLine: 'none',
                fontSize: height / 50,
              }}
            />
          </View>
          <View style={styles.gragecheck}>
            <BouncyCheckbox
              isChecked={form.rented}
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
                setForm({rented: true, owned: false});
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
      {renderOwnerName()}
      {renderEntityType()}
      <View style={styles.Nxtbtn}>
        <CustomButton
          title={'Next'}
          // ButtonPress={() => onSubmit('')}
          ButtonPress={() => props.navigation.navigate('BaseInformation')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default GrageDetails;
const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    width: width * 1,
    // borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'navy'
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
