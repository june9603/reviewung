import React, { useEffect } from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Stack from "./navigation/Stack";
import SplashScreen from "react-native-splash-screen"; // Splash 패키지
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'; //d
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({ 
  link: new HttpLink({ uri: "http://ec2-18-191-110-104.us-east-2.compute.amazonaws.com/graphql" }), 
  cache: new InMemoryCache() 
}); // graphql client 생성

export default function App() {
    useEffect (() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    }, []); // 앱 실행 후 Splash 화면 1초 로딩 후 숨기기
  return(
    <ApolloProvider client={client}> 
        <NavigationContainer>
          <Stack/>
        </NavigationContainer>
        <StatusBar barStyle="light-content" />
    </ApolloProvider>
  );
};

    
    
