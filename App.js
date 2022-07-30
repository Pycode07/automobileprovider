import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Routes from './Src/Navigation/Routes';
import MyGarage from './Src/screens/Garage_Details/MyGarage';
import Kyc from './Src/screens/Home/Kyc';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({});
