import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Video from "./Video";

type Props = {};

const Courses = (props: Props) => {
  return (
    <>
      <Text className=" py-4 pl-6 text-left text-2xl font-semibold text-black">
        S'entrainer comme un héros
      </Text>
      <ScrollView
        horizontal
        className="rounded-lg border-2 flex flex-row mx-4 bg-white"
      >
        <Video
          title={"S'entrainer comme KAGAMI"}
          image={"https://i3.ytimg.com/vi/RX_RPAGRUWU/hqdefault.jpg"}
        />
        <Video
          title={"S'entrainer comme Naruto"}
          image={"http://i3.ytimg.com/vi/wCDaCFl4qoM/hqdefault.jpg"}
        />
        <Video
          title={"S'entrainer comme Kirua"}
          image={"http://i3.ytimg.com/vi/bk-jYvyBJ6c/hqdefault.jpg"}
        />
        <Video
          title={"S'entrainer comme Zoro"}
          image={"http://i3.ytimg.com/vi/Hlgn3tOCZ2Q/hqdefault.jpg"}
        />
      </ScrollView>
    </>
  );
};

export default Courses;
