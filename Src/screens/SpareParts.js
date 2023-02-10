import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../assets/colors';

const SpareParts = props => {
  props.navigation.setOptions({
    title: '',
    headerStyle: {backgroundColor: colors.theme_yellow1},
    headerLeft: () => {
      return (
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <AntDesign name="arrowleft" size={25} color={colors.theme_white} />
          </TouchableOpacity>
          <Text
            style={{
              color: colors.theme_white,
              fontSize: 20,
              fontFamily: 'FuturaMediumBT',
              marginLeft: 10,
            }}>
            Spare Parts
          </Text>
        </View>
      );
    },
  });
  return (
    <View style={{flex: 1, backgroundColor: colors.theme_white}}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 16,
            color: colors.theme_yellow1,
            fontFamily: 'FuturaMediumBT',
          }}>
          Comming soon...
        </Text>
      </View>
    </View>
  );
};

export default SpareParts;
