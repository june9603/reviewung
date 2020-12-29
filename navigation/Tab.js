import React from 'react';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Search from "../screens/Search"

const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
    getFocusedRouteNameFromRoute(route) || 'Movies';

export default ({ navigation, route }) => {
    useLayoutEffect(() => {
        const name = getHeaderName(route);
        navigation.setOptions({
            title: name
        });
    },[route]);
    return(
        <Tabs.Navigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused }) => {
                    if(route.name === "MyChannel"){
                        iconName = "tv";
                    }
                    else if (route.name === "Search"){
                        iconName = "search";
                    }
                    else if (route.name === "ChannelList"){
                        iconName = "list";
                    }
                    return <Icon
                                name={iconName} 
                                color={focused ? "white" : "grey"}
                                size={26} 
                            />;
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black"
                }
            }}
        >
            <Tabs.Screen name="MyChannel"component={Movies} />
            <Tabs.Screen name="Search" component={Search} />   
            <Tabs.Screen name="ChannelList" component={TV} />
        </Tabs.Navigator>
    );
}