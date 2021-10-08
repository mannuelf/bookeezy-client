import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Provider, createClient } from 'urql';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { GRAPHQL } from './constants/';

const graphqlClient = createClient({
  url: GRAPHQL.endpoint,
  fetchOptions: {
    credentials: 'include',
  },
});

export default function App(): JSX.Element {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
      <SafeAreaProvider>
        <Text>Loading...</Text>
      </SafeAreaProvider>
    );
  } else {
    return (
      <Provider value={graphqlClient}>
        <SafeAreaProvider>
          <NativeBaseProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
