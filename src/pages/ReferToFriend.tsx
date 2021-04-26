import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

export function ReferToFriend() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [userName, setUserName] = useState<string>();
  const [friendName, setFriendName] = useState<string>();
  const [friendNumber, setFriendNumber] = useState<string>();
  const [friendEmail, setFriendEmail] = useState<string>();

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@salveSeguros:user");
      setUserName(user || "");
    }

    loadStorageUserName();
  }, [userName]);

  const data = {
    Indicacao: {
      CodigoAssociacao: "601",
      DataCriacao: Date.now(),
      CpfAssociado: "123123",
      EmailAssociado: "alksjd",
      NomeAssociado: userName,
      TelefoneAssociado: "asd",
      PlacaVeiculoAssociado: "asd",
      NomeAmigo: friendName,
      TelefoneAmigo: friendNumber,
      EmailAmigo: friendEmail,
    },
    Remetente: userName,
    Copias: [],
  };

  async function handleSubmit() {
    console.log("ENVIANDOOOOOO!");
    if (!userName && friendName && friendEmail && friendNumber)
      return Alert.alert("Por favor, preencha todos os dados!");
    async function send(data: object) {
      try {
        axios({
          method: "post",
          url:
            "http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api/Indicacao",
          data: {
            Indicacao: {
              CodigoAssociacao: "601",
              DataCriacao: Date.now(),
              CpfAssociado: "123123",
              EmailAssociado: "alksjd",
              NomeAssociado: userName,
              TelefoneAssociado: "asd",
              PlacaVeiculoAssociado: "asd",
              NomeAmigo: friendName,
              TelefoneAmigo: friendNumber,
              EmailAmigo: friendEmail,
            },
            Remetente: userName,
            Copias: [],
          },
        }).then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    send(data);
    setFriendName("");
    setFriendNumber("");
    setFriendEmail("");

    navigation.navigate("ThankYou");
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!friendName);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChangeForName(value: string) {
    setIsFocused(!!value);
    setFriendName(value);
  }

  function handleInputChangeForEmail(value: string) {
    setIsFocused(!!value);
    setFriendEmail(value);
  }
  function handleInputChangeForNumber(value: string) {
    setIsFocused(!!value);
    setFriendNumber(value);
  }

  return (
    <ScrollView style={{ flex: 1, height: "100%" }}>
      {/* <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      > */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.title}>
                O que é bom a gente compartilha,{"\n"} Nos indique para um
                amigo!
              </Text>
            </View>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.white,
                  color: colors.white,
                },
              ]}
              placeholder={"Digite o nome do seu amigo"}
              placeholderTextColor={colors.white}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChangeForName}
            ></TextInput>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.white,
                  color: colors.white,
                },
              ]}
              placeholder={"Digite o email do seu amigo"}
              placeholderTextColor={colors.white}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChangeForEmail}
            ></TextInput>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: colors.white,
                  color: colors.white,
                },
              ]}
              placeholder={"Digite o número \n do seu amigo"}
              placeholderTextColor={colors.white}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChangeForNumber}
            ></TextInput>
            <View style={styles.footer}>
              <Button title={"Confirmar"} onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",

    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.body_dark,
  },
  content: {
    backgroundColor: colors.body_dark,
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
    width: "100%",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.white,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
    lineHeight: 30,
  },
  title: {
    paddingTop: 120,
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.white,
    fontFamily: fonts.heading,
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
  },
});
