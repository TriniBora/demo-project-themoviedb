/* eslint-disable prettier/prettier */
import { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { cssInterop } from "nativewind";

const StyledPressable = cssInterop(Pressable, { className: "style" });

export function SerieCard({ serie }) {
  return (
    <Link href={`/${serie.slug}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 p-4 rounded-xl">
        <View className="flex-row gap-4 mb-10" key={serie.slug}>
          <Image source={{ uri: serie.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {serie.title}
            </Text>
            <Score score={serie.score.toFixed(1)} maxScore={10} />
            <Text className="mt-2 flex-shrink-0" style={styles.description}>
              {serie.description.slice(0, 100) + "..."}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedSerieCard({ serie, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <SerieCard serie={serie} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "#eee",
    fontSize: 16,
  },
  score: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
