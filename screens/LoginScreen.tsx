import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import React, { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-native";
import { Button, Text } from "@ui-kitten/components";
import { View } from "../components/Themed";
import logo from "../assets/images/splash_screen.png";
import google from "../assets/images/google.png";
import { StyleSheet, Image, Animated } from "react-native";

const IOS_CLIENT_ID =
  "805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com";
const EXPO_CLIENT_ID =
  "805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com";
const GOOGLE_GET_USER_API =
  "https://www.googleapis.com/oauth2/v1/userinfo?alt=json";

export default function LoginScreen() {
  const config = {
    expoClientId: EXPO_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    scopes: ["profile", "email"],
  };
  const [request, response, promptAsync] = Google.useAuthRequest(config);
  const history = useHistory();

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.trace(response);
      fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${authentication?.accessToken}` },
      }).then(response => response.json())
      .then(data => {
        console.log("got user data from google");
        history.push({pathname: "restaurants",
        state: { userData: data },})
      });
    }
  }, [response]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Image source={logo} style={styles.pic} />
      <Button
        disabled={!request}
        onPress={() => {
          promptAsync();
        }}
        style={styles.btn}
        accessoryLeft={() => <Image source={google} style={styles.google} />}
      >
        Sign in with Google
      </Button>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  google: {
    height: 30,
    width: 30,
  },
  pic: {
    height: "80%",
    width: "100%",
  },
  btn: {
    zIndex: 5,
    position: "absolute",
    width: "80%",
    bottom: 55,
    backgroundColor: "#4285F4",
    height: 50,
  },
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
});
