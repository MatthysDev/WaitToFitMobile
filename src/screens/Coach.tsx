import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import CoachCard from "../components/CoachCard";
import CoachList from "../components/CoachList";

export default function Coach() {
  return (
    <SafeAreaView className="flex-1 bg-emerald-500">
      <View>
        <Header title={"Notre choix de coach !"} />
        <CoachList />
      </View>
    </SafeAreaView>
  );
}
