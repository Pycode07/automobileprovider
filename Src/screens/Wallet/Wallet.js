import axios from 'axios';
import moment from 'moment';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {colors} from '../../assets/colors';
import {api_url, driver_wallet, driver_withdrawal_request} from '../../config/Constant';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
const {height, width} = Dimensions.get('window');

const Wallet = props => {
  const renderTransection = item => {
    return (
      <View
        style={{flexDirection: 'row', marginHorizontal: 20, marginBottom: 15}}>
        <Image
          source={require('../../assets/Images/abc.png')}
          style={{height: 50, width: 50}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={{marginLeft: 10}}>
            <Text>{item.message}</Text>
            <Text>{moment(item.created_at).format('DD-MM-YYYY HH:MM A')}</Text>
          </View>
          <Text style={{}}>
            {item.type == 1 ? '+' : '-'} ₹ {item.amount}
          </Text>
        </View>
      </View>
    );
  };

  const [walletData, setWalletData] = React.useState(null);

  const getWithdrawalListing = async () => {
    try {
      const body = {
        // id: props?.userData?.id
        id: 10,
      };
      const response = await axios.post(api_url + driver_wallet, body);
      setWalletData(response.data.result);
    } catch (error) {
      console.log('sdsad', error.message);
    }
  };

  const postWithDrawel = async () => {
    try {
      const body = {
        driver_id: props?.userData?.id,
        amount: walletData.wallet_amount,
      };
      const response = await axios.post(
       api_url + driver_withdrawal_request,
        body,
      );
      ToastAndroid.show('Request Added', ToastAndroid.SHORT);
      console.log('===>', response.data);
    } catch (error) {
      console.log('sdsad', error.message);
    }
  };

  React.useEffect(() => {
    getWithdrawalListing();
  }, []);

  // https://mechaniclane.com/admin_lane/public/api/driver/withdrawal_history

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: height * 0.1,
          width: width * 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: colors.theme_yellow1,
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
          <Text style={{color: COLOR.WHITE, fontSize: 22}}>Wallet</Text>
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
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color: colors.theme_yellow1,
          }}>
          ₹ {walletData && walletData.wallet_amount}
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
      <ScrollView>
        {walletData && walletData.wallets.map(renderTransection)}
      </ScrollView>
      <View
        style={{
          height: height * 0.13,
          width: width * 0.9,
          alignSelf: 'center',
          // borderWidth: 1,
        }}>
        <TouchableOpacity
          onPress={postWithDrawel}
          style={{
            height: height * 0.06,
            width: width * 0.9,
            alignSelf: 'center',
            // borderWidth: 1,
            borderRadius: 10,
            backgroundColor: colors.theme_yellow1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: height / 40,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Withdrawal
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        onPress={postWithDrawel}
        style={{
          height: 40,
          width: 110,
          borderRadius: 100,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center"
        }}>
        <Text style={{ fontSize: 15, color: "#fff" }}>Withdrawal</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData,
});
const mapDispatchToProps = dispatch => ({dispatch});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    width: width * 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.theme_yellow1,
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
