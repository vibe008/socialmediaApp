import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';


const SIZE = 100;

const Seekbar = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_event, ctx) => {
      ctx.x = translateX.value; // store the current translate value in the context object
      ctx.y = translateY.value;
      // triggered at the start of the pan gesture
    },
    onActive: ({translationX, translationY}, ctx) => {
      translateX.value = ctx.x + translationX; // add the offset on every frame of the animation
      translateY.value = ctx.y + translationY;
      // triggered on every frame of the pan gesture
    },
    onEnd: () => {
      // triggered at the end of the pan gesture
    },
  });

  const style = useAnimatedStyle(() => ({
    backgroundColor: '#F00',
    width: SIZE,
    aspectRatio: 1,
    borderRadius: SIZE / 2,
    position: 'absolute',
    top: 0,
    transform: [{translateX: translateX.value}, {translateY: translateY.value}],
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style} />
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Seekbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});