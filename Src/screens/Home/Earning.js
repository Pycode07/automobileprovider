import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {ImagePath} from '../../utils/ImagePath';
import {COLOR} from '../../utils/Colors';
import {connect} from 'react-redux';
import moment from 'moment';
import {colors} from '../../assets/colors';
import { api_url, driver_earning } from '../../config/Constant';
const {height, width} = Dimensions.get('window');
const Earning = ({navigation, route, userData}) => {
  const [earning, setEarning] = React.useState(null);

  const getEarning = async () => {
    try {
      await axios({
        method: 'post',
        url: api_url + driver_earning,
        data: {
          id: userData?.id,
        },
      }).then(res => {
        setEarning(res.data.result);
      });
    } catch (error) {
      console.warn('error', error.message);
    }
  };

  React.useEffect(() => {
    getEarning();
  }, []);
  return (
    <ScrollView style={{flex: 0, backgroundColor: '#fff'}}>
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
          <Text style={{color: COLOR.WHITE, fontSize: 22}}>Earning</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <View
          style={{
            borderRadius: 10,
            shadowColor: '#000',
            backgroundColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            marginHorizontal: 5,
          }}>
          <View
            style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 22,
                color: '#000',
                marginBottom: 10,
                fontWeight: 'bold',
              }}>
              Total Earnings
            </Text>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '500'}}>
              Rs{earning?.total_earnings}
            </Text>
          </View>

          {/* <View style={{ height: 90, width: 2, backgroundColor: "#000", marginHorizontal: 20 }}></View> */}

          {/* <View>
                        <Text style={{ fontSize: 12, color: '#000' }}>Today Earnings</Text>
                        <Text style={{ fontSize: 20, color: '#000', fontWeight: "500" }}>Rs{earning?.today_earnings}</Text>

                    </View> */}
        </View>

        <View
          style={{
            borderRadius: 10,
            shadowColor: '#000',
            backgroundColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

            paddingVertical: 15,
            marginHorizontal: 5,
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 15, color: '#000', marginLeft: 20}}>
            Earnings
          </Text>

          <FlatList
            data={earning?.earnings}
            renderItem={({item, index}) => {
              return (
                <View style={{paddingHorizontal: 5}}>
                  <View style={{paddingVertical: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#000',
                          fontWeight: '700',
                        }}>
                        #ML{item.trip_id}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: '#000',
                          fontWeight: '500',
                        }}>
                        Rs{item.amount}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                      }}>
                      <Text style={{fontSize: 13, color: '#000'}}>
                        {moment(item.created_at).format('Do MMMM YYYY HH:MM A')}
                      </Text>
                    </View>
                  </View>
                  {index == 3 ? null : (
                    <View
                      style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: '#00000040',
                      }}></View>
                  )}
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  userData: state.user.userData,
});
const mapDispatchToProps = dispatch => ({dispatch});
export default connect(mapStateToProps, mapDispatchToProps)(Earning);
