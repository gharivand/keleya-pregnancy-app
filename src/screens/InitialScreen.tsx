import {View} from 'react-native';
import {ApplicationScreenProps} from '../types/navigation';
import React from 'react';
import {layout} from '../theme';

const InitialScreen: React.FC<ApplicationScreenProps> = () => {
  return <View style={layout.fill}></View>;
};

export default InitialScreen;
