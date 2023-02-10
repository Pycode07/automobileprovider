import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../assets/colors';
import {fonts} from '../config/Constant';

const Header = props => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <AntDesign name="leftcircleo" color={colors.theme_yellow1} size={25} />
        <Text
          style={{
            fontSize: 22,
            color: colors.theme_yellow1,
            fontFamily: fonts.futura_medium,
            marginLeft: 10,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
