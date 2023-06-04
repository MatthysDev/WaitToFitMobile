import { View, Text, Image, Button } from "react-native";
import React from "react";

type Props = {
  coachName: string;
  coachImage: string;
  coachDescription: string;
};

const CoachCard = (props: Props) => {
  return (
    <View className="flex flex-row bg-white mx-4 rounded-lg p-2 my-4">
      <View className="flex w-1/3">
        <Image
          source={{
            uri: props.coachImage,
          }}
          className="rounded-lg mb-4 border-2 border-gray-300"
          style={{ width: 120, height: 120 }}
        />
        <Text className="m-auto">{props.coachName}</Text>
      </View>
      <View className="flex w-2/3 text-left">
        <Text className=" text-sm">{props.coachDescription}</Text>
        <View className="rounded-lg  w-1/2 ml-auto mt-auto items-center text-black active:border-gray-600">
          <Button title="Contact" color="green"></Button>
        </View>
      </View>
    </View>
  );
};

export default CoachCard;
