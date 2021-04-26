import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { Welcome } from "./src/pages/Welcome";
import { UserConfirm } from "./src/pages/UserConfirm";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_900Black,
  Roboto_100Thin,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_900Black,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,
    Roboto_100Thin,
    Roboto_300Light,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_900Black,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) return <View />;
  return <Routes />;
}
