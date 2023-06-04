import {
  Alert,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-emerald-500">
      <View>
        <Header title={"Votre profil"} />
        <TextInput
          placeholder="Adresse e-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          className="border-2 border-black mx-8 my-4 p-4 rounded-lg bg-white"
        />
        <TextInput
          placeholder="Mot de passe"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          className="border-2 border-black mx-8 my-4 p-4 rounded-lg bg-white"
        />
        <TouchableOpacity className="bg-emerald-300 w-1/3 m-auto text-center items-center p-4 rounded-lg my-4">
          <Text>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-emerald-300 w-1/3 m-auto text-center items-center p-4 rounded-lg ">
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
