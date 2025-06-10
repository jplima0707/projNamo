import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const images = [
    require('../assets/images/img1.jpeg'),
    require('../assets/images/img2.jpeg'),
    require('../assets/images/img3.jpeg'),
    require('../assets/images/img4.jpeg'),
    require('../assets/images/img5.jpeg'),
    require('../assets/images/img6.jpeg'),
    require('../assets/images/img7.jpeg'),
    require('../assets/images/img8.jpeg'),
    require('../assets/images/img9.jpeg'),
    require('../assets/images/img10.jpeg'),
    require('../assets/images/img11.jpeg'),
    require('../assets/images/img12.jpeg'),
    require('../assets/images/img13.jpeg'),
    require('../assets/images/img14.jpeg'),
    require('../assets/images/img15.jpeg'),
    require('../assets/images/img17.jpeg'),
    require('../assets/images/img18.jpeg'),
    require('../assets/images/img19.jpeg'),
];

export default function ImageCarousel() {
  const { width, height } = Dimensions.get('window');
  return (
    <Carousel
      loop
      width={width*0.9}
      height={height * 0.6}
      autoPlay
      autoPlayInterval={3000}
      data={images}
      scrollAnimationDuration={1000}
      mode='parallax'
      renderItem={({ item }) => (
        <View style={{ flex: 1,}}>
          <Image
            source={item}
            style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10 }}
          />
        </View>
      )}
    />
  );
}
