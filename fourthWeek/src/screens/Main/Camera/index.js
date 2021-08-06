import React from 'react';
import { View, Text } from 'react-native';

const Camera = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}
        >
            <Text>Camera</Text>
        </View>
    );
};

export { Camera };