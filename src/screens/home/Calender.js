import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import BlackTop from '../../components/BlackTop';
import Projects from '../../components/Projects';
import Tasks from '../../components/Tasks';
import DateItem from '../../components/DateItem';
import {COLORS} from '../../constants';

class Calender extends React.Component {
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
    return (
      <View>
        <BlackTop height={'45%'}>
        <View style={styles.TitleContainer}>
          <Text style={styles.Date}>Jan, 2023</Text>
          <TouchableOpacity style={styles.addTaskBtn}>
            <Text style={styles.addTask}>+   Add Task</Text>
          </TouchableOpacity>
        </View>
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
        </BlackTop>
    
        <View style={styles.headerContainer}>
          <Text style={styles.projectsHeader}>Projects due today</Text>
          <TouchableOpacity style={styles.addProjectBtn}>
            <Text style={styles.addProject}>+   Add Project</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Projects
            containerColor={"#3BECF7"}
            projectName="MAD assignment"
            projectDescription="Make a site map that has 6 UI screens"
            dueOn="Due on"
            date="16 Jan, 2023 at 5:00 pm"
          />
        </ScrollView>
        <View style={styles.TasksHeader}>
          <Text style={styles.projectsHeader}>Today's Tasks</Text>
        </View>
        <ScrollView style={styles.tasksContainer}>
              <Tasks taskColor="#FFC4A1" />
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  TitleContainer: {
    backgroundColor: 'white',
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    width: 350,
  },  
  Date: {
    marginRight: 220,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  addTaskBtn: {
    marginLeft: 100,
  },
  addTask: {
    color: 'black',
  },
  dateDiv: {
    height: 80,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 5,
    marginTop: 170,
    marginLeft: -10,
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
  },
  projectsHeader: {
    fontWeight: "800",
    fontSize: 20,
    width: 200,
    height: 40,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginTop: 20,
    marginBottom: -20,
  },
  addProject: {
    color: "white",
    paddingTop: 15,
    paddingLeft: 7,
    fontWeight: 'bold',
    fontSize: 14,
  },
  addProjectBtn: {
    backgroundColor: 'black',
    borderRadius: 50,
    marginRight: 20,
    height: 50,
    width: 120,
  },
  TasksHeader: {
    marginLeft: 25,
    marginTop: -80,
  },
  tasksContainer: {
    position: "absolute",
    flex: 1,
    marginLeft: 10,
    marginTop: 560,
  },
});

export default Calender;