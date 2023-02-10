/**
 * @format
 */
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NotificationManagerAndroid} from './NotificationManager';
import messaging from '@react-native-firebase/messaging';
NotificationManagerAndroid.createChannel();
messaging().setBackgroundMessageHandler(async remoteMessage => {
  const title = remoteMessage.data.title;
  const {data, messageId} = remoteMessage;
  const desc = remoteMessage.data.message;
  if (Platform.OS === 'android') {
    NotificationManagerAndroid.showNotification(
      data.title,
      data.message,
      data.subText,
      messageId,
      data,
    );
  } else {
  }
});
AppRegistry.registerComponent(appName, () => App);
