import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {FONTS} from '../../utils/FontFamily';
import {colors} from '../../assets/colors';
const {height, width} = Dimensions.get('window');

const CustomButton = props => {
  const {title, btnMainView, ButtonPress, disabled} = props;
  return (
    <TouchableOpacity onPress={ButtonPress} disabled={disabled}>
      <View
        source={ImagePath.BUTTON}
        resizeMode="contain"
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          height: height * 0.07,
          width: width * 0.9,
          borderWidth: 1,
          backgroundColor: colors.theme_yellow1,
          borderRadius: 31,
        }}>
        <Text
          style={{
            fontFamily: FONTS.PoppinsRegular,
            fontSize: height / 40,
            color: '#FFFFFF',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
