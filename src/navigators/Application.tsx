import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {InitialScreen} from '../screens';
import {ApplicationStackParamList} from '../types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
