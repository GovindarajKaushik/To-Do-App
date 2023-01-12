import { View, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const BlackTop = (props) => {
    return (
        <View style={[styles.container]}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        width: '100%',
        height: '55%',
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 45,
        borderBottomLeftRadius: 45,
    }
});

export default BlackTop;