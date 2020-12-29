import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import GoogleLogin from "../screens/GoogleLogin/GoogleLogin";
import Search from "../screens/Search";
import SearchList from "../screens/SearchList";
// import ChannelDetail from "../screens/ChannelDetail";
// import VideoDetail from "../screens/VideoDetail";
// import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >   
        <Stack.Screen name="GoogleLogin" component={GoogleLogin}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="SearchList" component={SearchList}/>
        {/* <Stack.Screen name="ChannelDetail" component={ChannelDetail}/>
        <Stack.Screen name="VideoDetail" component={VideoDetail}/> */}
        {/* <Stack.Screen name="Tabs" component={Tabs}/> */}
    </Stack.Navigator>
)