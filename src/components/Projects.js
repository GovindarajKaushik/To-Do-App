// Name: Govindaraj Kaushik
// Class: DIT/FT/1B/02
// admin NO. 2227621



import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ROUTES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useGlobalContext } from '../context';
import Entypo from 'react-native-vector-icons/Entypo';

// Projects component to display a single project
const Projects = (props) => {
  // Hook to access the navigation object
  const navigation = useNavigation();

  // Event handler to navigate to the project list screen
  const onProjectPressed = () => {
    navigation.navigate(ROUTES.PROJECTLIST);
  }

  // Hook to access the global context of projects
  const { projects, setProjects } = useGlobalContext();

  // State to keep track of the selected project
  const [selected, setSelected] = React.useState(false);
  // State to keep track of the trash icon color
  const [iconColor, setIconColor] = React.useState('grey');

  // Function to delete a project from the global context
  const deleteProject = (deleteIndex) => {
    setProjects(projects.filter((value, index) => index != deleteIndex))
  }

  // Event handler for pressing the trash icon
  const onTrashPressed  = () => {
    setSelected(!selected);
  }

  // Event handler for pressing in the trash icon
  const onTrashPressIn = () => {
    setIconColor('#EB5406');
  }

  // Event handler for pressing out the trash icon
  const onTrashPressOut = () => {
    setIconColor('grey');
    deleteProject(props.index)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onProjectPressed}>
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
      {/* Trash Icon */}
      <TouchableOpacity>
        <Entypo 
          style={styles.icon} 
          name='trash'
          size={23} 
          color={iconColor}
          activeOpacity={1}
          onPressIn={onTrashPressIn}
          onPressOut={onTrashPressOut}
          onPress={onTrashPressed}/>
      </TouchableOpacity>
    </View>
  )
}

export default Projects

// Styles for the Projects component
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