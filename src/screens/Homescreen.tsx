import { SafeAreaView, View, Text } from "react-native";
import Courses from "../components/Courses";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-emerald-500">
      <View>
        <Header
          title="L'application qui ne vous fais pas attendre avant d'atteindre vos
        objectifs"
        />
        <Text className=" text-center text-3xl font-bold py-2 my-6 bg-white">
          La selection du jour
        </Text>
        <Courses />
      </View>
    </SafeAreaView>
  );
}
