import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, icon}) => {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name={icon} size={23} color={'grey'} />
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        paddingLeft: 10,
        padding: 5,
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


export default CustomInput