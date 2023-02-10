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
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
import {colors} from '../../assets/colors';
import {api_url, get_training} from '../../config/Constant';
const {height, width} = Dimensions.get('window');
const Traning = ({navigation, route}) => {
  const [traning, setTraning] = React.useState(null);

  const getTraning = async () => {
    try {
      await axios({
        method: 'get',
        url: api_url + get_training,
      }).then(res => {
        console.warn(res.data);
        setTraning(res.data.response);
      });
    } catch (error) {
      console.warn('error', error.message);
    }
  };

  React.useEffect(() => {
    getTraning();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: height * 0.1,
          width: width * 1,
          borderWidth: 1,
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
          <Text style={{color: COLOR.WHITE, fontSize: 22}}>Traning</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <FlatList
          numColumns={2}
          data={traning}
          renderItem={({item, index}) => {
            return (
              <View style={{width: Dimensions.get('screen').width / 2.1}}>
                <View
                  style={{
                    flex: 1,
                    marginVertical: 5,
                    height: 100,
                    marginHorizontal: 10,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={{uri: item?.image}}
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: 10,
                      backgroundColor: 'red',
                    }}
                  />
                </View>
                <Text style={{alignSelf: 'center'}}>{item?.description}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Traning;
