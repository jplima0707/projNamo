import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Button
        title="Ir para a outra tela"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
