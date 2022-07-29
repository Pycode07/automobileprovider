import * as React from 'react';
import {View, Dimensions, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import DashBoard from '../Screens/DashBoard/DashBoard';
import {ImagePath} from '../utils/ImagePath';
import Home from '../screens/Home/Home';
import Booking from '../screens/Home/Booking';
import Kyc from '../screens/Home/Kyc';
import More from '../screens/Home/More';
import PersonalDetails from '../screens/PersonalDetails/PersonalDetails';
import Login from '../screens/Login';
import Register from '../screens/Register';
import GrageDetails from '../screens/Garage_Details/GrageDetails';

const {height, width} = Dimensions.get('screen');

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabBarShowLabel: false,
      }}
      initialRouteName="Portfolio"
      // activeColor="#244273"
      // inactiveColor="#3e2465"
      barStyle={{
        paddingBottom: 48,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
      }}
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',
          // backgroundColor: '#0D1541',
          height: height * 0.08,
          borderTopWidth: 0,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 20,
        },
        tabBarLabel: {
          fontSize: height / 65,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: 'DashBoard',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.HOME}
                  style={{
                    height: height * 0.04,
                    width: width * 0.05,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                  }}>
                  HOME
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.HOME2}
                  style={{
                    height: height * 0.04,
                    width: width * 0.05,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                    color: 'grey',
                  }}>
                  HOME
                </Text>
              </View>
            ),
          // <Image
          //     source={
          //         focused
          //             ? ImagePath.DASHBOARD
          //             : ImagePath.DASHBOARDOFF
          //     }
          //     style={{
          //         height: size,
          //         width: size,
          //     }}
          //     resizeMode="contain"
          // />
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          headerShown: false,
          tabBarLabel: 'Buy & Sell',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.BOOK2}
                  style={{
                    height: height * 0.04,
                    width: width * 0.07,
                    resizeMode: 'contain',
                    // backgroundColor: "red"
                  }}
                />
                <Text
                  style={{
                    fontSize: height / 75,
                  }}>
                  BOOKING
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.BOOK}
                  style={{
                    height: height * 0.04,
                    width: width * 0.07,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                    color: 'grey',
                  }}>
                  BOOKING
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Kyc"
        component={Kyc}
        options={{
          headerShown: false,
          tabBarLabel: 'Wallet',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.KYC2}
                  style={{
                    height: height * 0.04,
                    width: width * 0.07,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                  }}>
                  KYC
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.KYC}
                  style={{
                    height: height * 0.04,
                    width: width * 0.07,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                    color: 'grey',
                  }}>
                  KYC
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarLabel: 'Redemptions',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.CART2}
                  style={{
                    height: height * 0.05,
                    width: width * 0.06,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                  }}>
                  MORE
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.CART}
                  style={{
                    height: height * 0.05,
                    width: width * 0.06,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                    color: 'grey',
                  }}>
                  MORE
                </Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
}
