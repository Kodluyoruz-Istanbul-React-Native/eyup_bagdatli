import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Status, Calls, Camera, Chats,Settings } from '~/screens';
import { TabBar } from '~/screens/Main/TabBar';

const Tab = createBottomTabNavigator();

const Main = () => {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}>

            <Tab.Navigator
                tabBar={TabBar}
                initialRouteName="Chats"
            >
                
                <Tab.Screen name={'Status'} component={Status} />
                <Tab.Screen name={'Calls'} component={Calls} />
                <Tab.Screen name={'Camera'} component={Camera} />
                <Tab.Screen name={'Chats'} component={Chats} />
                <Tab.Screen name={'Settings'} component={Settings} />
            </Tab.Navigator>
        </View>
    );
};

export { Main };