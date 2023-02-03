// Name: Govindaraj Kaushik
// Class: DIT/FT/1B/02
// admin NO. 2227621



// Importing required components and styles from react and react-native
import React, {useRef, useState} from 'react';
import {Animated, View, Text, StyleSheet, Pressable} from 'react-native';

// CustomButton functional component that takes in 'onPress' and 'text' props
const CustomButton = ({onPress, text}) => {
  // Creating an animation value with useRef and useState hooks
  const animation = useRef(new Animated.Value(1)).current;
  const [isPressed, setIsPressed] = useState(false);

  // startAnimation function to start the animation
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: isPressed ? 1 : 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // onPressIn function to update isPressed state and start animation
  const onPressIn = () => {
    setIsPressed(true);
    startAnimation();
  };

  // onPressOut function to update isPressed state and start animation
  const onPressOut = () => {
    setIsPressed(false);
    startAnimation();
  };

  // buttonOpacity object to pass the animation value to the View style
  const buttonOpacity = {
    opacity: animation,
  };

  // Returns a Pressable component with a child Animated.View component
  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.container, buttonOpacity]}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

// Styles object for the Animated.View component
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#171717',
      width: 250,
      height: 50,
      padding: 9,
      marginVertical: 5,
      marginTop: 40,
      alignItems: 'center',
      borderRadius: 7, // decide on whether it should be 9 or 23
    },
    text: {
      color: 'white',
      fontSize: 23,
    },
  });

// Exporting the CustomButton component
export default CustomButton;
