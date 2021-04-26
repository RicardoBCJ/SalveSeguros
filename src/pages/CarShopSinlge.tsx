import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { ShopProps } from "../libs/storage";
import { Header } from "../components/Header";
import { Load } from "../components/Load";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  Zocial,
} from "@expo/vector-icons";
// import { Markdown } from "react-native-markdown-text";
// import Markdown from "react-native-markdown-text";
interface Params {
  shop: ShopProps;
}
import Markdown from "react-native-simple-markdown";

export function CarShopSingle() {
  const [descripPostMarkUp, setDescripPostMarkUp] = useState<String>();
  const [loading, setLoading] = useState(true);
  const [calling, setCalling] = useState(false);
  const route = useRoute();
  const { shop } = route.params as Params;

  const base64Icon = `data:image/png;base64,${shop.Foto}`;
  const textPrEMark = shop.Descricao;
  const testMarkDown =
    "#Markdown in react-native is so cool! /n You can **emphasize** what you want, or just _suggest it/n   You can even [link your website](http://charlesmangwa.surge.sh) or if you prefer: [email somebody](mailto:email@somebody.com) /n Spice it up with some GIF: /n ![Some GIF](https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif) /n And even add a cool video: /n [![A cool video from YT](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ) /n [![Another one from Vimeo](https://i.vimeocdn.com/video/399486266_640.jpg)](https://vimeo.com/57580368)";

  useEffect(() => {
    setDescripPostMarkUp(shop.Descricao);
    console.log("OOOOOOOOPA");
    console.log(shop);
    setLoading(false);
  }, []);

  if (loading) return <Load />;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Header />
      <View style={styles.container}>
        <View style={styles.shopInfo}>
          <Image
            style={{ width: 200, height: Dimensions.get("window").width * 0.3 }}
            source={{ uri: base64Icon }}
            resizeMode="contain"
          />

          <Text style={styles.shopName}>{shop.Nome}</Text>
          {/* <Text style={styles.text}>{shop.Descricao}</Text> */}
          {/* <Markdown style={styles.text}>{testMarkDown}</Markdown> */}
          <Markdown style={styles.text}>{shop.Descricao}</Markdown>
        </View>

        <View style={styles.rows}>
          <FontAwesome name="institution" size={24} color="black" />
          <Text style={styles.text}>{shop.Nome}</Text>
        </View>
        <View style={styles.rows}>
          <MaterialIcons name="description" size={24} color="black" />
          <Text style={styles.text}>{shop.DescricaoCurta}</Text>
        </View>
        <View style={styles.rows}>
          <Entypo name="address" size={24} color="black" />
          <Text style={styles.text}>{shop.Endereco}</Text>
        </View>
        <View style={styles.rows}>
          <Entypo name="phone" size={24} color="black" />
          <Text style={styles.text}>{shop.Telefone1}</Text>
        </View>
        <View style={styles.rows}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={styles.text}>{shop.Email}</Text>
        </View>
        <View style={styles.rows}>
          <MaterialCommunityIcons name="identifier" size={24} color="black" />
          <Text style={styles.text}>{shop.CodigoAssociacao}</Text>
        </View>
        <View style={styles.rows}>
          <Zocial name="statusnet" size={24} color="black" />
          <Text style={styles.text}>{shop.Ativo ? "Ativo" : "Inativo"}</Text>
        </View>

        <View style={styles.controller}>
          <Button title={"Ligar " + `${shop.Telefone1}`} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    backgroundColor: colors.white,
  },
  shopInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  shopName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: "center",
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 15,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: "relative",
    bottom: 60,
  },
  tipImg: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",
    //   fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
  dateTimePickerText: {
    fontSize: 24,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  dateTimePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    color: colors.black,
    fontFamily: fonts.text,
    // marginVertical: 16,
    marginLeft: 12,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  rows: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
});
