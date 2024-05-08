import 'react-native-gesture-handler';

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import Navigator from './presentation/navigator/Navigator';
import { PropsWithChildren } from 'react';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';



const AppNavigation = ({ children } : PropsWithChildren) => {

  const {isDark} = useContext(ThemeContext);

  return(
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
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