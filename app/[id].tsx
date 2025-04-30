import { Link, Stack } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { Screen } from '../components/Screen';
import { useState, useEffect } from 'react';
import { getSerieDetails } from "../lib/themoviedb";
import { Score } from "../components/Score";

export default function Detail() {
  const {id} = useLocalSearchParams(); // id es el slug de la serie, que se pasa por la url
  // id debe ser el mismo nombre que le ponemos en el archivo [id].tsx
  // en este caso, el slug es el id de la serie, que se pasa por la url
  // y se usa para hacer la peticion a la api de the movie db
  const [serieInfo, setSerieInfo] = useState(null);

  useEffect(() => {
    if(id) {
      getSerieDetails(id).then(setSerieInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen 
        options={{
          //headerStyle: { backgroundColor: "#ffee00" },
          //headerTintColor: "#000",
          //headerTitle: `${serieInfo ? serieInfo.title : 'Cargando...'}`,
          headerTitle: "Detalle de la serie",
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
        <View>
          {serieInfo === null ? (
            <ActivityIndicator color={"#fff"} size="large" />
          ) : (
            <ScrollView>
              <View className="justify-center items-center text-center">
                <Image
                  className="mb-4 rounded"
                  source={{uri: serieInfo.image}}
                  style={{width: 214, height: 294}}
                />
                <Score score={serieInfo.score.toFixed(1)} maxScore={10} />
                <Text className="text-white text-center font-bold text-xl">
                  {serieInfo.title}
                </Text>
                <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                  {serieInfo.description}
                </Text>
              </View>
            </ScrollView>
          )
        }
      </View>
    </Screen>
  )
};