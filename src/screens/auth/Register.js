  // Name: Govindaraj Kaushik
  // Class: DIT/FT/1B/02
  // admin NO. 2227621


import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, ROUTES} from '../../constants';
import logo from '../../assets/icons/LOGO.png';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

// Get the dimensions of the device screen
const {width, height} = Dimensions.get('screen');

// The SignUp component
const SignUp = (props) => {
  // Get the navigation object
  const navigation = useNavigation();

  // State variables to store the input values of username, email, and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Function that is called when the sign up button is pressed
  const onSignupPressed = () => {
    // Make an HTTP request to your backend server to create a new user account
    // with the provided username, password, email, and name
    navigation.navigate(ROUTES.HOME);
  };

  // Function that is called when the log in button is pressed
  const onLogInPressed = () => {
    navigation.navigate(ROUTES.LOGIN);
  }

  return (
    <View style={styles.container}>
      {/* The logo */}
      <Image style={styles.logo} source={logo} alt="Logo" />
      {/* The title */}
      <Text style={styles.title}>Create a new account</Text>
      {/* The caption */}
      <Text style={styles.caption}>Sign up for a new account</Text>
      {/* The username input field */}
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
        icon="user"
      />
      {/* The email input field */}
      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        secureTextEntry={false}
        icon="redenvelopes"
      />
      {/* The password input field */}
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        icon="lock"
      />
      {/* The sign up button */}
      <CustomButton text="Sign up" onPress={onSignupPressed} />
      {/* The footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Text style={styles.signUp} onPress={onLogInPressed}>Log in</Text>
      </View>
    </View>
  );
};

export default SignUp;

// styles for the container, logo, title, caption, footer, footerText and signUp
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: height * 0.4,
    padding: width * 0.05,
  },
  logo: {
    height: 270,
    width: 250,
    marginTop: 200,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: -30,
    marginBottom: 50,
  },
  caption: {
    marginTop: -40,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    fontWeight: 'bold',
  },
  signUp: {
    marginLeft: 5,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
  },
});
