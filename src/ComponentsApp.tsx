import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './presentation/navigator/Navigator';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';



const AppNavigation = ({ children } : PropsWithChildren) => {
  return(
    <NavigationContainer>
        { children }
    </NavigationContainer>
  )
}

const AppTheme = ({ children } : PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>
        { children }
      </AppNavigation>
      
    </ThemeProvider>
  )
}

function ComponentsApp(): React.JSX.Element {
  return (
    <AppTheme>
      <Navigator />
    </AppTheme>
    
  );
};

export default ComponentsApp;