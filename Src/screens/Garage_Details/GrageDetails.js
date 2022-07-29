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
  //  states for type of entity check

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
              placeholderTextColor={COLOR.GREY}
            />
          </View>
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
              size={20}
              fillColor="#02024A"
              unfillColor="#FFFFFF"
              text="Owned"
              iconStyle={{
                borderColor: 'rgb(245,245,245)',
                borderRadius: 4,
                borderColor: 'gray',
              }}
              // onPress={(isChecked: boolean) => {}}
              textStyle={{
                color: 'black',
                textDecorationLine: 'none',
                fontSize: height / 50,
              }}
            />
          </View>
          <View style={styles.gragecheck}>
            <BouncyCheckbox
              size={20}
              fillColor="#02024A"
              unfillColor="#FFFFFF"
              text="Rented"
              iconStyle={{
                borderColor: 'rgb(245,245,245)',
                borderRadius: 4,
                borderColor: 'gray',
              }}
              // onPress={(isChecked: boolean) => {}}
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

          <View style={styles.cheekk}>
            <BouncyCheckbox
              size={20}
              fillColor="#02024A"
              unfillColor="#FFFFFF"
              text="Properitor Firm"
              iconStyle={{
                borderColor: 'rgb(245,245,245)',
                borderRadius: 4,
                borderColor: 'gray',
              }}
              // onPress={(isChecked: boolean) => {}}
              textStyle={{
                color: 'black',
                textDecorationLine: 'none',
                fontSize: height / 50,
              }}
            />
          </View>

          <View style={styles.cheekk}>
            <BouncyCheckbox
              size={20}
              fillColor="#02024A"
              unfillColor="#FFFFFF"
              text=" Partnership Firm"
              iconStyle={{
                borderColor: 'rgb(245,245,245)',
                borderRadius: 4,
                borderColor: 'gray',
              }}
              // onPress={(isChecked: boolean) => {}}
              textStyle={{
                color: 'black',
                textDecorationLine: 'none',
                fontSize: height / 50,
              }}
            />
          </View>
          <View style={styles.cheekk}>
            <BouncyCheckbox
              size={20}
              fillColor="#02024A"
              unfillColor="#FFFFFF"
              text="LLP"
              iconStyle={{
                borderColor: 'rgb(245,245,245)',
                borderRadius: 4,
                borderColor: 'gray',
              }}
              // onPress={(isChecked: boolean) => {}}
              textStyle={{
                color: 'black',
                textDecorationLine: 'none',
                fontSize: height / 50,
              }}
            />
          </View>
          <View style={styles.cheekk}>
            <BouncyCheckbox
              size={20}
              fillColor="#02024A"
              unfillColor="#FFFFFF"
              text="OPC"
              iconStyle={{
                borderColor: 'rgb(245,245,245)',
                borderRadius: 4,
                borderColor: 'gray',
              }}
              // onPress={(isChecked: boolean) => {}}
              textStyle={{
                color: 'black',
                textDecorationLine: 'none',
                fontSize: height / 50,
              }}
            />
          </View>
          <View style={styles.cheekk}>
            <BouncyCheckbox
              size={20}
              fillColor="#02024A"
              unfillColor="#FFFFFF"
              text="Company"
              iconStyle={{
                borderColor: 'rgb(245,245,245)',
                borderRadius: 4,
                borderColor: 'gray',
              }}
              // onPress={(isChecked: boolean) => {}}
              textStyle={{
                color: 'black',
                textDecorationLine: 'none',
                fontSize: height / 50,
              }}
            />
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
          <View style={styles.Enitycheck}>
            <View style={styles.cheekk}>
              <BouncyCheckbox
                size={20}
                fillColor="#02024A"
                unfillColor="#FFFFFF"
                text="NO"
                iconStyle={{
                  borderColor: 'rgb(245,245,245)',
                  borderRadius: 4,
                  borderColor: 'gray',
                }}
                // onPress={(isChecked: boolean) => {}}
                textStyle={{color: 'black', textDecorationLine: 'none'}}
              />
            </View>

            <View style={styles.cheekk}>
              <BouncyCheckbox
                size={20}
                fillColor="#02024A"
                unfillColor="#FFFFFF"
                text="Total no of partner"
                iconStyle={{
                  borderColor: 'rgb(245,245,245)',
                  borderRadius: 4,
                  borderColor: 'gray',
                }}
                // onPress={(isChecked: boolean) => {}}
                textStyle={{
                  color: 'black',
                  textDecorationLine: 'none',
                  fontSize: height / 50,
                }}
              />
            </View>

            <View style={styles.cheekk}>
              <BouncyCheckbox
                size={20}
                fillColor="#02024A"
                unfillColor="#FFFFFF"
                text="Total no of partner"
                iconStyle={{
                  borderColor: 'rgb(245,245,245)',
                  borderRadius: 4,
                  borderColor: 'gray',
                }}
                // onPress={(isChecked: boolean) => {}}
                textStyle={{
                  color: 'black',
                  textDecorationLine: 'none',
                  fontSize: height / 50,
                }}
              />
            </View>

            <View style={styles.cheekk}>
              <BouncyCheckbox
                size={20}
                fillColor="#02024A"
                unfillColor="#FFFFFF"
                text=""
                iconStyle={{
                  borderColor: 'rgb(245,245,245)',
                  borderRadius: 4,
                  borderColor: 'gray',
                }}
                // onPress={(isChecked: boolean) => {}}
                textStyle={{
                  color: 'black',
                  textDecorationLine: 'none',
                  fontSize: height / 50,
                }}
              />
            </View>
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
          <CustomButton title={'Next'}

          ButtonPress={() =>props.navigation.navigate("Home")}
          
          />
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
    height: height * 0.35,
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
    width: width * 0.44,
    // backgroundColor:'red',
    justifyContent: 'center',
  },
  Nxtbtn: {
    height: height * 0.2,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
  },
});
