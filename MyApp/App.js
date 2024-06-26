import React from 'react';
import Navigator from './Navigator';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
        <Navigator />
    </ThemeProvider>
  );
};

export default App;