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
import {api_url, colors, fonts, provider_packages} from '../config/Constant';
import {connect} from 'react-redux';
import axios from 'axios';
import {ImagePath} from '../utils/ImagePath';
import {Loader} from '../components/Loader';
const {width, height} = Dimensions.get('screen');
import moment from 'moment';

const ActiveCars = props => {
  const [activeServices, setActiveServices] = useState(null);
  const [numberOfRequests, setNumberOfRequest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    props.navigation.setOptions({
      tabBarLabel: label => (
        <View style={{flex: 0, flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              color: label.focused ? colors.theme_black6 : label.color,
              fontFamily: fonts.futura_medium,
            }}>
            GARAGE
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
    carRequets();
  }, []);

  useEffect(() => {
    get_length();
  }, [activeServices]);

  const carRequets = async () => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + provider_packages,
      data: {
        id: props?.userData?.id,
      },
    })
      .then(res => {
        console.log(res.data.res[0]);
        setIsLoading(false);
        setActiveServices(res.data.res);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const get_length = () => {
    let x = 0;
    activeServices &&
      activeServices.map((item, index) => {
        if (item.is_cancel != '1') {
          x = x + 1;
          console.log('dsfdsf');
        }
      });
    console.log(x);
    setNumberOfRequest(x);
  };

  const onRefresh = React.useCallback(() => {
    carRequets();
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
            flex: 1,
            width: '85%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            paddingVertical: 15,
          }}>
          {activeServices &&
            activeServices.map((item, index) => {
              if (item?.is_cancel != '1') {
                return (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.6}
                    onPress={() =>
                      props.navigation.navigate('orderView', {
                        orderDetails: item,
                      })
                    }
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
                      marginBottom: 20,
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
                        //marginTop: 10,
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
                      {item.car.car_no}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.theme_black7,
                        fontFamily: fonts.futura_medium,
                        textAlign: 'center',
                        marginTop: 5,
                      }}>
                      {item.package_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.theme_black7,
                        fontFamily: fonts.futura_medium,
                        textAlign: 'center',
                        marginTop: 5,
                      }}>
                      {moment(item.order_date).format('Do MMM YYYY')}{' '}
                      {item.time_slot}
                    </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCars);
