import 'react-native-gesture-handler';

import React from 'react';
import Navigator from './presentation/navigator/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';


function ComponentsApp(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
    
  );
};

export default ComponentsApp;