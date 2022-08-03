import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {COLOR} from '../../utils/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height, width} = Dimensions.get('window');

const Kyc = () => {
  const [count, setCount] = useState(0);
  const [remain, setRemain] = useState(0);
  useEffect(() => {}, [count, remain]);

  return (
    <KeyboardAwareScrollView>
      <ScrollView style={{flex: 0, backgroundColor: '#fff'}}>
        <View
          style={{
            height: height * 0.1,
            width: width * 1,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'navy',
          }}>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/*  <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
             source={ImagePath.BACK_ARROW}
              style={{height: 25, width: 25}}
            />
        </TouchableOpacity>*/}
          </View>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.55,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: COLOR.WHITE, fontSize: 22}}>KYC</Text>
          </View>
        </View>

        <View style={{flex: 0, marginHorizontal: 25, marginBottom: 25}}>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>Bank Details</Text>
          </View>
          <TextInput placeholder="Bank Name" style={styles.inputStyle} />
          <TextInput
            placeholder="Bank Account Number"
            style={styles.inputStyle}
          />
          <TextInput placeholder="IFSC Code" style={styles.inputStyle} />
          <View style={styles.headingView}>
            <Text style={styles.headingText}>KYC Update</Text>
          </View>
          <TextInput placeholder="Aadhar Number" style={styles.inputStyle} />
          <View style={styles.kycDoc}>
            <Image
              source={ImagePath.ADHAR}
              style={{
                width: 120,
                height: 80,
                borderRadius: 10,
                borderColor: '#02024A',
                borderWidth: 1,
              }}
              resizeMode="cover"
            />
            <Image
              source={ImagePath.ADHAR_BACK}
              style={{
                width: 120,
                height: 80,
                borderRadius: 10,
                borderColor: '#02024A',
                borderWidth: 1,
              }}
              resizeMode="cover"
            />
          </View>
          <TextInput placeholder="PAN Number" style={styles.inputStyle} />
          <View style={styles.kycDoc}>
            <Image
              source={ImagePath.PAN}
              style={{
                width: 120,
                height: 80,
                borderRadius: 10,
                borderColor: '#02024A',
                borderWidth: 1,
              }}
              resizeMode="cover"
            />
            <Image
              source={ImagePath.PAN_BACK}
              style={{
                width: 120,
                height: 80,
                borderRadius: 10,
                borderColor: '#02024A',
                borderWidth: 1,
              }}
              resizeMode="cover"
            />
          </View>

          <View
            style={{
              height: height * 0.25,
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

            {/** 
            <View style={styles.capacitymain}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.capcity}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '500',
                      color: COLOR.BLACK,
                    }}>
                    Remaining Capacity
                  </Text>
                </View>

                <View style={styles.capcity1}>
                  <View style={styles.count}>
                    <TouchableOpacity
                      onPress={() => {
                        if (remain > 0) {
                          setRemain(remain - 1);
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
                      {remain}
                    </Text>
                  </View>
                  <View style={styles.count}>
                    <TouchableOpacity
                      onPress={() => {
                        if (remain < count) {
                          setRemain(remain + 1);
                        }
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
            */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Kyc;

const styles = StyleSheet.create({
  headingView: {
    marginVertical: 15,
  },
  headingText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  inputStyle: {
    fontSize: 13,
    color: '#454545',
    borderWidth: 0.3,
    borderColor: '#919090',
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    marginBottom: 20,
    paddingLeft: 15,
    paddingVertical: 12,
  },
  kycDoc: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 15,
  },

  // ==========Counter======

  capacitymain: {
    height: height * 0.09,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  capcity: {
    height: height * 0.07,
    width: width * 0.43,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  capcity1: {
    height: height * 0.07,
    width: width * 0.45,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    height: height * 0.05,
    width: width * 0.12,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
