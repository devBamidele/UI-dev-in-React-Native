import React from 'react';
import { 
  ActivityIndicator, 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { 
  faApple, 
  faFacebook, 
  faGoogle 
} from '@fortawesome/free-brands-svg-icons';

import { RootStackParamList } from "../constants/types";
import { useCustomFonts } from '../hooks/useCustomFonts';
import { Spacing } from '../constants/Spacing';
import DismissKeyboardHoc from '../hoc/DismissKeyboard.hoc';
import styles from './shared/styles';
import IconButton from '../components/IconButton';
import TextField from '../components/TextField';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation: { navigate } }) => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <DismissKeyboardHoc>
      <SafeAreaView>
        <View style={{
          paddingHorizontal: Spacing * 2.5,
        }}>
  
          <View style={{
            alignItems: 'center',
          }}>
            <Text style={styles.primaryText}>
              Login here
            </Text>
  
            <Text style={styles.subText}>
              Welcome back, you've been missed!
            </Text>
          </View>
  
          <View style={{ marginVertical: Spacing * 3 }}>
            <TextField
              placeholder='Email'
            />
  
            <TextField
              placeholder='Password'
              secureTextEntry={true}
            />
          </View>
  
          <View>
            <Text style={styles.forgotPasswordStyle}>
              Forgot your password ? 
            </Text>
          </View>
  
          <TouchableOpacity style={[styles.signInButtonStyle, styles.shadowEffect]}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={{ marginTop: Spacing * 2 }} >
            <Text style={styles.createAccountText}>
              Create new account
            </Text>
          </TouchableOpacity>

          <Text style={styles.orContinueWith}>
            Or continue with
          </Text>

          <View style={{
            marginTop: Spacing * 2,
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <IconButton icon={faGoogle} onPress={() => {}} />
            <IconButton icon={faApple} onPress={() => {}} />
            <IconButton icon={faFacebook} onPress={() => {}} />
          </View>
  
        </View>
      </SafeAreaView>
    </DismissKeyboardHoc>      
  );
  
}


export default LoginScreen;