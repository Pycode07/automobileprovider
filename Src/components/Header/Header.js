import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {FONTS} from '../../utils/FontFamily';
const {height, width} = Dimensions.get('window');

const Header = props => {
  const {
    backIcon,
    onBackPress,
    AuthLogo,
    AUTHLOGO,
    Title,
    HeaderTitle,
    rightIcon,
    Drawer,
    cross,
    onCrossPress,
    onDrawerPress,
    RightIconPress,
    RightIconTwo,
    Profile,
    Faq,
    RightIconTwoPress,
  } = props;
  return (
    <View
      style={{
        backgroundColor: '#1D6DFD',
        height: height * 0.14,
        width: width * 1,
      }}>
      <ImageBackground
        resizeMode="stretch"
        source={ImagePath.HEADERBACK}
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          height: height * 0.21,
          width: '100%',
        }}>
        <View
          style={{
            marginTop: height * 0.02,
            // backgroundColor: "#1D6DFD",
            height: height * 0.08,
            width: width * 1,
            flexDirection: 'row',
          }}>
          {backIcon ? (
            <View
              style={{
                // backgroundColor: "green",
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: height * 0.08,
                width: width * 0.13,
              }}>
              <TouchableOpacity
                onPress={onBackPress}
                style={{
                  // backgroundColor: "green",
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  height: height * 0.08,
                  width: width * 0.15,
                }}>
                <Image
                  source={ImagePath.BACKICON}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          ) : Drawer ? (
            <View
              style={{
                // backgroundColor: "green",
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: height * 0.08,
                width: width * 0.13,
              }}>
              <TouchableOpacity onPress={onDrawerPress}>
                <Image
                  source={ImagePath.DRAWER}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          ) : cross ? (
            <View
              style={{
                // backgroundColor: "green",
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: height * 0.08,
                width: width * 0.13,
              }}>
              <TouchableOpacity onPress={onCrossPress}>
                <Image
                  source={ImagePath.CROSSHEAD}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          {HeaderTitle ? (
            <View
              style={{
                // backgroundColor: "red",
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                height: height * 0.08,
                width: width * 0.64,
              }}>
              <View
                style={{
                  // backgroundColor: "blue",
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: height * 0.08,
                  width: width * 0.6,
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.PoppinsRegular,
                    color: '#FFFFFF',
                    fontSize: height / 38,
                  }}>
                  {Title}
                </Text>
              </View>
            </View>
          ) : null}
          {rightIcon ? (
            <View
              style={{
                // backgroundColor: "orange",
                height: height * 0.08,
                width: width * 0.1,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <TouchableOpacity onPress={RightIconPress}>
                <Image
                  source={ImagePath.BANK}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          {RightIconTwo ? (
            <View
              style={{
                // backgroundColor: "yellow",
                height: height * 0.08,
                width: width * 0.13,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <TouchableOpacity onPress={RightIconTwoPress}>
                <Image
                  source={ImagePath.FAQ}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          ) : Faq ? (
            <View
              style={{
                // backgroundColor: "yellow",
                height: height * 0.08,
                width: width * 0.13,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <TouchableOpacity onPress={RightIconTwoPress}>
                <Image
                  source={ImagePath.FAQ}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          ) : Profile ? (
            <View
              style={{
                // backgroundColor: "yellow",
                height: height * 0.08,
                width: width * 0.13,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <TouchableOpacity onPress={RightIconTwoPress}>
                <Image
                  source={ImagePath.FAQ}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
