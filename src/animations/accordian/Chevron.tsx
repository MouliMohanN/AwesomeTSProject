import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {mix, mixColor} from 'react-native-redash';

const size = 30;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525251',
  },
});

interface ChevronProps {
  progress: Animated.SharedValue<number>;
}

const Chevron = ({progress}: ChevronProps) => {
  console.log(`progress`, progress);
  const style = useAnimatedStyle(() => ({
    /* backgroundColor: mixColor(progress?.value || 1, '#525251', '#e45645'),
    transform: [{rotateZ: `${mix(progress?.value || 1, 0, Math.PI)}rad`}], */
    backgroundColor: '#525251',
    //transform: [{rotateZ: `${Math.PI}}]
  }));
  return (
    <Animated.View style={[styles.container, style]}>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M6 9l6 6 6-6" />
      </Svg>
    </Animated.View>
  );
};

export default Chevron;
