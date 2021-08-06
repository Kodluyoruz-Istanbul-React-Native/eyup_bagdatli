import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Calls = () => {
    return (
        <View
            style={style.container}
        >
            <Text>Calls</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export { Calls };