import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {ImagePath} from '../utils/ImagePath';
const {height, width} = Dimensions.get('window');

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: 'palegreen',
  separatorFinishedColor: 'palegreen',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'palegreen',
  stepIndicatorUnFinishedColor: 'limegreen',
  stepIndicatorCurrentColor: 'green',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 16,
  stepIndicatorLabelCurrentColor: 'black',
  stepIndicatorLabelFinishedColor: 'black',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: 'black',
};
const OrderTracking = props => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.tital}>
          <Text style={{fontSize: 24}}> Your Progress </Text>
          <Text style={{fontSize: 13}}> Thu, 28 Jul </Text>
          <Text style={{fontSize: 13}}> Order ID 52hd25jyt </Text>
        </View>
        <View style={styles.tital}>
          <View style={styles.titalimg}>
            <Image
              source={require('../assets/Splash/intro2.png')}
              resizeMode="contain"
              style={{height: 100, width: 100}}
            />
          </View>
          <View style={styles.amt}>
            <Text> Amt : 550.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={6}
            direction="vertical"
            //labels={dummyData.data.map((item) => item.title)}
            labels={[
              //'Request Send',
              'Request Accepted',
              'Car Picked',
              'Reach Garage',
              'Working',
              'Out for Delivery',
              'Completed',
            ]}
            // onPress={() => onStepPress('')}
          />
        </View>
      </View>
    </View>
  );
};
export default OrderTracking;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },

  // ========header

  header: {
    height: height * 0.17,
    width: width * 1,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tital: {
    height: height * 0.13,
    width: width * 0.46,
    // borderWidth: 1,
    // alignItems:'center'
  },
  titalimg: {
    height: height * 0.1,
    width: width * 0.42,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  amt: {
    height: height * 0.028,
    width: width * 0.42,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
