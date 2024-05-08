import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './presentation/navigator/Navigator';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = ({ children } : PropsWithChildren) => {
  return(
    <NavigationContainer>
      <ThemeProvider>
        { children }
      </ThemeProvider>
    </NavigationContainer>
  )
}


function ComponentsApp(): React.JSX.Element {
  return (
    <AppState>
      <Navigator />
    </AppState>
    
  );
};

export default ComponentsApp;