import React from 'react';
import { 
    ActivityIndicator, 
    SafeAreaView, 
    View 
} from 'react-native';


import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/types";

import { useCustomFonts } from '../hooks/useCustomFonts';


type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation: { navigate } }) => {
    
    const fontsLoaded = useCustomFonts();

    if (!fontsLoaded) {
        return <ActivityIndicator />;
    }

    return (
        <SafeAreaView>
            <View>
                

            </View>
        </SafeAreaView>
    )
    
}


export default RegisterScreen;