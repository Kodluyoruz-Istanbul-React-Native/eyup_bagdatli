import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';





const CustomStatusBar = () => {
    const statusbarColor = useSelector(state => state.statusbar.statusbarcolor)

    return (
        <StatusBar backgroundColor={statusbarColor} />
    );
};

export { CustomStatusBar };