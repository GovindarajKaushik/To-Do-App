// Name: Govindaraj Kaushik
// Class: DIT/FT/1B/02
// admin NO. 2227621




import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

// CustomInput component returns a view with an AntDesign icon and a text input
const CustomInput = ({value, setValue, placeholder, secureTextEntry, icon}) => {
  return (
    // The view containing the icon and the text input
    <View style={styles.container}>
      {/* AntDesign icon with passed in icon name, size and color */}
      <AntDesign style={styles.icon} name={icon} size={23} color={'grey'} />
      {/* TextInput with passed in value, onChangeText, placeholder, style and secureTextEntry */}
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input} 
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

// Styles for the container, icon and input
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        paddingLeft: 10,
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',

        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 3,

        paddingHorizontal: 10,
        marginVertical: 10, 
    },
    icon: {
      marginRight: 5,
    },
    input: {
      width: '100%',
    },
})

// Exporting the CustomInput component
export default CustomInput
