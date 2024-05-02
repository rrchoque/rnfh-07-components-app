import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from "react-native";
import Navigator from './navigator/Navigation';

function ComponentsApp(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    
  );
};

export default ComponentsApp;