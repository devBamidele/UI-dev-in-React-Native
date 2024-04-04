import React from 'react';
import { 
    ActivityIndicator, 
    SafeAreaView, 
    View, 
    Text, 
    TouchableOpacity 
} from 'react-native';

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { 
    faGoogle, 
    faApple, 
    faFacebook 
} from '@fortawesome/free-brands-svg-icons';

import { RootStackParamList } from "../constants/types";
import { useCustomFonts } from '../hooks/useCustomFonts';
import DismissKeyboardHoc from '../hoc/DismissKeyboard.hoc';
import { Spacing } from '../constants/Spacing';
import styles from './shared/styles';
import TextField from '../components/TextField';
import IconButton from '../components/IconButton';


type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation: { navigate } }) => {
  
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <DismissKeyboardHoc>
      <SafeAreaView>
        <View style={{
          paddingHorizontal: Spacing * 2.5
        }}>
          <View style={{
            alignItems: 'center',
            paddingTop: 30,
          }}>
            <Text style={styles.primaryText}>
              Create Account
            </Text>

            <Text style={[styles.subText, { width: '90%' }]}>
              Create an account so you can start
              hitting those financial goals
            </Text>
          </View>   

          <View style={{ marginVertical: Spacing * 4 }}>
            <TextField placeholder='Email' />

            <TextField
              placeholder='Password'
              secureTextEntry={true}
            />

            <TextField
              placeholder='Confirm Password'
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
              Already have an account
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
};

export default RegisterScreen;
