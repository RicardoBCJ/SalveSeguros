import React from "react";
import { StyleSheet, Text, Image, Dimensions, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";

interface ShopProps extends RectButtonProps {
  data: {
    Id: string;
    Nome: string;
    Descricao: string;
    DescricaoCurta: string;
    Endereco: string;
    Latitude: number;
    Longitude: number;
    Foto: string;
    AvaliacaoUsuario: number;
    CodigoAssociacao: number;
    Email: string;
    Telefone1: number;
    Telefone2: number;
    Ativo: boolean;
  };
}

export const CardPrimary = ({ data, ...rest }: ShopProps) => {
  var base64Icon = `data:image/png;base64,${data.Foto}`;
  return (
    <RectButton style={styles.container} {...rest}>
      <Image
        style={{ width: 200, height: Dimensions.get("window").width * 0.3 }}
        source={{ uri: base64Icon }}
        resizeMode="contain"
      />
      <>
        <View style={styles.rows}>
          <FontAwesome name="institution" size={24} color="black" />
          <Text style={styles.text}>{data.Nome}</Text>
        </View>
        <View style={styles.rows}>
          <MaterialIcons name="description" size={24} color="black" />
          <Text style={styles.text}>{data.DescricaoCurta}</Text>
        </View>
      </>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "100%",
    backgroundColor: colors.white,
    padding: 15,
    paddingVertical: 10,
    margin: 10,
  },
  division: {},
  text: {
    color: colors.black,
    fontFamily: fonts.text,
    marginLeft: 12,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  rows: {
    padding: 4,
    flexDirection: "row",
  },
});
