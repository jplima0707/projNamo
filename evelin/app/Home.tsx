import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import { useThemeColors } from './index'; 

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const colors = useThemeColors();

  const backgroundColor = colors.background;
  const primaryTextColor = colors.loveTextPrimary;
  const secondaryTextColor = colors.loveTextSecondary;
  
  const [fontsLoaded] = useFonts({
    DancingScript_400Regular,
  });

  if (!fontsLoaded) return null; 
  const { width, height } = Dimensions.get('window');
  
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loveTitle: {
    textAlign: 'center',
    marginBottom: 20,
    width: width * 0.8,
    fontSize: width * 0.08,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
});

return (
  <View style={[styles.container, { backgroundColor }]}>
    <Text style={[ styles.loveTitle ,{ fontFamily: 'DancingScript_400Regular', color: colors.loveTextPrimary, marginBottom: 20 }]}>
      Feliz Dia dos Namorados 💖
    </Text>
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor, borderColor: primaryTextColor, borderWidth: 1 }]}
      onPress={() => navigation.navigate('Second')}
    >
      <Text style={{ color: primaryTextColor }}>Próximo</Text>
    </TouchableOpacity>
    <View style={{ marginTop: 50 }}>
      <Text style={{ color: secondaryTextColor, fontSize: 16 }}>
        Criado em 09/06/2025
      </Text>
    </View>
  </View>
);
}