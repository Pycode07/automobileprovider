import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {api_url, colors, fonts, provider_sos} from '../config/Constant';
import {connect} from 'react-redux';
import {Loader} from '../components/Loader';

const SosRequest = props => {
  const [getSosRequest, setGetSosRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    props.navigation.setOptions({
      title: 'SOS',
    });
  });

  const get_sos = async () => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + provider_sos,
      data: {
        driver_id: props?.userData?.id,
      },
    })
      .then(res => {
        setIsLoading(false);
        console.log(res.data);
        setGetSosRequest(res.data.responce);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    get_sos();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.theme_black0}}>
      <Loader isVisible={isLoading} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            width: '85%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingVertical: 15,
          }}>
          {getSosRequest &&
            getSosRequest.map((item, index) => (
              <TouchableOpacity
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
                
              </TouchableOpacity>
            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(SosRequest);
