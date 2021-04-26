import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { UserConfirm } from "../pages/UserConfirm";
import { CarShopSelection } from "../pages/CarShopSelection";
import { CarShopSingle } from "../pages/CarShopSinlge";
import { ReferToFriend } from "../pages/ReferToFriend";
import AuthRoutes from "./tab.routes";
import { ThankYou } from "../pages/ThankYou";

const stackRoutes = createStackNavigator();

const AppRotues: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.blue,
      },
    }}
  >
    <stackRoutes.Screen name={"Welcome"} component={Welcome} />

    <stackRoutes.Screen name={"ThankYou"} component={ThankYou} />

    <stackRoutes.Screen name={"UserConfirm"} component={UserConfirm} />

    <stackRoutes.Screen name={"CarShopSelection"} component={AuthRoutes} />

    <stackRoutes.Screen name={"ReferToFriend"} component={ReferToFriend} />

    <stackRoutes.Screen name={"CarShopSingle"} component={CarShopSingle} />
  </stackRoutes.Navigator>
);

export default AppRotues;
