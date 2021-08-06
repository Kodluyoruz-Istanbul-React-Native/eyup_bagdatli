import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const TabBar = ({ state: { index }, navigation: {jumpTo } }) => {
    return (
        <View
            style={style.container}
        >
            
          
          
            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('Status')}>
                <FontAwesome name={'circle-thin'} color={index === 0 ? '#0d6ea3' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('Calls')}>
                <Ionicons name={'md-call-outline'} color={index === 1 ? '#0d6ea3' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton}onPress={() => jumpTo('Camera')}>
                <Feather name={'camera'} color={index === 2 ? '#0d6ea3' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('Chats')}>
                <Ionicons name={'chatbubbles-outline'} color={index === 3 ? '#0d6ea3' : '#444444'} size={32} />
            </TouchableOpacity>

           

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('Settings')}>
                <SimpleLineIcons name={'settings'} color={index === 4 ? '#0d6ea3' : '#444444'} size={32} />
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'white'
            },
    tabButton: { paddingVertical: 10 }
})

export { TabBar };
