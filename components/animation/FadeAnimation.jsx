import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const FadeAnimation = ({ duration = 1500, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    });
  }, [fadeAnim, duration]);
  return (
    <Animated.View
      style={{ ...props.style, opacity: fadeAnim }}
      entering={FadeIn}
      exiting={FadeOut}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeAnimation;
