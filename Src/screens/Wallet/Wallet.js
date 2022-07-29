import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
const {height, width} = Dimensions.get('window');

const Wallet = props => {
  const Data = [
    {
      id: 1,
      Image: ImagePath.CAR_ICONE,
    },
  ];
  const renderSearch = () => {
    return (
      <View style={styles.searchparent}>
        <TouchableOpacity style={styles.searchIconView}>
          <Image
            source={ImagePath.SEARCH_ICON}
            resizeMode="contain"
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <View style={[styles.input, styles.shadowProp]}></View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: height * 0.1,
          width: width * 1,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'navy',
        }}>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.22,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={ImagePath.BACK_ARROW}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.55,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: COLOR.WHITE, fontSize: 22}}>Withdrawal</Text>
        </View>
      </View>

      <View
        style={{
          height: height * 0.13,
          width: width * 0.9,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: 'navy'}}>
          ₹ 75.00
        </Text>
      </View>
      <View
        style={{
          height: height * 0.05,
          width: width * 0.9,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          Wallet Transactions
        </Text>
      </View>

      <View
        style={{
          height: height * 0.65,
          width: width * 0.9,
          alignSelf: 'center',
          //   borderWidth: 1,
        }}>
        {renderSearch()}
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    width: width * 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'navy',
  },
  backbtn: {
    height: height * 0.05,
    width: width * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titaltxxt: {
    height: height * 0.05,
    width: width * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
