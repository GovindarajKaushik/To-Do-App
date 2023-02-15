import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Switch } from 'react-native-switch';
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  return (
    <View style={{padding: 30}}>
      {/* Main header text */}
      <Text style={styles.header}>Settings</Text>

      {/* Section 1: Account */}
      <Section>
        <SectionHeader 
          // {/* Icon for section */}
          img={require('../../assets/icons/account.png')} 
          // {/* Section name */}
          name={'Account'} 
        />
        {/* Option for editing profile */}
        <Option text='Edit Profile' />
        {/* Option for changing password */}
        <Option text='Change Password' />
        {/* Option for privacy */}
        <Option text='Privacy' type="view" />
      </Section>

      {/* Section 2: Notifications */}
      <Section>
        <SectionHeader 
          //  Icon for section 
          img={require('../../assets/icons/NOTIF.png')} 
          // {/* Section name */}
          name={'Notifications'} 
        />
        {/* Option for notifications toggle */}
        <Option text='Notifications' type='toggle' toggled='true' />
        {/* Option for app notifications toggle */}
        <Option text='App Notifications' type='toggle' toggled='false' />
      </Section>

      {/* Section 3: More */}
      <Section>
        <SectionHeader 
          // {/* Icon for section */}
          img={require('../../assets/icons/MORE.png')} 
          // {/* Section name */}
          name={'More'} 
        />
        {/* Option for about us */}
        <Option text='About us' type="view" />
        {/* Option for country */}
        <Option text='Country' />
      </Section>
    </View>
  );
}

const SectionHeader = (props) => {
  return (
    <View style={styles.sectionHeader}>
      <Image source={props.img} style={{height: 30, width: 30, marginRight: 12}}/>
      <Text style={{fontWeight: 'bold'}}>{props.name}</Text>
    </View> 
  );
}

const Section = (props) => {
  return (
    <View style={styles.section}>{props.children}</View>
  );
}

const Option = (props) => {
  const navigation = useNavigation();
  if (props.type == "toggle") {
    return (
      <View style={styles.option}>
        <Text>{props.text}</Text>
        <View style={{marginLeft: 'auto', marginRight: 2}}>
          <Switch
            value={true}
            activeText={''}
            inActiveText={''}
            backgroundActive={'#000'}
            backgroundInactive={'#555'}
         />
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.option}>
        <Text>{props.text}</Text>
        <Pressable style={{marginLeft: 'auto', marginRight: 2}} onPress={
          () => props.type == "view" 
            ? navigation.navigate(ROUTES.SETTINGS_VIEW) 
            : navigation.navigate(ROUTES.SETTINGS_EDIT)
        }>
          <Image source={require('../../assets/icons/ARROW.png')} />
        </Pressable>
      </View>
    )
  }
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

export default Settings;