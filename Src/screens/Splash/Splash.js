import {StyleSheet, View, Dimensions, Image} from 'react-native';
import React, {useEffect} from 'react';
import {ImagePath} from '../../utils/ImagePath';
const {height, width} = Dimensions.get('screen');

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Onbording');
    }, 2000);
  }, []);

  return (
    <View>
      <Image
        source={ImagePath.Splash}
        style={styles.appLogo}
        resizeMode="stretch"
      />
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  appLogo: {
    height: height * 1,
    width: width * 1,
  },
});
