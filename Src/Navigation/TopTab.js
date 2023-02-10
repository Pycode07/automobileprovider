import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActiveCars from '../screens/ActiveCars';
import CarReqest from '../screens/CarReqest';
import SosRequest from '../screens/SosRequest';

const Tab = createMaterialTopTabNavigator();

const TopTab = props => {
  return (
    <Tab.Navigator initialRouteName="activeCar">
      <Tab.Screen name="activeCar" component={ActiveCars} />
      <Tab.Screen name="carRequest" component={CarReqest} />
      <Tab.Screen name="sosRequest" component={SosRequest} />
    </Tab.Navigator>
  );
};

export default TopTab;
