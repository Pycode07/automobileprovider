import {
  FlatList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  PermissionsAndroid,
  ToastAndroid,
  Platform,
} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {ImagePath} from '../../utils/ImagePath';
import {COLOR} from '../../utils/Colors';
import {colors} from '../../assets/colors';
import {
  api_url,
  driver_change_online_status,
  fonts,
  provider_services_count,
  provider_services_fare,
} from '../../config/Constant';
import {useEffect} from 'react';
const {height, width} = Dimensions.get('window');

const Home = props => {
  console.log(props?.userData?.online_status);
  const [swtich, setSwtich] = React.useState(
    props?.userData?.online_status == 0 ? false : true,
  );
  const [serviceCount, setServiceCount] = React.useState(0);
  const [totalFare, setTotalFare] = React.useState(0);
  const [coordinates, setCoordinates] = React.useState([73.065069, 19.307914]);
  const toggleSwtich = async () => {
    await axios.post(api_url + driver_change_online_status, {
      id: props?.userData?.id,
      online_status: swtich ? 1 : 0,
    });
    setSwtich(!swtich);
  };

  const getServiceCount = async () => {
    const response = await axios.post(api_url + provider_services_count, {
      driver_id: props?.userData?.id,
    });
    setServiceCount(response.data.total_services);
  };
  const getTotalFairs = async () => {
    const response = await axios.post(api_url + provider_services_fare, {
      driver_id: props?.userData?.id,
    });
    setTotalFare(response.data.total_fare);
  };

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        const longitude = coords.longitude;
        const latitude = coords.latitude;
        const altitude = coords.altitude;
        setCoordinates([longitude, latitude]);

        // fixedLocation.current = [longitude, latitude];
      },
      err => {
        console.warn(err);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
      },
    );
  };
  const requestPermission = async () => {
    const isAndroid = Platform.OS == 'android';

    if (isAndroid) {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      // console.log("result", result);
      if (result) {
        getCurrentPosition();
      } else {
        const isGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (isGranted == PermissionsAndroid.RESULTS.GRANTED) {
          // ToastAndroid.show('User Granted Permission', ToastAndroid.SHORT);
          getCurrentPosition();
        } else if (isGranted == 'never_ask_again') {
          // ToastAndroid.show('Permission Is Always Denied', ToastAndroid.SHORT);
        } else {
          // ToastAndroid.show('User Denied Permission', ToastAndroid.SHORT);
          return null;
        }
      }
    } else {
      // await request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
      //   console.log('LOCATION_ALWAYS', result);
      //   if (result == 'granted') {
      //     getCurrentPosition()
      //   } else {
      //   }
      // });
    }
  };
  React.useEffect(() => {
    getServiceCount();
    requestPermission();
    getTotalFairs();
  }, []);

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerStyle: {
        backgroundColor: colors.theme_yellow1,
      },
      headerRight: () => {
        return (
          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              width: '110%',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: colors.theme_white,
                fontFamily: fonts.futura_medium,
              }}>
              Home
            </Text>
          </View>
        );
      },
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.theme_white}}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            setSwtich(false);
          }}>
          <Text
            style={{
              fontSize: 16,
              color: colors.theme_black7,
              fontFamily: fonts.futura_medium,
            }}>
            OFF Duty
          </Text>
        </TouchableOpacity>
        <Switch
          trackColor={{false: colors.theme_black4, true: colors.theme_yellow1}}
          thumbColor={swtich ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setSwtich}
          value={swtich}
          style={{width: 50, alignSelf: 'center'}}
        />
        <TouchableOpacity
          onPress={() => {
            setSwtich(true);
          }}>
          <Text
            style={{
              fontSize: 16,
              color: colors.theme_black7,
              fontFamily: fonts.futura_medium,
            }}>
            ON Duty
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.map_container}>
        {!swtich ? (
          <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.futura_medium,
                color: colors.theme_yellow1,
              }}>
              You are Off Duty
            </Text>
          </View>
        ) : (
          <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            style={styles.map}
            showsMyLocationButton={true}
            showsCompass={true}
            showsBuildings={true}
            region={{
              latitude: parseFloat(coordinates[1]),
              longitude: parseFloat(coordinates[0]),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            initialRegion={{
              latitude: parseFloat(coordinates[1]),
              longitude: parseFloat(coordinates[0]),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: parseFloat(coordinates[1]),
                longitude: parseFloat(coordinates[0]),
              }}
              title="My locations"
              description="Here I am."></MapView.Marker>
          </MapView>
        )}
        {/* {swtich && (
          <View style={styles.locatebtn}>
            <Image
              source={require('../../assets/Home/gps.png')}
              style={{height: 30, width: 30}}
            />
          </View>
        )} */}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData,
});
const mapDispatchToProps = dispatch => ({dispatch});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  map_container: {
    height: '100%',
    width: '100%',
  },
  map: {
    // width: '100%',
    // height: '70%'
    flex: 1,
  },
  header: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  locatebtn: {
    elevation: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 5,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    position: 'absolute',
    right: 20,
    top: Dimensions.get('screen').height / 1.5,
    zIndex: 1000,
  },
  locate_icon: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 50,
    fontSize: 30,
    elevation: 1000,
    zIndex: 1000,
  },
});
