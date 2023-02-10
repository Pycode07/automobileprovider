import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import Spiner from 'react-native-spinkit';
import {colors} from '../config/Constant';

export const Loader = props => {
  return (
    <Modal transparent={true} visible={props.isVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fca10a10',
        }}>
        <ActivityIndicator size={'large'} color={colors.theme_yellow1} />
      </View>
    </Modal>
  );
};
