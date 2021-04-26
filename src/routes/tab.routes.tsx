import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../styles/colors";
import { CarShopSelection } from "../pages/CarShopSelection";
import { ReferToFriend } from "../pages/ReferToFriend";
import { MaterialIcons } from "@expo/vector-icons";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.heading,
        inactiveTintColor: colors.gray,
        labelPosition: "beside-icon",
        style: {
          paddingVertical: 20,
          height: 88,
        },
      }}
    >
      <AppTab.Screen
        name={"Selecione Oficina"}
        component={CarShopSelection}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name={"Indique Para Um Amigo"}
        component={ReferToFriend}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="email" size={size} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
