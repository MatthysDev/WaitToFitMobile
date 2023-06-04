import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-emerald-500">
      <View>
        <View className="items-center justify-center">
          <Text className="text-3xl font-bold ">WaitToFit</Text>
          <StatusBar style="auto" />
        </View>
        <Text className=" pt-4 text-center text-lg">
          L'application qui ne vous fais pas attendre avant d'atteindre vos
          objectifs
        </Text>
        <Text className=" py-4 pl-6 text-left text-2xl font-semibold">
          Nos cours
        </Text>
        <ScrollView
          horizontal
          className="rounded-lg flex flex-row mx-4 bg-white"
        >
          <View className="flex flex-col w-auto ">
            <Text className=" text-start p-4">S'ENTRAINER comme KAGAMI</Text>
            <Image
              source={{
                uri: "https://i3.ytimg.com/vi/RX_RPAGRUWU/hqdefault.jpg",
              }}
              className="rounded-lg mx-4 mb-4 "
              style={{ width: 300, height: 200 }}
            />
          </View>
          <View className="flex flex-col w-auto ">
            <Text className=" text-start p-4">S'ENTRAINER comme KAGAMI</Text>
            <Image
              source={{
                uri: "https://i3.ytimg.com/vi/RX_RPAGRUWU/hqdefault.jpg",
              }}
              className="rounded-lg mx-4 mb-4 "
              style={{ width: 300, height: 200 }}
            />
          </View>
          <View className="flex flex-col w-auto ">
            <Text className=" text-start p-4">S'ENTRAINER comme KAGAMI</Text>
            <Image
              source={{
                uri: "https://i3.ytimg.com/vi/RX_RPAGRUWU/hqdefault.jpg",
              }}
              className="rounded-lg mx-4 mb-4 "
              style={{ width: 300, height: 200 }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
