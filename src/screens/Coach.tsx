import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import CoachCard from "../components/CoachCard";

export default function Coach() {
  return (
    <SafeAreaView className="flex-1 bg-emerald-500">
      <View>
        <Header title={"Notre choix de coach !"} />
        <CoachCard />
      </View>
    </SafeAreaView>
  );
}
