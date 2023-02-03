// Name: Govindaraj Kaushik
// Class: DIT/FT/1B/02
// admin NO. 2227621



import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// SearchBar component to display search bar in the UI
const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      {/* Icon container */}
      <View style={styles.iconContainer}>
        
          {/* Search icon */}
          <Icon style={styles.searchIcon} name="search1" size={20} color="#667085"/>
          
      </View>
      <View>
        {/* Text input for search bar */}
        <TextInput
         style={styles.SearchBar}
         onChangeText={props.onChange}  // trigger the onChange prop when text changes
         value={props.term}  // set the value of the search bar to the passed in `term` prop
         placeholder='Search Tasks or Projects'  // placeholder text
         placeholderTextColor='#667085'  // color of placeholder text
         paddingLeft={40}  // padding left to match the position of the icon
        />
      </View>
    </View>
  )
}

// Export the SearchBar component
export default SearchBar

// Styles for the SearchBar component
const styles = StyleSheet.create({
    SearchBar: {
        padding: 9,
        backgroundColor: '#36454f',  // background color of the search bar
        borderRadius: 40,  // rounded corners
        color: '#667085',  // text color

    
    },
    container: {
    backgroundColor: '#36454f',  // background color of the container
    width: '90%',  // width of the container
    height: '16%',  // height of the container
    borderRadius: 10,  // rounded corners of the container
    marginBottom: 100,  // bottom margin
    marginTop: -20,  // top margin
    
    },
 iconContainer: {
      flexDirection: 'row',  // arrange items in a row
      position: 'absolute',  // position the icon container absolute
      height: '100%',  // height of the icon container
      width: 40,  // width of the icon container
      alignItems: 'center',  // center items vertically
      justifyContent: 'center',  // center items horizontally
      zIndex: 1,  // stack the icon container on top of the other elements
    }
})
