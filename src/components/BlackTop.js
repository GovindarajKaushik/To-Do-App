// Name: Govindaraj Kaushik
// Class: DIT/FT/1B/02
// admin NO. 2227621



// Importing required components and styles from react-native
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

// BlackTop functional component that takes in props
const BlackTop = (props) => {
    // Returns a View component with styles and height passed as props
    return (
        <View style={[styles.container,{height: props.height}]}>{props.children}</View>
    );
}

// Styles object for the container View
const styles = StyleSheet.create({
    container: {
        // Uncomment position to use relative positioning if required
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

// Exporting the BlackTop component
export default BlackTop;
