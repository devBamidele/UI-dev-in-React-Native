import React from 'react';
import { 
    ActivityIndicator, 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/types";

import { useCustomFonts } from '../hooks/useCustomFonts';
import { Spacing } from '../constants/Spacing';
import Colors from '../constants/Colors';
import DismissKeyboardHoc from '../hoc/DismissKeyboard.hoc';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import IconButton from '../components/IconButton';

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
            <TextInput 
              placeholder='Email'
              placeholderTextColor={Colors.hintTextColor}
              selectionColor={Colors.black}
              style={[styles.textInputStyle]}
            />
  
  
            <TextInput 
              placeholder='Password'
              placeholderTextColor={Colors.hintTextColor}
              selectionColor={Colors.black}
              secureTextEntry={true}
              style={[styles.textInputStyle, { marginTop: Spacing * 2 } ]}
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

const styles = StyleSheet.create({

    primaryText: {
        color: Colors.primary,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 30,
        paddingTop: Spacing * 7,
    },

    subText: {
        marginTop: Spacing * 2,
        fontSize: 16,   
        fontFamily: 'Poppins-SemiBold',
        width: '60%',
        textAlign: 'center',
        color: Colors.black,
    },

    textInputStyle: {
        fontFamily: 'Poppins-Regular',
        backgroundColor : Colors.inputBackground,
        letterSpacing: 0.4,
        paddingVertical: Spacing * 1.8,
        paddingLeft: 16,
        borderRadius: Spacing,
        fontSize: 15,
    },

    forgotPasswordStyle: {
      textAlign: 'right',     
      fontFamily: 'Poppins-SemiBold', 
      color: Colors.black,
    },

    signInButtonStyle: {
      backgroundColor: Colors.primary,
      borderRadius: Spacing,  
      marginVertical: Spacing * 3,
      
    },

    signInText: {
      alignSelf: 'center',
      color: '#FFFFFF', 
      paddingVertical: Spacing + 2,

      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      fontSize: 16,
    },

    shadowEffect: {
      elevation: 12,
      shadowColor: Colors.primary,
    },

    createAccountText: {
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
      color: Colors.black,
    },

    orContinueWith: {
      textAlign: "center",
      marginTop: Spacing * 10,
      fontFamily: 'Poppins-SemiBold',
      color: Colors.primary,
    },

    
});
