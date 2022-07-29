import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import {ImagePath} from '../utils/ImagePath';
import {FONTS} from '../utils/FontFamily';
const {height, width} = Dimensions.get('window');

const Draw = createDrawerNavigator();

const Drawer = props => {
  function CustomDrawerContent({navigation}) {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          resizeMode="cover"
          source={ImagePath.HEAD}
          style={{justifyContent: 'center', height: height * 0.15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: height * 0.1,
              width: width * 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.1,
                width: width * 0.6,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: height * 0.1,
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.AVATAR}
                  resizeMode="contain"
                  style={{height: 45, width: 45}}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  height: height * 0.04,
                  width: width * 0.4,
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsBold,
                    fontSize: height / 65,
                    color: '#FFFFFF',
                  }}>
                  Eleanor Pena
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 95,
                    color: '#FFFFFF',
                  }}>
                  re-alauddin@mobiloitte.com
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.closeDrawer()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.1,
                width: width * 0.2,
              }}>
              <Image
                source={ImagePath.CROSS}
                resizeMode="contain"
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ImageBackground
          resizeMode="cover"
          source={ImagePath.DRAWERBACK}
          style={{flexDirection: 'row', height: height * 0.85}}>
          <View style={{height: height * 0.85, width: width * 0.5}}>
            <TouchableOpacity
              style={{
                marginTop: height * 0.04,
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.WALLETDRAWER}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Crypto Wallet
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.EARN}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Market
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.EARN}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Pay
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.EARN}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Rewards
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.EARN}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Earn
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.EARN}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Credit
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.BUY}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Buy
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.REFER}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Refer
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.EARN}
                  resizeMode="contain"
                  style={{height: 25, width: 30}}
                />
              </View>
              <View
                style={{
                  height: height * 0.08,
                  width: width * 0.3,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    fontSize: height / 60,
                    color: '#FFFFFF',
                  }}>
                  Settings
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: height * 0.85, width: width * 0.5}}>
            <Image
              source={ImagePath.MAINBACK}
              resizeMode="contain"
              style={{
                marginLeft: width * 0.035,
                marginTop: height * 0.04,
                height: height * 0.7,
                width: width * 0.5,
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <Draw.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: '100%',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Draw.Screen name="BottomTab" component={BottomTab} {...props} />
    </Draw.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
