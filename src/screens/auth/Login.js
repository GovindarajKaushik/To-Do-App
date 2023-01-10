import React, {useState} from 'react';
import {
  StyleSheet,
  Text, // Import the Text component
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

const Login = (props) => {
  // const {navigation} = props;
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSigninPressed = () => {
    navigation.navigate(ROUTES.HOME);
  }

  const onSignUpPresses = () => {
    navigation.navigate(ROUTES.REGISTER);
  }


  return (
      <View style={styles.container}>
        <Image 
        style={styles.logo}
        source={logo} alt="Logo"
        />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.caption}>Log in to your existing account</Text>
        <CustomInput
        placeholder="Username" 
        value={username} 
        setValue={setUsername} 
        secureTextEntry={false}
        icon='user'
         />
        <CustomInput 
        placeholder="Password" 
        value={password}
        setValue={setPassword}  
        secureTextEntry={true}  
        icon='lock'
        />
        <CustomButton text="Log in" onPress={onSigninPressed} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Dont have an Account?</Text>
          <Text style={styles.signUp} onPress={onSignUpPresses}>Sign Up</Text>
        </View>
      </View>
  );
};

export default Login;

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
})

