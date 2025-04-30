/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { getPopular, getSerieDetails, getTrending } from "../lib/themoviedb";
import { AnimatedSerieCard } from "./SerieCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Screen } from './Screen';

export function Main() {
  const [series, setSeries] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getTrending().then((series) => {
      setSeries(series);
    });
  }, []);

  return (
      <Screen>
        {series.length === 0 ? (
          <ActivityIndicator color={"#fff"} size="large" />
        ) : (
          <FlatList
            data={series}
            keyExtractor={(item) => item.slug}
            renderItem={({ item, index }) => (
              <AnimatedSerieCard serie={item} index={index} />
            )}
          />
        )}
      </Screen>
  );
}
