import { Tabs } from "expo-router";
import { View } from "react-native";
import { InfoOutlineIcon, HomeIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000", borderColor: "black" },
        tabBarActiveTintColor: "#ddd",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <InfoOutlineIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
