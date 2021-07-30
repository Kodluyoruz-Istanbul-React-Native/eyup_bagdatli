import React from 'react';
import { View, StatusBar } from 'react-native';
import { Navigation } from '~/Navigation';




const App = () => {
    return (
        <>
            <StatusBar backgroundColor={'white'} />

            <View style={{ flex: 1 }}>
                <Navigation />
            </View>
        </>
    );
};

export { App };