import { SafeAreaView, ScrollView, View } from "react-native";
import Courses from "../components/Courses";
import Header from "../components/Header";
import Stretching from "../components/Stretching";
import Cardio from "../components/Cardio";

export default function Training() {
  return (
    <SafeAreaView className="flex-1 bg-emerald-500">
      <View>
        <Header title={"Retrouvez tout nos entraînements"} />
        <ScrollView className="mb-60">
          <Courses />
          <Stretching />
          <Cardio />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
