import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useThemeColors } from './index'; 
import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';

function LoveTitle() {
  const [fontsLoaded] = useFonts({
    DancingScript_400Regular,
  });
  const colors = useThemeColors();

  if (!fontsLoaded) return null; // ou algum loading

  return (
    <Text style={{ fontFamily: 'DancingScript_400Regular', fontSize: 36, color: colors.loveTextPrimary, marginBottom: 20 }}>
      Feliz Dia dos Namorados 💖
    </Text>
  );
}

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

export default function HomeScreen() {
  const colors = useThemeColors();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const backgroundColor = colors.background;
  const primaryTextColor = colors.loveTextPrimary;
  const secondaryTextColor = colors.loveTextSecondary;
  const cardBackgroundColor = colors.loveCardBackground;
  

  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
});

return (
  <View style={[styles.container, { backgroundColor }]}>
    <LoveTitle />
    <TouchableOpacity
      style={[styles.button, { backgroundColor: cardBackgroundColor, borderColor: primaryTextColor, borderWidth: 1 }]}
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