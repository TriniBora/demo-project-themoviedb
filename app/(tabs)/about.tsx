import { Link } from "expo-router";
import { View, Text, ScrollView, Pressable } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { cssInterop } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = cssInterop(Pressable, {
  className: "style",
});

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          {/*asChild se usa para que en el link pueda poner componentes, no solo texto*/}
          {/* <StyledPressable className={`active:opacity-20`}>
            <HomeIcon />
          </StyledPressable> */}
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet
          vitae fuga sed quaerat magnam error, exercitationem at neque sit.
          Eveniet maxime voluptate amet voluptatibus doloribus rerum delectus
          labore enim!
        </Text>
      </ScrollView>
    </Screen>
  );
}
