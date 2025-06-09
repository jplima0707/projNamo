import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';
import HomeScreen from './Home';
import SecondScreen from './SecondScreen';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function useThemeColors() {
  const theme = useColorScheme() ?? 'light';
  return Colors[theme];
}

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
  );
}