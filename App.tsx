import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStackParamList } from './constants/types';
import WelcomeScreen from './views/Welcome';
import RegisterScreen from './views/Register';
import LoginScreen from './views/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: '#FFFFFF' }} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ 
            headerShown: false,
            contentStyle:{
              backgroundColor:'#FFFFFF'
            }
          }}
        >
          {/* <Stack.Screen name='Welcome' component={WelcomeScreen} /> */}
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>    
      </NavigationContainer>
    </SafeAreaProvider>    
  );
}

export default App;
