import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './presentation/navigator/Navigator';

function ComponentsApp(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    
  );
};

export default ComponentsApp;