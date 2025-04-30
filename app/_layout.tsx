import { Stack, Link} from "expo-router"; //Slot se usa cuando no quiero ver la animacion nativa del dispositivo para cambiar de vista
import { View, Pressable } from "react-native";
import "../global.css";

import { LogoIcon, InfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#000", borderColor: "black", borderBottomColor: "black" },
          headerTintColor: "#fff",
          headerTitle: "",
          headerLeft: () => <LogoIcon />,
          /* headerRight: () => (
              <Link asChild href="/about">
                <Pressable>
                  <InfoIcon />
                </Pressable>
              </Link>
          ), */
        }}
      />
    </View>
  );
}
