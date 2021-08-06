import React from 'react';
import { View } from 'react-native';
import { Navigation } from '~/Navigation';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { CustomStatusBar } from './components/common/CustomStatusBar';




const App = () => {

     //CustomStatusBar {/**Login durumunda statusbar renk değişikliği için eklendi */}
    return (
        <>
            <Provider store={store}>
                <CustomStatusBar />
                <View style={{ flex: 1 }}>
                    <Navigation />
                </View>
            </Provider>
        </>
    );
};

export { App };