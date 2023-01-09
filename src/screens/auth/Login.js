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

const Login = props => {
  // const {navigation} = props;
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSigninPressed = () => {
    navigation.navigate(ROUTES.HOME);
  }

  return (
      <View style={styles.container}>
        <Image 
        style={styles.logo}
        source={logo} alt="Logo"
        />
        <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername} 
        secureTextEntry={false} />
        <CustomInput 
        placeholder="Password" 
        value={password}
        setValue={setPassword}  
        secureTextEntry={true}  />
        <CustomButton text="Login" onPress={onSigninPressed} />
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
    height: 220,
    width: 220,
    marginTop: 100,
  },
})

