import { SafeAreaView, View } from "react-native";
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
        <Courses />
      </View>
    </SafeAreaView>
  );
}
