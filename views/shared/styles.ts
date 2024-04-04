import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'; // Import your color constants
import { Spacing } from '../../constants/Spacing';

export default StyleSheet.create({
  primaryText: {
    color: Colors.primary,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    paddingTop: Spacing * 7,
  },
  subText: {
    marginTop: 6,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    width: '60%',
    textAlign: 'center',
    color: Colors.black,
  },
  textInputStyle: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: Colors.inputBackground,
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
    textAlign: 'center',
    marginTop: Spacing * 7,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.primary,
  },
});
