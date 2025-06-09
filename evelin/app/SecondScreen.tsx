import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { useThemeColors } from './index'; 
import { ImageBackground } from 'react-native';
import ImageCarousel from '@/components/Carousel';

export default function SecondScreen() {
  const colors = useThemeColors();
  const backgroundColor = colors.background;
  const primaryTextColor = colors.loveTextPrimary;
  const secondaryTextColor = colors.loveTextSecondary;
  const cardBackgroundColor = colors.loveCardBackground;

  const comeco = new Date('2024-10-27T00:00:00');

  const [timeTogether, setTimeTogether] = useState(getTimeDiff());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTogether(getTimeDiff());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  function getTimeDiff() {
    const now = new Date();
    const diff = now.getTime() - comeco.getTime();
  
    let totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    totalSeconds = Math.floor(totalSeconds / 60);
    const minutes = totalSeconds % 60;
    totalSeconds = Math.floor(totalSeconds / 60);
    const hours = totalSeconds % 24;
    totalSeconds = Math.floor(totalSeconds / 24);
    const days = totalSeconds % 30;
    const months = Math.floor(totalSeconds / 30) % 12;
    const years = Math.floor(totalSeconds / 365);
  
    return `${years} anos, ${months} meses, ${days} dias\n${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <ImageBackground
      source={require('../assets/images/teste-fundo.jpg')}
      style={{ flex: 1, width: '100%', height: '100%' }}
      resizeMode="cover"
      >
      <View style={styles.container}>
        <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
          <Text style={{ color: primaryTextColor, fontSize: 24, marginBottom: 20 }}>
            Estamos namorando há
          </Text>
          <Text style={{ color: primaryTextColor, fontSize: 27, fontWeight: 'bold', alignSelf: 'center' }}>
            {timeTogether}
          </Text>
        </View>
        <ImageCarousel />
        <View style={[styles.line, { backgroundColor: secondaryTextColor }]} />
        <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
          <Text style={{ color: primaryTextColor, fontSize: 24, marginBottom: 20 }}>
            O que eu mais amo em você
          </Text>
          <Text style={{ color: primaryTextColor, fontSize: 18, textAlign: 'center' }}>
            É o seu jeito de ser, a sua bondade e o seu carinho. Você é a luz da minha vida!
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    height: height * 0.2,
    width: width * 0.9,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    width: width * 0.9,
     justifyContent: 'center',
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  line: {
    width: width * 0.9,
    height: 1,
    marginVertical: 10,
    alignContent: 'center',
  }
});
