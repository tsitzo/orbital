import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeArea } from "../components/reusable";
import { AppStackParams } from "../types/navigation";

interface ILaunchesScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "LaunchDetailsScreen">;
}

const LaunchesScreen: FC<ILaunchesScreenProps> = ({ navigation }) => {
  return (
    <SafeArea>
      <Button
        title="Go"
        onPress={() =>
          navigation.push("LaunchDetailsScreen", {
            id: "1ad83a7d-1977-4075-a1e7-3a443da14f72",
          })
        }
      />
    </SafeArea>
  );
};

export default LaunchesScreen;

const styles = StyleSheet.create({});
