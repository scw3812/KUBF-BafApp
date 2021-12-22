import React, { useCallback, useState } from 'react';
import type { FC } from 'react';
import { StyleSheet, Image, View, TouchableWithoutFeedback } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { responsiveWidth as rw } from '../../style/dimensions';

export interface ImageCarouselProps {
  data: string[];
  onPress: (url: string) => void;
}

export const ImageCarousel: FC<ImageCarouselProps> = ({ data, onPress }) => {
  const [index, setIndex] = useState(0);
  const renderItem = useCallback(({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableWithoutFeedback style={styles.image} onPress={() => onPress(item)}>
        <Image key={index} source={{ uri: item }} style={styles.image} resizeMode="cover" />
      </TouchableWithoutFeedback>
    );
  }, []);
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={rw(375)}
        sliderHeight={rw(214)}
        itemWidth={rw(375)}
        itemHeight={rw(214)}
        activeSlideAlignment="start"
        onSnapToItem={(index) => setIndex(index)}
        activeSlideOffset={0}
        inactiveSlideScale={1}
        loop={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        containerStyle={styles.pagination}
        dotColor="black"
        inactiveDotColor="black"
        inactiveDotScale={0.8}
        inactiveDotOpacity={0.5}
        animatedFriction={10}
        animatedTension={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', height: rw(214) },
  image: { width: rw(375), height: rw(214) },
  pagination: { position: 'absolute', bottom: rw(16), paddingVertical: -20 },
});
