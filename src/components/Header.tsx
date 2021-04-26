import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import colors from "../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImg from "../assets/hiThere.jpg";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@salveSeguros:user");
      setUserName(user || "");
    }

    loadStorageUserName();
  }, [userName]);
  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <View>
          <Text style={styles.greating}>Olá,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <Image source={userImg} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: colors.blue,
    // borderBottomWidth: 0.3,
    // borderBottomColor: colors.black,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    padding: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  greating: {
    fontSize: 32,
    color: colors.white,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.white,
    lineHeight: 40,
  },
});
