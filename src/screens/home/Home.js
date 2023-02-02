import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import BlackTop from "../../components/BlackTop";
import SearchBar from "../../components/SearchBar";
import Projects from "../../components/Projects";
import Tasks from "../../components/Tasks";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useGlobalContext } from "../../context";

const userData = {
  name: "James",
  email: "James@gmail.com",
  password: "P@ssword",
};

const Home = (props) => {
  const [term, setTerm] = useState("");
  const { tasks } = useGlobalContext();
  const navigation = useNavigation();

  const onTaskPressed = () => {
    navigation.navigate(ROUTES.CREATETASKS); // Pass the title of the task to the ToDoList screen});
  };
  const addItemsToLists = (item) => {
    lists.push(item);
  };
  console.log(tasks);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <BlackTop height={"25%"}>
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
        <TouchableOpacity onPress={onTaskPressed}>
          <AntDesign
            style={styles.createIcon}
            name="pluscircle"
            size={39}
            color="white"
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity> */}
      </View>
      <FlatList
        style={styles.Tasks}
        data={tasks}
        renderItem={({ item: { title, time, color }, index }) => {
          return <Tasks title={title} time={time} color={color} />;
        }}
      />
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
    marginRight: 90,
    marginTop: 120,
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
    bottom: 90,
    right: 25,
    height: 70,
    width: 70,
    marginLeft: 300,
    borderRadius: 50,
  },
  projectsHeader: {
    fontWeight: "900",
    fontSize: 22,
    width: 90,
  },
  seeAll: {
    marginRight: 10,
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
    marginLeft: 15,
    marginTop: 510,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    borderRadius: 30,
    width: 190,
    height: 40,
  },
  tasksHeader: {
    color: "white",
    fontWeight: "900",
    fontSize: 22,
    // padding: 10,
    paddingLeft: 15,
  },
  createIcon: {
    // padding: 10,
  },
  Tasks: {
    marginTop: -20,
  },
  container: {
    flex: 1,
  },
});
