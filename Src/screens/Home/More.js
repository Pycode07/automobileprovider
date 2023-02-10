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
import {api_url, customer_profile_update} from '../../config/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
        // let a = await AsyncStorage.setItem("grageDetails", JSON.stringify(JSON.parse(resp.data).result))
        // props.dispatch(UserAction.setGrageData(JSON.parse(resp.data).result));
        // props.navigation.navigate('Home');
        // alert('Successfully updated');
      })
      .catch(err => {
        console.log(err);
        // this.showSnackbar("Error on while uploading,Try again");
      });
  };
  return (
    <SafeAreaView style={{height: height * 1, width: width * 1}}>
      <ScrollView>
        <View style={styles.titals}>
          <TouchableOpacity
          // onPress={() => {
          //   launchImageLibrary({
          //     selectionLimit: 0,
          //     mediaType: 'photo',
          //     includeBase64: false,
          //   }, (response) => {
          //     if (response.didCancel) {
          //       console.log(response)
          //     } else if (response.error) {
          //       console.log(response)
          //     }
          //     else {
          //       setImageData(response)
          //       // setIsVisible(false)
          //     }
          //   })
          // }}
          //onPress={() => props.navigation.navigate('')}
          >
            <View style={styles.profile}>
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
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('orderHistory')}>
            {/* <TouchableOpacity onPress={() => update()}> */}
            <View style={styles.profile}>
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
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('Kyc')}>
            {/* <TouchableOpacity onPress={() => update()}> */}
            <View style={styles.profile}>
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
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Traning')}>
            <View style={styles.profile}>
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
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('spareParts')}>
            <View style={styles.profile}>
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
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('Help')}>
            <View style={styles.profile}>
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
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Earning')}>
            <View style={styles.profile}>
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
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('Wallet')}>
            <View style={styles.profile}>
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
            </View>
          </TouchableOpacity>
          <TouchableOpacity
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
            <View style={styles.profile}>
              <View style={styles.img}>
                <Image
                  source={ImagePath.WALLETMONEY}
                  resizeMode="contain"
                  style={{height: 25, width: 25}}
                />
              </View>
              <View style={styles.txxt}>
                <Text style={styles.commantxt}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({
  header: {
    height: height * 0.12,
    width: width * 1,
    // borderWidth: 1
  },
  moreText: {
    height: height * 0.08,
    width: width * 0.78,
    alignSelf: 'center',
    // backgroundColor: 'cyan',
    justifyContent: 'flex-end',
  },
  titals: {
    height: height * 0.9,
    width: width * 0.8,
    alignSelf: 'center',
    // backgroundColor: 'red'
  },
  profile: {
    height: height * 0.09,
    width: width * 0.8,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txxt: {
    height: height * 0.07,
    width: width * 0.6,
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  img: {
    height: height * 0.06,
    width: width * 0.12,
    backgroundColor: colors.theme_yellow1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commantxt: {
    fontSize: height / 40,
    color: COLOR.BLACK,
    fontWeight: '600',
  },
});
