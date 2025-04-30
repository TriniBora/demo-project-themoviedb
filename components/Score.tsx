/* eslint-disable prettier/prettier */
import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    
    let bgColor = "bg-green-500";
    let textColor = "text-white";

    if (percentage < 40) {
      bgColor = "bg-red-500";
    }
    if (percentage < 85) {
      bgColor = "bg-yellow-500";
      textColor = "text-black";
    }
    return { bgColor, textColor };
  };

  const { bgColor, textColor } = getColors();

  return (
    <View
      className={`${bgColor} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className={`${textColor} text-lg font-bold`}>{score}</Text>
    </View>
  );
}
