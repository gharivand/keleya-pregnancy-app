import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  InitialScreen,
  SignUp,
  SignIn,
  NameScreen,
  DateScreen,
  WorkoutScreen,
} from '../screens';
import {ApplicationStackParamList} from '../types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="NameScreen" component={NameScreen} />
        <Stack.Screen name="DateScreen" component={DateScreen} />
        <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
