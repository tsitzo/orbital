import React from "react";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackParams } from "../types/navigation";
import { AppTabs } from "./AppTabs";
import {
  AboutScreen,
  AgencyDetailsScreen,
  AstronautDetailsScreen,
  LaunchDetailsScreen,
  PadDetailsScreen,
  ProgramDetailsScreen,
  RocketDetailsScreen,
  SettingsThemeScreen,
} from "../screens";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="AppTabs"
        component={AppTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AgencyDetailsScreen"
        component={AgencyDetailsScreen}
      />
      <Stack.Screen
        name="AstronautDetailsScreen"
        component={AstronautDetailsScreen}
      />
      <Stack.Screen
        name="LaunchDetailsScreen"
        component={LaunchDetailsScreen}
      />
      <Stack.Screen name="PadDetailsScreen" component={PadDetailsScreen} />
      <Stack.Screen
        name="ProgramDetailsScreen"
        component={ProgramDetailsScreen}
      />
      <Stack.Screen
        name="RocketDetailsScreen"
        component={RocketDetailsScreen}
      />
      <Stack.Screen
        name="SettingsThemeScreen"
        component={SettingsThemeScreen}
      />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
};
