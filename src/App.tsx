import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import RootNavigator from './components/RootNavigator';

const App = () => {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default App;
