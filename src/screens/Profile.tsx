import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-emerald-500">
      <View>
        <Header title={"Votre profil"} />
      </View>
    </SafeAreaView>
  );
}
