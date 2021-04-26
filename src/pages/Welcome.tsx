import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import WelcomeImage from "../assets/carFix.jpg";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserConfirm");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Não se preocupe! {"\n"} estamos aqui pra te ajudar. {"\n"}
        </Text>

        <Image
          source={WelcomeImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Nós separamos uma lista das melhores oficinas de sua região. Em poucos
          segundos você vai poder escolher a mais interessante para você
        </Text>
        <Button title={"Vamos lá!"} onPress={handleStart} />
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
