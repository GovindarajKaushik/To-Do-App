import React, {useRef, useState} from 'react';
import {Animated, View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text}) => {
  const animation = useRef(new Animated.Value(1)).current;
  const [isPressed, setIsPressed] = useState(false);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: isPressed ? 1 : 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressIn = () => {
    setIsPressed(true);
    startAnimation();
  };

  const onPressOut = () => {
    setIsPressed(false);
    startAnimation();
  };

  const buttonOpacity = {
    opacity: animation,
  };

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.container, buttonOpacity]}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#171717',
      width: 200, // Make the button 200 pixels wide
      height: 50,
      padding: 11,
      marginVertical: 5,
      marginTop: 60,
      alignItems: 'center',
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 23,
    },
  });
  

export default CustomButton;
