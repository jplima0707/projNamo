import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import SecondScreen from './SecondScreen';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
  );
}