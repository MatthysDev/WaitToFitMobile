import { View, Text, StatusBar } from "react-native";
import React from "react";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <View className="items-center justify-center bg-white m-4 p-4 rounded-lg">
      <Text className="text-3xl font-bold">WaitToFit</Text>
      <Text className=" pt-4 text-center text-lg">{props.title}</Text>
    </View>
  );
};

export default Header;
