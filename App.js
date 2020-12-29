import React, { useEffect } from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Stack from "./navigation/Stack";
import SplashScreen from "react-native-splash-screen"; // Splash 패키지



export default function App() {
    useEffect (() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    }, []); // 앱 실행 후 Splash 화면 1초 로딩 후 숨기기
  return(
    <>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  );
};

    
    
