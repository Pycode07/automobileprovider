import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors} from '../../assets/colors';
import {api_url, customer_profile_update, fonts} from '../../config/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

const More = props => {
  const [imagedData, setImageData] = React.useState(null);
  useEffect(() => {
    props.navigation.setOptions({
      headerStyle: {backgroundColor: colors.theme_white},
      headerTitleStyle: {color: colors.theme_white},
      headerTintColor: '#F7931E',
      headerLeft: () => {
        return (
          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <AntDesign
                name="leftcircleo"
                size={25}
                color={colors.theme_yellow1}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: colors.theme_yellow1,
                fontSize: 20,
                fontFamily: 'FuturaMediumBT',
                marginLeft: 10,
              }}>
              More
            </Text>
          </View>
        );
      },
    });
  }, []);
  const update = () => {
    console.log([
      {
        name: 'profile_image',
        filename: imagedData.assets[0].fileName,
        type: imagedData.assets[0].type,
        data: imagedData.assets[0].uri,
      },
      {data: 'Chirag', name: 'name'},
      {data: 'chiraggautam160@gmail.com', name: 'email'},
      {data: '8447338942', name: 'phone'},
      {data: '2022-08-17', name: 'dob'},
      {data: '1', name: 'gender'},
      {data: '378', name: 'user_id'},
    ]);
    console.log(imagedData);
    RNFetchBlob.fetch(
      'POST',
      api_url + customer_profile_update,
      {
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'profile_image',
          filename: imagedData.assets[0].fileName,
          type: imagedData.assets[0].type,
          data: imagedData.assets[0].uri,
        },
        {data: 'Chirag', name: 'name'},
        {data: 'chiraggautam160@gmail.com', name: 'email'},
        {data: '8447338942', name: 'phone'},
        {data: '2022-08-17', name: 'dob'},
        {data: '1', name: 'gender'},
        {data: '378', name: 'user_id'},
      ],
    )
      .then(async resp => {
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err);
        // this.showSnackbar("Error on while uploading,Try again");
      });
  };
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[colors.theme_white, colors.theme_yellow2]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titals}>
          <TouchableOpacity style={styles.contentContainer}>
            <View style={styles.img}>
              <Image
                source={ImagePath.PROFILE}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <View style={styles.txxt}>
              <Text style={styles.commantxt}>Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => props.navigation.navigate('orderHistory')}>
            <View style={styles.img}>
              <Image
                source={ImagePath.SEARCH}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <View style={styles.txxt}>
              <Text style={styles.commantxt}>Order History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => props.navigation.navigate('Kyc')}>
            <View style={styles.img}>
              <Image
                source={ImagePath.SEARCH}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <View style={styles.txxt}>
              <Text style={styles.commantxt}>Kyc verification</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => props.navigation.navigate('Traning')}>
            <View style={styles.img}>
              <Image
                source={ImagePath.BORD}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <View style={styles.txxt}>
              <Text style={styles.commantxt}>Training</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => props.navigation.navigate('selectYourCar')}>
            <View style={styles.img}>
              <Image
                source={ImagePath.SPARE_PART}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <View style={styles.txxt}>
              <Text style={styles.commantxt}>Spare Parts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => props.navigation.navigate('Help')}>
            <View style={styles.img}>
              <Image
                source={ImagePath.HELLO}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <View style={styles.txxt}>
              <Text style={styles.commantxt}>Partner Care</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => props.navigation.navigate('Earning')}>
            <View style={styles.img}>
              <Image
                source={ImagePath.MONEY}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <View style={styles.txxt}>
              <Text style={styles.commantxt}>Earnings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => props.navigation.navigate('Wallet')}>
            <View style={styles.img}>
              <Image
                source={ImagePath.PRINT}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <View style={styles.txxt}>
              <Text style={styles.commantxt}>Wallet</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={async () => {
              Alert.alert('Alert', 'Are you sure you want to Logout', [
                {
                  text: 'No',
                  onPress: () => {},
                },
                {
                  text: 'Log out',
                  onPress: async () => {
                    await AsyncStorage.clear();
                    props.navigation.replace('Login');
                  },
                },
              ]);
            }}>
            <View style={styles.img}>
              <Image
                source={ImagePath.WALLETMONEY}
                resizeMode="contain"
                style={{height: 25, width: 25}}
              />
            </View>
            <Text style={styles.commantxt}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default More;

const styles = StyleSheet.create({
  header: {
    height: height * 0.12,
    width: width * 1,
  },
  moreText: {
    height: height * 0.08,
    width: width * 0.78,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  titals: {
    flex: 0,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  profile: {
    height: height * 0.09,
    width: width * 0.8,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txxt: {
    //height: height * 0.07,
    width: width * 0.65,
    justifyContent: 'center',
  },
  img: {
    height: width * 0.1,
    width: width * 0.1,
    backgroundColor: colors.theme_yellow1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commantxt: {
    fontSize: 16,
    marginLeft: 15,
    color: colors.theme_black5,
    fontFamily: fonts.futura_medium,
  },
  contentContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.theme_white,
    shadowColor: colors.theme_black4,
    padding: 10,
    elevation: 5,
    borderRadius: 5,
    marginBottom: 15,
  },
});
