import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {colors, layout} from '../theme';
import {InitialScreen} from '../screens';
import {ApplicationStackParamList} from '../types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={[layout.fill, {backgroundColor: colors.WHITE}]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
