import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Status = () => {
    return (
        <View
            style={style.container}
        >
            <Text>Status</Text>
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

export { Status };