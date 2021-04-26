import React, { useEffect, useState, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import colors from "../styles/colors";
import { Header } from "../components/Header";
import fonts from "../styles/fonts";
import { apiGetShops } from "../services/api";
// import { ImgToBase64 } from "react-native-image-base64";
import { CardPrimary } from "../components/CardPrimary";
import { Load } from "../components/Load";
import { useNavigation } from "@react-navigation/core";
import { ShopProps } from "../libs/storage";

export function CarShopSelection() {
  const [shops, setShops] = useState<ShopProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  async function fetchShops() {
    const { data } = await apiGetShops.get(
      `?codigoAssociacao=601&cpfAssociado=""`
    );
    if (!data) return setLoading(true);
    else {
      setShops(data.ListaOficinas);
      console.log(data.ListaOficinas[0]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchShops();
  }, []);

  function handleShopSelect(shop: ShopProps) {
    navigation.navigate("CarShopSingle", { shop });
  }

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.intro}>
        <Text style={styles.title}>Com qual oficina</Text>

        <Text style={styles.subtitle}>você quer entrar em contato?</Text>
      </View>

      <View style={styles.shops}>
        <FlatList
          data={shops}
          keyExtractor={(item) => String(item.Id)}
          renderItem={({ item }) => (
            <CardPrimary data={item} onPress={() => handleShopSelect(item)} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body_dark,
  },
  title: {
    fontSize: 27,
    color: colors.white,
    fontFamily: fonts.heading,
    lineHeight: 30,
    marginTop: 25,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: colors.white,
    fontFamily: fonts.light,
    lineHeight: 20,
    marginBottom: 10,
  },
  intro: {
    paddingHorizontal: 30,
  },
  shopList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    paddingLeft: 20,
    marginVertical: 32,
    paddingRight: 20,
    width: 500,
  },
  shops: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  contentContainerStyle: {},
});
