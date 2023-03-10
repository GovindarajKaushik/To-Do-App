

import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import BlackTop from '../../components/BlackTop';
import DateItem from '../../components/DateItem';
import {COLORS} from '../../constants';
import PercentageCircle from '../../components/PercentageCircle';
// import { AppContext } from "../../context";

class Achievements extends React.Component {
  //static contextType = AppContext;

  constructor(props) {
    super(props);
    this.setActiveDate = this.setActiveDate.bind(this);
  }

  state = {
    activeDate: ['Oct', '22']
  }

  setActiveDate(date) {
    this.setState({activeDate: date}, () => {this.forceUpdate()});
    
  }
  
  render() {
<<<<<<< HEAD
    // const { projects } = useGlobalContext();

=======
    //const { projects } = useGlobalContext();
    let projCount = Math.floor(Math.random() * 3)
>>>>>>> f729e29870b8748d43a0d73d25035ee65e646e05
    return (
      <View>
        <BlackTop>
          <View style={styles.progDiv}>
            <ProgItem category={'Projects'} percent={Math.floor(projCount/3*100)}/>
          </View>
        </BlackTop>
  
        <View style={[styles.dateDiv, {marginVertical: 30}]}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <DateItem top={'Oct'} bottom={'22'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            <DateItem top={'Nov'} bottom={'22'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            <DateItem top={'Dec'} bottom={'22'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            <DateItem top={'Jan'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            <DateItem top={'Feb'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            <DateItem top={'Mar'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            <DateItem top={'Apr'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            <DateItem top={'May'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
          </ScrollView>
        </View>
      
        <CompletedItem category={'Tasks'} completed={Math.floor(Math.random() * 7)} total={7} img={require('../../assets/icons/TASK.png')} />
        <CompletedItem category={'Projects'} completed={projCount} total={3} img={require('../../assets/icons/PROJECT.png')} />
      </View>
    );
  }
}

const ProgItem = (props) => {
  return (
    <View style={styles.progItem}>
      <Text style={{color: '#fff', marginBottom: 20}}>{props.category} Completed</Text>
      <PercentageCircle 
        color={'#82d682'}
        shadowColor={'#ddd'}
        bgColor={'#000'}
        borderWidth={8}
        children={null}
        containerStyle={null}
        percent={props.percent}
        radius={70}
      />
    </View>
  );
}

const CompletedItem = (props) => {
  return (
    <View style={styles.completedDiv}>
      <Image source={props.img} style={{height: 30, width: 30, marginHorizontal: 5}}/>
      <Text style={{marginHorizontal: 5}}>{props.category} completed this month</Text>
      <View style={[styles.completedNumDiv, {backgroundColor: props.completed >= props.total / 2 ? '#9CEF7B' : '#F37272'}]}>
        <Text>{props.completed}/{props.total}</Text>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  progDiv: {
    display: 'flex',
    flexDirection: 'row'
  },
  progItem : {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateDiv: {
    height: 80,
    backgroundColor: COLORS.black,
    borderRadius: 20,
    padding: 5
  },
  completedDiv: {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  completedNumDiv : {
    marginLeft: 'auto', 
    marginRight: 5,
    padding: 10,
    borderRadius: 10
  }
});

export default Achievements;