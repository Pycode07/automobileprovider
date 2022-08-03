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
  const [check, setCheck] = useState(true);
  const [check1, setCheck1] = useState(true);
  const [value, setValue] = useState([]);
  const [form, setForm] = useState({
    addres: '',
    area: '',
    city: '',
    pinCode: '',
    email: '',
    website: '',
    owned: false,
    rented: false,
    ownerName: '',
  });
  const [validation, setValidation] = useState({
    addres: false,
    city: false,
    pinCode: false,
    email: false,
    garage: false,
    Oname: false,
    ownedRented: false,
    file: false,
  });
  const email_validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };
  const check_validation = () => {
    if (form.addres.length === 0) {
      setValidation({addres: true});
    } else if (form.city.length === 0) {
      setValidation({city: true});
    } else if (form.pinCode.length === 0) {
      setValidation({pinCode: true});
    } else if (email_validate(form.email)) {
      setValidation({email: true});
    } else if (form.owned === false && form.rented === false) {
      setValidation({ownedRented: true});
    } else if (form.ownerName.length === 0) {
      setValidation({Oname: true});
    } else {
      return true;
    }
  };
  //  states for type of entity check Modal
  const [modalVisible, setModalVisible] = useState(false);
  const SaveData = () => {
    if (check_validation()) {
      props.navigation.navigate('Home');
      console.log('Every thing fine.');
    }
  };
  //  states for  No of KMP
  const renderAddress = () => {
    return (
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
              value={form.addres}
              onChangeText={text => {
                setForm({addres: text});
              }}
              placeholderTextColor={COLOR.GREY}
            />
          </View>
          {validation.addres ? (
            <View style={{marginBottom: 5}}>
              <Text style={{color: 'red', fontSize: 13}}>
                Please Enter correct Address...
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  };

  const renderArea = () => {
    return (
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
              value={form.area}
              onChangeText={text => {
                setForm({area: text});
              }}
            />
          </View>
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
              value={form.city}
              onChangeText={text => {
                setForm({city: text});
              }}
            />
          </View>
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
              value={form.pinCode}
              onChangeText={text => {
                setForm({pinCode: text});
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderGrage = () => {
    return (
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
    );
  };

  const renderEmail = () => {
    return (
      <View style={styles.EmailV}>
        <View
          style={{
            height: height * 0.12,
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
              value={form.email}
              onChangeText={text => {
                setForm({email: text});
              }}
            />
          </View>
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
              value={form.website}
              onChangeText={text => {
                setForm({website: text});
              }}
            />
          </View>
        </View>
      </View>
    );
  };

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
              value={form.ownerName}
              onChangeText={text => {
                setForm({ownerName: text});
              }}
            />
          </View>
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

  const renderTextInput = () => {
    return (
      <View style={styles.nofParname}>
        <View
          style={{
            height: height * 0.06,
            width: width * 0.3,
            borderWidth: 1,
            justifyContent: 'center',
            borderRadius: 10,
            borderColor: 'rgb(225,225,225)',
          }}>
          <TextInput placeholder=" Enter Name" keyboardType="default" />
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
    );
  };

  const renderEntityType = () => {
    return (
      <View style={styles.Entity}>
        <View style={styles.KmP}>
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
            <Text>Properitor Firm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cheekk}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Partnership Firm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cheekk}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>LLP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cheekk}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>OPC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cheekk}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Company</Text>
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
                    <View>
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
                          borderWidth: 1,
                          justifyContent: 'center',
                          textAlign: 'center',
                          // alignItems: 'center',
                          borderRadius: 10,
                          paddingVertical: 5,
                          borderColor: 'rgb(245,245,245)',
                        }}
                      />
                    </View>
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
        </View>
        <View style={styles.KmP}>
          <View style={styles.ownName}>
            <Text
              style={{
                color: COLOR.BACK_BORDER,
                fontWeight: '700',
                fontSize: 16,
              }}>
              No of KMP
            </Text>
          </View>
        </View>
      </View>
    );
  };
  // =============++ Main Function ++==========
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View>
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
        {renderAddress()}
        {renderArea()}
        {renderEmail()}
        {renderGrage()}
        {renderOwnerName()}
        {renderEntityType()}

        <View style={styles.Nxtbtn}>
          <CustomButton title={'Next'} ButtonPress={() => SaveData()} />
        </View>
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
    height: height * 0.25,
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
    flexDirection: 'row',
  },
  KmP: {
    height: height * 0.3,
    width: width * 0.45,
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
