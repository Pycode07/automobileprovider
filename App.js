import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import Routes from './Src/Navigation/Routes';
import GrageDetails from './Src/screens/Garage_Details/GrageDetails';
import {Provider} from 'react-redux';
import {store} from './Src/redux/store/store';
import messaging from '@react-native-firebase/messaging';
import {NotificationManagerAndroid} from './NotificationManager';
import PushNotification from 'react-native-push-notification';
import {colors} from './Src/assets/colors';
const App = () => {
  const configure = () => {
    // handleBackButton()
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (param) {
        // console.log("TOKEN:", param.token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        // console.log("mainData", notification.data);
        // console.log(notification.data.key)
        if (Platform.OS === 'ios') {
        }
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {},

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {},

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  };

  React.useEffect(() => {
    configure();
  }, []);
  async function requestUserPermission() {
    const authorizationStatus = await messaging().requestPermission({
      sound: false,
      announcement: true,
    });
  }

  React.useEffect(() => {
    try {
      Text.defaultProps = Text.defaultProps || {};
      Text.defaultProps.allowFontScaling = false;
      TextInput.defaultProps = TextInput.defaultProps || {};
      TextInput.defaultProps.allowFontScaling = false;
      requestUserPermission();
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        const {messageId} = remoteMessage;
        const data = remoteMessage.data;
        if (Platform.OS === 'android') {
          NotificationManagerAndroid.createChannel();
          NotificationManagerAndroid.showNotification(
            data.title,
            data.message,
            'notification',
            messageId,
            data,
          );
        } else {
        }
      });
      return unsubscribe;
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Routes />
      </Provider>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({});
