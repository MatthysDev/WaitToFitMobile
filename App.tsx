import * as React from "react";
import { Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeWindStyleSheet } from "nativewind";
import Profile from "./src/screens/Profile";
import HomeScreen from "./src/screens/Homescreen";
import Training from "./src/screens/Training";
import Coach from "./src/screens/Coach";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderWidth: 1,
          shadowOffset: { width: 0, height: 0 },
          borderTopColor: "black",
          borderRadius: 30,
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 20,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#10B981",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 12,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={{
                    uri: "https://img.icons8.com/?size=512&id=73&format=png",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Entraînement"
        component={Training}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#10B981",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 12,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={{
                    uri: "https://img.icons8.com/?size=512&id=35090&format=png",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Coachs"
        component={Coach}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#10B981",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 12,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={{
                    uri: "https://img.icons8.com/?size=512&id=1788&format=png",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#10B981",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={{
                    uri: "https://img.icons8.com/?size=512&id=106748&format=png",
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
