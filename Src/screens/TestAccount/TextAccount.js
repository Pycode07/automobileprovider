import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';

const {height, width} = Dimensions.get('window');

const TextAccount = props => {
  return (
    <SafeAreaView style={{height: height * 1, width: width * 1}}>
      <View style={styles.header}>
        <View style={styles.moreText}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            More
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.titals}>
          <TouchableOpacity>
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

          <TouchableOpacity>
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

          <TouchableOpacity>
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

          <TouchableOpacity>
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

          <TouchableOpacity>
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

          <TouchableOpacity>
            <View style={styles.profile}>
              <View style={styles.img}>
                <Image
                  source={ImagePath.PRINT}
                  resizeMode="contain"
                  style={{height: 25, width: 25}}
                />
              </View>
              <View style={styles.txxt}>
                <Text style={styles.commantxt}>Withdrawal</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.profile}>
              <View style={styles.img}>
                <Image
                  source={ImagePath.WALLET}
                  resizeMode="contain"
                  style={{height: 25, width: 25}}
                />
              </View>
              <View style={styles.txxt}>
                <Text style={styles.commantxt}>Wallet Tranasition</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('')}>
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

export default TextAccount;

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
    backgroundColor: 'navy',
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
