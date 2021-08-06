import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Splash, SignUp, Login } from '~screens';



const STACK1 = createStackNavigator();


const Navigation = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(
        () => {
            setTimeout(() => {
                setShowSplash(false);
            }, 2000);
        }, []);

    return (
        <NavigationContainer>
            <STACK1.Navigator
                headerMode={'none'}
            //screenOptions={}
            >
                <STACK1.Screen
                    name={'Login'}
                    component={Login}
                />
                <STACK1.Screen
                    name={'Main'}
                    component={Main}
                />
                <STACK1.Screen
                    name={'SignUp'}
                    component={SignUp}
                />
               
            </STACK1.Navigator>
        </NavigationContainer>
    );
};

export { Navigation };