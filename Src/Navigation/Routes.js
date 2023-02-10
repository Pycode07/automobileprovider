import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// screens
import Wallet from '../screens/Wallet/Wallet';
import GrageDetails from '../screens/Garage_Details/GrageDetails';
import PersonalDetails from '../screens/PersonalDetails/PersonalDetails';
import Splash from '../screens/Splash/Splash';
import Onbording from '../screens/Splash/Onbording';
import BottomTab from './BottomTab';
import Booking from '../screens/Home/Booking';
import Home from '../screens/Home/Home';
import Kyc from '../screens/Home/Kyc';
import More from '../screens/Home/More';
import BaseInformation from '../screens/BaseInformation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import OtpVerification from '../screens/OtpVerification';
import OrderTracking from '../screens/OrderTracking';
import MyGarage from '../screens/Garage_Details/MyGarage';
import PhoneOtp from '../screens/PhoneOtp';
import Help from '../screens/Home/Help';
import Traning from '../screens/Home/Traning';
import Earning from '../screens/Home/Earning';
import OrderView from '../screens/OrderView';
import OrderHistory from '../screens/OrderHistory';
import {colors} from '../assets/colors';
import SpareParts from '../screens/SpareParts';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.theme_white,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'FuturaMediumBT',
          },
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="GrageDetails" component={GrageDetails} />
        <Stack.Screen name="BaseInformation" component={BaseInformation} />
        <Stack.Screen
          name="MyGarage"
          component={MyGarage}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Traning" component={Traning} />
        <Stack.Screen name="Earning" component={Earning} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Kyc" component={Kyc} />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="PhoneOtp" component={PhoneOtp} />
        <Stack.Screen name="OrderTracking" component={OrderTracking} />
        <Stack.Screen name="orderView" component={OrderView} />
        <Stack.Screen
          name="orderHistory"
          component={OrderHistory}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="spareParts"
          component={SpareParts}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
const styles = StyleSheet.create({});
