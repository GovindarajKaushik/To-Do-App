import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useGlobalContext } from "../../context";
import Projects from '../../components/Projects';

const ProjectList = ({ route }, props) => {
  const { index } = route.params;
  const { projects } = useGlobalContext();
  const project = projects[index];
  console.log(projects);
  

 
  // const handleUpdateProject = () => {
  //   const updatedProject = {
  //     ...project,
  //     projectName: updatedProjectName,
  //     projectDescription: updatedProjectDescription,
  //     date: updatedProjectDate,
  //   };
  //   const updatedProjects = [...projects];
  //   updatedProjects[index] = updatedProject;
  //   updateProject(index, updatedProject);
  // };

  return (
    <View>
       <View style={styles.container}>
      <TouchableOpacity>
        {/* Project Name and Description */}
        <View style={[styles.NameContainer, {backgroundColor: props.containerColor}]}> 
          <Text style={styles.Name}>{props.projectName}</Text>
        </View>
        <Text numberOfLines={1} style={styles.description}>{props.projectDescription}</Text>
        {/* Due On label and date */}
        <View style={[styles.dueOnContainer, {backgroundColor: props.containerColor}]}> 
          <Text style={styles.dueOn}>Due on</Text>
        </View>
        <Text style={styles.date}>{props.date}</Text>  
      </TouchableOpacity>
    </View>
    </View>
  );
};


export default ProjectList;


const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      // flexDirection: 'row',
      height: 170,
      width: 220,
      borderRadius: 20,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
      position: 'relative',
      
  },
  Name: {
      color: 'black',
      height: 30,
      fontWeight: '800',
      fontSize: 17,
      width: 160,
      paddingTop: 5,
      paddingLeft: 5,
      borderRadius: 30,
  },
  NameContainer: {
      borderRadius: 5,
      height: 30,
      marginTop: 13,
      marginLeft: 15,
      width: 140,
  },
  description: {
      position: 'relative',
      color: 'white',
      // width: 300,
      marginLeft: 13,
      marginTop: 13,
  },
  dueOn: {
      color: 'black',
      height: 30,
      fontWeight: '800',
      fontSize: 13,
      width: 160,
      paddingTop: 8,
      paddingLeft: 6,
      borderRadius: 30,
  },
  dueOnContainer: {
      borderRadius: 5,
      backgroundColor: '#3BECF7',
      height: 27,
      marginTop: 13,
      marginLeft: 15,
      width: 50,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
  },
  date: {
      position: 'relative',
      color: 'white',
      marginLeft: 13,
      marginTop: 10,
  },
  icon: {
      marginLeft:180,
  }
})