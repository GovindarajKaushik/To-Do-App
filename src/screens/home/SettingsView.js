import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const SettingsView = () => {
  return (
    <View style={{padding: 30}}>
      <Text style={styles.header}>Settings</Text>
      <Section>
        <SectionHeader img={require('../../assets/icons/account.png')} name={'Account'} />
        <Option text='Edit Profile' />
        <Option text='Change Password' />
        <Option text='Privacy' />
      </Section>

      <Section>
        <SectionHeader img={require('../../assets/icons/NOTIF.png')} name={'Notifications'} />
        <Option text='Notifications' type='toggle' toggled='true' />
        <Option text='App Notifications' type='toggle' toggled='false' />
      </Section>

      <Section>
        <SectionHeader img={require('../../assets/icons/MORE.png')} name={'More'} />
        <Option text='About us' />
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
        <Image source={require('../../assets/icons/ARROW.png')} style={{marginLeft: 'auto', marginRight: 2}} />
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

export default SettingsView;