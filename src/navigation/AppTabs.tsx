import React from "react";
import { useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { AppTabParams } from "../types/navigation";

import { HomeScreen, LaunchesScreen, SettingsScreen } from "../screens";

const HomeStack = createNativeStackNavigator();
const LaunchesStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator<AppTabParams>();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Orbital" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const LaunchesScreenStack = () => {
  const { colors } = useTheme();
  return (
    <LaunchesStack.Navigator>
      <LaunchesStack.Screen
        name="Launches"
        component={LaunchesScreen}
        options={{
          headerLargeTitle: true,
          headerLargeStyle: { backgroundColor: colors.background },
          headerStyle: { backgroundColor: colors.card },
          headerLargeTitleShadowVisible: false,
        }}
      />
    </LaunchesStack.Navigator>
  );
};

const SettingsScreenStack = () => {
  const { colors } = useTheme();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerLargeTitle: true,
          headerLargeStyle: { backgroundColor: colors.background },
          headerStyle: { backgroundColor: colors.card },
          headerLargeTitleShadowVisible: false,
        }}
      />
    </SettingsStack.Navigator>
  );
};

export const AppTabs = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: colors.card },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreenStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-home" : "md-home-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="LaunchesScreen"
        component={LaunchesScreenStack}
        options={{
          tabBarLabel: "Launches",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-flame" : "md-flame-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        component={SettingsScreenStack}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-settings" : "md-settings-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
