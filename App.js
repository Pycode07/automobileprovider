import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Routes from './Src/Navigation/Routes';
import MyGarage from './Src/screens/Garage_Details/MyGarage';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*<Routes /> */}
      <MyGarage />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({});
