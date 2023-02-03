  // Name: Govindaraj Kaushik
  // Class: DIT/FT/1B/02
  // admin NO. 2227621


import React, { useState } from "react";
import {
  StyleSheet,
  Text, // Import the Text component
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, ROUTES } from "../../constants";
import logo from "../../assets/icons/LOGO.png";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";

// The Login component using functional component and Hooks
const Login = (props) => {
  // Destructure the navigation object from the props
  // const {navigation} = props;
  // useNavigation Hook to access the navigation object
  const navigation = useNavigation();
  // useState Hook to manage the state for the username input
  const [username, setUsername] = useState("");
  // useState Hook to manage the state for the password input
  const [password, setPassword] = useState("");

  // Event handler when the Log in button is pressed
  const onSigninPressed = () => {
    // Navigate to the HOME route
    navigation.navigate(ROUTES.HOME);
  };

  // Event handler when the Sign Up text is pressed
  const onSignUpPresses = () => {
    // Navigate to the REGISTER route
    navigation.navigate(ROUTES.REGISTER);
  };

  // The JSX to render the Login page
  return (
    <View style={styles.container}>
      {/* The logo image */}
      <Image style={styles.logo} source={logo} alt="Logo" />
      {/* The title text */}
      <Text style={styles.title}>Welcome Back</Text>
      {/* The caption text */}
      <Text style={styles.caption}>Log in to your existing account</Text>
      {/* The username input */}
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
        icon="user"
      />
      {/* The password input */}
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        icon="lock"
      />
      {/* CustomButton component for login */}
      <CustomButton text="Log in" onPress={onSigninPressed} />

      {/* Footer for displaying "Don't have an account" and "Sign up" text */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Dont have an Account?</Text>
        <Text style={styles.signUp} onPress={onSignUpPresses}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingBottom: 280,
    padding: 20,
  },
  logo: {
    height: 270,
    width: 250,
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 50,
  },
  caption: {
    marginTop: -40,
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
  },
  footerText: {
    fontWeight: "bold",
  },
  signUp: {
    marginLeft: 5,
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 2,
  },
});
