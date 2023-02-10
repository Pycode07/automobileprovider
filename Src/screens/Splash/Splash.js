import {StyleSheet, View, Dimensions, Image} from 'react-native';
import React, {useEffect} from 'react';
import {ImagePath} from '../../utils/ImagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {connect} from 'react-redux';
import * as UserAction from '../../redux/actions/userActions';
import messaging from '@react-native-firebase/messaging';
import {colors} from '../../assets/colors';
import {
  api_url,
  driver_check_email,
  set_fcm_driver,
} from '../../config/Constant';
const {height, width} = Dimensions.get('screen');

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      splash();
    }, 2000);
  }, []);

  const splash = async () => {
    try {
      let emailId = await AsyncStorage.getItem('email');
      const body = {
        email: emailId,
      };
      const response = await axios.post(api_url + driver_check_email, body);
      if (response.data.message == 'Success') {
        props.dispatch(UserAction.setUserData(response.data.result));
        let permission = await messaging().hasPermission();
        if (permission == 1) {
          let fcmToken = await messaging().getToken();
          console.log(fcmToken);
          await axios.post(api_url + set_fcm_driver, {
            driver_id: response.data.result.id,
            fcm: fcmToken,
          });
        }
        props.navigation.replace('Home');
      } else {
        props.navigation.replace('Onbording');
      }
    } catch (error) {
      console.log('error', error.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.theme_white}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={ImagePath.Splash}
          style={{width: width * 0.8, height: width * 0.5}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(null, mapDispatchToProps)(Splash);

const styles = StyleSheet.create({
  appLogo: {
    height: height * 1,
    width: width * 1,
  },
});
