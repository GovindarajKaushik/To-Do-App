import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';

const SettingsEdit = (props) => {
  return (
    <View style={{padding: 30}}>
      <Text style={styles.header}>{props.header}</Text>
      <TextInput placeholder={props.currentData} />
      
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#000',
    marginTop: 50,
    marginBottom: 30
  },
  section: {
    marginBottom: 20
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 10
  },
  option: {
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default SettingsEdit;