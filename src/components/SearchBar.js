import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        
          <Icon style={styles.searchIcon} name="search1" size={20} color="#667085"/>
          
      </View>
      <View>
        <TextInput
         style={styles.SearchBar}
         onChangeText={props.onChange}
         value={props.term}
         placeholder='Search Tasks or Projects'
         placeholderTextColor='#667085'
         paddingLeft={40}
        />
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    SearchBar: {
        padding: 9,
        backgroundColor: '#36454f',
        borderRadius: 40,
        color: '#667085',

    
    },
    container: {
    backgroundColor: '#36454f',
    width: '90%',
    height: '16%',
    borderRadius: 10,
    marginBottom: 100,
    marginTop: -20,
    
    },
 iconContainer: {
      flexDirection: 'row',
      position: 'absolute',
      height: '100%',
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    }
})