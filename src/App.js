import React from 'react';
import styled from 'styled-components/native';
import StackNavigation from './navigations/Stack';
import { NavigationContainer } from '@react-navigation/native'; // NavigationContainer 추가


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
