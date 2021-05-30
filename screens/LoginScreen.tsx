import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session';
import React, {useEffect, useState} from 'react';
import {Button, Text} from "@ui-kitten/components";

const IOS_CLIENT_ID = "805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com"
const ANDROID_CLIENT_ID = '805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com' 
const EXPO_CLIENT_ID = '805861335802-57erc2aqh4vfpiuhafsv9o5883263nm1.apps.googleusercontent.com'
const GOOGLE_GET_USER_API = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json'

export default function LoginScreen() {
    const config = {
		expoClientId: EXPO_CLIENT_ID,
		iosClientId: IOS_CLIENT_ID,
		androidClientId: ANDROID_CLIENT_ID,
          scopes: [
            'profile',
            'email'
          ]
	  }
    const [request, response, promptAsync] = Google.useAuthRequest(config);


      
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
        console.log(response)
        console.log(authentication)
        console.log(authentication?.accessToken)
        fetch('https://www.googleapis.com/userinfo/v2/me', {
                headers: { Authorization: `Bearer ${authentication?.accessToken}` },
            }).then((data) => {
                console.log("Asd")
                console.log(data)
                
            })
       
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