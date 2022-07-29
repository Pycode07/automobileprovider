import React from 'react';
import {
  TextInput,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const {height, width} = Dimensions.get('window');

function CustomInput(props) {
  const {
    keyboardType,
    maxLength,
    placeholderColor,
    value,
    multiline,
    onChangeText,
    placeholderTextColor,
    RightIcon,
    placeholder,
    containerStyle,
    editable,
    rightImg,
    LeftIcon,
    LeftIconTwo,
    leftImg,
    LeftCode,
    countryCode,
    CountryCode,
    CountryFlag,
  } = props;

  return (
    <View style={containerStyle}>
      <View style={styles.MainContainer}>
        <View>
          {LeftIcon ? (
            <View style={styles.LeftIconContainer}>
              <Image source={leftImg} style={styles.LeftImgView} />
            </View>
          ) : null}

          {/* *************** Country Code *************** */}
          {countryCode ? (
            <View style={[styles.CountryCodeContainer, props.CountryTheme]}>
              <Image
                source={CountryFlag}
                style={{height: 25, width: 25, borderRadius: 25 / 2}}
              />
              <Text
                style={styles.CountryNameTxt}
                onPress={props.showCountryCode}>
                {CountryCode}
              </Text>
            </View>
          ) : null}
        </View>
        <TextInput
          maxLength={maxLength}
          style={[styles.TxtInpt, props.styles]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          multiline={multiline}
          keyboardType={keyboardType ? keyboardType : 'default'}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : placeholderColor
          }
          value={value}
          returnKeyType={'done'}
          autoCapitalize="none"
          editable={editable}
          {...props}
        />

        {RightIcon ? (
          <TouchableOpacity
            onPress={props.RightIconPress}
            style={styles.RightIconContainer}>
            <Image
              source={rightImg}
              resizeMode="contain"
              style={[styles.imgView, props.ImgStyling]}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
export default CustomInput;

const styles = StyleSheet.create({
  imgView: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  TxtInpt: {
    height: height * 0.08,
    width: width * 0.7,
    // backgroundColor: "red",
    marginLeft: width * 0.03,
  },
  MainContainer: {
    height: height * 0.075,
    width: width * 0.9,
    flexDirection: 'row',
    // backgroundColor: "red",
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10,
    alignItems: 'center',
  },
  LeftIconContainer: {
    height: height * 0.3,
    // height: height * 0.08,
    width: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.6,
    borderColor: 'lighgrey',
  },
  LeftImgView: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // tintColor: COLOR.GREY,
  },
  CountryCodeContainer: {
    height: height * 0.3,
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.6,
    // borderColor: COLOR.GREY,
    flexDirection: 'row',
  },
  CountryNameTxt: {
    // color: COLOR.GREY,
    fontSize: height / 62,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 10,
  },
  RightIconContainer: {
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: "pink"
  },
});
