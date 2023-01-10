import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, ROUTES} from '../../constants';
import logo from '../../assets/icons/LOGO.png';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUp = (props) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSignupPressed = () => {
    // Make an HTTP request to your backend server to create a new user account
    // with the provided username, password, email, and name
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} alt="Logo" />
      <Text style={styles.title}>Create a new account</Text>
      <Text style={styles.caption}>Sign up for a new account</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
        icon="user"
      />
      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        secureTextEntry={false}
        icon="redenvelopes"
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        icon="lock"
      />
      <CustomButton text="Sign up" onPress={onSignupPressed} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Text style={styles.signUp}>Log in</Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 280,
    padding: 20,
  },
  logo: {
    height: 270,
    width: 250,
    marginTop: 130,
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
