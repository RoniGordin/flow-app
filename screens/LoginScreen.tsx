import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session';
import React, {useEffect, useState} from 'react';
import {Button, Text} from "@ui-kitten/components";

const IOS_CLIENT_ID = "805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com"
const ANDROID_CLIENT_ID = '805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com' 
const EXPO_CLIENT_ID = '805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com'

export default function LoginScreen() {
    const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: EXPO_CLIENT_ID,
		iosClientId: IOS_CLIENT_ID,
		androidClientId: ANDROID_CLIENT_ID,
        redirectUri: AuthSession.makeRedirectUri({
            native: 'myapp:/oauthredirect',
            useProxy: true
          }),
          scopes: [
            'profile',
            'email'
          ]
	  });


      
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (
    <Button
    disabled={!request}
    onPress={() => {
      promptAsync();
      }}
  />
  )
}