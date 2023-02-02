import { View, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const BlackTop = (props) => {
    return (
        <View style={[styles.container,{height: props.height}]}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        backgroundColor: 'black',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 45,
         borderBottomLeftRadius: 45,
    }
});

export default BlackTop;