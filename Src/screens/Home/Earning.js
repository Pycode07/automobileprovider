import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {ImagePath} from '../../utils/ImagePath';
import {COLOR} from '../../utils/Colors';
import {connect} from 'react-redux';
import moment from 'moment';
import {colors} from '../../assets/colors';
import {api_url, driver_earning, fonts} from '../../config/Constant';
import Header from '../../components/Header';
import {useState} from 'react';
import {Loader} from '../../components/Loader';
const {height, width} = Dimensions.get('window');
const Earning = props => {
  const [earning, setEarning] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerLeft: () => {
        return <Header title="Earnings" navigation={props.navigation} />;
      },
    });
  }, []);

  const getEarning = async () => {
    setIsLoading(true);
    try {
      await axios({
        method: 'post',
        url: api_url + driver_earning,
        data: {
          id: props.userData?.id,
        },
      }).then(res => {
        setIsLoading(false);
        setEarning(res.data.result);
      });
    } catch (error) {
      setIsLoading(false);
      console.warn('error', error.message);
    }
  };

  React.useEffect(() => {
    getEarning();
  }, []);
  return (
    <ScrollView style={{flex: 0, backgroundColor: '#fff'}}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <Loader isVisible={isLoading} />
      <View style={{marginHorizontal: 10, marginTop: 15}}>
        <View
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.theme_black5,
            backgroundColor: colors.theme_yellow2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            marginHorizontal: 5,
            marginBottom: 15,
          }}>
          <View
            style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                color: colors.black_color1,
                marginBottom: 10,
                fontFamily: fonts.futura_bold,
              }}>
              Total Earnings
            </Text>
            <View
              style={{
                flex: 0,
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: colors.theme_yellow1,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.theme_black6,
                  fontWeight: '500',
                }}>
                Rs {earning?.total_earnings}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderRadius: 5,
            shadowColor: colors.theme_black5,
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
          <Text
            style={{
              fontSize: 18,
              color: colors.black_color1,
              fontFamily: fonts.futura_bold,
              marginLeft: 10,
            }}>
            Earnings
          </Text>
          {earning &&
            earning?.earnings.map((item, index) => (
              <View key={index} style={{paddingHorizontal: 5}}>
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
                        fontSize: 16,
                        color: colors.theme_yellow1,
                        fontFamily: fonts.futura_medium,
                      }}>
                      *BH{item.trip_id}
                    </Text>
                    <View
                      style={{
                        flex: 0,
                        paddingHorizontal: 10,
                        paddingVertical: 2,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: colors.theme_yellow1,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: colors.theme_black5,
                          fontWeight: fonts.futura_medium,
                        }}>
                        Rs {item.amount}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: colors.theme_black5,
                        fontFamily: fonts.futura_medium,
                      }}>
                      {moment(item.created_at).format('Do MMMM YYYY HH:MM A')}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
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
