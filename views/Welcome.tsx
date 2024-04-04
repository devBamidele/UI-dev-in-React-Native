import React from 'react';
import { 
  Dimensions, 
  ImageBackground, 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Spacing } from '../constants/Spacing';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../constants/types';
import { useCustomFonts } from '../hooks/useCustomFonts';

const { height } = Dimensions.get('window');

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation: { navigate } }) => {

  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={styles.pictureFrame}
          source={require("../assets/images/image1.png")}
          resizeMode='contain' 
        >
        </ImageBackground>

        <View style={styles.primaryTextView}>
            <Text style={styles.primaryText}>
              Handle finances with ease
            </Text>

            <Text style={styles.subPrimaryText}>
              Effortlessly manage your money and budget like a pro with our intuitive financial tools.
            </Text>
          </View>

        <View style={styles.buttonView}>
          <TouchableOpacity 
            onPress={() => navigate('Login')}
            style={[styles.button, styles.shadowEffect, { backgroundColor: Colors.primary }]} 
          >
            <Text style={[styles.buttonText, { color: '#FFFFFF' }]}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Register </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );  
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    pictureFrame: {
      height: height / 1.9,
    },
  
    primaryText: {
      fontSize: 36,
      fontFamily: 'Poppins-SemiBold',
      color: Colors.primary,
      textAlign: 'center',
    },
  
    subPrimaryText: {
      marginTop: 6,
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      lineHeight: 24
    },
  
    primaryTextView: {
      alignItems: 'center',
      paddingHorizontal: Spacing * 4,
    },
  
    button: {
      paddingVertical: Spacing + 2,
      paddingHorizontal: Spacing * 2,
      borderRadius: Spacing,
      width: "50%", 
    },
  
    buttonView: {
      paddingHorizontal: Spacing * 3,
      paddingTop: Spacing * 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
  
    buttonText: {
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      fontSize: 16,
      color: Colors.primaryText,
    },
  
    shadowEffect: {
      shadowColor: Colors.primary,
      shadowOffset : {
        width: 0,
        height: Spacing,
      }, // IOS
      shadowOpacity: 0.3, // IOS
      shadowRadius: Spacing, // IOS
      elevation: 12
    }
  });