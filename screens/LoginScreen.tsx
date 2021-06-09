import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@ui-kitten/components";
import {
  getUserById,
  GetUserByIdData,
} from "../api/queries/client/getUserById";
import { getCreateUserData, createUser } from "../api/queries/createUser";
import logo from "../assets/images/splash_screen.png";
import google from "../assets/images/google.png";
import { StyleSheet, Image, Animated } from "react-native";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

interface LoginProps {
  onSuccess: Function;
}

const IOS_CLIENT_ID =
  "805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com";
const EXPO_CLIENT_ID =
  "805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com";
const GOOGLE_GET_USER_API =
  "https://www.googleapis.com/oauth2/v1/userinfo?alt=json";

const LoginScreen = (props: LoginProps) => {
  const config = {
    expoClientId: EXPO_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    scopes: ["profile", "email"],
  };

  const [userData, setUserData] = useState<any>({});

  const [request, response, promptAsync] = Google.useAuthRequest(config);
  /*const [getUser, { loading, data }] =
    useLazyQuery<GetUserByIdData, { id: string }>(getUserById);*/

  const [getUser, { called, loading, data }] = useLazyQuery(getUserById);

  //const [gUser] = useMutation(getUserById);
  const [cUser] = useMutation(createUser);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.trace(response);
      fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${authentication?.accessToken}` },
      })
        .then((response) => response.json())
        .then((jsonData) => {
          let id = jsonData?.id + "00000000000";
          jsonData.id = id;
          setUserData(jsonData);
          getUser({ variables: { id: id } });
          // props.onSuccess(jsonData);
        });
    }
  }, [response]);

  useEffect(() => {
    if (called == true) {
      if (typeof data === "undefined" || data?.user == null) {
        cUser({
          variables: getCreateUserData(
            userData.id,
            userData.email
          ),
        })
          .then((res) => props.onSuccess(userData))
          .catch((err) => console.error(err));
      } else {
        
        props.onSuccess(userData)
      }
    }
  }, [data]);

  const login = () => {
    promptAsync();
    //getUser({ variables: userData?.id })
  };

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
          login();
        }}
        style={styles.btn}
        accessoryLeft={() => <Image source={google} style={styles.google} />}
      >
        Sign in with Google
      </Button>
    </Animated.View>
  );
};

export default LoginScreen;

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
