import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Video from "./Video";

type Props = {};

const Stretching = (props: Props) => {
  return (
    <>
      <Text className=" py-4 pl-6 text-left text-2xl font-semibold text-black">
        Assouplissement
      </Text>
      <ScrollView
        horizontal
        className="rounded-lg border-2 flex flex-row mx-4 bg-white"
      >
        <Video
          title={"Routine longue débutant"}
          image={"http://i3.ytimg.com/vi/WjsQc9GUBW0/hqdefault.jpg"}
          link="/watch?v=WjsQc9GUBW0"
        />
        <Video
          title={"Routine courte débutant"}
          image={"http://i3.ytimg.com/vi/zNhqYaa79jY/hqdefault.jpg"}
          link="/watch?v=zNhqYaa79jY"
        />
        <Video
          title={"Grand écart"}
          image={"http://i3.ytimg.com/vi/0PSyHeb298g/hqdefault.jpg"}
          link="/watch?v=0PSyHeb298g"
        />
        <Video
          title={"S'assouplir pour le sport'"}
          image={"http://i3.ytimg.com/vi/RN7zy6WWu24/hqdefault.jpg"}
          link="/watch?v=RN7zy6WWu24"
        />
      </ScrollView>
    </>
  );
};

export default Stretching;
