import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { View } from "./components/Themed";

import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LoginScreen from "./screens/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "./types";

const client = new ApolloClient({
  uri: "http://193.106.55.108:80/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const [isLoggedin, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<Object>({});

  const onLogin = (data: Any) => {
    setUserData(data);
    setIsLoggedIn(true);
    AsyncStorage.setItem("userFullName", data?.name );
    AsyncStorage.setItem("userEmail", data?.email );
    AsyncStorage.setItem("userPicUrl", data?.picture );
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
              {isLoggedin ? (
                <Navigation colorScheme={colorScheme} />
              ) : (
                <LoginScreen onSuccess={onLogin} />
              )}
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
