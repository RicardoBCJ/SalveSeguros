import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThankYouImage from "../assets/ThankYou.jpg";

export function ThankYou() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("Welcome");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Muito Obrigado!</Text>
        <Image
          source={ThankYouImage}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>Seu amigo vai te agradecer!</Text>
        <Button title={"Excelente!"} onPress={handleStart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.light,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
});
