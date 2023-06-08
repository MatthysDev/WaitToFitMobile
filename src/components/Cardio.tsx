import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Video from "./Video";

type Props = {};

const Cardio = (props: Props) => {
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
          title={"Cardio intensif"}
          image={"http://i3.ytimg.com/vi/_p9gauFHW4k/hqdefault.jpg"}
          link="/watch?v=_p9gauFHW4k"
        />
        <Video
          title={"Cardio intensif court"}
          image={"http://i3.ytimg.com/vi/zp1qTRgAZzw/hqdefault.jpg"}
          link="/watch?v=zp1qTRgAZzw"
        />
        <Video
          title={"La semaine cardio"}
          image={"http://i3.ytimg.com/vi/VpyKkXXTNfI/hqdefault.jpg"}
          link="/watch?v=VpyKkXXTNfI"
        />
        <Video
          title={"S'assouplir pour le sport'"}
          image={"http://i3.ytimg.com/vi/Zpv4-o9Hcw0/hqdefault.jpg"}
          link="/watch?v=Zpv4-o9Hcw0"
        />
      </ScrollView>
    </>
  );
};

export default Cardio;
