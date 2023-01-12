import {StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants';
import  BlackTop from '../../components/BlackTop';
import SearchBar from '../../components/SearchBar';


const {width, height} = Dimensions.get('screen');
const userData = {
  name : 'James',
  email: 'James@gmail.com',
  password: 'P@ssword'
}

const Home = (props) => {

  const [term, setTerm] = useState('');

  return (
    <View >
    <BlackTop>
      <View style={styles.header}>
      <Text style={styles.welcome}>Hello {userData.name} <Text style={styles.emoji}>
         👋
        </Text>
      </Text>
      <Text style={styles.numOfProject}>You have a total of 3 projects to complete today</Text>
      </View>
      <Image source={require('../../assets/User2.png')} style={styles.user}/>
      <SearchBar onChange={setTerm} term={term} />
    </BlackTop>
    </View>
  );
};


export default Home;

const styles = StyleSheet.create({
  welcome: {
    color: 'white',
    width: 230,
    fontWeight: 'bold',
    fontSize: 30,
  },
  emoji: {
    fontSize: 30,
  },
  header: {
    justifyContent: 'left',
    marginRight: 110,
    marginTop: 150,
  },
  numOfProject: {
    color: 'white',
    marginTop: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 17,
    lineHeight: 20,
  },
  user: {
    position: 'relative',
    bottom: 70,
    right: 20,
    height: 70,
    width: 70,
    marginLeft: 300,
    borderRadius: 50,
  },
});