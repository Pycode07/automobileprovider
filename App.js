import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Routes from './Src/Navigation/Routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({});
