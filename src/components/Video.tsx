import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  title: string;
  image: string;
};

const Video = (props: Props) => {
  return (
    <View className="flex flex-col w-auto ">
      <Text className=" text-start p-4">{props.title}</Text>
      <Image
        source={{
          uri: props.image,
        }}
        className="rounded-lg mx-4 mb-4 "
        style={{ width: 300, height: 200 }}
      />
    </View>
  );
};

export default Video;
