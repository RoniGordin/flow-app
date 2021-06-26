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
import { useEffect } from 'react';
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  getUserById,
  GetUserByIdData,
} from "./api/queries/client/getUserById";

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
  const [getUser, { called, loading, data }] = useLazyQuery(getUserById);


  // useEffect(() => {
  //   getUser({ variables: { id: "11009485-1426-6168-3000-100000000000" } })
  // }, [])

  // useEffect(() => {
  //   if (called == true) {
  //     if (typeof data === "undefined" || data?.user == null) {
  //       // cUser({
  //       //   variables: getCreateUserData(
  //       //     userData.id,
  //       //     userData.email
  //       //   ),
  //       // })
  //       //   .then((res) => onLogin(userData))
  //       //   .catch((err) => console.error(err));
  //       alert("user not found")
  //     } else {
  //       onLogin(userData)
  //     }
  //   }
  // }, [data])
  const onLogin = (data: any) => {
    setUserData(data);
    setIsLoggedIn(true);
    AsyncStorage.setItem("userFullName", data?.name ?? "matan cohen");
    AsyncStorage.setItem("id", data?.id ?? "11009485-1426-6168-3000-100000000000"); 
    AsyncStorage.setItem("userEmail", data?.username ?? "matan21197@gmail.com");
    AsyncStorage.setItem("userPicUrl", data?.picture);
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <ApolloProvider client={client}>
        <View style={styles.container}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <SafeAreaProvider>
              <AppContext.Provider value={{ currentOrder, setCurrentOrder }}>
                {isLoggedin ? (
                  <Navigation colorScheme={colorScheme} />
                ):( 
                   <LoginScreen onSuccess={onLogin} />
                  // <div></div>
                )}
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
