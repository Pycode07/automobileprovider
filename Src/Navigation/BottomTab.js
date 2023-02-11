import * as React from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  UIManager,
  Platform,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
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
import MyGarage from '../screens/Garage_Details/MyGarage';
import {colors} from '../assets/colors';
import {useState} from 'react';

const {height, width} = Dimensions.get('screen');

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const [boxPosition, setBoxPosition] = useState('left');
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <View
      style={{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.theme_yellow1,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        //   console.log(options);
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            LayoutAnimation.configureNext({
              duration: 500,
              create: {type: 'easeIn', property: 'opacity'},
              update: {type: 'linear', property: 'opacity'},
              delete: {type: 'easeOut', property: 'opacity'},
            });
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              marginVertical: 2,
              backgroundColor: isFocused ? colors.theme_yellow4 : null,
              borderRadius: 5,
              marginHorizontal: 5,
              paddingVertical: 3,
            }}
            key={index}>
            <View
              style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
              {label === 'Home' ? (
                <Image
                  source={ImagePath.HOME}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              ) : null}
              {label === 'Garage' ? (
                <Image
                  source={ImagePath.BOOK}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              ) : null}
              {label === 'Kyc' ? (
                <Image
                  source={ImagePath.KYC}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                  }}
                />
              ) : null}
              {label === 'More' ? (
                <Image
                  source={ImagePath.CART}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'center',
                  }}
                />
              ) : null}
              <Text
                style={{
                  color: isFocused ? '#fff' : '#fff',
                  fontSize: 12,
                  fontFamily: 'FuturaBoldBT',
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        //  headerShadowVisible: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Garage" component={MyGarage} />
      <Tab.Screen name="Kyc" component={Kyc} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
