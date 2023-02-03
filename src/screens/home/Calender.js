  // Name: Govindaraj Kaushik
  // Class: DIT/FT/1B/02
  // admin NO. 2227621


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
    // Binding the setActiveDate method to the context of this component
    this.setActiveDate = this.setActiveDate.bind(this);
  }

  // Setting the initial state for the component with the active date
  state = {
    activeDate: ['Oct', '22']
  }

  // Method to set the active date in the state
  setActiveDate(date) {
    // Updating the state with the new date
    this.setState({activeDate: date}, () => {this.forceUpdate()});
    
  }
  
  render() {
    return (
      <View>
        {/* Wrapping the content in the BlackTop component */}
        <BlackTop height={'45%'}>
        {/* The title container with the date and add task button */}
        <View style={styles.TitleContainer}>
          {/* The date text */}
          <Text style={styles.Date}>Jan, 2023</Text>
          {/* The add task button */}
          <TouchableOpacity style={styles.addTaskBtn}>
            <Text style={styles.addTask}>+   Add Task</Text>
          </TouchableOpacity>
        </View>
        {/* The date item container */}
        <View style={[styles.dateDiv, {marginVertical: 30}]}>
          {/* The horizontal scroll view for the date items */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* A date item with the month and date */}
            <DateItem top={'Oct'} bottom={'22'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            {/* Another date item */}
            <DateItem top={'Nov'} bottom={'22'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            {/* Another date item */}
            <DateItem top={'Dec'} bottom={'22'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            {/* Another date item */}
            <DateItem top={'Jan'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            {/* Another date item */}
            <DateItem top={'Feb'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            {/* Another date item */}
            <DateItem top={'Mar'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            {/* Another date item */}
            <DateItem top={'Apr'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
            {/* Another date item */}
            <DateItem top={'May'} bottom={'23'} activeDate = {this.state.activeDate} setActiveDate={this.setActiveDate} />
          </ScrollView>
        </View>
        </BlackTop>
        {/* The projects header container */}
        <View style={styles.headerContainer}>
          {/* The projects header text */}
          <Text style={styles.projectsHeader}>Projects due today</Text>
          {/* The add project button */}
          <TouchableOpacity style={styles.addProjectBtn}>
            {/* The add project text */}
            <Text style={styles.addProject}>+   Add Project</Text>
          </TouchableOpacity>
        </View>
        {/* The horizontal scroll view for the projects */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* A project with the project name, description and due date */}
          <Projects
            containerColor={"#3BECF7"}
            projectName="MAD assignment"
            projectDescription="Make a site map that has 6 UI screens"
            dueOn="Due on"
            date="16 Jan, 2023 at 5:00 pm"
          />
        </ScrollView>
        {/* The tasks header container */}
        <View style={styles.TasksHeader}>
          {/* The tasks header text */}
          <Text style={styles.projectsHeader}>Today's Tasks</Text>
          {/* The add task button */}
        </View>
        {/* The scroll view for the tasks */}
        <ScrollView style={styles.tasksContainer}>
          {/* A task with the task name, description and due date */}
              <Tasks taskColor="#FFC4A1" />
        </ScrollView>
      </View>
    );
  }
}


// The styles for the components
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