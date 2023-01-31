import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import BlackTop from "../../components/BlackTop";
import SearchBar from "../../components/SearchBar";
import Projects from "../../components/Projects";
import Tasks from "../../components/Tasks";

// import { BlackTop, SearchBar, Projects, Tasks } from '../../components';

const userData = {
  name: "James",
  email: "James@gmail.com",
  password: "P@ssword",
};

const Home = (props) => {
  const [term, setTerm] = useState("");

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <BlackTop height={"40%"}>
        <View style={styles.header}>
          <Text style={styles.welcome}>
            Hello {userData.name} <Text style={styles.emoji}>👋</Text>
          </Text>
          <Text style={styles.numOfProject}>
            You have a total of 3 projects to complete today
          </Text>
        </View>
        <Image source={require("../../assets/User2.png")} style={styles.user} />
        <SearchBar onChange={setTerm} term={term} />
      </BlackTop>

      <View style={styles.headerContainer}>
        <Text style={styles.projectsHeader}>Projects</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
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
        <Projects
          containerColor={"#AF68F0"}
          projectName="DEUI assignment"
          projectDescription="Make a proposal and prepare slides for presentation"
          dueOn="Due on"
          date="19 Jan, 2023 at 6:00 pm"
        />
        <Projects
          containerColor={"#FF9001"}
          projectName="JAVA assignment"
          projectDescription="Prepare for interview and check the Java code for error"
          dueOn="Due on"
          date="16 Jan, 2023 3:00 pm"
        />
      </ScrollView>

      <View style={styles.tasksHeaderContainer}>
        <Text style={styles.tasksHeader}>Today's Tasks</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        <Tasks taskColor="#FFC4A1" />
        <Tasks taskColor="#FFC0CB" />
        <Tasks taskColor="#94F578" />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  welcome: {
    color: "white",
    width: 230,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 15,
  },
  emoji: {
    fontSize: 30,
  },
  header: {
    marginRight: 110,
    marginTop: 140,
    height: 100,
  },
  numOfProject: {
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 17,
    lineHeight: 25,
  },
  user: {
    position: "relative",
    bottom: 100,
    right: 20,
    height: 70,
    width: 70,
    marginLeft: 300,
    borderRadius: 50,
  },
  projectsHeader: {
    fontWeight: "600",
    fontSize: 20,
    width: 90,
  },
  seeAll: {
    marginRight: 20,
    color: "grey",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 25,
    marginTop: 20,
  },
  tasksHeaderContainer: {
    position: "absolute",
    marginLeft: 20,
    marginTop: 530,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tasksHeader: {
    fontWeight: "600",
    fontSize: 20,
    marginRight: 160,
  },
  tasksContainer: {
    position: "absolute",
    flex: 1,
    marginLeft: 10,
    marginTop: 560,
  },
  container: {
    flex: 1,
  },
});
