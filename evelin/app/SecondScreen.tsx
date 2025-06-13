import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useThemeColors } from './index'; 
import { ImageBackground } from 'react-native';
import ImageCarousel from '@/components/Carousel';

export default function SecondScreen() {
  const colors = useThemeColors();
  const backgroundColor = colors.background;
  const primaryTextColor = colors.loveTextPrimary;
  const text = colors.textSecond;
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
  const { width, height } = Dimensions.get('window');


  return (
    <ImageBackground
      source={require('../assets/images/teste-fundo.jpg')}
      style={{ flex: 1, width: '100%', height: '100%' }}
      resizeMode="cover"
      >
      <ScrollView>    
        <View style={styles.container}>
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={{ color: text, fontSize: 24, marginBottom: 20 }}>
              Estamos namorando há
            </Text>
            <Text style={{ color: text, fontSize: width*0.06, fontWeight: 'bold', alignSelf: 'center' }}>
              {timeTogether}
            </Text>
          </View>
          <ImageCarousel />
          <View style={[styles.line, { backgroundColor: secondaryTextColor }]} />
          <View style={[styles.cardText, { backgroundColor: cardBackgroundColor }]}>
            <Text style={{ color: text, fontSize: 20, marginBottom: 20 }}>
              Oi Mor, Feliz dia dos Namorados!
            </Text>
            <Text style={{ color: text, fontSize: 18, textAlign: 'center' }}>
              Hoje é um dia especial pra nós, e eu queria aproveitar para te lembrar do quanto você é importante na minha vida. 
              Cada momento do teu lado é especial e eu sou muito grato por ter você na minha vida, bundona. 
              Sempre que duvidar do nosso amor, lembre-se disso e acesse esse site (se ele ainda funcionar) e saiba que isso é só o começo da nossa linda história.
              Espero que goste dessa pequena homenagem.
            </Text>
            <Text style={{ color: text, fontSize: 18, textAlign: 'center', marginTop: 20 }}>
              OBS.: Acho que não deveria ter feito isso no nosso primeiro dia dos namorados, porque agora a régua ta alta KKKKKKKK 
            </Text>
            <Text style={{ color: text, fontSize: 20, textAlign: 'center', marginTop: 20 }}>
              Beijão mor, eu te amo muito!
            </Text>
          </View>
        </View>
      </ScrollView>
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
    marginVertical: 20,
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
    marginVertical: 15,
    alignContent: 'center',
  }
});
