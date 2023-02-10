import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  api_url,
  colors,
  provider_running_services,
  provider_services_action,
  fonts,
} from '../config/Constant';
import {connect} from 'react-redux';
import axios from 'axios';
import {Loader} from '../components/Loader';
const {width, height} = Dimensions.get('screen');

const CarReqest = props => {
  const [getCarRequest, setCarRequests] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfRequests, setNumberOfRequest] = useState(0);
  useEffect(() => {
    props.navigation.setOptions({
      tabBarShowLabel: true,
      tabBarLabel: label => (
        <View style={{flex: 0, flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              color: label.focused ? colors.theme_black6 : label.color,
              fontFamily: fonts.futura_medium,
            }}>
            NEW REQUEST
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.red_color1,
              fontFamily: fonts.futura_medium,
              lineHeight: 12,
              marginLeft: 2,
            }}>
            {numberOfRequests}
          </Text>
        </View>
      ),
    });
  });

  useEffect(() => {
    myRequets();
  }, []);

  useEffect(() => {
    get_length();
  }, [getCarRequest]);

  const myRequets = async () => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + provider_running_services,
      data: {
        driver_id: props?.userData?.id,
      },
    })
      .then(async res => {
        setIsLoading(false);
        await setCarRequests(res.data.responce);
        await get_length();
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const get_length = () => {
    let x = 0;
    getCarRequest &&
      getCarRequest.map((item, index) => {
        if (item.is_cancel != '1') {
          x = x + 1;
          console.log('dsfdsf');
        }
      });
    console.log(x);
    setNumberOfRequest(x);
  };

  const accpetReject = async (id, status) => {
    await axios({
      method: 'post',
      url: api_url + provider_services_action,
      data: {
        id: id,
        status: status,
      },
    })
      .then(res => {
        console.log(res.data);
        myRequets();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onRefresh = React.useCallback(() => {
    myRequets();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.theme_black0}}>
      {/* <Loader isVisible={isLoading} /> */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            colors={[
              colors.red_color1,
              colors.green_color1,
              colors.theme_yellow1,
            ]}
            onRefresh={onRefresh}
          />
        }>
        <View
          style={{
            flex: 0,
            width: '85%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingVertical: 15,
          }}>
          {getCarRequest &&
            getCarRequest.map((item, index) => {
              if (item?.is_cancel != '1') {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('orderView', {
                        orderDetails: item,
                        flag: 1,
                      })
                    }
                    key={item.id}
                    style={{
                      flex: 0,
                      width: '45%',
                      padding: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.theme_white,
                      elevation: 8,
                      shadowColor: colors.theme_black5,
                      marginRight: index % 2 == 0 ? width * 0.08 : 0,
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: colors.theme_yellow1,
                      marginBottom: 15,
                    }}>
                    <Image
                      source={{uri: item.car.image}}
                      style={{
                        width: width * 0.3,
                        height: width * 0.2,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.theme_black7,
                        fontFamily: fonts.futura_bold,
                        textAlign: 'center',
                      }}>
                      {`${item.car.brand_name} ${item.car.model}`}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.theme_black7,
                        fontFamily: fonts.futura_medium,
                        textAlign: 'center',
                        marginTop: 5,
                      }}>
                      DL78HJ7898
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.theme_black7,
                        fontFamily: fonts.futura_medium,
                        textAlign: 'center',
                        marginTop: 5,
                      }}>
                      02-02-20023 07-09
                    </Text>
                    <View
                      style={{
                        flex: 0,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginTop: 15,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          accpetReject(item.id, 2);
                        }}
                        style={{
                          flex: 0,
                          width: '45%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#e5383b',
                          borderRadius: 5,
                          paddingVertical: 2,
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.theme_white,
                            fontFamily: fonts.futura_medium,
                          }}>
                          Reject
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          accpetReject(item.id, 1);
                        }}
                        style={{
                          flex: 0,
                          width: '45%',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'green',
                          borderRadius: 5,
                          paddingVertical: 2,
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.theme_white,
                            fontFamily: fonts.futura_medium,
                          }}>
                          Accept
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData,
  totalCapacityRedux: state.user.totalCapacity,
});
const mapDispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(CarReqest);
