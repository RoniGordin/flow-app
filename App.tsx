import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { AppContext } from './context/AppContext'
import Navigation from './navigation';
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { View } from "./components/Themed";
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, DefaultOptions } from '@apollo/client';
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from './screens/LoginScreen';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: 'http://flow.cs.colman.ac.il/graphql',
  cache: new InMemoryCache(),
  defaultOptions
});

export default function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const [currentOrder, setCurrentOrder] = React.useState(undefined);
  const [isLoggedin, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<Object>({});

  const onLogin = (data: any) => {
    setUserData(data);
    setIsLoggedIn(true);
    AsyncStorage.setItem("userFullName", data?.name);
    AsyncStorage.setItem("userEmail", data?.email);
    AsyncStorage.setItem("userPicUrl", data?.picture);
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <ApolloProvider client={client}>
        <View style={styles.container}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.dark}>
            <SafeAreaProvider>
              <AppContext.Provider value={{ currentOrder, setCurrentOrder }}>
                <Navigation colorScheme={colorScheme} />
                {/* {isLoggedin ? (
                ) : (
                  <LoginScreen onSuccess={onLogin} />
                )} */}
              </AppContext.Provider>

            </SafeAreaProvider>
          </ApplicationProvider>
        </View>
      </ApolloProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    height: "100%",
    direction: "ltr",
  },
});

AppRegistry.registerComponent("MyApplication", () => App);
